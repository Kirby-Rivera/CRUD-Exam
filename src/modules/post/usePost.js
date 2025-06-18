import { useState, useEffect } from "react";
import useAxiosPrivate from "helpers/useAxiosPrivate";

export default function useHome() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const axiosPrivate = useAxiosPrivate();
  const controller = new AbortController();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [render, setRender] = useState(false);
  const [currentModal, setCurrentModal] = useState("");
  const [id, setId] = useState(null);
  const [modal, setModal] = useState(false);
  const [success, setSuccess] = useState("");
  const [meta, setMeta] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(meta.totalRows / meta.limit);

  function handlePageChange(newPage) {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
      fetchData(newPage);
    }
  }

  console.log(meta.limit)

  async function fetchData(page) {
    const offset = (page - 1) + meta.limit;
    const response = await axiosPrivate.get(
      `/post?limit=${meta.limit}&offset=${offset}`
    );

    setPosts(response.data.data);
  }

  function clearInputs() {
    setTitle("");
    setMessage("");

    setTimeout(() => {
      setError("");
    }, 4000);
  }

  function toggleModal() {
    setModal(!modal);
    if (!modal) {
      setCurrentModal("");
    }
  }

  useEffect(() => {
    setLoading(true);
    let isMounted = true;
    async function getPost() {
      try {
        const response = await axiosPrivate.get(
          "/post?limit=2",
          {
            signal: controller.signal,
          }
        );
        isMounted && setPosts(response.data.data);
        setMeta(response.data.meta);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError("Something wrong happend.");
      }
    }

    getPost();

    return () => {
      isMounted = false;
      // setTimeout(() => {
      //   controller.abort();
      // }, 1000);
    };
  }, [render]);

  async function addPost(e) {
    e.preventDefault();

    if (!title || !message) {
      setError("Title or Message is missing.");
      return;
    }

    try {
      const response = await axiosPrivate.post(
        "/post",
        JSON.stringify({ title: title.trim(), message: message.trim() })
      );

      setSuccess(response.data.message);
      setRender((render) => !render);

      clearInputs();
      toggleModal("");
    } catch (error) {
      console.log(error);
    }
  }

  async function deletePost(e) {
    e.preventDefault();

    if (!id) {
      setError("Missing post Id.");
    }

    try {
      const response = await axiosPrivate.delete(`/post/${id}`);

      setSuccess(response.data.message);
      setRender((render) => !render);

      clearInputs();
      toggleModal("");
    } catch (error) {
      console.log(error);
    }
  }

  async function editPost(e) {
    e.preventDefault();

    if (!title || !message) {
      setError("Title or Message is missing.");
      return;
    }

    try {
      const response = await axiosPrivate.put(
        `/post/${id}`,
        JSON.stringify({ title: title.trim(), message: message.trim() })
      );

      setSuccess(response.data.message);
      setRender((render) => !render);

      clearInputs();
      toggleModal("");
    } catch (error) {
      console.log(error);
    }
  }

  return {
    posts,
    loading,
    error,
    title,
    setTitle,
    message,
    setMessage,
    addPost,
    deletePost,
    setError,
    editPost,
    setId,
    clearInputs,
    currentModal,
    setCurrentModal,
    toggleModal,
    modal,
    success,
    meta,
    currentPage,
    totalPages,
    handlePageChange,
  };
}

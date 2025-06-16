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

  function clearInputs() {
    setTitle("");
    setMessage("");

    setTimeout(() => {
      setError("");
    }, 3000);
  }

  useEffect(() => {
    setLoading(true);
    let isMounted = true;
    async function getPost() {
      try {
        const response = await axiosPrivate.get(
          "/post?orderBy=title&order=ASC",
          {
            signal: controller.signal,
          }
        );
        isMounted && setPosts(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError("Something wrong happend.");
      }
    }

    getPost();

    return () => {
      isMounted = false;
      setTimeout(() => {
        controller.abort();
      }, 1000);
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

      setError(response.data.message);
      setRender((render) => !render);
      clearInputs();
    } catch (error) {
      console.log(error);
    }
  }

  async function deletePost(id) {
    if (!id) {
      setError("Missing post Id.");
    }

    try {
      const response = await axiosPrivate.delete(`/post/${id}`);

      setError(response.data.message);
      setRender((render) => !render);

      clearInputs();
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
  };
}

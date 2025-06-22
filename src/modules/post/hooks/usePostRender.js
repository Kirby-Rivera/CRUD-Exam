import { useState, useEffect } from "react";
import useAxiosPrivate from "helpers/useAxiosPrivate";

function usePostRender() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const controller = new AbortController();
  const axiosPrivate = useAxiosPrivate();
  const [meta, setMeta] = useState({});
  const [error, setError] = useState(null);
  const [render, setRender] = useState();

  useEffect(() => {
    setLoading(true);
    let isMounted = true;
    async function getPost() {
      try {
        const response = await axiosPrivate.get("/post?&limit=5&order=DESC", {
          signal: controller.signal,
        });
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
      setTimeout(() => {
        controller.abort();
      }, 1000);
    };
  }, [render]);

  return {
    loading,
    posts,
    meta,
    error,
    setRender,
    setError,
    setPosts,
    setMeta,
  };
}

export default usePostRender;

import { axiosPrivate } from "api/axios";

function useHandlePosts(
  setRender,
  setError,
  title,
  message,
  id,
  setId,
  clearInputs,
  setSuccess,
) {
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
    } catch (error) {
      console.log(error);
    }
  }

  async function deletePost(e) {
    e.preventDefault();

    if (!id) {
      setError("Missing post Id.");
      return;
    }

    try {
      const response = await axiosPrivate.delete(`/post/${id}`);

      setSuccess(response.data.message);
      setRender((render) => !render);

      clearInputs();
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
    } catch (error) {
      console.log(error);
    }
  }

  return {
    addPost,
    deletePost,
    editPost,
    clearInputs,
    setId,
  };
}

export default useHandlePosts;

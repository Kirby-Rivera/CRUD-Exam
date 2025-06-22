import { useState } from "react";

function usePostsInputs() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [id, setId] = useState(null);

  return {
    title,
    message,
    id,
    setTitle,
    setMessage,
    setId,
  };
}

export default usePostsInputs;

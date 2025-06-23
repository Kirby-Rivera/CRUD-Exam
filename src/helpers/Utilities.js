import { useState } from "react";

function Utilities(setTitle, setMessage, setError, setModal, setDelModal) {
  const [success, setSuccess] = useState();

  function clearInputs() {
    setTitle("");
    setMessage("");
    setModal(false);
    setDelModal(false);

    setTimeout(() => {
      setError("");
      setSuccess("");
    }, 4000);
  }

  return { clearInputs, success, setSuccess };
}

export default Utilities;

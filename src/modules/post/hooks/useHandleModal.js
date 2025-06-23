import { useState } from "react";

function useHandleModal() {
  const [currentModal, setCurrentModal] = useState("");
  const [modal, setModal] = useState(false);
  const [delModal, setDelModal] = useState(false);

  return {
    currentModal,
    setCurrentModal,
    modal,
    setModal,
    delModal,
    setDelModal,
  };
}

export default useHandleModal;

import axios from "api/axios";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router";

function useRegisterForm(formData) {
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  async function handleRegister(e) {
    e.preventDefault();

    try {
      await axios.post("/user/signup", JSON.stringify(formData), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      navigate(location.state?.from?.pathname || "/", { replace: true });
    } catch (error) {
      if (!error?.response) {
        setError("No Server Response");
      } else if (error.response?.status === 409) {
        setError("Username Taken");
      } else {
        setError("Registration Failed");
      }
    }
  }

  return {
    handleRegister,
    error,
  };
}

export default useRegisterForm;

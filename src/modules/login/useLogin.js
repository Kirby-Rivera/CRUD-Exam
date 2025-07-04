import { useState, useEffect } from "react";
import axios from "api/axios";
import { cookies } from "helpers/CookieHelper";
import { useNavigate, useLocation } from "react-router";

export function useLogin() {
  const [error, setError] = useState(null);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isPassShown, setIsPassShown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setError("");
  }, [username, password]);

  async function handleLogIn(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "/auth/login",
        JSON.stringify({ email: username.trim(), password: password.trim() }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      cookies.set("SESSION_COOKIE", response.data.data.token, {
        maxAge: 60 * 60 * 2,
      });
      cookies.set("USER_ID", response.data.data.userId);
      navigate(location.state?.from?.pathname || "/post", { replace: true });
    } catch (err) {
      if (!err?.response) {
        setError("No Server Response");
      } else if (err.response?.status === 400) {
        setError("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setError("Unauthorized");
      } else {
        setError("Login Failed");
      }
    }
  }

  function handleShowPassword(prev) {
    setIsPassShown((prev = !prev));
  }

  return {
    handleLogIn,
    error,
    setError,
    setUserName,
    setPassword,
    handleShowPassword,
    isPassShown,
  };
}

import { useState, useEffect } from "react";
import { Navigate } from "react-router";
import axios from "api/axios";

const EMAIL_REGEX = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export function useRegister() {
  const [error, setError] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(password));
    setValidMatch(password === matchPwd);
  }, [password, matchPwd]);

  useEffect(() => {
    setError("");
  }, [email, password, matchPwd]);

  async function handleRegister(e) {
    e.preventDefault();

    const v1 = EMAIL_REGEX.test(email);
    const v2 = PWD_REGEX.test(password);

    if (!v1 || !v2) {
      setError("Invalid Entry");
      return;
    }

    try {
      const response = await axios.post(
        "/user/signup",
        JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      <Navigate to="/" />;
      console.log(response);
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
    error,
    firstName,
    lastName,
    email,
    password,
    setFirstName,
    setLastName,
    setEmail,
    setPassword,
    handleRegister,
    validEmail,
    validPwd,
    validMatch,
  };
}

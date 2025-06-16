import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router";
import axios from "api/axios";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export function useRegister() {
  const userRef = useRef();
  const errRef = useRef();

  const [error, setError] = useState("");
  const [isPassShown, setIsPassShown] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email.trim()));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(password.trim()));
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
      await axios.post(
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

  function handleShowPassword(prev) {
    setIsPassShown((prev = !prev));
  }

  return {
    error,
    firstName,
    lastName,
    email,
    password,
    matchPwd,
    setFirstName,
    setLastName,
    setEmail,
    setPassword,
    handleRegister,
    setMatchPwd,
    validEmail,
    setValidEmail,
    validPwd,
    setValidPwd,
    validMatch,
    emailFocus,
    setEmailFocus,
    pwdFocus,
    setPwdFocus,
    matchFocus,
    setMatchFocus,
    userRef,
    errRef,
    isPassShown,
    handleShowPassword,
  };
}

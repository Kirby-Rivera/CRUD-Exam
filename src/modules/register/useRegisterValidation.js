import { useState, useEffect, useRef } from "react";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export function useRegisterValidation() {
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

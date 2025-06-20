import { useRegister } from "./useRegisterValidation";
import styles from "./Register.module.scss";

function RegisterInputField(props) {
  const {
    email,
    password,
    matchPwd,
    setEmail,
    setPassword,
    setMatchPwd,
    validEmail,
    validPwd,
    validMatch,
    emailFocus,
    setEmailFocus,
    pwdFocus,
    setPwdFocus,
    matchFocus,
    setMatchFocus,
    currentInput,
    isPassShown,
  } = props;


  return currentInput === "email" ? (
    <>
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        autoComplete="off"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
        aria-invalid={validEmail ? "false" : "true"}
        aria-describedby="uidnote"
        onFocus={() => setEmailFocus(true)}
        onBlur={() => setEmailFocus(false)}
      />
      <p
        id="uidnote"
        className={
          emailFocus && email && !validEmail
            ? styles["instructions"]
            : styles["offscreen"]
        }
      >
        Email is invalid
      </p>
    </>
  ) : currentInput === "password" ? (
    <>
      <label htmlFor="password">Password:</label>
      <input
        type={isPassShown ? "text" : "password"}
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required
        aria-invalid={validPwd ? "false" : "true"}
        aria-describedby="pwdnote"
        onFocus={() => setPwdFocus(true)}
        onBlur={() => setPwdFocus(false)}
      />
      <p
        id="pwdnote"
        className={
          pwdFocus && password && !validPwd
            ? styles["instructions"]
            : styles["offscreen"]
        }
      >
        Must be 8 to 24 Characters. Must not have special symbols.
      </p>
    </>
  ) : (
    <>
      <label htmlFor="confirm_pwd">Confirm Password:</label>
      <input
        type={isPassShown ? "text" : "password"}
        id="confirm_pwd"
        onChange={(e) => setMatchPwd(e.target.value)}
        value={matchPwd}
        required
        aria-invalid={validMatch && matchPwd ? "false" : "true"}
        aria-describedby="confirmnote"
        onFocus={() => setMatchFocus(true)}
        onBlur={() => setMatchFocus(false)}
      />
      <p
        id="confirmnote"
        className={
          matchFocus && matchPwd && !validMatch && matchPwd
            ? styles["instructions"]
            : styles["offscreen"]
        }
      >
        Must match the first password input field.
      </p>
    </>
  );
}

export default RegisterInputField;

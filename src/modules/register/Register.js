import { useRegister } from "./useRegister";
import styles from "./Register.module.scss";
import { Card, Form, Input, Button, Row } from "reactstrap";

function Register() {
  const {
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
    validPwd,
    validMatch,
    emailFocus,
    setEmailFocus,
    pwdFocus,
    setPwdFocus,
    matchFocus,
    setMatchFocus,
    userRef,
    isPassShown,
    handleShowPassword,
  } = useRegister();

  return (
    <Card className={styles["register"]}>
      <p className={error ? styles["error-msg"] : styles["offscreen"]}>
        {error}
      </p>
      <h1>Doesn't have an account?</h1>
      <p>Fill up the necessary details to register!</p>

      <Form onSubmit={handleRegister} className={styles["register-inputs"]}>
        <Row className="p-3">
          <div className={styles["register-group"]}>
            <label htmlFor="firstname">First Name:</label>
            <Input
              type="text"
              id="firstname"
              ref={userRef}
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className={styles["register-group"]}>
            <label htmlFor="lastname">Last Name:</label>
            <Input
              type="text"
              id="lastname"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </Row>

        <label htmlFor="email">Email:</label>
        <Input
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
          Email invalid.
        </p>

        <label htmlFor="password">Password:</label>
        <Input
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

        <label htmlFor="confirm_pwd">Confirm Password:</label>
        <Input
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
          Must match the first password Input field.
        </p>

        <div className={styles["checkbox"]}>
          <Input
            type="checkbox"
            checked={isPassShown}
            onChange={() => handleShowPassword(isPassShown)}
          />
          <p>Show Password</p>
        </div>

        <Button
          disabled={!validEmail || !validPwd || !validMatch ? true : false}
        >
          Register
        </Button>
        <p>
          Already have an account? <a href="/">Login</a>
        </p>
      </Form>
    </Card>
  );
}

export default Register;

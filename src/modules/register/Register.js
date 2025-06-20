import { useRegisterValidation } from "./useRegisterValidation";
import styles from "./Register.module.scss";
import { Card, Form, Input, Button, Row } from "reactstrap";
import RegisterInputField from "./RegisterInputField";
import useRegisterForm from "./useRegisterForm";

function Register() {
  const {
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
  } = useRegisterValidation();

  const { handleRegister, error } = useRegisterForm({
    firstName,
    lastName,
    email,
    password,
  });

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

        <RegisterInputField
          currentInput={"email"}
          setEmail={setEmail}
          email={email}
          validEmail={validEmail}
          setEmailFocus={setEmailFocus}
          emailFocus={emailFocus}
        />
        <RegisterInputField
          currentInput={"password"}
          setPassword={setPassword}
          password={password}
          validPwd={validPwd}
          setPwdFocus={setPwdFocus}
          pwdFocus={pwdFocus}
          isPassShown={isPassShown}
        />
        <RegisterInputField
          setMatchPwd={setMatchPwd}
          matchPwd={matchPwd}
          validPwd={validPwd}
          setMatchFocus={setMatchFocus}
          matchFocus={matchFocus}
          isPassShown={isPassShown}
        />

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

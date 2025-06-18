import { useLogin } from "./useLogin";
import styles from "./Login.module.scss";
import { Card, Form, Input, Button } from 'reactstrap'

function Login() {
  const {
    handleLogIn,
    error,
    setPassword,
    setUserName,
    username,
    password,
    handleShowPassword,
    isPassShown,
  } = useLogin();

  return (
    <Card className={styles["login"]}>
      <p className={error ? styles["error-msg"] : styles["offscreen"]}>
        {error}
      </p>
      <h1>Welcome Back!</h1>
      <p>Please put your credentials.</p>
      <Form onSubmit={handleLogIn} className={styles["login-inputs"]}>
        <Input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Email"
        />
        <Input
          type={isPassShown ? "text" : "password"}
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <div className={styles["show-password"]}>
          <Input
            type="checkbox"
            checked={isPassShown}
            onChange={() => handleShowPassword(isPassShown)}
          />
          <label>Show Password</label>
        </div>
        <Button>Submit</Button>
        <p>
          Doesn't have an Account? <a href="/register">Register</a>
        </p>
      </Form>
    </Card>
  );
}

export default Login;

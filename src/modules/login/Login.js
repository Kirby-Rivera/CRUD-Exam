import { useLogin } from "./useLogin";
import styles from "./Login.module.scss";

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
    <div className={styles["login"]}>
      <p className={error ? styles["error-msg"] : styles["offscreen"]}>
        {error}
      </p>
      <h1>Welcome Back!</h1>
      <p>Please put your credentials.</p>
      <form onSubmit={handleLogIn} className={styles["login-inputs"]}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Email"
        />
        <input
          type={isPassShown ? "text" : "password"}
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <div>
          <input
            type="checkbox"
            checked={isPassShown}
            onChange={() => handleShowPassword(isPassShown)}
          />
          <label>Show Password</label>
        </div>
        <button color="danger">Submit</button>
        <p>
          Doesn't have an Account? <a href="/register">Register</a>
        </p>
      </form>
    </div>
  );
}

export default Login;

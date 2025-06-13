import { handleLogIn } from "./LoginController";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import styles from "./Login.module.scss";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isPassShown, setIsPassShown] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  function handleShowPassword(prev) {
    setIsPassShown((prev = !prev));
  }

  return (
    <div className={styles["login"]}>
      <h1>Welcome Back!</h1>
      <p>Please put your credentials.</p>
      <div className={styles["login-inputs"]}>
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
        <button
          color="danger"
          onClick={() => handleLogIn(username, password, navigate, location)}
        >
          Submit
        </button>
        <p>
          Doesn't have an Account? <a href="/signup">Signup</a>
        </p>
      </div>
    </div>
  );
}

export default Login;

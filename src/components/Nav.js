import styles from "./Comp.module.scss";
import { useLogout } from "helpers/useLogout";

function Nav() {
  const { logout } = useLogout();

  return (
    <nav className={styles["main-nav"]}>
      <h1>Thread.</h1>
      <button onClick={logout}>
        Logout
      </button>
    </nav>
  );
}

export default Nav;

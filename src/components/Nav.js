import { Button } from "reactstrap";
import styles from "./Comp.module.scss";
import { useLogout } from "helpers/useLogout";

function Nav() {
  const { logout } = useLogout();

  return (
    <nav className={styles["main-nav"]}>
      <h1>Thread.</h1>
      <Button onClick={logout}>
        Logout
      </Button>
    </nav>
  );
}

export default Nav;

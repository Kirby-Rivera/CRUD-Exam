import styles from "./Comp.module.scss";
import { Outlet } from "react-router";

function Layout() {
  return <main className={styles["auth-layout"]}>{<Outlet />}</main>;
}

export default Layout;

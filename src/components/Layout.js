import styles from "./Comp.module.scss";

function Layout({ children }) {
  return <main className={styles["main-layout"]}>{children}</main>;
}

export default Layout;

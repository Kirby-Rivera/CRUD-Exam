import styles from "./Comp.module.scss";
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <>
      <Nav />
      <main className={styles["main-layout"]}>{<Outlet />}</main>
      <Footer />
    </>
  );
}

export default MainLayout;

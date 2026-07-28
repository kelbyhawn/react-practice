import { NavLink, Outlet } from "react-router-dom";
import ThemeButton from "./ThemeButton";
import Header from "./Header";
import Footer from "./Footer";

export default function Container() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

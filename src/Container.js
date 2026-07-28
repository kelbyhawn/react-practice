import { NavLink, Outlet } from "react-router-dom";
import ThemeButton from "./components/ThemeButton";
import Header from "./components/Header";
import Footer from "./components/Footer";

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

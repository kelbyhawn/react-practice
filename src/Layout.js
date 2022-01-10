import { NavLink, Outlet } from "react-router-dom";
import ThemeButton from "./ThemeButton";

export default function Layout() {
  const year = new Date().getFullYear();

  return (
    <>
      <ThemeButton />
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/cats">Cats</NavLink>
          </li>
          <li>
            <NavLink to="/fetch-examples">Fetch Examples</NavLink>
          </li>
          <li>
            <NavLink to="/map">Map</NavLink>
          </li>
        </ul>
      </nav>

      <main>
        <Outlet />
      </main>
      

      <footer>
        <p>©{year} • Kelby Hawn</p>
      </footer>
    </>
  );
}
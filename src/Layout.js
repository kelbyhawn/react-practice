import { NavLink, Outlet } from "react-router-dom";
import ThemeButton from "./ThemeButton";

// Layout component shares markup you want to show up on every page
// - like site logo, <nav>, <main>, <footer>, etc...
export default function Layout() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Dark/Light mode button */}
      <ThemeButton />

      {/* Navigation links */}
      <nav>
        <ul>
          <li>
            <NavLink to="/">Shopping List</NavLink>
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
        {/* Outlet renders child components linked above into <main> */}
        <Outlet />
      </main>
      
      {/* Footer */}
      <footer>
        <p>©{year} • Kelby Hawn</p>
      </footer>
    </>
  );
}
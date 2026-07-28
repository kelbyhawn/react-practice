import { NavLink } from "react-router-dom";
import ThemeButton from "./ThemeButton";

const HEADER_LINKS = [
  { to: "/", label: "Shopping List" },
  { to: "/cats", label: "Cats" },
  { to: "/fetch-examples", label: "Fetch" },
  { to: "/map", label: "Map" },
  { to: "/form", label: "Form" },
];

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          {HEADER_LINKS.map((link) => (
            <li key={link.label}>
              <NavLink to={link.to}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <ThemeButton />
    </header>
  );
}

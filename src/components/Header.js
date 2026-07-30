import Link from "next/link";
import ThemeButton from "./ThemeButton";

const HEADER_LINKS = [
  { href: "/", label: "Shopping List" },
  { href: "/cats", label: "Cats" },
  { href: "/fetch", label: "Fetch" },
  { href: "/map", label: "Map" },
  { href: "/form", label: "Form" },
];

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          {HEADER_LINKS.map((link) => (
            <li key={link.label}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <ThemeButton />
    </header>
  );
}

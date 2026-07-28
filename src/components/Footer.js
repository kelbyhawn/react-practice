export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p className="tiny">
        ©{year} Kelby Hawn •{" "}
        <a
          href="https://github.com/kelbyhawn/react-practice"
          target="_blank"
          rel="noreferrer"
        >
          View source on GitHub
        </a>
      </p>
    </footer>
  );
}

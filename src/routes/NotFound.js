import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <h1>404!</h1>
      <p>
        <Link href="/">Go back to the home page</Link>
      </p>
    </section>
  );
}

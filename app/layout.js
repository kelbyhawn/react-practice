import { Work_Sans } from "next/font/google";
import "../src/App.sass";

const workSans = Work_Sans({
  weight: ["300", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "React Sandbox",
  description:
    "A React sandbox for learning and experimenting with React concepts.",
  robots: "noindex",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root" className={workSans.className}>
          {children}
        </div>
      </body>
    </html>
  );
}

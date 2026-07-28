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
      <head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <div id="root" className={workSans.className}>
          {children}
        </div>
      </body>
    </html>
  );
}

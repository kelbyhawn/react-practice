import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { ThemeProvider } from "../src/components/ThemeContext";

import { Work_Sans } from "next/font/google";
import "../src/styles/main.scss";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </head>
      <body className={workSans.className}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

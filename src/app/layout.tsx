import type { Metadata } from "next";

import Header from "./components/header";
import Footer from "./components/footer";
import MobileMenu from "./components/mobileMenu";

import "./main.scss";

export const metadata: Metadata = {
  title: "Altis",
  description: "Altis - is the best choice for custom design of",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
        <MobileMenu />
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navigation/navbar/navBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vincent Liu",
  description: "Vincent's Portfolio website, created using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

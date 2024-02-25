import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import Navbar from "./components/navigation/navBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const viewport = {
//   name:"viewport",
//   width: 'device-width',
//   initialScale: '0.5',
// }

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
        <Analytics />
      </body>
    </html>
  );
}

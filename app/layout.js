import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-4`}>
        <nav className="flex gap-4 justify-center">
          <p>
            <Link href="/">Home</Link>
          </p>
          <p>
            <Link href="/about">About</Link>
          </p>
          <p>
            <Link href="/product">Product</Link>
          </p>
          <p>
            <Link href="/posts">Posts</Link>
          </p>
          <p>
            <Link href="/contact">Contact</Link>
          </p>
          <p>
            <Link href="/signIn">Sign In</Link>
          </p>
          <p>
            <Link href="/dashboard">Dashboard</Link>
          </p>
        </nav>
        {children}
      </body>
    </html>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function AuthLayout({ children }) {
  const pathName = usePathname();
  return (
    <div>
      <nav className="mt-4 text-slate-800 font-semibold capitalize flex flex-col md:flex-row ">
        <Link
          className={`mx-2 ${pathName === "/signIn" ? "text-sky-400" : ""}`}
          href={"/signIn"}
        >
          sign in
        </Link>
        <Link
          className={`mx-2 ${pathName === "/register" ? "text-sky-400" : ""}`}
          href={"/register"}
        >
          register
        </Link>
        <Link
          className={`mx-2 ${
            pathName === "/forgot-password" ? "text-sky-400" : ""
          }`}
          href={"/forgot-password"}
        >
          forgot password
        </Link>
      </nav>
      <div className="mt-4">{children}</div>
    </div>
  );
}

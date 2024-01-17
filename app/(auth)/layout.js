import Link from "next/link";
import React from "react";

export default function AuthLayout({ children }) {
  return (
    <div>
      <nav className="mt-4 text-slate-800 font-semibold capitalize flex flex-col md:flex-row ">
        <Link className="mx-2" href={"/signIn"}>
          sign in
        </Link>
        <Link className="mx-2" href={"/register"}>
          register
        </Link>
        <Link className="mx-2" href={"/forgot-password"}>
          forgot password
        </Link>
      </nav>
      <div className="mt-4">{children}</div>
    </div>
  );
}

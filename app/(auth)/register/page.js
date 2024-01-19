"use client";
import Title from "../../Components/title";
import { useRouter } from "next/navigation";
import React from "react";

export default function Register() {
  const router = useRouter();
  const handleRegister = () => {
    const decision = window.confirm("Login?");
    if (decision) {
      router.push("/signIn");
    }
  };
  return (
    <div>
      <Title>this is sign up page</Title>
      <button
        className="bg-indigo-500 text-white px-4 py-2 rounded-md shadow-sm shadow-indigo-500"
        onClick={handleRegister}
      >
        Go to sign in
      </button>
    </div>
  );
}

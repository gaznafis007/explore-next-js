"use client";
import React from "react";

export default function Button({ children }) {
  const handleButton = () => {
    window.confirm(children);
  };
  return (
    <button
      className="px-4 py-2 bg-sky-400 rounded-md mt-2 text-white"
      onClick={handleButton}
    >
      {children}
    </button>
  );
}

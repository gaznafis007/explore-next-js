import React from "react";

export default function Title({ children }) {
  return (
    <h2 className="text-4xl mt-4 text-center text-blue-500 capitalize">
      {children}
    </h2>
  );
}

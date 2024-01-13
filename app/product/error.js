"use client";
import React from "react";
import Title from "../Components/title";

export default function ErrorPage({ error, reset }) {
  console.log(error);
  return (
    <div>
      <Title>There is an error</Title>
      <button
        onClick={() => reset()}
        className="mt-2 bg-red-500 p-4 text-white rounded-md"
      >
        Try again
      </button>
    </div>
  );
}

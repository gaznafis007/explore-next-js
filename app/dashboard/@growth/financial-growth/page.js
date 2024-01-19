import React from "react";
import Link from "next/link";
import Title from "../../../Components/title";

function Growth() {
  return (
    <div className="p-8 shadow-md rounded-md">
      <Title>financial growth</Title>
      <Link href="/dashboard"> growth</Link>
    </div>
  );
}

export default Growth;

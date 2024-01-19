import React from "react";
import Title from "../../Components/title";
import Link from "next/link";

function Growth() {
  return (
    <div className="p-8 shadow-md rounded-md">
      <Title>growth</Title>
      <Link href="/dashboard/financial-growth">Financial growth</Link>
    </div>
  );
}

export default Growth;

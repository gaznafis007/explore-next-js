import React from "react";
import Link from "next/link";
import Title from "../../../Components/title";

function DefaultFinancialGrowth() {
  return (
    <div className="p-8 shadow-md rounded-md">
      <Title>financial growth</Title>
      <Link href="/dashboard"> growth</Link>
    </div>
  );
}

export default DefaultFinancialGrowth;

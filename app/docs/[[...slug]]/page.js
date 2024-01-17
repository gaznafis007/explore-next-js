import Title from "@/app/Components/title";
import React from "react";

export default function NestedDocs({ params }) {
  console.log(params.slug?.length);
  console.log(params.slug);
  if (params.slug?.length === 2) {
    return (
      <h1>
        This is {params.slug[1]} of {params.slug[0]} nested docs
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>This is {params.slug[0]} nested docs</h1>;
  }
  // if(params.slug.length = 2){
  //     return <h1>This is 2 nested docs</h1>
  // }
  return (
    <div>
      <Title>this is nested dynamic routing</Title>
    </div>
  );
}

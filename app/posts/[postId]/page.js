import Title from "@/app/Components/title";
import getData from "@/libs/getData";
import getSingleData from "@/libs/getSingleData";
import { notFound } from "next/navigation";
import React from "react";

export default async function SinglePost({ params }) {
  const post = await getSingleData(params.postId);
  const posts = await getData();
  if (params.postId > posts.length) {
    notFound();
  }
  return (
    <div>
      <Title>{post.title}</Title>
      <div className="mt-5 shadow-md p-5">{post.body}</div>
    </div>
  );
}

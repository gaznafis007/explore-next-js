import Comments from "@/app/Components/comments";
import Title from "@/app/Components/title";
import getComments from "@/libs/getComments";
import getData from "@/libs/getData";
import getSingleData from "@/libs/getSingleData";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";

export async function generateMetadata({ params }) {
  const post = await getSingleData(params.postId);
  const metadata = {
    title: post.title,
    description: post.body,
  };
  return metadata;
}

export default async function SinglePost({ params }) {
  //   const postPromise = getSingleData(params.postId);
  const post = await getSingleData(params.postId);
  const commentsPromise = getComments(params.postId);

  //using promises
  //   const [post, comments] = await Promise.all([postPromise, commentsPromise]);

  const posts = await getData();
  if (params.postId > posts.length) {
    notFound();
  }
  return (
    <div>
      <Title>{post.title}</Title>
      <div className="mt-5 shadow-md p-5">{post.body}</div>
      <Suspense
        fallback={`<h1 className="text-2xl text-green-600">Loading comments...</h1>`}
      >
        <Comments promise={commentsPromise} />
      </Suspense>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getData();
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

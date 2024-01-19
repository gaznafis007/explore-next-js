import React from "react";
import Title from "../Components/title";
import getData from "../../libs/getData";
import Link from "next/link";
import Button from "../Components/button";

export default async function Posts() {
  const posts = await getData();
  return (
    <div>
      <Title>This is post page</Title>
      <section className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div className="shadow-md p-4" key={post.id}>
            <h2 className="text-2xl font-semibold">
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </h2>
            <p className="mt-2">{post.body}</p>
            <Button>Click me</Button>
          </div>
        ))}
      </section>
    </div>
  );
}

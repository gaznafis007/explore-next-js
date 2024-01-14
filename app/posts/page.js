import React from "react";
import Title from "../Components/title";
import getData from "@/libs/getData";

export default async function Posts() {
  const posts = await getData();
  return (
    <div>
      <Title>This is post page</Title>
      <section className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post.id}>
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="mt-2">{post.body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

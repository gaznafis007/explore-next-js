import React from "react";

export default async function Comments({ promise }) {
  const comments = await promise;
  return (
    <>
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="px-6 py-3 shadow-md rounded-md max-w-lg my-4 "
        >
          <h2 className="text-2xl font-bold">{comment.name}</h2>
          <h4 className="text-xl mt-1 text-slate-700 font-semibold lowercase">
            {comment.email}
          </h4>
          <p className="mt-2 p-2">{comment.body}</p>
        </div>
      ))}
    </>
  );
}

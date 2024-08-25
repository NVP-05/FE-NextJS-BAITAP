import React from "react";

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

export default async function CommentsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments: Comment[] = await res.json();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Comments</h1>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="p-4 border rounded-lg shadow">
            <h2 className="text-xl font-semibold">{comment.name}</h2>
            <p className="text-gray-500">{comment.email}</p>
            <p className="mt-2">{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
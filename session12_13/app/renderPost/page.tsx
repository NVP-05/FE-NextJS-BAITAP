"use client";
import React, { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((err) => {
        console.log("Error fetching data:", err);
      });
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">Posts List</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="p-4 bg-gray-100 rounded shadow">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

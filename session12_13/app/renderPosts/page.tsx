"use client";
import { useState, useEffect } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function page() {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data: Post[] = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Danh sách Bài viết với Refresh
      </h1>

      <ul className="space-y-4">
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className="p-4 bg-white shadow rounded-lg">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>

      <div className="mt-6 text-center">
        <button
          onClick={fetchPosts}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
        >
          Refresh
        </button>
      </div>
    </div>
  );
}

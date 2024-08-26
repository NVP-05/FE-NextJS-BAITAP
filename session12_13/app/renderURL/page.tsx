"use client";
import { useState, useEffect } from "react";
export default function page() {
  const [error, setError] = useState<string | null>(null);
  const [posts, setPosts] = useState<any[]>([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/nonexistent-url"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setPosts(data);
    } catch (err: any) {
      setError("Xảy ra lỗi khi lấy dữ liệu: " + err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Xử lý Lỗi với SSR</h1>

      {error ? (
        <div className="text-red-600 font-semibold text-center p-4 bg-red-100 rounded-lg">
          {error}
        </div>
      ) : posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
}

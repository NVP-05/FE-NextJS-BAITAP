"use client";
import React, { useEffect, useState } from "react";

const posts = [
  {
    id: 1,
    title: "Accusamus beatae ad facilis",
    thumbnailUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Reprehenderit est deserunt",
    thumbnailUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Officia porro iure quia",
    thumbnailUrl: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "Qui eius qui autem sed",
    thumbnailUrl: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    title: "Epuiduntiae iusto deleniti",
    thumbnailUrl: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    title: "Iusto sunt nobis quasi veritatis",
    thumbnailUrl: "https://via.placeholder.com/600x600",
  },
];

export default function page() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-center my-8">
        Danh sách bài viết
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post: any) => (
          <div key={post.id} className="border p-4 rounded-lg shadow-lg">
            <img
              src={post.thumbnailUrl}
              alt={post.title}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold">{post.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";
import { useRouter } from 'next/navigation';

async function getPosts() {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
  
    return data
  }

export default async function page() {
    const products = await getPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">List of Posts</h1>
      <ul className="space-y-4">
        {products.map((product: any) => (
          <li key={product.id} className="p-4 bg-white rounded shadow-md">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-700">{product.price}</p>
            <img src={product.image} alt="" />
          </li>
        ))}
      </ul>
    </div>
  )
}

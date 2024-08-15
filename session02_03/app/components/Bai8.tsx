import React from "react";

export default function Bai8() {
  return (
    <div className="flex justify-center items-center space-x-2 border rounded p-2">
      <button className="px-3 py-1 border rounded text-gray-700 flex items-center space-x-2">
        ← Prev
      </button>
      <button className="px-3 py-1 border rounded text-gray-700">1</button>
      <button className="px-3 py-1 border rounded bg-blue-500 text-white">
        2
      </button>
      <button className="px-3 py-1 border rounded text-gray-700">3</button>
      <button className="px-3 py-1 border rounded text-gray-700">4</button>
      <button className="px-3 py-1 border rounded text-gray-700">5</button>
      <button className="px-3 py-1 border rounded text-gray-700">6</button>
      <button className="px-3 py-1 border rounded text-gray-700">7</button>
      <span className="px-3 py-1">...</span>
      <button className="px-3 py-1 border rounded text-gray-700">20</button>
      <button className="px-3 py-1 border rounded text-gray-700 flex items-center space-x-2">
        Next →
      </button>
    </div>
  );
}

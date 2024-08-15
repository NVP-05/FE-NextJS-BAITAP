import React from "react";

export default function Bai5() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
      <div className="flex items-center">
        <div className="text-red-600 text-xl mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z"
            />
          </svg>
        </div>
        <h2 className="text-xl font-semibold">Delete blog post</h2>
      </div>
      <p className="mt-3 text-gray-600">
        Are you sure you want to delete this post? This action cannot be undone.
      </p>
      <div className="mt-4 flex justify-end space-x-3">
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
          Cancel
        </button>
        <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
          Delete
        </button>
      </div>
    </div>
  );
}

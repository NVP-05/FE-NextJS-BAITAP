import React from "react";

export default function Bai1() {
  return (
    <div className="flex flex-col w-96">
      <label className="text-sm text-blue-500 mb-1">Label</label>
      <div className="relative">
        <input
          placeholder="Placeholder"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3c-3.71 0-6.852 2.561-7.96 6.042-.104.325-.104.591 0 .916C3.148 14.439 6.29 17 10 17c3.71 0 6.852-2.561 7.96-6.042.104-.325.104-.591 0-.916C16.852 5.561 13.71 3 10 3zM10 15c-2.97 0-5.678-2.034-6.708-5C4.322 7.034 7.03 5 10 5c2.97 0 5.678 2.034 6.708 5C15.678 12.966 12.97 15 10 15z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M10 7a3 3 0 100 6 3 3 0 000-6z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <span className="text-sm text-gray-400 mt-1">Helper Text</span>
    </div>
  );
}

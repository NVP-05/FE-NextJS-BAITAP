import React from "react";

export default function Bai2() {
  return (
    <div className="w-64">
      <div className="relative border border-gray-300 rounded">
        <div className="flex items-center justify-between border border-gray-300 rounded-t px-3 py-2 bg-white cursor-pointer">
          <div className="flex items-center">
            <svg
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 12a1 1 0 112 0V8a1 1 0 11-2 0v4z" />
            </svg>
            <span>Input Label</span>
          </div>
          <svg
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="absolute w-full mt-1 border border-gray-300 rounded-b bg-white shadow-lg z-10">
          <div className="flex flex-col p-3">
            {["Label", "Label", "Label", "Label"].map((label, index) => (
              <label
                key={index}
                className="flex items-center justify-between mb-2 cursor-pointer"
              >
                <span>{label}</span>
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
              </label>
            ))}
          </div>
          <div className="flex justify-between p-3 border-t border-gray-200">
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
              Clear
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

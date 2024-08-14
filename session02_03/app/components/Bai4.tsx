import React from "react";

export default function Bai4() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Form Sign up</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@company.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="phone"
            >
              Phone number
            </label>
            <div className="flex">
              <select className="w-1/3 px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option>US</option>
                <option>VN</option>
              </select>
              <input
                id="phone"
                name="phone"
                type="text"
                placeholder="+84 (123) 456-789"
                className="w-2/3 px-4 py-2 border-t border-r border-b rounded-r-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <textarea
              id="address"
              name="address"
              rows={4}
              placeholder=""
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Skills
            </label>
            <div className="flex flex-wrap">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "UX design",
                "ReactJS",
                "Java",
              ].map((skill) => (
                <div key={skill} className="mr-4 mb-2">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="skills"
                      value={skill}
                      className="form-checkbox text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-gray-700">{skill}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition duration-200"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

import React from "react";

export default function Bai6() {
  return (
    <div>
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src="https://i.pinimg.com/736x/b5/66/2f/b5662fbec2b0286530c38b03178a6c73.jpg"
              alt="Logo"
              className="w-8 h-8"
            />
            <span className="text-white text-lg font-bold">logoipsum</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-white font-semibold">
              Home
            </a>
            <a href="#" className="text-white">
              Updates
            </a>
            <a href="#" className="text-white">
              Services
            </a>
            <a href="#" className="text-white">
              Features
            </a>
            <a href="#" className="text-white">
              About Us
            </a>
          </div>

          <div className="text-white">
            <img 
            src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
            className="w-8 h-8"
            alt="" />
          </div>
        </div>
      </nav>
    </div>
  );
}

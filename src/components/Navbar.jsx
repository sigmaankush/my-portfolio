import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000); // Hide message after 3 seconds
      return () => clearTimeout(timer); // Cleanup timer on component unmount
    }
  }, [message]);

  return (
    <nav className="bg-black text-white p-5 flex flex-col sm:flex-row justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">Ankush Kumar</h1>
      <div className="space-x-6">
        <a href="#about" className="hover:text-gray-400">About</a>
        <a href="#skills" className="hover:text-gray-400">Skills</a>
        <a href="#projects" className="hover:text-gray-400">Projects</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>

        {/* Hire Me Button */}
        <button 
          onClick={() => setMessage("Thank you for connecting! 🎉")}
          className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:from-purple-600 hover:to-blue-600 transition-all"
        >
          Hire Me
        </button>
      </div>

      {/* Message Display (Appears for 3 Seconds) */}
      {message && (
        <p className="mt-3 text-green-400 transition-opacity duration-500 ease-in-out">
          {message}
        </p>
      )}
    </nav>
  );
}




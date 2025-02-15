import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-16  text-gray-200 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-green-400 mb-6">Contact Me</h2>

      <p className="text-lg text-gray-300">Feel free to reach out to me! 🚀</p>
      <p className="mt-2 text-gray-400 text-lg">📧 Email: <span className="text-yellow-400">singhankush92991@gmail.com</span></p>

      
      <div className="flex space-x-6 mt-6">
        <a 
          href="https://www.linkedin.com/in/ankush-singh-58513228a/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-600 transition"
        >
          <FaLinkedin className="text-2xl" />
          <span>LinkedIn</span>
        </a>

        <a 
          href="https://github.com/sigmaankush" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded-lg text-white hover:bg-gray-800 transition"
        >
          <FaGithub className="text-2xl" />
          <span>GitHub</span>
        </a>

        <a 
          href="https://www.instagram.com/singhankush92991/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-pink-500 px-4 py-2 rounded-lg text-white hover:bg-pink-600 transition"
        >
          <FaInstagram className="text-2xl" />
          <span>Instagram</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;



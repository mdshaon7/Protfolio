import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-950/80 to-gray-950/50 backdrop-blur-lg text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left Side: Copyright */}
        <div>
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Md Shaon. All rights reserved.
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-blue-600 hover:shadow-lg transition-all duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-blue-500 hover:shadow-lg transition-all duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-green-500 hover:shadow-lg transition-all duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:akashahmedshaon@gmail.com"
            className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-purple-500 hover:shadow-lg transition-all duration-300"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Right Side: Quick Links */}
        <div className="flex gap-6">
          <a href="#hero" className="hover:text-white transition-colors duration-300">
            Home
          </a>
          <a href="#about" className="hover:text-white transition-colors duration-300">
            About
          </a>
          <a href="#projects" className="hover:text-white transition-colors duration-300">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition-colors duration-300">
            Contact
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
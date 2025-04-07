import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-16">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0 md:space-x-4 text-center md:text-left">
        
        {/* Center: Company name */}
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <span className="font-mono text-xl font-bold text-blue-500">
            Belanix.tech
          </span>
        </div>

        {/* Left: Made by Muhammad Ashaan */}
        <div className="w-full md:w-auto flex justify-center">
          <p className="text-sm text-gray-400">
            Made with ❤️ by {" "}
            <span className="text-white ml-1">Muhammad Ashaan</span>
          </p>
        </div>

        {/* Right: Copyright */}
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Belanix.tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

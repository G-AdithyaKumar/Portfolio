import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Adithya Gonepally</h3>
            <p className="text-gray-400">
              Fresh Graduate | Computer Science Major
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400">
              &copy; {currentYear} Adithya. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Designed & Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

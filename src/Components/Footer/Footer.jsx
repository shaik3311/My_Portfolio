import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-6 border-t border-white/10">
      <div className="w-full mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Shashavali. All rights reserved.
        </p>

        <p className="text-gray-500 text-sm">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;

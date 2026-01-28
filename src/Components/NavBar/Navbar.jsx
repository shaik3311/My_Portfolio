import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full h-[10vh] sticky top-0 left-0 z-50 bg-black/40 backdrop-blur text-white">
      <div className="max-w-10xl mx-auto h-full flex justify-between items-center px-6 md:px-20">

        {/* Logo */}
        <h1 className="text-2xl md:text-4xl font-bold text-blue-500">Shaik</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-lg">
          <li className="hover:text-blue-500 transition-all ease-in 1s"><a href="#home" className="font-semibold">Home</a></li>
          <li className="hover:text-blue-500"><a href="#about" className="font-semibold">About</a></li>
          <li className="hover:text-blue-500"><a href="#skills" className="font-semibold">Skills</a></li>
          <li className="hover:text-blue-500"><a href="#projects" className="font-semibold">Projects</a></li>
          <li className="hover:text-blue-500"><a href="#contact" className="font-semibold">Contact</a></li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? (
            <X size={32} />
          ) : (
            <Menu size={32} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-black/90 backdrop-blur flex flex-col items-center gap-8 py-10 text-lg">
          <li className="hover:text-blue-500 transition-all ease-in 1s" onClick={() => setOpen(false)}><a href="#home" className="font-semibold">Home</a></li>
          <li className="hover:text-blue-500" onClick={() => setOpen(false)}><a href="#about" className="font-semibold">About</a></li>
          <li className="hover:text-blue-500" onClick={() => setOpen(false)}><a href="#skills" className="font-semibold">Skills</a></li>
          <li className="hover:text-blue-500" onClick={() => setOpen(false)}><a href="#projects" className="font-semibold">Projects</a></li>
          <li className="hover:text-blue-500" onClick={() => setOpen(false)}><a href="#contact" className="font-semibold">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

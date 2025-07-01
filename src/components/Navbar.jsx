import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-700">Sunny</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer text-gray-700 hover:text-blue-600 transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setOpen(false)}
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;

// src/layouts/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gray-900 p-4 text-yellow-500">
      <div className="container mx-auto flex justify-between items-center relative">
        <div className="text-lg font-bold">
          <Link to="/">My Logo</Link>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <nav className={`lg:flex lg:items-center lg:space-x-4 ${isMenuOpen ? 'block absolute top-14 left-0 w-full bg-gray-900' : 'hidden'} lg:block`}>
          <div className={`${isMenuOpen ? 'flex flex-col items-center space-y-4 mt-4' : 'hidden lg:flex lg:flex-row lg:space-x-4'}`}>
            <Link to="/" className="block lg:inline-block hover:text-yellow-300" onClick={closeMenu}>Home</Link>
            <Link to="/about" className="block lg:inline-block hover:text-yellow-300" onClick={closeMenu}>About</Link>
            <Link to="/services" className="block lg:inline-block hover:text-yellow-300" onClick={closeMenu}>Services</Link>
            <Link to="/contact" className="block lg:inline-block hover:text-yellow-300" onClick={closeMenu}>Contact</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

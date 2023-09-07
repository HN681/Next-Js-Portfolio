// components/Navbar.js
import React, { useState } from 'react';
import Link from 'next/link';
import { FiSun, FiMoon, FiMenu } from 'react-icons/fi'; // Import icons from react-icons

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navbarStyle = {
    backgroundColor: darkMode ? 'black' : 'rgba(59, 130, 246, 0.5)',
    transition: 'background-color 0.3s ease-in-out',
  };

  const mobileMenuStyle = {
    display: isMenuOpen ? 'block' : 'none',
    position: 'absolute',
    top: '100%',
    left: '0',
    width: '100%',
    backgroundColor: darkMode ? 'rgba(0, 0, 0, 0.6)' : 'white', // Customize as needed
    color: darkMode ? 'white' : 'black', // Customize text color
    zIndex: '999', // Ensure it's above other content
    transition: 'all 0.3s ease-in-out',
  };

  return (
    <div style={{ position: 'relative' }}>
      <nav
        className="p-4 flex justify-between items-center"
        style={navbarStyle}
      >
        <Link href="/">
          <a className="text-white text-xl font-bold">Huzaifa</a>
        </Link>
        <div className="flex space-x-4 items-center">
          <button
            onClick={toggleDarkMode}
            className="text-white transition-all duration-300"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
          <button onClick={toggleMobileMenu} className="text-white md:hidden">
            <FiMenu />
          </button>
        </div>
      </nav>

      <div style={mobileMenuStyle}>
        <Link href="/">
          <a className="block p-4">Home</a>
        </Link>
        <Link href="/about">
          <a className="block p-4">About</a>
        </Link>
        <Link href="/services">
          <a className="block p-4">Services</a>
        </Link>
        <Link href="/contact">
          <a className="block p-4">Contact</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

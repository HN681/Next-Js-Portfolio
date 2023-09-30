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

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
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
    backgroundColor: darkMode ? 'rgba(0, 0, 0, 0.6)' : 'white',
    color: darkMode ? 'white' : 'black',
    zIndex: '999',
    transition: 'all 0.3s ease-in-out',
  };

  return (
    <div style={{ position: 'relative' }}>
      <nav
        className="p-4 flex justify-between items-center"
        style={navbarStyle}
      >
        <Link href="/">
          <a className="text-white text-xl font-bold" onClick={closeMobileMenu}>
            Huzaifa
          </a>
        </Link>
        <div className="flex space-x-4 items-center">
          <button
            onClick={toggleDarkMode}
            className="text-white transition-all duration-300"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
          <button onClick={toggleMobileMenu} className="text-white">
  <FiMenu />
</button>
        </div>
      </nav>

      <div style={mobileMenuStyle}>
        <Link href="/">
          <a className="block p-4" onClick={closeMobileMenu}>
            Home
          </a>
        </Link>
        <Link href="/about">
          <a className="block p-4" onClick={closeMobileMenu}>
            About
          </a>
        </Link>
        <Link href="/services">
          <a className="block p-4" onClick={closeMobileMenu}>
            Services
          </a>
        </Link>
        <Link href="/contact">
          <a className="block p-4" onClick={closeMobileMenu}>
            Contact
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
  
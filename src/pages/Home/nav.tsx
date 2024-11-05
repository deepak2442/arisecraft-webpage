import React, { useState } from 'react';
import logo from '../../public/cropped-arise-removebg-preview-1-121x79.png';
import './nav.css';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Main navigation for larger screens */}
      <nav className='nav-mainContainer'>
        <div className='nav-logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='links'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Technology</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </nav>

      {/* Mobile navigation for smaller screens */}
      <nav className={`mobile-nav ${menuOpen ? 'active' : ''}`}>
        <div className='nav-logo'>
          <img src={logo} alt="logo" />
        </div>
        <button onClick={toggleMenu}>
          {menuOpen ? 'Close' : 'Menu'}
        </button>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Technology</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;

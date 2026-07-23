import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <div className="navbar-logo">
          <a href="#">Siaga Bencana Sukaluyu</a>
        </div>

        {/* Desktop Menu */}
        <ul className="navbar-menu">
          <li><a href="#peta">Peta Rawan</a></li>
          <li><a href="#mitigasi">Mitigasi</a></li>
          <li><a href="#tas-siaga">Tas Siaga</a></li>
          <li><a href="#p3k">P3K</a></li>
          <li><a href="#kontak">Kontak</a></li>
        </ul>

        {/* Mobile Menu Icon */}
        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hamburger-icon">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`navbar-mobile-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#peta" onClick={toggleMenu}>Peta Rawan</a></li>
          <li><a href="#mitigasi" onClick={toggleMenu}>Mitigasi</a></li>
          <li><a href="#tas-siaga" onClick={toggleMenu}>Tas Siaga</a></li>
          <li><a href="#p3k" onClick={toggleMenu}>P3K</a></li>
          <li><a href="#kontak" onClick={toggleMenu}>Kontak</a></li>
        </ul>
      </div>
    </nav>
  );
}

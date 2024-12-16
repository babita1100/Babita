import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Sentiment Analysis</h2>
      <ul className="nav-links">
        <li>Upload</li>
        <li>Results</li>
        <li>Profile</li>
        <li>About Us</li>
        <li>Payment</li>
      </ul>
    </nav>
  );
};

export default Navbar;
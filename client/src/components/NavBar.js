import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/academic">Academic record</Link></li>
        <li><Link to="/work">Working experience</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;

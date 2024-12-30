import React from 'react';
import { Link } from 'react-router-dom';
import "./NavbarStyles.css"

const Navbar = () => {
  return (
    <div className="navbar">
    <p className="nav-text">Dreamcore</p>
    <nav>
      <ul>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/mystery">???</Link>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar;
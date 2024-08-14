import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; 
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Freshy Pizza Store</div>
      <ul className="navbar-links">
        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        <li><NavLink to="/add" activeClassName="active">Add Item</NavLink></li>
        <li><NavLink to="/display/:id" activeClassName="active">Display Item</NavLink></li>
        <li><NavLink to="/update" activeClassName="active">Update Item</NavLink></li>
        <li><NavLink to="/vision" activeClassName="active">Our Vision</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;

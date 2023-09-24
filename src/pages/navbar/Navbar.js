import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isClicked, setToggle] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="home__logo">
        <Link to="/" onClick={() => setToggle(false)}>
          <img src="/images/logo.png" alt="" />
          VAMSHIDHAR<span className="lastname"> DAWOOR</span>
        </Link>
      </div>
      <div className="page__paths">
        <div onClick={() => setToggle(!isClicked)} className="toggle">
          X
        </div>
        <ul className={isClicked ? 'menu_open' : 'menu_close'}>
          <li onClick={() => setToggle(false)}>
            <Link to="/resume">Resume</Link>
          </li>
          <li onClick={() => setToggle(false)}>
            <Link to="/projects">Projects</Link>
          </li>
          <li onClick={() => setToggle(false)}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

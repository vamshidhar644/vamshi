import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isClicked, setToggle] = useState(false);

  const [isNavFixed, setIsNavFixed] = useState(false);

  // Function to handle scroll events
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsNavFixed(true);
    } else {
      setIsNavFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={isNavFixed ? 'fixed-nav' : ''}>
      <nav className={`navbar`}>
        <div className="home__logo">
          <Link to="/" onClick={() => setToggle(false)}>
            <img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt="" />
            VAMSHIDHAR<span className="lastname">DAWOOR</span>
          </Link>
        </div>
        <div className="page__paths">
          <div className="toggle" onChange={() => setToggle(!isClicked)}>
            <input type="checkbox" id="checkbox" checked={isClicked} />
            <label for="checkbox" class="toggle">
              <div class="bars" id="bar1"></div>
              <div class="bars" id="bar2"></div>
              <div class="bars" id="bar3"></div>
            </label>
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
    </header>
  );
};

export default Navbar;

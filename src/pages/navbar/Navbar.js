import React, { useEffect, useState } from 'react';
import './Navbar.css';
import './Toggle.css';
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
    <header
      className={
        isNavFixed ? 'z-[999] bg-white left-0 top-0 position-fixed w-100' : ''
      }
    >
      <nav className="navbar p-4">
        <div className="home__logo">
          <Link
            to="/"
            onClick={() => setToggle(false)}
            className="d-flex align-items-center gap-3 text-[1.4rem] font-semibold"
          >
            <img
              src={process.env.PUBLIC_URL + '/assets/logo.png'}
              alt=""
              className="w-[2.4rem]"
            />
            VAMSHIDHAR<span className="lastname">DAWOOR</span>
          </Link>
        </div>
        <div className="page__paths">
          <div className="toggle hidden" onChange={() => setToggle(!isClicked)}>
            <input
              type="checkbox"
              id="checkbox"
              checked={isClicked}
              onChange=""
            />
            <label for="checkbox" className="toggle">
              <div className="bars" id="bar1"></div>
              <div className="bars" id="bar2"></div>
              <div className="bars" id="bar3"></div>
            </label>
          </div>
          <ul
            className={`gap-12 ${
              isClicked
                ? 'menu_open d-flex position-fixed m-0 h-100 w-100 flex-column justify-content-start align-items-center pt-5'
                : 'menu_close d-flex m-0'
            } p-0`}
          >
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

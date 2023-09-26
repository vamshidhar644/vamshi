import React from 'react';
import './Home.css';
import './Animations.css';
import Socials from '../../components/Socials';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home__parent d-flex">
      <div className="home_section__1 position-relative">
        <div className="profile__card fade-in position-absolute d-flex flex-column justify-content-between align-items-center pt-5">
          <div className="profile__image">
            <img
              src={process.env.PUBLIC_URL + '/assets/me.jpg'}
              alt=""
              className="w-100 h-100"
            />
          </div>
          <div className="profile__name w-100 d-flex flex-column align-items-center text-center">
            <h2>VAMSHIDHAR DAWOOR</h2>
            <div className="line my-4" />
            <h5>MERN DEV</h5>
          </div>
          <div className="card__footer">
            <Socials />
          </div>
        </div>
      </div>
      <div className="home_section__2 pt-5">
        <h1>HELLO</h1>
        <h3>I build websites with frontend & backend</h3>
        <div className="home__buttons d-flex p-4">
          <a href="vamshidhar_resume.pdf" download="vamshidhar_resume.pdf">
            Resume
          </a>
          <Link
            to="/projects"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }}
          >
            Projects
          </Link>
        </div>
        <p>
          Aspiring computer science student with a passion for web development
          and a strong foundation in JavaScript, React, and Node.js. Started
          coding journey almost two years ago and now working on full-length
          websites. Seeking opportunities to apply skills and contribute to
          dynamic projects while continuously learning and growing in a
          collaborative environment.
        </p>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import './Home.css';
import './Animations.css';
import Socials from '../../components/Socials';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home__parent d-flex transition-[ease-in] duration-[2s]">
      <div className="home_section__1 position-relative  min-w-[36%] bg-[color:var(--secondary-bg)] min-h-screen">
        <div className="profile__card fade-in position-absolute d-flex flex-column justify-content-between align-items-center pt-5 bg-[color:var(--primary-bg)] w-4/5 gap-3 right-[-20%] shadow-[0px_0px_10px_3px_var(--primary-bg)] top-[6%]">
          <div className="profile__image w-[70%] overflow-hidden rounded-[50%]">
            <img
              src={process.env.PUBLIC_URL + '/assets/me.jpg'}
              alt=""
              className="w-100 h-100"
            />
          </div>
          <div className="profile__name w-100 d-flex flex-column align-items-center text-center">
            <h2 className="text-[2.3rem] text-[aliceblue]">
              VAMSHIDHAR DAWOOR
            </h2>
            <div className="line my-4 bg-[color:var(--secondary-bg)] h-1 w-12 rounded-[3rem]" />
            <h5 className="tracking-[4px] text-[color:var(--font-color)]">
              MERN DEV
            </h5>
          </div>
          <div className="card__footer">
            <Socials />
          </div>
        </div>
      </div>
      <div className="home_section__2 pt-5 pl-32">
        <h1 className="text-[3.8rem] m-0">HELLO</h1>
        <h3 className="text-[1.2rem] font-medium">
          I build websites with frontend & backend
        </h3>
        <div className="home__buttons d-flex p-4 gap-12">
          <a
            href="vamshidhar_resume.pdf"
            download="vamshidhar_resume.pdf"
            className="border-[color:var(--secondary-bg)] no-underline text-[color:var(--primary-bg)] shadow-[0px_0px_3px_0.1px_var(--primary-bg)] px-[1.8rem] py-2 rounded-xl border-2 border-solid"
          >
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
            className="border-[color:var(--secondary-bg)] no-underline text-[color:var(--primary-bg)] shadow-[0px_0px_3px_0.1px_var(--primary-bg)] px-[1.8rem] py-2 rounded-xl border-2 border-solid"
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

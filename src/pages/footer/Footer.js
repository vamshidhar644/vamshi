import React from 'react';
import './Footer.css';
import { SiReact } from 'react-icons/si';
import { FaCopyright } from 'react-icons/fa';
import Socials from '../../components/Socials';

const Footer = () => {
  return (
    <div className="footer__parent">
      <p className="madeby">
        <span>
          Made with <SiReact />
        </span>
        <span>
          <FaCopyright /> 2023 | Vamshidhar Dawoor
        </span>
      </p>
      <div className="footer__socials">
        <Socials />
      </div>
    </div>
  );
};

export default Footer;

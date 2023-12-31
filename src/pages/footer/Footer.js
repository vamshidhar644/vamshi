import React from 'react';
import { SiReact } from 'react-icons/si';
import { FaCopyright } from 'react-icons/fa';
import Socials from '../../components/Socials';

const Footer = () => {
  return (
    <div className="footer__parent  flex justify-between p-[1.6rem]">
      <p className="madeby flex flex-col items-start m-0">
        <span>
          Made with <SiReact />
        </span>
        <span>
          <FaCopyright /> 2023 | Vamshidhar Dawoor
        </span>
      </p>
      <div className="footer__icons w-1/5 text-2xl">
        <Socials />
      </div>
    </div>
  );
};

export default Footer;

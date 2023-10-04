import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { RiTwitterXFill, RiGithubFill } from 'react-icons/ri';
import './Socials.css';

const socials = () => {
  return (
    <>
      <Link to="https://www.facebook.com/vamshidhar.navodaya/">
        <FaFacebookF />
      </Link>
      <Link to="https://twitter.com/VAMSHIDHARDAWO1">
        <RiTwitterXFill />
      </Link>
      <Link to="https://github.com/vamshidhar644">
        <RiGithubFill />
      </Link>
      <Link to="https://www.instagram.com/_vamshi.d/">
        <FaInstagram />
      </Link>
      <Link to="https://www.linkedin.com/in/vamshidhar-dawoor-28039b213/">
        <FaLinkedinIn />
      </Link>
    </>
  );
};

export default socials;

import React from 'react';
import './SendButton.css'

const SendButton = () => {
  return (
    <button className="fancy bg-transparent box-border cursor-pointer inline-block float-right font-bold tracking-wider overflow-visible relative text-center no-underline normal-case transition-all duration-[0.3s] ease-[ease-in-out] select-none text-[13px] m-0 px-[2em] py-[1.25em] rounded-none border-2 border-solid border-[black]">
      <span className="top-key"></span>
      <span className="text text-[1.125em] leading-[1.33333em] block text-left transition-all duration-[0.3s] ease-[ease-in-out] uppercase no-underline pl-[2em]">
        Send Message
      </span>
      <span className="bottom-key-1 h-0.5 w-[1.5625rem] absolute left-2.5 -top-0.5"></span>
      <span className="bottom-key-2 h-0.5 w-2.5 absolute right-2.5 -bottom-0.5"></span>
    </button>
  );
};

export default SendButton;

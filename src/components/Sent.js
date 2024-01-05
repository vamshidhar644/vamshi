import React from 'react';
import './Sent.css';

export default function Sent({ open, onClose, lightmode }) {
  if (!open) return null;
  return (
    <div className={`sent-card ${lightmode ? 'dark-box' : 'light-box'}`}>
      <button className="dismiss" type="button" onClick={onClose}>
        ×
      </button>
      <div className="header">
        <div className="image">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                d="M20 7L9.00004 18L3.99994 13"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{' '}
            </g>
          </svg>
        </div>
        <div className="content">
          <span className="title">Message Sent</span>
          <p className="message">
            Thank you for reaching out. Your message is much appreciated.
            Looking forward to connecting.
          </p>
        </div>
      </div>
    </div>
  );
}

import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

import { SiGmail, SiWhatsapp } from 'react-icons/si';
import Sent from './Sent';

const Contact = ({ lightmode }) => {
  const [msgSent, setMsgSent] = useState(false);
  const form = useRef();

  const phoneNumber = '9704527941'; // Replace with the recipient's phone number

  const message = encodeURIComponent('Hello, Vamshidhar!');

  function sendEmail(e) {
    e.preventDefault();
    // console.log(form);

    emailjs
      .sendForm('gmail', 'template_oyqwsnm', form.current, 'QO8EmqeKYHw_T80LO')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setMsgSent(true);

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('message').value = '';
  }

  return (
    <section
      id="contact"
      className="contact-container flex justify-center items-center min-h-screen"
    >
      <div className="contact-card d-flex flex-column min-w-[30%]">
        <span
          className={`contact-title text-2xl font-semibold ${
            lightmode ? 'light-head' : 'dark-head'
          }`}
        >
          Get in touch
        </span>
        <form
          className="form d-flex flex-column mt-3"
          ref={form}
          onSubmit={sendEmail}
          action=""
        >
          <div className="group">
            <input placeholder="‎" type="text" id="name" name="name" required />
            <label htmlFor="name">Name</label>
          </div>
          <div className="group">
            <input
              placeholder="‎"
              type="email"
              id="email"
              name="email"
              required
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="group">
            <input
              placeholder="‎"
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]*"
              required
            />
            <label htmlFor="phone">Phone</label>
          </div>

          <div className="group">
            <textarea
              placeholder="‎"
              id="message"
              rows="4"
              name="message"
              required
            ></textarea>
            <label htmlFor="comment">Comment</label>
          </div>
          <button className="fancy bg-transparent box-border cursor-pointer inline-block float-right font-bold tracking-wider overflow-visible relative text-center no-underline normal-case transition-all duration-[0.3s] ease-[ease-in-out] select-none text-[13px] m-0 px-[2em] py-[1.25em] rounded-none border-2 border-solid border-[black]">
            <span className="top-key"></span>
            <span className="text text-[1.125em] leading-[1.33333em] block text-left transition-all duration-[0.3s] ease-[ease-in-out] uppercase no-underline pl-[2em]">
              Send Message
            </span>
            <span className="bottom-key-1 h-0.5 w-[1.5625rem] absolute left-2.5 -top-0.5"></span>
            <span className="bottom-key-2 h-0.5 w-2.5 absolute right-2.5 -bottom-0.5"></span>
          </button>
          <Sent
            open={msgSent}
            lightmode={lightmode}
            onClose={() => setMsgSent(false)}
          />
          <div className="contact-me">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=vamshidhardawoor644@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="d-flex justify-content-center align-items-center"
            >
              <SiGmail className="contact-icon" />
            </a>

            <a
              href={`https://wa.me/${phoneNumber}?text=${message}`}
              target="_blank"
              rel="noreferrer"
              className="d-flex justify-content-center align-items-center"
            >
              <SiWhatsapp className="contact-icon" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

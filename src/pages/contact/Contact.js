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
      className="contact-container d-flex justify-content-center"
    >
      <div className="contact-card d-flex flex-column">
        <span
          className={`contact-title ${lightmode ? 'light-head' : 'dark-head'}`}
        >
          Get in touch
        </span>
        <form
          className="form d-flex flex-column"
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
          <button className="fancy">
            <span className="top-key"></span>
            <span className="text">Send Message</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
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

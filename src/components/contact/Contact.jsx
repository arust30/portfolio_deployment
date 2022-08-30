import React from 'react'
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h0bjfod', 'template_u8np72g', form.current, '_9sPC-R9huWnQ7KA-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id = 'contact'>

      <div className="container contact__container">

      <h2 className="contact__title">
          Contact Me
          <hr />
        </h2>

        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__icon" />
            <h4>Email</h4>
            <h5>andrewrust30@gmail.com</h5>
            <a href="mailto:andrewrust30@gmail.com" target='_blank' rel='noreferrer'>Email Me</a>
          </article>
        
        </div>
        {/* END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name' required />
          <input type="email" name ='email' placeholder='Your Email' required />
          <textarea name="message" rows="7 " placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
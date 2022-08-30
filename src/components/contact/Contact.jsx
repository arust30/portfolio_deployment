import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { InlineWidget } from "react-calendly";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h0bjfod",
        "template_u8np72g",
        form.current,
        "_9sPC-R9huWnQ7KA-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h2 className="contact__title">Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__form">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              email="email"
              placeholder="Your Email"
              required
            />
            <textarea
              type="text"
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
          <div className="other__contact-options">
            <a
              className="btn"
              href="mailto:andrewrust30@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Email Me Directly Instead
              <MdOutlineEmail className="contact__icon" />
            </a>

            <a
              className="btn btn-primary"
              href="https://calendly.com/andrew-rust"
              target="_blank"
              rel="noreferrer"
            >
              Set up a Calendly Meeting with Me!
            </a>
          </div>
        </div>
        <div className="calendly__block">
          <InlineWidget
            styles={{
              border: "2px solid var(--color-primary)",

              height: "102%",
              width: "100%",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
            url="https://calendly.com/andrew-rust/networking?hide_gdpr_banner=1"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;

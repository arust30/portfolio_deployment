import React from "react";
import "./footer.css";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
     
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/andrew-rust30/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin style={{height:'50px', width:'50px'}} /> Connect with me on LinkedIn!
        </a>
      </div>
      <ul className="permalinks">
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#experience">Work Experience</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#events">Public Speaking & Events</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#more">More</a>
        </li>
      </ul>
      <a href="#about" className="footer_logo">
        <h2>Andrew Rust Portfolio Website</h2>
      </a>
      <div className="footer__copyright">
        <small>&copy; Andrew Rust. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;

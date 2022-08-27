import React from 'react'
import './footer.css';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>
        <h2>Andrew Rust</h2></a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experiences</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/andrew-rust30/" target='_blank'><FaLinkedin/></a>
        <a href="https://www.linkedin.com/in/andrew-rust30/" target='_blank'><FaLinkedin/></a>
        <a href="https://www.linkedin.com/in/andrew-rust30/" target='_blank'><FaLinkedin/></a>
        <a href="https://www.linkedin.com/in/andrew-rust30/" target='_blank'><FaLinkedin/></a>
      </div>
      <div className="footer__copyright">
        <small>
          &copy; Andrew Rust. All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer
import React from "react";
import "./header.css";
import Headshot from "../../assets/headshot.png";
//import Resume from "../../assets/Resume.pdf";
import Arrow from "../../assets/arrow.png";
import NewResume from "../../assets/RustAndrew_ProfessionalResume_Sept2022.pdf";

const Header = () => {
  return (
    <header>
      <section id="header">
        <div className="container header__container">
          <div className="header__left">
            <h6>Hello I'm</h6>
            <h3>Andrew Rust</h3>

            <div className="about__me-mobile">
          <div className="about__me-image">
            <img src={Headshot} alt="About Me" />
          </div>
        </div>

            <div className="descriptor-titles">
              <h6>
                <em>Computer Engineer</em>{" "}
              </h6>
              <h6>
                <em>EdTech Entrepreneur</em>{" "}
              </h6>
              <h6>
                <em>College Athlete</em>{" "}
              </h6>
              <h6>
                <em>Software Developer</em>{" "}
              </h6>
            </div>
            <h4>
              I am an intrinsically motivated, former student-athlete with a
              background in engineering and technology hoping to be a leader at
              the intersection of technology, business, and positive societal
              change
            </h4>

            <div className="cta">
              <a href={NewResume} download className="btn">
                Download Resume
              </a>
              <a href="#contact" className="btn btn-primary">
                Contact
              </a>
            </div>
          </div>
          <div className="header__right">

          <div className="about__me">
          <div className="about__me-image">
            <img src={Headshot} alt="About Me" />
          </div>
        </div>




          </div>
        </div>
        <div className="bottom__section">
        
        Learn More About Me!
        <div className="learn__more-img">
      <img src={Arrow} alt="learn more arrow" />
      </div>
      </div>
      
      </section>
      
     
    </header>
  );
};

export default Header;

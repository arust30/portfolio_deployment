import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import ByteSizeLogo from "../../assets/Iso-Logo.png";
import QSocialLogo from "../../assets/QSocial-Logo.png";
import WhirlLogo from "../../assets/Whirl-Logo.png";
import DinDinLogo from "../../assets/DinDin-Logo.png";

const Experience = () => {
  return (
    <section id="experience">
      <div className="exp__background">
        <div className="exp__head">
          <h2 className="exp__head-exp">My </h2>
          <h2 className="exp__head-special">
            Work Experience
            <hr className="exp__white-line" />
          </h2>
        </div>
      </div>

      <div className="experience__container">
        <div className="work__container">
          <article className="work__item">
            <div className="work__topblock">
              <img
                src={ByteSizeLogo}
                alt="work description"
                className="work__logo"
              />
              <div className="work__topblock-text">
                <h3>ByteSize Learning</h3>
                <h5>Founder & CEO</h5>
                <h6>September 2020 - Present</h6>
                <p>
                  <strong>Skills: </strong> React, Webflow, Photoshop, Premiere
                  Pro, Microsoft Office, Bandlab, Unity, DaVinci Resolve,
                  Python, Java
                </p>
              </div>
            </div>
            <hr className="exp__line" />
            <div className="work__bottom-block">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                modi sapiente consequatur ea molestiae laborum facilis ducimus
                ipsum animi vero, dignissimos porro unde dolorum minus incidunt
                quae repellendus. Alias, dolor?
              </p>
              <div className="work__item-ctas">
                <a href="https://github.com" className="btn" target="_blank">
                  Website
                </a>
                <a
                  href="https://github.com"
                  className="btn btn-primary"
                  target="_blank"
                >
                  More Details
                </a>
              </div>
            </div>
          </article>

          <article className="work__item">
            <div className="work__topblock">
              <img
                src={WhirlLogo}
                alt="work description"
                className="work__logo"
              />
              <div className="work__topblock-text">
                <h3>Let's Whirl</h3>
                <h5>Front-end Developer</h5>
                <h6>May 2022 - Present</h6>
                <p>
                  <strong>Skills: </strong> React, Webflow, Photoshop, Premiere
                  Pro, Microsoft Office, Bandlab, Unity, DaVinci Resolve,
                  Python, Java
                </p>
              </div>
            </div>
            <hr className="exp__line" />
            <div className="work__bottom-block">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                modi sapiente consequatur ea molestiae laborum facilis ducimus
                ipsum animi vero, dignissimos porro unde dolorum minus incidunt
                quae repellendus. Alias, dolor?
              </p>
              <div className="work__item-ctas">
                <a href="https://github.com" className="btn" target="_blank">
                  Website
                </a>
                <a
                  href="https://github.com"
                  className="btn btn-primary"
                  target="_blank"
                >
                  More Details
                </a>
              </div>
            </div>
          </article>

          <article className="work__item">
            <div className="work__topblock">
              <img
                src={QSocialLogo}
                alt="work description"
                className="work__logo"
              />
              <div className="work__topblock-text">
                <h3>Q-Social Technologies</h3>
                <h5>Acting CTO, Technology Consultant</h5>
                <h6>June 2022 - Present</h6>
                <p>
                  <strong>Skills: </strong> React, Webflow, Photoshop, Premiere
                  Pro, Microsoft Office, Bandlab, Unity, DaVinci Resolve,
                  Python, Java
                </p>
              </div>
            </div>
            <hr className="exp__line" />
            <div className="work__bottom-block">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                modi sapiente consequatur ea molestiae laborum facilis ducimus
                ipsum animi vero, dignissimos porro unde dolorum minus incidunt
                quae repellendus. Alias, dolor?
              </p>
              <div className="work__item-ctas">
                <a href="https://github.com" className="btn" target="_blank">
                  Website
                </a>
                <a
                  href="https://github.com"
                  className="btn btn-primary"
                  target="_blank"
                >
                  More Details
                </a>
              </div>
            </div>
          </article>

          <article className="work__item">
            <div className="work__topblock">
              <img
                src={DinDinLogo}
                alt="work description"
                className="work__logo"
              />
              <div className="work__topblock-text">
                <h3>Eat Din Din</h3>
                <h5>Summer Technology Intern</h5>
                <h6>June 2022 - August 2022</h6>
                <p>
                  <strong>Skills: </strong> React, Webflow, Photoshop, Premiere
                  Pro, Microsoft Office, Bandlab, Unity, DaVinci Resolve,
                  Python, Java
                </p>
              </div>
            </div>
            <hr className="exp__line" />
            <div className="work__bottom-block">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                modi sapiente consequatur ea molestiae laborum facilis ducimus
                ipsum animi vero, dignissimos porro unde dolorum minus incidunt
                quae repellendus. Alias, dolor?
              </p>
              <div className="work__item-ctas">
                <a href="https://github.com" className="btn" target="_blank">
                  Website
                </a>
                <a
                  href="https://github.com"
                  className="btn btn-primary"
                  target="_blank"
                >
                  More Details
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="exp__trans"></div>
      {/* 
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MATLAB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONT END  

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Item 1</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Item 1</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MATLAB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React Native</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
      */}
    </section>
  );
};

export default Experience;

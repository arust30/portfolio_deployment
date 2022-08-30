import React from "react";
import "./experience.css";

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
                I have the privilege of operating my own EdTech startup: ByteSize Learning and have been fortunate to encounter success alongside much failure. Running this company has taught me a lot and will continue to teach me and I challenge myself further with this endeavor.
              </p>
              <div className="work__item-ctas">
                <a href="https://www.bytesizelearning.org" className="btn" target="_blank" rel='noreferrer' >
                  Website
                </a>
                <a
                  href="https://www.facebook.com/ByteSizeLearningLLC"
                  className="btn btn-primary"
                  target="_blank" rel='noreferrer'
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
                  <strong>Skills: </strong> React Native, Adobe XD, GIMP, Microsoft Office, Bitbucket, Git, Jira, JavaScript
                </p>
              </div>
            </div>
            <hr className="exp__line" />
            <div className="work__bottom-block">
              <p>
                "Let's Whirl" - a 2022 TechStars Atlanta company hired me as their first employee. I have been fortunate to work with a team of talented and passionate individuals who have spearheaded this company's early success. I have mostly worked on frontend projects revolving around their new mobile matchmaking app 
              </p>
              <div className="work__item-ctas">
                <a href="https://letswhirl.com/story" className="btn" target="_blank" rel='noreferrer'>
                  Website
                </a>
                <a
                  href="https://letswhirl.com/invitation"
                  className="btn btn-primary"
                  target="_blank" rel='noreferrer'
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
                  <strong>Skills: </strong> React, Webflow, JavaScript, HTML, CSS, GIMP, Microsoft Office, 
    
                </p>
              </div>
            </div>
            <hr className="exp__line" />
            <div className="work__bottom-block">
              <p>
                As Acting CTO, I oversee the development of new technologies on behalf of the company. Mediating with both internal and external exectutive to lead a AdTech startup through its first rounds of funding via the development of a Proof-Of-Concept.
              </p>
              <div className="work__item-ctas">
                <a href="https://www.q-social.com/" className="btn" target="_blank" rel='noreferrer'>
                  Website
                </a>
                <a
                  href="https://www.q-social.com/contact"
                  className="btn btn-primary"
                  target="_blank" rel='noreferrer'
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
                  <strong>Skills: </strong> Microsoft Office, Domo
                </p>
              </div>
            </div>
            <hr className="exp__line" />
            <div className="work__bottom-block">
              <p>
                As a technology intern for Eat Din Din, i worked alongside the internal excutives and external development team to guide technology strategy for the VC-backed food delivery marketplace. I compelted a variety of projects including basic data analysis, consulting, market research, and more.
              </p>
              <div className="work__item-ctas">
                <a href="https://www.eatdindin.com/" className="btn" target="_blank" rel='noreferrer'>
                  Website
                </a>
                <a
                  href="https://www.eatdindin.com/"
                  className="btn btn-primary"
                  target="_blank" rel='noreferrer'
                >
                  More Details
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="exp__trans"></div>
   
    </section>
  );
};

export default Experience;

import React from "react";
import "./skills.css";

const Skills = () => {
  const GreenCheck = require("../../assets/green-check.png");
  const PurpleCheck = require("../../assets/purple-check.png");
  const OrangeCheck = require("../../assets/orange-check.png");

  return (
    <section id="skills">
      <div className="container skills__container">
        <article className="skills__item">
          <div className="skills__left-of-line">
            <div className="skills-header">
              <h2>Skills </h2>
              <h2>& </h2>
              <h2>Software</h2>
            </div>
          </div>
          <div className="skills__middle-line">
            <div className="skill__line" />
          </div>
          <div className="skills__right-of-line">
            <div className="skill__grid-item">
              <h3>Video Editing</h3>

              <div className="skill__item-single">
                <img className="skills-logo" src={GreenCheck} alt="" />
                <h5>DaVinci Resolve</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={PurpleCheck} alt="" />
                <h5>Adobe Premiere Pro</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={GreenCheck} alt="" />
                <h5>OpenShot</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={GreenCheck} alt="" />
                <h5>WeVideo</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={OrangeCheck} alt="" />
                <h5>Adobe After Effects</h5>
              </div>
            </div>

            <div className="skill__grid-item">
              <h3>Music Production</h3>

              <div className="skill__item-single">
                <img className="skills-logo" src={PurpleCheck} alt="" />
                <h5>Bandlab</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={GreenCheck} alt="" />
                <h5>Cakewalk</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={OrangeCheck} alt="" />
                <h5>Ableton Live</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={GreenCheck} alt="" />
                <h5>Audacity</h5>
              </div>
            </div>

            <div className="skill__grid-item">
              <h3>UI/UX Design</h3>

              <div className="skill__item-single">
                <img className="skills-logo" src={PurpleCheck} alt="" />
                <h5>Adobe XD</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={PurpleCheck} alt="" />
                <h5>Microsoft Powerpoint</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={OrangeCheck} alt="" />
                <h5>Balsamiq</h5>
              </div>
            </div>

            <div className="skill__grid-item">
              <h3>Programming</h3>

              <div className="skill__item-single">
                <img className="skills-logo" src={PurpleCheck} alt="" />
                <h5>Python</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={PurpleCheck} alt="" />
                <h5>Java</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={PurpleCheck} alt="" />
                <h5>MATLAB</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={OrangeCheck} alt="" />
                <h5>R</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={OrangeCheck} alt="" />
                <h5>Lua</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={GreenCheck} alt="" />
                <h5>HTML</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={GreenCheck} alt="" />
                <h5>CSS</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={OrangeCheck} alt="" />
                <h5>JavaScript</h5>
              </div>
            </div>

            <div className="skill__grid-item">
              <h3>Website & App Development</h3>

              <div className="skill__item-single">
                <img className="skills-logo" src={GreenCheck} alt="" />
                <h5>React</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={PurpleCheck} alt="" />
                <h5>React Native</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={PurpleCheck} alt="" />
                <h5>Webflow</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={GreenCheck} alt="" />
                <h5>Wix</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={GreenCheck} alt="" />
                <h5>HTML</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={GreenCheck} alt="" />
                <h5>CSS</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={GreenCheck} alt="" />
                <h5>JavaScript</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={OrangeCheck} alt="" />
                <h5>UI Kitten</h5>
              </div>
            </div>

            <div className="skill__grid-item">
              <h3>IDEs</h3>

              <div className="skill__item-single">
                <img className="skills-logo" src={PurpleCheck} alt="" />
                <h5>Visual Studio Code</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={GreenCheck} alt="" />
                <h5>IntelliJ</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={OrangeCheck} alt="" />
                <h5>Eclipse</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={PurpleCheck} alt="" />
                <h5>Thonny</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={PurpleCheck} alt="" />
                <h5>Repl.it</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={GreenCheck} alt="" />
                <h5>Atom</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={OrangeCheck} alt="" />
                <h5>Arduino IDE</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={GreenCheck} alt="" />
                <h5>IDLE</h5>
              </div>
            </div>

            <div className="skill__grid-item">
              <h3>Data Analysis</h3>

              <div className="skill__item-single">
                <img className="skills-logo" src={PurpleCheck} alt="" />
                <h5>MATLAB</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={PurpleCheck} alt="" />
                <h5>Microsoft Excel</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={OrangeCheck} alt="" />
                <h5>Domo</h5>
              </div>
            </div>

            <div className="skill__grid-item">
              <h3>Game Design</h3>

              <div className="skill__item-single">
                <img className="skills-logo" src={PurpleCheck} alt="" />
                <h5>Scratch</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={OrangeCheck} alt="" />
                <h5>PyGame (Python GUI)</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={OrangeCheck} alt="" />
                <h5>Unity</h5>
              </div>
            </div>

            <div className="skill__grid-item">
              <h3>Project Management</h3>

              <div className="skill__item-single">
                <img className="skills-logo" src={GreenCheck} alt="" />
                <h5>BitBucket</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={GreenCheck} alt="" />
                <h5>Github</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={OrangeCheck} alt="" />
                <h5>Jira</h5>
              </div>
            </div>

            <div className="skill__grid-item">
              <h3>Cloud Services</h3>

              <div className="skill__item-single">
                <img className="skills-logo" src={OrangeCheck} alt="" />
                <h5>Firebase</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={GreenCheck} alt="" />
                <h5>Google Cloud</h5>
              </div>
            </div>

            <div className="skill__grid-item">
              <h3>Technical Writing</h3>

              <div className="skill__item-single">
                <img className="skills-logo" src={PurpleCheck} alt="" />
                <h5>Microsoft Word</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={PurpleCheck} alt="" />
                <h5>LaTeX</h5>
              </div>
            </div>

            <div className="skill__grid-item">
              <h3>Online Teaching/Tutoring</h3>

              <div className="skill__item-single">
                <img className="skills-logo" src={PurpleCheck} alt="" />
                <h5>Google Meet</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={PurpleCheck} alt="" />
                <h5>Zoom</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={PurpleCheck} alt="" />
                <h5>WebEx</h5>
              </div>
            </div>

            <div className="skill__grid-item">
              <h3>Photo Editing & Graphic Design</h3>

              <div className="skill__item-single">
                <img className="skills-logo" src={PurpleCheck} alt="" />
                <h5>GIMP</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={OrangeCheck} alt="" />
                <h5>Adobe Photoshop</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={GreenCheck} alt="" />
                <h5>Adobe InDesign</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={GreenCheck} alt="" />
                <h5>Canva</h5>
              </div>
            </div>

            <div className="skill__grid-item">
              <h3>Other</h3>

              <div className="skill__item-single">
                <img className="skills-logo" src={GreenCheck} alt="" />
                <h5>Fusion 360 (CAD)</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={GreenCheck} alt="" />
                <h5>Arduino</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={GreenCheck} alt="" />
                <h5>Lightburn (Lazercutting)</h5>
              </div>

              <div className="skill__item-single">
                <img className="skills-logo" src={GreenCheck} alt="" />
                <h5>Cura (3D Printing)</h5>
              </div>
            </div>
          </div>
        </article>
      </div>
      
    </section>
  );
};

export default Skills;

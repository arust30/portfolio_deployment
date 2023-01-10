import React from 'react'
import './education.css';
/*import Placeholder from '../../assets/placeholder-image.png'*/

const Education = () => {
  return (
    <section id ='education'>
        <div className="container education__container">
            <div className='title-header'>
                <h2 className='special'>My </h2>
                <h2>Education 
                <hr/>
                </h2>
            </div>
            <div className="education__content"> 
                <article className="education__item">
                    <div className="education__left-of-line">
                        <h5>2016 - 2018</h5>
                        <h4>Durham, NC</h4>
                    </div>
                    <div className="education__middle-line">
                        <div className="lines"/>
                    </div>
                    <div className="education__right-of-line">
                        <h3>The North Carolina School of Science and Mathematics</h3>
                        <h4>High School Equivalency</h4>
                        <div className="education__mobile-title">
                        <h5>2016 - 2018</h5>
                        <h4>Durham, NC</h4>
                    </div>


                        <p>As a motivated high-school student, I chose to apply and ultimately attend the North Carolina School of Science and Mathematics where I took advanced classes in all subjects, especially areas of science and mathematics as well as lived away from home for the first time.</p>
                        <h6> Activities: Varsity Baseball (Captain), Varsity Basketball, Varsity Cross Country, Biotechnology Investment Club (VP), Special Strengh Training Club (President)</h6>
                    </div>
                </article>
                <article className="education__item">
                    <div className="education__left-of-line">
                        <h5>2019 - 2022</h5>
                        <h4>Winston-Salem, NC</h4>
                    </div>
                    <div className="education__middle-line">
                        <div className="lines"/>
                    </div>
                    <div className="education__right-of-line">
                        <h3>Wake Forest University<em> - Engineering Department</em></h3>
                        <h4>B.S. in Engineering (Computer Science, Mathematics)</h4>
                        <div className="education__mobile-title">
                        <h5>2019 - 2022</h5>
                        <h4>Winston-Salem, NC</h4>
                    </div>
                        <p>I was a recruited student-athlete for Wake Forest University as a Right-handed pitcher for the Demon Deacons, competing in the ACC. Throughout my 4 full seasons with the Deacs, I pursued a B.S. in Engineering with a minors in Computer Science and Mathematics. I found new challenges in adapting to a new living environment and balancing academics with college athletics</p>
                        <h6> Activities: Varsity Baseball, Engineering Student Advisory Council, Engineering Teaching Assistant</h6>
                        <h6> Awards: Innovation in Engineering Award (2022), Senior Oration Finalist (2022), Dean's List (2019-2020, 2021-2022), ACC Honor Roll (2019, 2020, 2021, 2022)</h6>
                    </div>
                </article>
                <article className="education__item">
                    <div className="education__left-of-line">
                        <h5>2022 - 2023</h5>
                        <h4>New York, NY</h4>
                    </div>
                    <div className="education__middle-line">
                        <div className="lines"/>
                    </div>
                    <div className="education__right-of-line">
                        <h3>Columbia University<em> - Fu Foundational</em></h3>
                        <h4>M.S. in Computer Engineering</h4>
                        <div className="education__mobile-title">
                        <h5>2022 - 2023</h5>
                        <h4>New York, NY</h4>
                    </div>
                        <p>I am currently a candidate for an M.S. in Computer Engineering at the Fu Foundational School of Engineering and Applied Sciences at Columbia University as a Dean's MS Academic Excellence Fellow. I am interested in learning more about networks, the Internet of Things, and artificial intelligence. I hope to create projects using frontend and backend technologies to refine a practical skillset in developing proprietary technology</p>
                        <h6> Awards: MS Dean's Academic Excellence Award</h6>
                    </div>
                </article>
                <article className="education__item">
                    <div className="education__left-of-line">
                        <h5>2025 - 2027</h5>
                        <h4>Houston, TX</h4>
                    </div>
                    <div className="education__middle-line">
                        <div className="lines"/>
                    </div>
                    <div className="education__right-of-line">
                        <h3>Rice University<em> - Jones School of Business</em></h3>
                        <h4>M.B.A. (Master of Business Administration)</h4>
                        <div className="education__mobile-title">
                        <h5>2025 - 2027</h5>
                        <h4>Houston, TX</h4>
                    </div>
                        <p>As a tech entrepreneur, I understand the importance of business knowledge and experience in the successful operation of any modern business, so I chose to apply to the Deferred M.B.A Enrollment at the Jones School of Business at Rice University and was admitted into the 2022 class of deferred enrollees. I am looking forward to the eventual prospect of continuing my development journey through higher education. </p>
                        <h6> Awards: Merit Scholarship</h6>
                    </div>
                </article>


            </div>
        </div>
    </section>
  )
}

export default Education
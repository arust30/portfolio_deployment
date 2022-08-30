import React from "react";
import "./events.css";
import IdeasCity from "../../assets/IdeasCityPic.PNG";

const Events = () => {
  return (
    <section id="events">
      <div className="container events__container">
        <h2 className="events__title">
          Public Speaking & Events
          <hr />
        </h2>

        <div className="events__items">
          <article className="events__item">
            <div className="events__left">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/YfL_3yAyD6s?start=3447"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="events__right">
              <h3>2022 Senior Oration</h3>
              <h4>February 8th, 2022</h4>
              <p>
                I was nominated by Engineering faculty to write a reflective essay and mine was chosen to be presented at the Senior Oration along with nine other seniors in the 2022 class. My oration was entitled "Rethinking our Carrots and Sticks" - a reflection of my personal experiences with motivation and greater philosophical development of my idealogy of motivation as a whole.
              </p>
              <div className="events__item-ctas">
                <a
                  href="https://www.youtube.com/embed/YfL_3yAyD6s?start=3447"
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Video Link
                </a>
                <a
                  href="https://convocation.wfu.edu/founders-day/senior-orations/"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  More Details
                </a>
              </div>
            </div>
          </article>

                    <article className="events__item">
            <div className="events__left">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/eWJ8lB9IxeY?start=2642"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="events__right">
              <h3>2022 ACC InVenture Prize</h3>
              <h4>April 2nd, 2022</h4>
              <p>
                I was fortunate enough to be selected as Wake Forest University's representative for the 2022 ACC InVenture Prize. I represented my EdTech startup company: ByteSize Learning in Tallahassee, Florida on live television. I was a fantastic experience to practice pbulic speaking, network with other college entrepreneurs, and promote my company to a broader audience.              </p>
              <div className="events__item-ctas">
                <a
                  href="https://www.youtube.com/embed/eWJ8lB9IxeY?start=2642"
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Video Link
                </a>
                <a
                  href="https://accinventureprize.com/"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  More Details
                </a>
              </div>
            </div>
          </article>

          <article className="events__item">
            <div className="events__left">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/MBwIT_pzApw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="events__right">
              <h3>2022 Wake Forest University Demo Day</h3>
              <h4>April 7th, 2022</h4>
              <p>
                My startup company was accepted into the Center for Entrepreneurship "Startup Lab" program at Wake Forest University, culminating in 2022 Demo Day - a celebration of entrepreneurship at the University. I pitched my company to over 100 students, alumni, and venture capitalists present and learned about the importance of remaining calm under pressure. 
              </p>
              <div className="events__item-ctas">
                <a
                  href="https://www.youtube.com/embed/MBwIT_pzApw"
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Video Link
                </a>
                <a
                  href="https://entrepreneurship.wfu.edu/blog/events/2022-entrepalooza-a-celebration-of-entrepreneurship/"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  More Details
                </a>
              </div>
            </div>
          </article>

          <article className="events__item">
            <div className="events__left">
              <img
                src={IdeasCity}
                alt="ideascityWS"
              ></img>
            </div>
            <div className="events__right">
              <h3>IdeasCityWS: Marketplace of Ideas</h3>
              <h4>October 2nd, 2021</h4>
              <p>
                IdeasCityWS is a festival of ideas at the intersection of arts, science, technology, and culture. My company was fortunate enough to have been offered an exhibit at the event where I talked with locals and fellow exhibitors attending the event.
              </p>
              <div className="events__item-ctas">
                <a
                  href="https://ideascity.events.wfu.edu/"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  More Details
                </a>
              </div>
            </div>
          </article>


        </div>
      </div>
    </section>
  );
};

export default Events;

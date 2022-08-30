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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                minus, cumque saepe corporis sit, eligendi tempore animi quam,
                dicta rerum nostrum cupiditate tempora veniam est distinctio
                ipsa totam maxime fuga.
              </p>
              <div className="events__item-ctas">
                <a
                  href="https://github.com"
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Video Link
                </a>
                <a
                  href="https://github.com"
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                minus, cumque saepe corporis sit, eligendi tempore animi quam,
                dicta rerum nostrum cupiditate tempora veniam est distinctio
                ipsa totam maxime fuga.
              </p>
              <div className="events__item-ctas">
                <a
                  href="https://github.com"
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Video Link
                </a>
                <a
                  href="https://github.com"
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                minus, cumque saepe corporis sit, eligendi tempore animi quam,
                dicta rerum nostrum cupiditate tempora veniam est distinctio
                ipsa totam maxime fuga.
              </p>
              <div className="events__item-ctas">
                <a
                  href="https://github.com"
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Video Link
                </a>
                <a
                  href="https://github.com"
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                minus, cumque saepe corporis sit, eligendi tempore animi quam,
                dicta rerum nostrum cupiditate tempora veniam est distinctio
                ipsa totam maxime fuga.
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

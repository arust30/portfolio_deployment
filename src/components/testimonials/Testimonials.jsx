import React from "react";
import "./testimonials.css";
import Placeholder from "../../assets/placeholder-image.png";
import JohnAggreyHeadshot from "../../assets/JohnAggrey.png";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: JohnAggreyHeadshot,
    name: "John Aggrey",
    title: "Founder & CEO - The Unicorn Group, Founder & CEO - Eat Din Din",
    review:
      "As the CEO of Din Din (www.eatdindin.com) I had the pleasure of working with Andrew after his graduation from Wake Forest University. I could tell during the interviewing process that he possessed the right blend of analytical thinking, solutions mapping, and technology design capabilities. Andrew far exceeded my expectations and that of every member of our executive team. With a forensic approach he was able uncover gaps in our service offering, provide solutions, and communicate effectively with our executive team and across functional groups within our organization.",
  },
  {
    avatar: Placeholder,
    name: "Name",
    title: "Title",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ducimus incidunt odio, non placeat numquam quas, id voluptates laborum ipsum quam quaerat! Aliquam aperiam soluta atque quis ullam incidunt unde!",
  },
  {
    avatar: Placeholder,
    name: "Name",

    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ducimus incidunt odio, non placeat numquam quas, id voluptates laborum ipsum quam quaerat! Aliquam aperiam soluta atque quis ullam incidunt unde!",
  },
  {
    avatar: Placeholder,
    name: "Name",
    title: "Title",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ducimus incidunt odio, non placeat numquam quas, id voluptates laborum ipsum quam quaerat! Aliquam aperiam soluta atque quis ullam incidunt unde!",
  },
  {
    avatar: Placeholder,
    name: "Name",

    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ducimus incidunt odio, non placeat numquam quas, id voluptates laborum ipsum quam quaerat! Aliquam aperiam soluta atque quis ullam incidunt unde!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="testimonials__top-transition" />
      <div className="testimonials__container-one">
        <h2>Testimonials</h2>

        <Swiper
          className="container testimonials__container"
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {data.map(({ avatar, name, title, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt=''/>
                </div>
                <h3 className="client__name">{name}</h3>
                <h5 className="client__title">{title}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>


    </section>
  );
};

export default Testimonials;

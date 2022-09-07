import React from "react";
import "./testimonials.css";
/*import Placeholder from "../../assets/placeholder-image.png";*/
import JohnAggreyHeadshot from "../../assets/JohnAggrey.png";
import JohnMeanyHeadshot from "../../assets/JohnMeany.png";
import LizzyRandolphHeadshot from "../../assets/LizzyRandolph.png";
import TedMiddletonHeadshot from "../../assets/TedMiddleton.png";
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
    avatar: JohnMeanyHeadshot,
    name: "John Meany",
    title: "CEO & Co-Founder - Q Social Technologies",
    review:
      "As the CEO of Q Social Technologies (Q-social.com) I have had the pleasure of knowing and working with Andrew for the past few years. He is an invaluable member of the team as our CTO and has a tremendous work ethic. Andrew has great communication and analytical thinking skills that have been able to take us from the ground up. Andrew has been leading our tech team and is able to turn every idea that we have had into a working web app. He is a great leader and is able to keep all of our software engineers on track and much of the time ahead ofschedule. Outside of tech, he has been a great asset as he provides insight on every call with vendors, investors, and third party tech solution companies.",
  },
  {
    avatar: LizzyRandolphHeadshot,
    name: "Lizzy Randolph",
    title: "Program Manager, Summer Exploration Program at Wake Forest University",
    review:
      "We had a wonderful experience partnering with Andrew at ByteSize Learning. Andrew provided engaging and high-quality instruction for our middle school students. They had a great time using the game of Minecraft to learn more about engineering concepts. Andrew is not only a great teacher, but also a great role model for students. Would definitely recommend ByteSize Learning as a resource for students that want to explore their curiosity for STEM.",
  },
  {
    avatar: TedMiddletonHeadshot,
    name: "Ted Middleton",
    title: "CEO & Co-Founder of Whirl ",
    review:
      "Andrew is a versatile problem solver. He joined the Whirl team in June 2022 for a part-time Front End developer position. That said, he worked on much more than just our front end. Andrew actually ended up taking the lead redoing our wireframe and organizing our navigation. Early on in his employment, Andrew took the time to look around for issues with our product/organization and made it his own mission to improve on them. He has been a stellar addition to our team that has been able to fill in the gaps when we need it. I continue to be impressed with Andrew’s organization, work ethic, and problem solving abilities. I highly reccomend Andrew to any team looking for someone that can efficiently solve a multitude of technical and organizational challenges. I wish him the best!",
  },
  /*
  {
    avatar: Placeholder,
    name: "Name",

    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ducimus incidunt odio, non placeat numquam quas, id voluptates laborum ipsum quam quaerat! Aliquam aperiam soluta atque quis ullam incidunt unde!",
  },
  */
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

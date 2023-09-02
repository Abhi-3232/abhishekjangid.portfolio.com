import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import {Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: "Shelendra Garg",
    review:
    "Abhishek's depth of knowledge in frontend development is truly impressive. His expertise shines through in his code quality and innovative problem-solving. He's a valuable asset to any development team." ,
  },
  {
    avatar: AVTR2,
    name: "Keshav Suman",
    review:
    "Abhishek's contributions to our team have been exceptional. He consistently delivers high-quality code and collaborates seamlessly with our backend developers. His deep knowledge of frontend technologies makes him an invaluable asset.",
  },
  {
    avatar: AVTR3,
    name: "Nikhil Chouhan",
    review:
    "I've had the privilege of working closely with Abhishek on several complex projects. His meticulous attention to detail and commitment to writing clean, maintainable code is second to none. He's a senior developer you can always rely on.",
  },
  {
    avatar: AVTR4,
    name: "Ranjeet Gawande",
    review:
    "Working alongside Abhishek has been a pleasure. His frontend development skills perfectly complement my design work. He takes the time to understand the design vision and translates it into pixel-perfect code. His collaborative nature makes our projects shine.",
  },
];

const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {data.map(({ avatar, name, review,index }) => {
          return(
            <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt="avatar" />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  );
};

export default testimonials;

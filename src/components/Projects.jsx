import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";


import thumbNail from "../assets/thumbNail.jpg";
import customer from "../assets/customer.jpg"
// const thumbNail = "123";
const slides = [
  {
    id: 0,
    imageSrc: thumbNail,
    projectName: "Project 1",
    projectLink: "#",
    projectDescription:
      "This is an Personal Portfolio website which shows mt all contribution the work i did as an intern , as an open-spource intern",
    githubLink: "#",
  },
  {
    id: 1,
    imageSrc: customer,
    projectName: "Project 2",
    projectLink: "#",
    projectDescription:
      "This is an Personal Portfolio website which shows mt all contribution the work i did as an intern , as an open-spource intern",
    githubLink: "#",
  },
  {
    id: 2,
    imageSrc: thumbNail,
    projectName: "Project 3",
    projectLink: "#",
    projectDescription:
      "This is an Personal Portfolio website which shows mt all contribution the work i did as an intern , as an open-spource intern",
    githubLink: "#",
  },
  {
    id: 3,
    imageSrc: customer,
    projectName: "Project 4",
    projectLink: "#",
    projectDescription:
      "This is an Personal Portfolio website which shows mt all contribution the work i did as an intern , as an open-spource intern",
    githubLink: "#",
  },
  {
    id: 4,
    imageSrc: thumbNail,
    projectName: "Project 5",
    projectLink: "#",
    projectDescription:
      "This is an Personal Portfolio website which shows mt all contribution the work i did as an intern , as an open-spource intern",
    githubLink: "#",
  },
  {
    id: 5,
    imageSrc: thumbNail,
    projectName: "Project 6",
    projectLink: "#",
    projectDescription:
      "This is an Personal Portfolio website which shows mt all contribution the work i did as an intern , as an open-spource intern",
    githubLink: "#",
  },
];

const Projects = () => {
  const Card = ({
    imageSrc,
    projectName,
    projectLink,
    projectDescription,
    githubLink,
  }) => {
    return (
      <div className="border-4 w-full glass-background rounded-lg overflow-hidden flex flex-col">
        <div className="w-full">
          <a className="block w-full -full">
            <img
              src={imageSrc}
              alt={projectName}
              className="w-full object-cover cursor-pointer flex-shrink"
            />
          </a>
        </div>
        <div className="text-white flex flex-col justify-start items-center h-[40%] mx-1 my-1">
          <h2 className="text-center font-bold">{projectName}</h2>
          <p className="text-center mb-5">{projectDescription}</p>
          <div className="flex justify-center mb-1">
            <a>
              <img
                src="https://img.icons8.com/material-outlined/24/61dbfb/github.png"
                alt="github-link"
                className="w-10 h-10 hover-glowing-shadow-and-scale rounded-full"
              />
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative w-screen h-full ">
      <div className="w-full h-screen flex flex-col justify-center items-center text-white z-10 ">
        <h1 className="text-5xl lg:text-7xl mt-10 fredoka-font text-center">
          Portfolio
          <span className="light-blue-text font-semibold"> Pro</span>
          jects
        </h1>
        <p className="mt-5">Swipe or drag the item</p>
        <div className="w-full h-screen sm:w-3/4 lg:w-1/2 my-10">
          <Swiper
             grabCursor={true}
             centeredSlides={true}
             breakpoints={{
                1:{
                    slidesPerView:1.3,
                    spaceBetween:120
                },
                400:{
                    slidesPerView:1.3,
                    spaceBetween:200
                },
                1024:{
                    slidesPerView:1.3,
                    spaceBetween:175
                },
                1200:{
                    slidesPerView:1.5,
                    spaceBetween:150
                },
                1500:{
                    slidesPerView:1.5, // tumhe kitne slides chaeye accordingly
                    spaceBetween:230// space betwwen the cards 
                },
             }}
             autoplay={{
                delay:5000,
                disableOnInteraction:false,
             }}
             speed={2000}
             loop={true}
             effect={'coverflow'}
               coverflowEffect={{
                rotate:50,  // ek card kitna spinning hoga
                stretch:0,  // kafi sahi hai ek spin me kaise kaise carrd display honge 
                depth:200,
                modifier:3,
                slideShadows: true
               }}

               autoHeight= {true}
               resizeObserver={true}
               modules={[EffectCoverflow, Autoplay]}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <Card
                  imageSrc={slide.imageSrc}
                  projectName={slide.projectName}
                  projectLink={slide.projectLink}
                  projectDescription={slide.projectDescription}
                  githubLink={slide.githubLink}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Projects;

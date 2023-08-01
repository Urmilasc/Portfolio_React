import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/autoplay";

const slides = [
  {
    id: 0,
    jobTitle: "Web developer",
    companyName:"Open-Souce Developer",
    datesWorked: "May 2023 - July 2023",
    jobDescription: "Woked on rsolving bugs",
  },
  {
    id: 1,
    jobTitle: "Open-source developer",
    companyName:"Open-Souce Developer",
    datesWorked: "May 2023 - July 2023",
    jobDescription: "Woked on rsolving bugs",
  },
  {
    id: 3,
    jobTitle: "Data Quality Checks",
    companyName:"Open-Souce Developer",
    datesWorked: "May 2023 - July 2023",
    jobDescription: "Woked on rsolving bugs",
  },
  {
    id: 4,
    jobTitle: "Content Writer",
    companyName:"Open-Souce Developer",
    datesWorked: "May 2023 - July 2023",
    jobDescription: "Woked on rsolving bugs",
  },
];

const WorkExperience = () => {
  const Card = ({ jobTitle, companyName, datesWorked, jobDescription }) => {
    return (
      <div className="border-2 w-[98%] glass-background rounded-lg flex flex-col glowing-shadow">
        <div className=" text-white flex flex-col justify-start items-center mx-1 my-5">
          <h2 className="text-lg text-center mb-5">{jobTitle}</h2>
          <h3 className="text-lg text-center mb-5">{companyName}</h3>
          <p className="text-center mb-5">{datesWorked}</p>
          <p className="text-center mb-5 border-t-2 pt-5">{jobDescription}</p>
        </div>
      </div>
    );
  };

  return (
    <section className="relative w-screen h-screen overflow-hidden ">
      <div className="w-full h-full flex flex-col justify-content items-center text-white z-10 my-5">
        <h1 className="text-5xl lg:text-7xl mt-10 fredoka-font text-center mx-1">
          Work
          <span className="light-blue-text font-semibold"> Exp</span>
          erience
        </h1>
        <p className="mt-5">Swipe or drag the items</p>
        <div className="w-[90%] lg:w-1/4 my-10">
          <Swiper
            grabCursor={true}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            speed={2000}
            loop={true}
            effect={"cube"}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            modules={[EffectCube, Autoplay]}
            className="mySwiper"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <Card
                  jobTitle={slide.jobTitle}
                  companyName={slide.companyName}
                  datesWorked={slide.datesWorked}
                  jobDescription={slide.jobDescription}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default WorkExperience;


//Part - 10  Swiper.js , effectCube , react map function 

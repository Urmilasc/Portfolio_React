import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BsLinkedin, BsTelegram , BsTwitter} from "react-icons/bs";


import "../index.css";

const Skills = () => {
  const aboutVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="relative w-screen h-screen mt-20">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={aboutVariants}
        className="absolute left-[0%] mx-3 md:left-[10%] xl:left-[25%] md:w-1/3 xl:w-1/4 text-white py-3 glowing-shadow border rounded-lg   text-center glass-background"
      >
        <h1 className="text-3xl lg:text-3xl fredoka-font">
          <span className="text-2x">🔗</span>
           Connect  with
          <span className="light-blue-text font-semibold ">  Me </span>
        </h1>
        {/* <p className="mt-8 mx-3 text-base font-serif">
            <ul> Web Development</ul>
          </p> */}
        <div className="flex flex-row ">
          <a href="https://www.linkedin.com/in/urmilachoudhary/">
            <BsLinkedin
              className=" hover-glowing-shadow-and-scale"
              style={{
                fontSize: "30px",
                
               margin:"30px 50px"
              }}
            />
          </a>
          <a href="">
            <BsTelegram
              className="hover-glowing-shadow-and-scale "
              style={{
                fontSize: "30px",
                margin:"30px 50px"
              }}
            />
          </a>
          <a href="https://twitter.com/Urmila_SC">
            <BsTwitter
              className="hover-glowing-shadow-and-scale "
              style={{
                fontSize: "30px",
                margin:"30px 45px"
              }}
            />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;

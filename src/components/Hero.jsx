import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = ({isLoaded}) => {
//   const isMobile = window.innerWidth <= 767;
//   const delayTime = isMobile ? 1.8 : 1.8;

  const h1variants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.5,
        stiffness: 100,
        duration: 1,
        delay: 1.5,
      },
    },
    hidden: { opacity: 0, scale: 0 },
  };

  const h2variants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.5,
        stiffness: 100,
        duration: 0.8,
        delay: 2.3,
      },
    },
    hidden: { opacity: 0, scale: 0 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [controls, inView]);

useEffect(() =>{
    if(isLoaded && inView){
        controls.start("visible")
    }
}, [controls, inView , isLoaded])  // this will wait for the isLoaded to be true and then only the controls.start("visible") going to be executed
  return (
    <section className="w-screen h-screen mx-auto">
      <div className="absolute left-[5%] top-[5%] xl:top-[14%] mx-auto fredoka-font text-white">
        <motion.h1
          animate={controls}
          initial="hidden"
          ref={ref}
          variants={h1variants}
          className="text-5xl lg-text-7xl"
        >
          Hii, I'm{" "}
          <span className="hover-text-glow light-blue-text font-semibold">
            Urmila{" "}
          </span>{" "}
        </motion.h1>

        <motion.h2
          animate={controls}
          initial="hidden"
          ref={ref}
          variants={h2variants}
          className="mt-8 text-3xl w-2/3 text-center"
        >
          I'm a Web Developer
        </motion.h2>
      </div>
      <div className="absolute flex flex-col bottom-[13%] left-[50%] translate-x-[-50%]">
        <div className="slide-bottom">
          <div className="down-arrow"></div>
          <div className="down-arrow"></div>
          <div className="down-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

//Part 4
//part 5 motion to h1 and h2
//part 6  adding the down-arrow code , Loader screen , adding delay time for mobile devices

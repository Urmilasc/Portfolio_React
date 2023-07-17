import React, { useRef, useState, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";

const s_id =  import.meta.env.VITE_API_S_ID;
const p_id = import.meta.env.VITE_API_P_ID;
const t_id = import.meta.env.VITE_API_T_ID;




export const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        s_id,
        t_id,
        {
          from_name: form.name,
          to_name: "Urmila",
          from_email: form.email,
          to_email: "urmilac643@gmail.com",
          message: form.message,
        },
        p_id
      )
      .then(
        () => {
          setLoading(false);
          alert("Thanks! I will get back to you soon.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);

          alert("Oops, something went wrong.Please try again");
        }
      );
  };

  //Framer motion
  const contactVariants = {
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
    <section className="w-full h-full relative flex flex-col justify-center items-center overflow-hidden">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={contactVariants}
        className="border-2 w-[98%] md:w-[60%] xl:w-[40%] text-center transparent-glass-background py-8 px-4 rounded-3xl glowing-shadow mt-20 mb-10"
      >
        <h1 className="header-text-glow fredoka-font text-5xl lg:text-7xl text-white">
          C<span className="light-blue-text font-semibold">on</span>t
          <span className="light-blue-text font-semibold">act</span>
        </h1>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white mb-4 font-bold">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your nae ?"
              className="border-2 form-field-color py-4 px-6 text-white rounded-lg outline-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-bold mb-4"> Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="border-2 form-field-color py-4 px-6 text-white rounded-lg outline-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Please leave yoyr message..."
              className="border-2 form-field-color py-4 px-6 text-white rounded-lg outline-none font-medium"
            ></textarea>
          </label>
          <button className="border-2 hover-glowing-shadow-and-scale py-3 px-8 text-white rounded-xl outline-none font-bold">
            {loading ? "Sending" : "Send"}
          </button>
        </form>
      </motion.div>
    </section>
  );
};



// emailjs used for handling the mail format and it act as a party between the google gmail ,
// first email from the sender goes too emailjs and then from emailjs passing that email to your gmail account 

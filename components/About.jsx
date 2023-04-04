import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="h-screen relative flex flex-col sm:flex-row text-justify sm:text-left items-center justify-center max-w-5xl px-10 mx-auto"
    >
      <h3 className="absolute top-20 text-gray-500 uppercase tracking-[5px]">
        About
      </h3>
      <motion.img
        initial={{
          x: -100,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.25,
        }}
        viewport={{ once: true }}
        className="mb-10 sm:mb-0 h-56 w-56 flex-shrink-0 rounded-full object-cover md:rounded-lg md:h-96 md:w-64 lg:h-[600px] lg:w-[400px]"
        src="/img/aboutImg.jpg"
      />
      <div className="p-2 sm:ml-6">
        <p className="text-sm text-gray-300">
          I recently received my B.Sc in CSE degree from North South University.
          Machine learning & Deep learning were the main topics of my major.
          I've worked on a number of web development projects in addition to my
          ML and DL projects, which I've listed below.
          <br />
          <br />
          Python, Java & C are just a few of the programming languages in which
          I am fluent. I am familiar with the Firebase, MongoDB, and MySQL
          databases. While being skilled in JavaScript, React js and Next Js, I
          am also studying full-stack (MERN) development.
        </p>
      </div>
      <div className="py-2 px-6 mt-10 border border-yellow-500/50 rounded-lg cursor-pointer hover:border-yellow-500 transition-all duration-300 ease-in-out absolute bottom-20">
        <a
          href=""
          download="/Update_CV_Ovee.pdf"
          className="text-neutral-500 uppercase text-sm tracking-widest"
        >
          Download Resume
        </a>
      </div>
    </motion.div>
  );
};

export default About;

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
        <p className="text-sm sm:text-base font-thin text-gray-300">
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
      <div className="group mt-10 absolute bottom-20">

        <div className="relative rounded-lg overflow-hidden transition-all ease-linear border border-yellow-500/50  hover:border-yellow-500 w-52 h-9">
          
          <div className="w-0 group-hover:w-full bg-neutral-900 h-full absolute top-0 left-0 transition-all duration-300 ease-linear z-0"></div>
          <a
            href=""
            download="/Update_CV_Ovee.pdf"
            className="py-2 px-6 text-neutral-500 uppercase text-sm tracking-widest group-hover:text-neutral-300 transition-all ease-linear rounded-lg cursor-pointer block z-20 absolute top-0 left-0 w-full"
          >
            Download Resume
          </a>

        </div>

      </div>
    </motion.div>
  );
};

export default About;

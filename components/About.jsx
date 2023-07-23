import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="h-screen">
      <h3 className="text-neutral-500 uppercase tracking-[5px] text-center pt-16">
        About
      </h3>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="h-[calc(100vh-88px)] flex items-center justify-center text-center sm:text-left max-w-5xl px-4 mx-auto"
      >
        <div className="h-full flex flex-col sm:flex-row gap-4 lg:gap-8 justify-evenly items-center">
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
            className="h-52 w-52 flex-shrink-0 rounded-full object-cover sm:rounded-lg sm:h-96 sm:w-64 lg:h-[450px] lg:w-[300px] xl:h-[550px] xl:w-[400px]"
            src="/img/aboutImg.jpg"
          />
          <div className="flex flex-col items-center md:items-start gap-4 sm:gap-8">
            <p className="text-sm sm:text-base font-thin text-neutral-300">
              I received my B.Sc in CSE degree from North South University.
              Machine learning & Deep learning were the main topics of my major.
              I've worked on a number of web development projects in addition to
              my ML & DL projects, which I've listed below.
              <br />
              <br />
              Python, Java & C are just a few of the programming languages in
              which I am fluent. While being skilled in JavaScript, React js and
              Next Js, I am also studying full-stack (MERN) development. I am
              familiar with the Firebase, MongoDB, and MySQL databases.
            </p>
            <div className="group mb-2">
              <div className="relative rounded-lg overflow-hidden transition-all ease-linear border border-yellow-500/50  hover:border-yellow-500 w-52 h-9">
                <div className="w-0 group-hover:w-full bg-neutral-900 h-full absolute top-0 left-0 transition-all duration-300 ease-linear z-0"></div>
                <a
                  href="https://drive.google.com/file/d/1bgS5uGrmQ-q7egdv7GW3wcPoCCfKneuZ/view?usp=share_link"
                  target="_blank"
                  className="py-2 px-6 text-neutral-500 uppercase text-sm tracking-widest group-hover:text-neutral-300 transition-all ease-linear rounded-lg cursor-pointer block z-20 absolute top-0 left-0 w-full"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;

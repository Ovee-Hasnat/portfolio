import { motion } from "framer-motion";
import React from "react";

const Projects = () => {
  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
      initial={{ y: 200 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="h-screen relative flex flex-col sm:flex-row text-justify sm:text-left items-center justify-evenly max-w-full mx-auto overflow-hidden"
    >
      <h3 className="absolute top-20 text-gray-500 uppercase tracking-[5px]">
        Projects
      </h3>

      <div className="relative flex overflow-x-scroll overflow-y-hidden w-full z-20 snap-x snap-mandatory scrollbar scrollbar-track-neutral-700 scrollbar-thumb-yellow-500/80 scrollbar-thumb-rounded-md">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen h-screen flex-shrink-0 flex flex-col justify-center items-center space-y-5 p-10 md:p-52 snap-center"
          >
            <motion.img
              initial={{ y: -200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              src="/img/showcase.png"
              className="w-5/6 max-w-xl"
            />
            <h4 className="text-2xl font-semibold uppercase">
              {project}# Project Title
            </h4>
            <p className="text-gray-400 font-thin xl:px-52">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae recusandae tempore impedit, quam ratione esse
              inventore. Natus quis, repudiandae excepturi ducimus distinctio
              esse aut veniam, in consequatur molestiae et magnam?
            </p>
          </div>
        ))}
      </div>

      <div className="w-full bg-neutral-900 h-[500px] -skew-y-12 absolute left-0 top-[28%]" />
    </motion.div>
  );
};

export default Projects;

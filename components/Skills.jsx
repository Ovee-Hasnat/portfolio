import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="h-screen relative max-w-5xl mx-auto flex flex-col items-center justify-evenly"
    >
      <h3 className="absolute top-20 text-gray-500 uppercase tracking-[5px]">
        Skills
      </h3>
      <div className="grid grid-cols-4 gap-5 px-4 md:px-0">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
};

export default Skills;

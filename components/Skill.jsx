import React from "react";
import { motion } from "framer-motion";

const Skill = (directionLeft) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: -50,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/207px-Nextjs-logo.svg.png?20190307203525"
        className="h-24 w-24 rounded-full object-contain border border-gray-600 lg:h-32 lg:w-32 "
      />
      <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-black/50 h-24 w-24 rounded-full lg:h-32 lg:w-32 z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl text-yellow-400 font-bold opacity-100">99%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;

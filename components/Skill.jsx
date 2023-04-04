import React from "react";
import { motion } from "framer-motion";

const Skill = ({ img, left }) => {
  return (
    <div className="group relative flex cursor-default hover:scale-110 transition-all duration-500 ease-in-out">
      <motion.img
        initial={{
          x: left ? -70 : 70,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        src={img}
        className="h-28 w-28 rounded-full object-contain border border-neutral-700 lg:h-32 lg:w-32 "
      />
      {/* <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-black/50 h-24 w-24 rounded-full lg:h-32 lg:w-32 z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl text-yellow-400 font-bold opacity-100">99%</p>
        </div>
      </div> */}
    </div>
  );
};

export default Skill;

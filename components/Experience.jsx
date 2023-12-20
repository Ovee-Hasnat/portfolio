import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="h-screen">
      <h3 className="text-neutral-500 uppercase tracking-[5px] text-center pt-16">
        Experience
      </h3>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="h-[calc(100vh-88px)] flex items-center justify-center text-center sm:text-left max-w-5xl px-4 mx-auto"
      >
        
      </motion.div>
    </div>
  );
};

export default Experience;

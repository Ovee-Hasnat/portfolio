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

      <div className="grid grid-cols-3 gap-5 px-4 md:px-0 sm:grid-cols-4">
        
        <Skill
          left
          img="https://www.freepnglogos.com/uploads/javascript-png/js-logo-png-5.png"
        />
        <Skill
          left
          img="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png"
        />
        <Skill left img="https://cdn.cdnlogo.com/logos/c/18/css.svg" />
        <Skill
          left
          img="https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png"
        />
        <Skill left img="https://i.imgur.com/mfIYuN2.png" />
        <Skill
          left
          img="https://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png"
        />
        <Skill
          left
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png"
        />
        <Skill
          left
          img="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png"
        />
        
        <Skill img="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" />
        <Skill img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" />
        <Skill img="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png" />
        <Skill img="https://assets.stickpng.com/images/5847f40ecef1014c0b5e488a.png" />
        <Skill img="https://cdn.iconscout.com/icon/free/png-512/mongodb-4-1175139.png?f=avif&w=256" />
        <Skill img="https://seeklogo.com/images/N/numpy-logo-479C24EC79-seeklogo.com.png" />
        <Skill img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" />
      </div>
    </motion.div>
  );
};

export default Skills;

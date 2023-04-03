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
          x: -300,
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
        className="mb-10 md:mb-0 h-56 w-56 flex-shrink-0 rounded-full object-cover md:rounded-lg md:h-96 md:w-64 lg:h-[600px] lg:w-[400px]"
        src="/img/aboutImg.jpg"
      />
      <div className="p-2 sm:ml-6">
        <p className="text-sm text-gray-300">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
          suscipit eius dolores sed nihil blanditiis, ipsam qui odio
          perspiciatis! Id consequatur qui earum iste. Non ullam molestias
          excepturi tempora nobis. Perspiciatis, quo? Veritatis magni dolores
          quos labore doloribus deserunt eligendi est tenetur similique rerum
          natus expedita itaque, laudantium id minus ipsam incidunt? Ipsum
          perferendis officiis unde placeat magni vitae tenetur.
          <br></br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          dolore dolorem eaque dolores, cum iste velit, et a, obcaecati animi
          maiores facere consequatur dignissimos ipsam numquam nulla accusantium
          molestias repellat.
        </p>
      </div>
    </motion.div>
  );
};

export default About;

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SocialIcon } from "react-social-icons";
import { db } from "@/firebase/client";
import { collection, getDocs } from "firebase/firestore";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const settings = {
    dots: true,
    slidesToShow: 1,
    speed: 1000,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  useEffect(() => {
    (async () => {
      const colRef = collection(db, "projects");

      const snapshots = await getDocs(colRef);

      const docs = snapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      setProjects(docs);
    })();
  }, []);

  return (
    <div className="h-screen relative">
      <h3 className="text-neutral-500 uppercase tracking-[5px] text-center pt-16">
        Projects
      </h3>
      <motion.div
        initial={{ y: 200 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="h-[calc(100vh-88px)] flex sm:text-left items-center justify-center max-w-full mx-auto"
      >
        <div className="w-full z-50">
          <Slider {...settings}>
            {projects.map((project) => (
              <div
                key={project.name}
                className="flex-shrink-0 justify-center items-center space-y-6 p-4 xl:px-80 cursor-grab flex "
              >
                <motion.img
                  initial={{ y: -100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  src={project.img}
                  className="w-4/6 max-w-md mx-auto"
                />
                <div className="space-y-6">
                  <h4 className="text-xl tracking-wide font-serif w-fit mx-auto text-center">
                    {project.name}
                  </h4>
                  <p className="text-neutral-400 font-thin xl:px-2 text-center text-sm md:text-base tracking-wide max-w-3xl mx-auto">
                    {project.description}
                  </p>
                  <div className="flex space-x-5 items-center justify-center">
                    {project.tools?.map((tool, i) => (
                      <img
                        key={i}
                        src={tool}
                        className="w-10 h-10 object-cover md:w-14 md:h-14 rounded-full shadow-md"
                      />
                    ))}
                  </div>
                  <div className="flex justify-center animate-pulse">
                    <div className="flex items-center">
                      <p className="text-lg text-neutral-600">Repo</p>
                      <SocialIcon
                        url={project.repo}
                        target="_blank"
                        fgColor="gray"
                        bgColor="transparent"
                        className="hover:scale-125 transition-all duration-500 ease-linear"
                      />
                    </div>
                    <div className="flex items-center">
                      <SocialIcon
                        url={project.live}
                        network="rss"
                        target="_blank"
                        fgColor="gray"
                        bgColor="transparent"
                        className="hover:scale-125 transition-all duration-500 ease-linear"
                      />
                      <p className="text-lg text-neutral-600">Live</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="w-full bg-neutral-700/50 h-[300px] lg:h-[400px] -skew-y-12 absolute left-0 top-[25%]" />
      </motion.div>
    </div>
  );
};

export default Projects;

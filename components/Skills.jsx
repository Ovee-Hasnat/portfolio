import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { db } from "@/firebase/client";
import { collection, getDocs } from "firebase/firestore";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    (async () => {
      const colRef = collection(db, "skills");

      const snapshots = await getDocs(colRef);

      const docs = snapshots.docs.map((doc, i) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      setSkills(docs);
    })();
  }, []);

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
        {skills.map((skill, i) => (
          <>
            <div
              key={i+1}
              className="flex flex-col items-center justify-center w-24 h-24 lg:w-28 lg:h-28 p-3 border rounded-full overflow-hidden cursor-pointer border-neutral-700"
            >
              <img
                src={skill.img}
                className="hover:scale-110 transition-all duration-300 ease-linear"
              />
            </div>
          </>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;

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
    <div className="h-screen ">
      <h3 className="mt-16 text-neutral-500 uppercase tracking-[5px] text-center pt-16">
        Skills
      </h3>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="h-[calc(100vh-88px)] max-w-5xl mx-auto flex items-center justify-center"
      >
        <div className="py-5 grid grid-cols-3 gap-3 md:gap-5 px-4 md:px-0 sm:grid-cols-4">
          {skills.map((skill, i) => (
            <>
              <div
                key={i + 1}
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
    </div>
  );
};

export default Skills;

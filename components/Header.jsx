import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 p-2 flex flex-row item-center justify-between max-w-5xl mx-auto z-30">
      {/* social icons */}

      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <SocialIcon
          url="https://linkedin.com/"
          fgColor="gray"
          bgColor="transparent"
          className="mx-2"
        />
        <SocialIcon
          url="https://github.com/"
          fgColor="gray"
          bgColor="transparent"
          className="mx-2"
        />
        <SocialIcon
          url="https://facebook.com/"
          fgColor="gray"
          bgColor="transparent"
          className="mx-2"
        />
      </motion.div>

      {/* mail */}

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="flex flex-row items-center cursor-pointer"
      >
        <SocialIcon
          network="email"
          fgColor="gray"
          bgColor="transparent"
          url="#contact"
        />
        <Link href="#contact">
          <p className="uppercase text-sm text-gray-400 hidden sm:inline-block hover:text-yellow-500">
            get in touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;

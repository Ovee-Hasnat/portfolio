import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi 👋, This is Ovee",
      "guy-who-loves-to-code 🤔",
      "<RealMadridForever/> 👑",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 justify-center overflow-hidden text-center pt-24">
      <BackgroundCircles />
      <img
        className="relative h-32 w-32 rounded-full mx-auto object-cover"
        src="/img/heroImg.jpg"
      />
      <div className="z-10">
        <h2 className="uppercase text-sm text-neutral-600 tracking-[10px] pb-2">
          software engineer
        </h2>
        <h1 className="text-4xl font-semibold px-10 h-16">
          <span className="mr-2">{text}</span>
          <Cursor cursorColor="#facc15" />
        </h1>
      </div>

      <div className="z-10">
        <Link href="#about">
          <button className="heroBtn">About</button>
        </Link>
        <Link href="#skill">
          <button className="heroBtn">Skills</button>
        </Link>
        <Link href="#projects">
          <button className="heroBtn">Projects</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

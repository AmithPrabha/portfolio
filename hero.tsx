"use client";
import Image from "next/image";
import cursor from "../assets/icon1.png"; // Correct path
import lightning from "../assets/icon2.png"; // Correct path
import profilepic from "../assets/profilepic.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="py-24 relative overflow-hidden bg-gradient-to-b from-black via-[#2b1942] via-60% to-[#8F5C55] to-90%">
      {/* Radial Gradient Background */}
      <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-1/2 -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"></div>

      {/* Hero Text */}
      <div className="text-8xl font-bold text-center relative z-10">
        <h1 className="text-[#98B4CE]">Hi, I am</h1>
        <h1 className="text-[#E48A57]">Amith Prabha</h1>
      </div>

      {/* Draggable Motion Elements */}
      <motion.div className="hidden md:block absolute left-[150px] top-[170px] z-10" drag>
        <Image
          src={cursor}
          height={170}
          width={170}
          alt="cursor"
          draggable="false"
        />
      </motion.div>
      <motion.div className=" hidden md:block absolute right-[230px] top-[40px] z-10" drag>
        <Image
          src={lightning}
          height={120}
          width={120}
          alt="lightning icon"
          draggable="false"
        />
      </motion.div>

      {/* Description */}
      <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80 relative z-10">
        I am a full-stack developer focused on creating websites that offer the best user experience.
      </p>

      {/* Profile Picture */}
      <Image
        src={profilepic}
        alt="profile picture"
        className="h-auto w-auto mx-auto relative z-10"
      />
    </div>
  );
};

export default Hero;
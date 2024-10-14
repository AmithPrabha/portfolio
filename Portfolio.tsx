"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import project4 from "../assets/project4.jpg";
import project2 from "../assets/project2.jpg";
import project3 from"../assets/project3.png"

const projects = [
  {
    title: "Ecommerce Digital Product",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    devStack: "MongoDB, Express, React, Node.js", 
    // link: "#",
    // git: "#",
    src: project4,
  },
  {
    title: "Interactive E-Learning Platform",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    devStack: "Next.js",
    // link: "#",
    // git: "#",
    src: project2,
  },
  {
    title: "Portfolio Website",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    devStack: "React, Tailwind",
    // link: "#",
    // git: "#",
    src: project3,
  },
];

const Portfolio = () => {
  return (
    <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52" id="portfolio">

<h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 my-12">Selected <span className="text-orange-400">Projects</span></h1>

      <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`mt-12 flex flex-col ${index % 2 === 1 ? "flex-col-reverse md:flex-row-reverse gap-12" : "flex-col md:flex-row"} gap-12`}
          >
            <div className="space-y-2 max-w-[550px]">
              <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
              <h2 className="text-4xl">{project.title}</h2>
              <p className="text-lg text-white/70 break-words p-4">{project.desc}</p>
              <p className="text-xl text-orange-400 font-semibold">{project.devStack}</p>
              <div className="w-64 h-[1px] bg-gray-400 my-4">
             
                {/* <a href={project.link} className="mr-6">Live</a>
                <a href={project.git}>Git</a> */}
                </div>
              </div>
            

            <div className="flex justify-center items-center">
              <Image
                src={project.src}
                alt={project.title}
                width={400}
                height={400}
                className="h-[350px] w-[500px] object-cover border rounded boarder-gray-700"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
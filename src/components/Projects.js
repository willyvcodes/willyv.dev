import React from "react";
import { AiFillGithub, AiOutlineOrderedList } from "react-icons/ai";
import { FaTools  } from "react-icons/fa";
import { MdPointOfSale } from "react-icons/md";
import { IoMdChatbubbles } from "react-icons/io";

const Projects = () => {
  const projects = [
    {
      name: "SayQR",
      description: "simple page that takes your text and generates a URL embedded in a QR code for easy access",
      icon: <AiOutlineOrderedList className="w-16 h-16" />,
      link: "https://sayqr.vercel.app",
    },
    {
      name: "POS",
      description:
        "Point Of Sale System for restaurants or inventory based companies. Created with Svelte",
      icon: <MdPointOfSale className="w-16 h-16" />,
      link: "https://pos-epua.onrender.com",
    },
    {
      name: "Tools Suite",
      description: "A growing collection of small, focused tools built to solve real-world problems efficiently.",
      icon: <FaTools className="w-16 h-16" />,
      link: "https://tool.willyv.dev",
    },
  ];

  const renderProjects = (projects) => {
    return projects.map((project, index) => (
      <a href={project.link} target="_blank" rel="noreferrer">
        <div
          key={index}
          className="border border-white mx-6 rounded-md p-4 shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300 ease-in-out"
        >
          <div className="flex flex-col items-center">
            <div className="text-3xl text-orange-400">{project.icon}</div>
            <h2 className="text-2xl font-semibold mt-2">{project.name}</h2>
            <p className="text-center mt-2">
              {project.description}
            </p>
          </div>
        </div>
      </a>
    ));
  };

  return (
    <section
      id="projects"
      className="flex flex-col min-h-screen py-20 gap-4 lg:gap-8"
    >
      <div className="flex flex-col text-center gap-4">
        <div className="relative mx-6">
          <div
            className="before:absolute before:right-0 before:top-0 before:h-1.5 before:w-2/3 before:bg-orange-400 
          after:absolute after:left-0 after:bottom-0 after:h-1.5 after:w-2/3 after:bg-orange-400 py-6 lg:py-8"
          >
            <h2 className="font-semibold text-2xl sm:text-4xl md:text-6xl">
              My Projects
            </h2>
          </div>
        </div>

        <p className="text-xl sm:text-2xl">
          Curious to
          <span className="p-text-main text-orange-400"> see </span> my work?
        </p>

        {/* github link */}
        <a
          className="rounded-md px-8 py-2 border border-solid text-white mx-auto hover:border-orange-500 hover:text-orange-500 duration-200"
          href="https://github.com/willyvcodes"
          target="_blank"
          rel="noreferrer"
        >
          <span className="flex items-center gap-1">
            <AiFillGithub />
            Github
          </span>
        </a>
      </div>

      {/* project links */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {renderProjects(projects)}
      </div>
    </section>
  );
};

export default Projects;

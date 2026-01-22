import React from "react";
import profileImage from "../assets/images/profile_image.png";
import { FaLinkedin } from "react-icons/fa";

const IntroPage = () => {
  return (
    <section
      id="intro"
      className="grid grid-cols-1 lg:grid-cols-2 lg:items-center min-h-screen"
    >
      <div className="flex flex-col text-center lg:text-start lg:ml-10 gap-4 lg:gap-6">
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-5xl">
          Hi! I'm
          <span className="text-orange-400"> William </span>Valido
          <br />
          Fullstack <span className="text-orange-400"> Developer</span>
        </h2>
        <p className="text-xl sm:text-2xl">
          My <span className="text-orange-400">tech stack</span> includes React,
          SvelteKit, TailwindCSS, Node.JS, PostgreSQL and MongoDB
        </p>
        <a
          className="group bg-white rounded-full text-black px-6 py-3 mx-auto lg:mr-auto lg:ml-0 sm:text-xl md:text-2xl hover:bg-orange-400 hover:text-white duration-200"
          href="https://www.linkedin.com/in/willyvalido"
          target="_blank"
          rel="noreferrer"
        >
          <div className="group flex items-center gap-1">
            <span>Get in Touch</span>
            <FaLinkedin className="text-orange-600 group-hover:text-white duration-200"/>
          </div>
        </a>
      </div>
      <div className="flex flex-col justify-center items-center max-h-[40vh] sm:max-h-[60vh]">
        <img
          src={profileImage}
          alt="William Valido Profile"
          className="max-h-[40vh] sm:max-h-[60vh] rounded-full bg-white shadow-2xl" />
      </div>
    </section>
  );
};

export default IntroPage;

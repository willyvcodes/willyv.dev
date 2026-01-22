import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="flex flex-col min-h-screen py-20">
      <div className="flex flex-col gap-4 lg:gap-6">
        <h2 className="font-semibold text-2xl sm:text-4xl md:text-6xl text-center">
          A bit <span className="text-orange-400">about</span> me.
        </h2>
        <p className="text-justify mx-2 text-lg sm:text-xl lg:mx-auto lg:max-w-4xl">
          My name is William Valido and welcome to my portfolio! I am dedicated
          full stack developer with a focus on React.js for frontend and
          proficiency in FastAPI, Express.js, MongoDB, and PostgreSQL for the
          backend. I started coding at a young age and pursued a Computer
          Science degree at FIU. I thrive on the ever-evolving tech landscape
          and the collaborative developer community that drives innovation in
          web development. Beyond coding, I cherish spending time with my wife
          and four-legged friend, as well as staying active. In the future, I
          aim to work with multiple clients to contribute my expertise to their
          digital success.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;

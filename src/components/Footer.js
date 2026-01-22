import React from "react";

const Footer = () => {
  return (
    <footer className="text-white py-8">
      <div className="flex flex-col items-center">
        <p className="text-lg">Let's Connect</p>
        <a
          className="text-2xl font-bold underline"
          href="mailto:valido.william@gmail.com"
        >
          valido.william@gmail.com
        </a>
      </div>
      <div className="mt-4 flex flex-col items-center">
        <p className="text-lg">Find Me on GitHub</p>
        <a
          className="text-2xl font-bold text-orange-600 hover:text-orange-400"
          href="https://github.com/willyvcodes"
          target="_blank"
          rel="noreferrer"
        >
          willyvcodes
          <span className="text-md ml-2 transform translate-y-1">👾</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

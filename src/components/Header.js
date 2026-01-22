import React from "react";

const Header = ({ y }) => {
  const tabs = [
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "About Me",
      link: "#about",
    },
  ];

  const renderTabs = (tabs) => {
    return tabs.map((tab, index) => (
      <a className="hover:text-orange-400 duration-200" href={tab.link}>
        <p>{tab.name}</p>
      </a>
    ));
  };

  return (
    <header
      className={`sticky top-0 z-[10] px-4 lg:px-8 py-6 flex justify-between items-center sm:tracking-normal md:tracking-wide lg:tracking-wider duration-200 shadow-sm ${
        y > 0 ? "bg-slate-900" : "bg-transparent"
      }`}
    >
      <h2 className="font-medium" href="#intro">
        <b className="font-bold poppins text-white">William</b> Valido
      </h2>
      <div className="flex ml-auto pr-0 sm:pr-2 md:pr-4 gap-2 md:gap-4">
        {renderTabs(tabs)}
      </div>
    </header>
  );
};

export default Header;

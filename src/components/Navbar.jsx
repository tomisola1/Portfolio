import React, { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsSun, BsFillMoonStarsFill } from "react-icons/bs";
import { Link } from "react-scroll";
import ThemeContext from "../context/ThemeContext";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const { theme, themeChange } = useContext(ThemeContext);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div
      className={`${theme} navbar flex justify-between items-center w-full h-20 px-4 text-white bg-slate-900 fixed`}
    >
      <div>
        <h1 className="text-5xl font-cursive ml-2 text-pink-500">Tomisola</h1>
      </div>

      <ul className="hidden md:flex">
        {theme === "dark" ? (
          <button className="bg-slate-700 p-2 rounded-md" onClick={themeChange}>
            <BsSun />
          </button>
        ) : (
          <button className="bg-pink-400 p-2 rounded-md" onClick={themeChange}>
            <BsFillMoonStarsFill fill="white" />
          </button>
        )}
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul
          className={`${theme} flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-gray-500`}
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
          {theme === "dark" ? (
            <button
              className="bg-slate-700 p-2 rounded-md"
              onClick={themeChange}
            >
              <BsSun />
            </button>
          ) : (
            <button
              className="bg-pink-400 p-2 rounded-md"
              onClick={themeChange}
            >
              <BsFillMoonStarsFill fill="white" />
            </button>
          )}
        </ul>
      )}
    </div>
  );
};

export default NavBar;

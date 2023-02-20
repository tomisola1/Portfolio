import React, { useContext } from "react";
import HeroImage from "../assets/HeroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import ThemeContext from "../context/ThemeContext";

const Home = () => {
  const { theme, headings } = useContext(ThemeContext);

  return (
    <div name="home" className={`${theme} h-screen w-full`}>
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 pt-36 md:flex-row sm:pt-72 md:pt-28">
        <div className="flex flex-col justify-center h-full mr-10">
          <p className={`${theme} text-gray-400 py-4 max-w-md uppercase`}>
            hi there 👋🏼 i'm
          </p>
          <h2
            className={`${headings} text-4xl sm:text-7xl font-bold text-white`}
          >
            Oluwatomisola.
          </h2>
          <p className={`${theme} text-gray-400 py-4 max-w-md`}>
            I am a frontend developer and I love building and desgining software
            👩🏽‍💻.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-pink-500 to-rose-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

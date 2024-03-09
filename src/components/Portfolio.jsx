import React, { useContext } from "react";
import gaming from "../assets/portfolio/gaming-site.png";
import cars from "../assets/portfolio/cars-landing-page.png";
import githubFinder from "../assets/portfolio/github-finder.png";
import housing from "../assets/portfolio/Housing-project.png";
import movieHub from "../assets/portfolio/movie-hub.png";
import movix from "../assets/portfolio/movix-app.png";
import ThemeContext from "../context/ThemeContext";

const Portfolio = () => {
  const { theme, headings } = useContext(ThemeContext);

  const portfolios = [
    {
      id: 1,
      src: gaming,
      demolink: "gaming-web.vercel.app",
      code: "https://github.com/tomisola1/Gaming-web",
    },
    {
      id: 2,
      src: cars,
      demolink: "https://classic-cars-amber.vercel.app/",
      code: "https://github.com/tomisola1/Classic-cars",
    },
    {
      id: 3,
      src: githubFinder,
      demolink: "https://github-finder-next-ten.vercel.app/",
      code: "https://github.com/tomisola1/Github-Finder-Next",
    },
    {
      id: 4,
      src: housing,
      demolink: "https://housing-indol.vercel.app/",
      code: "https://github.com/tomisola1/Housing",
    },
    {
      id: 5,
      src: movieHub,
      demolink: "https://movie-hub-theta-self.vercel.app/",
      code: "https://github.com/tomisola1/Movie-hub",
    },
    {
      id: 6,
      src: movix,
      demolink: "https://movix-web-app.vercel.app",
      code: "https://github.com/tomisola1/Movix-Web-App",
    }
  ];

  return (
    <div name="portfolio" className={`${theme} w-full text-white md:h-auto`}>
      <div className="max-w-screen-lg p-4 pt-10 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p
            className={`${headings} text-4xl font-bold inline border-b-4 border-gray-500`}
          >
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demolink, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demolink} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

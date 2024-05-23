import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const About = () => {
  const { theme, headings } = useContext(ThemeContext);

  return (
    <div name="about" className={`${theme} w-full h-auto text-white`}>
      <div className="max-w-screen-lg p-4 pt-48 md:pt-0 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p
            className={`${headings} text-4xl sm:text-6xl font-bold inline border-b-4 border-gray-500`}
          >
            About
          </p>
        </div>

        <p className="text-md mt-12 md:mt-20 md:text-xl">
          My name is Oluwatomisola Solomon a frontend developer based in Lagos,
          I have 3 years of experience in developing user-friendly and
          responsive web applications using modern front-end technologies such
          as React, Redux, HTML, CSS, and JavaScript. I have a strong
          understanding of responsive design principles, and I am familiar with
          various CSS frameworks such as Bootstrap and Material UI.
        </p>

        <br />

        <p className="text-md md:text-xl">
          I am a quick learner and I am always eager to take on new challenges.
          I have a strong work ethic, and I am committed to delivering
          high-quality work on time. I am also a team player and have excellent
          communication and interpersonal skills, which enables me to work
          effectively with cross-functional teams. I am eager to bring my
          experience and skills to any team i find myself and to contribute to
          the development of innovative solutions that make a positive impact on
          your users.
        </p>
      </div>
    </div>
  );
};

export default About;

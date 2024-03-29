import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Contact = () => {
  const { theme, headings } = useContext(ThemeContext);

  return (
    <div name="contact" className={`${theme} w-full h-screen text-white`}>
      <div className="flex flex-col p-4 pt-6 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p
            className={`${headings} text-4xl font-bold inline border-b-4 border-gray-500`}
          >
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/13f4876d-8c99-4317-8452-5655ded01d57"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-pink-500 to-rose-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

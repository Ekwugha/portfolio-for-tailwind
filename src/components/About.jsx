import React from "react";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20">
      <div className="w-full md:w-6/12">
        <SectionTitle>About Me</SectionTitle>
        <p className="text-md text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, harum.
          Doloremque quisquam fuga culpa ea ex laboriosam veritatis
          necessitatibus quia, at ducimus in sed quibusdam velit nihil, aut iure
          aperiam?
        </p>
        <a href="mailto:elloekwugha@gmail.com" className="block mt-3 text-md md:text-lg text-gray-700 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500">
          elloekwugha@gmail.com
        </a>
      </div>
      <img
        src="https://avatars.githubusercontent.com/u/88428581?v=4"
        alt="Elo"
        className="w-full md:w-6/12 rounded-lg object-cover"
      />
    </div>
  );
};

export default About;

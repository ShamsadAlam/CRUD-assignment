import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Navbar = () => {
  return (
    <div className="border-b-2 border-gray-400 mx-12 h-14 sticky top-0 z-10 backdrop-blur-md bg-opacity-30 shadow-lg transition duration-300 ease-in-out">
      <div className=" flex justify-between items-center">
        <div className="text-4xl font-semibold text-white m-2">
          <a
            href="https://shamsad-portfolio.vercel.app/"
            target="_sham"
            className="hover:text-blue-300"
          >
            TASKS.
          </a>
        </div>
        <div className="w-32 flex justify-around">
          <a
            href="https://www.linkedin.com/in/shamsadalam7084"
            target="_sham"
            className="hover:scale-105 ease-in-out duration-500 overflow-hidden "
          >
            <LinkedInIcon sx={{ fontSize: 40, color: "white" }} />
          </a>
          <a
            href="https://github.com/ShamsadAlam"
            target="_sham"
            className="hover:scale-105 ease-in-out duration-500 overflow-hidden"
          >
            <GitHubIcon sx={{ fontSize: 40, color: "white" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

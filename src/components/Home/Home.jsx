import React from "react";
import { Link } from "react-router-dom";
import Myphoto from "/src/assets/rahul.png";

function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-gray-900 text-white">

      <div className="w-full md:w-1/2 flex justify-center items-center py-12 px-6 bg-gray-800">
        <div className="text-center md:text-left max-w-md">
          <h1 className="text-xl md:text-2xl font-semibold">Hi, I am</h1>
          <h1 className="text-3xl md:text-5xl font-black mt-3 text-amber-400">
            Rahul Vishwakarma
          </h1>
          <p className="text-md md:text-lg text-gray-300 mt-2">
            Full Stack Developer / UI Designer
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 mt-10">
            <Link to="/github">
              <i className="fa-brands fa-github text-2xl hover:text-white"></i>
            </Link>
            <Link to="https://www.linkedin.com/in/rahul-vishwakarma-a74957360/">
              <i className="fa-brands fa-linkedin text-2xl hover:text-blue-500"></i>
            </Link>
            <Link to="https://www.facebook.com/profile.php?id=100042418248602">
              <i className="fa-brands fa-square-facebook text-2xl hover:text-blue-500"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center py-12 px-4 bg-gray-900">
        <div className="group relative w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full transition-transform duration-500 ease-in-out transform hover:scale-105">
          {/* Outer animated ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 via-pink-500 to-purple-500 opacity-70 blur-sm group-hover:blur-none group-hover:opacity-100 transition-all duration-500"></div>

          {/* Profile image */}
          <img
            src={Myphoto}
            alt="My photo"
            className="w-full h-full object-cover rounded-full border-4 border-gray-900 relative z-10"
          />
        </div>
      </div>

    </div>
  );
}

export default Home;

import React from 'react';
import Myphoto from '/src/assets/rahul.png';

export default function About() {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-gray-800 text-white">

      <div className="w-full md:w-1/2 flex justify-center items-center py-10 bg-gray-700">
        <img
          src={Myphoto}
          alt="Rahul Vishwakarma"
          className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-xl"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">About Me</h1>
        
        <p className="text-base md:text-lg leading-relaxed text-gray-200">
          I'm <span className="font-semibold text-white">Rahul Vishwakarma</span>, a passionate 
          <span className="text-amber-300"> Full Stack Developer </span> and 
          <span className="text-amber-300"> UI Designer</span>. 
          I love building interactive and scalable web applications that create impact.
        </p>

        <p className="mt-4 text-base md:text-lg text-gray-300">
          With strong experience in MERN stack, I combine backend logic with pixel-perfect frontend UIs using tools like React and Tailwind CSS. I’m always up for learning new tech and solving real-world problems.
        </p>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-white mb-2">Core Skills</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li>JavaScript, React, Node.js, Express</li>
            <li>MongoDB, REST APIs</li>
            <li>Tailwind CSS, Figma, UI/UX</li>
            <li>Git, GitHub, Responsive Design</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

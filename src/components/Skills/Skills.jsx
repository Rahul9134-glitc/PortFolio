import React from "react";

export default function Skills() {
  const skills = [
    { name: "HTML", level: "Expert", icon: "fab fa-html5", color: "text-orange-500" },
    { name: "CSS", level: "Expert", icon: "fab fa-css3-alt", color: "text-blue-500" },
    { name: "JavaScript", level: "Intermediate", icon: "fab fa-js", color: "text-yellow-400" },
    { name: "React", level: "Advanced", icon: "fab fa-react", color: "text-cyan-400" },
    { name: "Node.js", level: "Intermediate", icon: "fab fa-node", color: "text-green-500" },
    { name: "MongoDB", level: "Intermediate", icon: "fas fa-database", color: "text-green-400" },
    { name: "Tailwind CSS", level: "Advanced", icon: "fas fa-wind", color: "text-sky-400" },
    { name: "Git/GitHub", level: "Intermediate", icon: "fab fa-git-alt", color: "text-red-400" },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white py-10 px-4 md:px-20">
      <h1 className="text-4xl font-bold text-center text-amber-400 mb-10">
        My Skills
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-amber-500 transition"
          >
            <i className={`${skill.icon} ${skill.color} text-4xl mb-3`} />
            <h2 className="text-xl font-semibold">{skill.name}</h2>
            <p className="text-sm text-gray-400 mt-1">{skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

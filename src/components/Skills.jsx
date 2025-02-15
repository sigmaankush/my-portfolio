import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";
import { SiCplusplus, SiTailwindcss, SiMongodb } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, bgColor: "bg-orange-600", hoverColor: "hover:shadow-orange-500" },
  { name: "CSS", icon: <FaCss3Alt />, bgColor: "bg-blue-600", hoverColor: "hover:shadow-blue-400" },
  { name: "JavaScript", icon: <FaJs />, bgColor: "bg-yellow-500", hoverColor: "hover:shadow-yellow-300" },
  { name: "React.js", icon: <FaReact />, bgColor: "bg-cyan-500", hoverColor: "hover:shadow-cyan-300" },
  { name: "Node.js", icon: <FaNodeJs />, bgColor: "bg-green-600", hoverColor: "hover:shadow-green-400" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, bgColor: "bg-teal-500", hoverColor: "hover:shadow-teal-300" },
  { name: "Python", icon: <FaPython />, bgColor: "bg-yellow-600", hoverColor: "hover:shadow-yellow-400" },
  { name: "SQL", icon: <FaDatabase />, bgColor: "bg-gray-700", hoverColor: "hover:shadow-gray-400" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-purple-400"> Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center ${skill.bgColor} p-5 rounded-lg shadow-md transition transform hover:scale-110 ${skill.hoverColor} hover:shadow-lg`}
            >
              <div className="text-5xl text-white">{skill.icon}</div>
              <p className="mt-3 text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;



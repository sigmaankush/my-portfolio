import React from "react";

const projects = [
  {
    name: "On The Way",
    description: "A travel website that helps users find destinations, book hotels, and plan trips easily.",
    image: "/my-portfolio/public/on-the-way.jpg", // Replace with your actual image path
  },
  {
    name: "StudyBud",
    description: "An educational platform for students to collaborate, share notes, and access study materials.",
    image: "/my-portfolio/public/studybud.jpg", // Replace with your actual image path
  },
  {
    name: "Musicfy",
    description: "A music streaming website with curated playlists and recommendations.",
    image: "/my-portfolio/public/musicfy.jpg", 
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-10 bg-black text-white text-center">
      <h2 className="text-4xl font-bold mb-6 text-indigo-400"> Projects</h2>
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`bg-gradient-to-r ${project.bgColor} p-1 rounded-xl shadow-lg transform transition duration-300 hover:scale-105`}
          >
            <div className=" p-5 rounded-lg">
              <img src={project.image} alt={project.name} className="w-full h-40 object-cover rounded-md" />
              <h3 className="text-xl font-semibold mt-4 text-yellow-300">{project.name}</h3>
              <p className="text-gray-300 mt-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

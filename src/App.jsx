import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <section className="flex flex-col items-center justify-center min-m-screen text-center">
        <h2 className="text-5xl font-bold">Hi, I'm Ankush Kumar</h2>
        <p className="text-gray-400 mt-4">Computer Science & Data Analytics | Developer</p>
      </section>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}





    



import React from "react";

const About = () => {
  return ( 
    <section id="about" className="py-16 text-gray-200 flex flex-col items-center justify-center min-h-screen ">
      
      {/* Profile Image - Centered */}
      <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden shadow-xl border-4 border-gray-500">
        <img 
          src="/my-portfolio/public/ANKUSH KUMAR .jpg" 
          alt="Ankush Kumar" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* About Content - Centered */}
      <div className="mt-6 text-center max-w-2xl">
        <h2 className="text-4xl font-bold text-blue-400 mb-4">About Me</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Hi, I'm <span className="text-blue-300 font-semibold">Ankush Kumar</span>, a passionate developer and technology enthusiast.  
          I have a strong interest in <span className="text-yellow-400">Web Development</span>, <span className="text-green-400">Data Analytics</span>, and <span className="text-red-400">Software Engineering</span>.  
          
          I believe in continuous learning and strive to create impactful digital experiences. Let’s connect and collaborate! 🚀
        </p>
      </div>
    </section>
  );
};

export default About;

   
  



 



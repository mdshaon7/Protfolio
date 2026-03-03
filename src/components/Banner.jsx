import { useEffect, useState } from 'react';
import bannerimg from '../../public/WhatsApp_Image_2026-01-12_at_3.44.17_AM-removebg-preview (1).png'



const Banner = () => {
    const fullText = "Frontend Developer | Next.js";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 90); // typing speed
      return () => clearTimeout(timeout);
    }  
  }, [index]);
  return (
    
    <section id='home' className="flex justify-around items-center px-20 py-24 text-white   h-screen">
      
   
    <div className="max-w-md">
      
      {/* Typing Heading */}
      <h1 className="text-5xl font-bold leading-tight text-white">
        {displayText.includes("Frontend Developer") ? (
          <span className="text-blue-500">Frontend Developer</span>
        ) : (
          displayText
        )}
        {displayText.includes("| Next.js") && (
          <>
            {" | "}
            <span className="text-purple-400">Next.js</span>
          </>
        )}
        <span className="animate-pulse">|</span>
      </h1>

      {/* Description */}
      <p className="text-gray-400 mt-6 leading-relaxed">
        Passionate Frontend Developer focused on creating modern, responsive, 
        and user-friendly web applications. Skilled with HTML, CSS, JavaScript, 
        TypeScript, React, and Next.js to deliver clean UI and smooth user experiences.
      </p>

      {/* Button */}
      <a href="#contact">
        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md duration-300">
        Let’s Connect 
      </button>
      </a>
    </div>


      {/* Right Image */}
      <div className="relative  w-64 h-64">
        <div className="w-74 h-74 rounded-full bg-linear-to-br from-blue-600 to-indigo-900 flex items-center justify-center relative z-[10] overflow-hidden">
          <img
            src={bannerimg}
            alt="profile"
            className="rounded-full mt-[-100px]"
          />
        </div>
        <div className="w-44 h-80 blur-2xl rounded-full bg-linear-to-br from-blue-700 to-indigo-900 absolute top-[-140px] rotate-9  right-[-20px] "></div>
      </div>
    </section>
  );
};

export default Banner;

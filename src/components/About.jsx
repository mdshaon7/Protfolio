import React from 'react'
import aboutimg from "..//../public/11-52-14-848_960_720-removebg-preview.png"
import { FaDownload } from "react-icons/fa";


const About = () => {
  return (
<section id="about" className="h-screen flex items-center bg-gray-900 text-white px-4">
  {/* Container */}
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 w-full">

    {/* Image */}
    <div className="md:w-1/2 w-full">
      <img 
        src={aboutimg}
        alt="About"
        className="rounded shadow-lg w-[400px] h-full object-cover"
      />
    </div>

    {/* Text */}
    <div className="md:w-1/2 w-full">
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <p className="text-gray-300 mb-6 leading-relaxed">
        I am a Front-End Developer who loves creating modern and responsive
        websites using HTML, CSS, JavaScript, React, and Tailwind CSS.
        I am currently learning the MERN stack to become a full-stack developer.
      </p>
      <button className="px-6 py-2 bg-emerald-500 text-black rounded-lg hover:bg-gray-300 transition flex gap-[5px]">
        Download CV<FaDownload className='mt-[2px]' />

      </button>
    </div>

  </div>
</section>
  )
}

export default About

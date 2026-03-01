import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";

const skills = [
  { name: "HTML", level: 90, icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
  { name: "CSS", level: 85, icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
  { name: "JavaScript", level: 75, icon: <FaJs className="text-yellow-400 text-2xl" /> },
  { name: "React", level: 70, icon: <FaReact className="text-cyan-400 text-2xl" /> },
  { name: "Next.js", level: 65, icon: <SiNextdotjs className="text-white text-2xl" /> },
  { name: "Tailwind CSS", level: 80, icon: <SiTailwindcss className="text-sky-400 text-2xl" /> },
  { name: "Bootstrap", level: 80, icon: <FaBootstrap className="text-purple-500 text-2xl" /> },

];

function Technical() {
  return (
    <>
          <section className="bg-gray-900 py-20 text-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Headline */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Technical Skills
        </h2>

        {/* Flex container */}
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col justify-between w-60 bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-105 transition duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  {skill.icon}
                  <span className="font-semibold text-lg">{skill.name}</span>
                </div>
                <span className="font-medium text-gray-300">{skill.level}%</span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div
                  className="bg-green-500 h-3 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    </>
  )
}

export default Technical

import React from "react";
import { FaCode, FaReact, FaMobileAlt, FaPaintBrush } from "react-icons/fa";

const WhatICanDoForYou = () => {
  return (
    <section className="py-20 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          What I Can Do For You
        </h2>

        {/* Flex Cards */}
        <div className="flex flex-wrap justify-center gap-8">

          {/* Card 1 */}
          <div className="w-full sm:w-[45%] lg:w-[22%] bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500 hover:-translate-y-3 duration-300 group">
            <FaCode className="text-4xl mb-4 text-blue-500 group-hover:scale-110 duration-300" />
            <h3 className="text-xl font-semibold mb-3">Web Development</h3>
            <p className="text-gray-400">
              Clean and modern websites using HTML, CSS and JavaScript.
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-[45%] lg:w-[22%] bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500 hover:-translate-y-3 duration-300 group">
            <FaReact className="text-4xl mb-4 text-blue-500 group-hover:rotate-12 duration-300" />
            <h3 className="text-xl font-semibold mb-3">React Development</h3>
            <p className="text-gray-400">
              Dynamic UI using React and modern component structure.
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-[45%] lg:w-[22%] bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500 hover:-translate-y-3 duration-300 group">
            <FaMobileAlt className="text-4xl mb-4 text-blue-500 group-hover:scale-110 duration-300" />
            <h3 className="text-xl font-semibold mb-3">Responsive Design</h3>
            <p className="text-gray-400">
              Mobile-first responsive layouts using Tailwind CSS.
            </p>
          </div>

          {/* Card 4 */}
          <div className="w-full sm:w-[45%] lg:w-[22%] bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500 hover:-translate-y-3 duration-300 group">
            <FaPaintBrush className="text-4xl mb-4 text-blue-500 group-hover:scale-110 duration-300" />
            <h3 className="text-xl font-semibold mb-3">UI Design</h3>
            <p className="text-gray-400">
              Clean and modern UI design for better user experience.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhatICanDoForYou;



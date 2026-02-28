import React from 'react'

const Whatdo = () => {
  return (
   
  
     <section className="py-16 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-start">

        {/* Left Side */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <h2 className="text-4xl font-bold">What I do?</h2>
          <p className="text-gray-300 leading-relaxed">
            I build modern, responsive web applications with a focus on clean
            code, intuitive UI, and real-world usability using the MERN stack
            and modern frontend tools.
          </p>
          <p className="text-gray-300 leading-relaxed">
            I continuously learn new tools & technologies to improve
            performance, usability, and overall user experience.
          </p>
          <button className="w-max px-6 py-2 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition">
            Say Hello!
          </button>
        </div>

        {/* Right Side - Single Combined Div */}
        <div className="md:w-1/2 bg-gray-800 relative p-6 rounded-xl shadow hover:shadow-lg transition group">
        
          <h3 className="font-bold text-xl mb-4  pl-4 ">
            Frontend & MERN Stack
             <span className=" absolute left-3 top-5 h-8 w-1   bg-green-500  duration-300 ease-in-out group-hover:h-55 mt-1"></span>

          </h3>
          <p className="text-gray-300 mb-2">
            I specialize in building responsive and visually appealing user interfaces using React, JavaScript, and Tailwind CSS.
          </p>
          <p className="text-gray-300 mb-2">
            I also handle server-side development with Node.js, Express, and MongoDB, creating full-stack applications that are scalable and maintainable.
          </p>
          <p className="text-gray-300">
            My focus is on clean code, seamless integration of frontend and backend, and providing a smooth user experience.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Whatdo

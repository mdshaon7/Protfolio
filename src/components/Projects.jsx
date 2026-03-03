import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import blogimg from "../assets/Finsweet-03-02-2026_04_13_AM.png"

const projects = [
    {
        title: "Portfolio Website",
        image: blogimg,
        description: "Personal portfolio using React, Tailwind CSS, and Next.js.",
    },
    {
        title: "E-commerce App",
        image: blogimg,
        description: "Full-stack MERN e-commerce application.",
    },
    {
        title: "Blog Platform",
        image: "/images/blog.png",
        description: "Blog website with React, Node.js, and MongoDB.",
    },
    {
        title: "ToDo App",
        image: "/images/todo.png",
        description: "Simple task manager app with React and Tailwind CSS.",
    },
];




const Projects = () => {
    return (
        <>
        <div  ></div>
            <section  className="bg-gray-900 py-20 text-white scroll-mt-20" id='projects'>
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Projects
                    </h2>

                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={3}
                        loop={true}
                        speed={4000}
                        autoplay={{ delay: 0, disableOnInteraction: false }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {projects.map((project, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex  flex-col w-72 bg-gray-800 rounded-xl overflow-hidden shadow-lg  transition duration-600 group  ease-in-out">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                        <p className="text-gray-300">{project.description}</p>
                                        <div className='h-full w-[83%] hidden  bg-white/30 top-0 left-0 rounded-2xl absolute group-hover:flex justify-center items-center cursor-pointer duration-700 ease-in-out'>
                                            <p className='bg-black inline-block px-2  font-medium py-2 '>live view</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

        </>
    )
}

export default Projects

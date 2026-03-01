import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
];

const MyFrontendSkill = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-20 text-white">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-12">
          Frontend Skills
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={5}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <div
                className="
                backdrop-blur-lg
                bg-white/10
                border border-white/20
                rounded-2xl
                p-8
                text-center
                transition
                duration-500
                hover:scale-110
                hover:rotate-3
                hover:shadow-2xl
                "
              >
                <div className="text-6xl mb-4 animate-bounce">
                  {skill.icon}
                </div>

                <p className="font-semibold tracking-wide">
                  {skill.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default MyFrontendSkill;
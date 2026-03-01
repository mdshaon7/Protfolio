import React from "react";

const education = [
  {
    title: "Diploma in Computer Engineering",
    date: "2021 - 2025",
    description: "Barguna Polytechnic Institute",
  },
  {
    title: "SSC (Humanities)",
    date: "2020",
    description: "Adakhola Secondary School",
  },
];

const experience = [
  {
    title: "Frontend Development Training",
    date: "3 Months",
    description: "HTML, CSS, JavaScript, React, Tailwind",
  },
  {
    title: "MERN Stack Learning",
    date: "Current",
    description: "MongoDB, Express, React, Node.js",
  },
];

const TimelineItem = ({ item }) => {
  return (
    <div className="relative pl-8 mb-8 last:mb-0">
      {/* Circle */}
      <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-green-400"></div>
      <h4 className="text-xl font-semibold">{item.title}</h4>
      <p className="text-gray-400">{item.date}</p>
      <p className="mt-1 text-gray-300">{item.description}</p>
    </div>
  );
};

// ✅ Main function
const EducationExperienceTimeline = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Education & Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div className="sticky top-24 h-fit">
            <h3 className="text-2xl font-semibold mb-8 text-green-400">
              Education
            </h3>
            <div className="border-l-2 border-green-400 pl-6">
              {education.map((edu, index) => (
                <TimelineItem key={index} item={edu} />
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="sticky top-24 h-fit">
            <h3 className="text-2xl font-semibold mb-8 text-cyan-400">
              Experience
            </h3>
            <div className="border-l-2 border-cyan-400 pl-6">
              {experience.map((exp, index) => (
                <TimelineItem key={index} item={exp} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperienceTimeline;
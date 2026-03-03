import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactMe = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        alert("Message Sent Successfully!");
      })
      .catch(() => {
        alert("Failed to send message");
      });

    e.target.reset();
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b scroll-mt-20 from-gray-950 to-black text-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Contact Me
        </h2>

        {/* Two Section */}
        <div className="flex flex-col md:flex-row gap-12">

          {/* LEFT SIDE */}
          <div className="flex-1 backdrop-blur-lg bg-white/5 border border-white/10 p-8 rounded-2xl shadow-xl">

            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>

            <div className="space-y-5 mb-8">

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400" />
                <span>akashahmedshaon@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone className="text-blue-400" />
                <span>01601550159</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>Rajapur, Jhalakathi</span>
              </div>

            </div>

            {/* Social Icons */}
            <div className="flex gap-4">

              <a href="#" className="p-3 bg-gray-800 rounded-xl hover:bg-blue-600 duration-300">
                <FaFacebook />
              </a>

              <a href="#" className="p-3 bg-gray-800 rounded-xl hover:bg-blue-600 duration-300">
                <FaLinkedin />
              </a>

              <a href="#" className="p-3 bg-gray-800 rounded-xl hover:bg-blue-600 duration-300">
                <FaGithub />
              </a>

            </div>

            {/* Map */}
            <div className="mt-8 rounded-xl overflow-hidden border border-white/10">
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=Jhalakathi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-52 border-0"
                loading="lazy"
              ></iframe>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="flex-1 backdrop-blur-lg bg-white/5 border border-white/10 p-8 rounded-2xl shadow-xl">

            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-500 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-500 outline-none"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-500 outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 duration-300 font-semibold"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactMe;
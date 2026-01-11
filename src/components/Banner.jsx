import bannerimg from '../../public/WhatsApp_Image_2026-01-12_at_3.44.17_AM-removebg-preview (1).png'

const Banner = () => {
  return (
    
    <section className="flex justify-around items-center px-20 py-24 text-white">
      
      {/* Left Content */}
      <div className="max-w-md">
        <h1 className="text-5xl font-bold text-blue-500 leading-tight">
          Front-end <br /> Developer
        </h1>

        <p className="text-gray-400 mt-6 leading-relaxed">
          Software Engineer | Frontend Focused | I work with HTML, CSS,
          JavaScript, TypeScript and React.
        </p>

        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md">
          Let’s Connect
        </button>
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

const Header = () => {
  return (
    <>
    <header className="flex border-b border-gray-800 bg-[#0b0f19] justify-between items-center px-20 py-6 text-white fixed top-0 left-0 w-full z-999 ">
      <h1 className="text-blue-500 font-semibold text-4xl">
        Shaon
      </h1>

  <nav>
  <ul className="flex gap-8 text-sm text-gray-300 relative">

    <li>
      <a
        href="#home"
        className=" text-xl font-medium relative group pb-1"
      >
        Home
      <span className=" absolute left-0 bottom-0 h-0.5 w-0 bg-sky-500  duration-300 ease-in-out group-hover:w-full mt-1"></span>
      </a>
    </li>

    <li>
      <a
        href="#skills"
        className="relative text-xl font-medium group pb-1"
      >
        Skills
        <span className=" absolute left-0 bottom-0 h-0.5 w-0 bg-sky-500 duration-300 ease-in-out group-hover:w-full mt-1"></span>

      </a>
    </li>

    <li>
      <a
        href="#projects"
        className="relative text-xl font-medium group pb-1"
      >
        Projects
        <span className=" absolute left-0 bottom-0 h-0.5 w-0 bg-sky-500 duration-300 ease-in-out group-hover:w-full mt-1"></span>
        
      </a>
    </li>

    <li>
      <a
        href="#contact"
        className="relative text-xl font-medium group pb-1"
      >
        Contact
        <span className=" absolute left-0 bottom-0 h-0.5 w-0 bg-sky-500 duration-300 ease-in-out group-hover:w-full mt-1"></span>
      </a>
    </li>

  </ul>
</nav>
    </header>
      <div className="pb-29"></div>
    </>
  );
};

export default Header;

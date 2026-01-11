const Header = () => {
  return (
    <>
    <header className="flex border-b border-gray-800 bg-[#0b0f19] justify-between items-center px-20 py-6 text-white fixed top-0 left-0 w-full z-999 ">
      <h1 className="text-blue-500 font-semibold text-2xl">
        Shaon
      </h1>

      <nav>
        <ul className="flex gap-8 text-sm text-gray-300">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">Skills</li>
          <li className="hover:text-white cursor-pointer">Projects</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>
      </nav>
    </header>
      <div className="pb-29"></div>
    </>
  );
};

export default Header;

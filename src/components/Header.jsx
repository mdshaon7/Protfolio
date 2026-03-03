import { useState, useEffect } from "react";

const Header = () => {
  const [active, setActive] = useState("home");

  let Navbar = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Skills", link: "skills" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];

  // 🔥 Scroll Spy Effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 120; // navbar height adjust
          const height = section.offsetHeight;

          if (
            window.scrollY >= top &&
            window.scrollY < top + height
          ) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="flex border-b border-gray-800 bg-[#0b0f19] justify-between items-center px-20 py-6 text-white sticky top-0 w-full z-50">
      
      <h1 className="text-blue-500 font-semibold text-4xl">
        Shaon
      </h1>

      <nav>
        <ul className="flex gap-8 text-xl font-medium text-gray-300">
          {Navbar.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.link}`}
                className="relative group pb-1"
              >
                {item.name}

                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-sky-500 transition-all duration-300 ease-in-out
                    ${
                      active === item.link
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                ></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
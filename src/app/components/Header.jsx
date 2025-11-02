"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiHome } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa6";
import { FaImage } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [activeSection, setActiveSection] = useState("home"); // track current section

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "services",
        "projects",
        "contact",
      ];
      let current = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop - 100; // offset for header
          if (window.scrollY >= top) current = section;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        id="home"
        className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 border-b"
      >
        <div className="containerHeader flex justify-between p-5 sticky top-0">
          <div>
            <h1 className="font-semibold text-lg">Muhammad Hassan Raza</h1>
          </div>

          {/* Hamburger Menu for Small and Medium Screens (Visible only below 1100px) */}
          <div className="lg:hidden flex items-center" onClick={toggleMenu}>
            {isOpen ? (
              <Image
                width={6}
                height={6}
                className="w-6 h-6 text-gray-700 cursor-pointer"
                src={"/closeicon.svg"}
                alt="icon"
              />
            ) : (
              <Image
                width={6}
                height={6}
                className="w-6 h-6 text-gray-700 cursor-pointer"
                src={"/menuicon.svg"}
                alt="icon"
              />
            )}
          </div>

          {/* Desktop screen Links) */}
          <div className="hidden lg:flex justify-center items-center gap-8">
            {["home", "about", "skills", "services", "projects", "contact"].map(
              (sec) => (
                <Link
                  key={sec}
                  href={`#${sec}`}
                  className={`font-semibold hover:text-blue-700 ${
                    activeSection === sec ? "text-blue-700" : ""
                  }`}
                >
                  <p className="capitalize">{sec}</p>
                </Link>
              )
            )}
          </div>

          {/* Mobile screen Links */}
          <div
            className={`lg:hidden flex flex-col items-start gap-5 pl-6 pb-3 pt-3 justify-center absolute top-16 left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
              isOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-5 pointer-events-none"
            }`}
          >
            {["home", "about", "skills", "services", "projects", "contact"].map(
              (sec) => {
                const Icon = {
                  home: HiHome,
                  about: FaUser,
                  skills: BsTools,
                  services: FaGlobe,
                  projects: FaImage,
                  contact: PiPhoneCallFill,
                }[sec];

                return (
                  <Link
                    key={sec}
                    onClick={() => { setIsOpen(false)}}
                    href={`#${sec}`}
                    className={`font-semibold hover:text-blue-700 ${
                      activeSection === sec ? "text-blue-700" : ""
                    }`}
                  >
                    <p className="flex items-center gap-3">
                      <Icon /> {sec.charAt(0).toUpperCase() + sec.slice(1)}
                    </p>
                  </Link>
                );
              }
            )}
          </div>
        </div>
      </header>
    </>
  );
}

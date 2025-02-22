"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="containerHeader flex justify-between p-5 z-50 bg-white">
        <div>
          <h1 className="font-semibold text-lg">Muhammad Hassan Raza</h1>
        </div>

        {/* Hamburger Menu for Small and Medium Screens (Visible only below 1100px) */}
        <div className="lg:hidden flex items-center" onClick={toggleMenu}>
          {isOpen ? (
            // Cross icon when the menu is open
            <svg
              className="w-6 h-6 text-gray-700 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon when the menu is closed
            <Image
            width={6}
            height={6}
            className="w-6 h-6 text-gray-700 cursor-pointer"
            src={"https://www.svgrepo.com/show/509298/align-right.svg"}
            alt="icon"
          ></Image>
          )}
        </div>

        {/* Desktop screen Links) */}
        <div className="hidden lg:flex justify-center items-center gap-5">
          <Link href={"#home"} className="font-semibold hover:text-blue-700">
            <p>Home</p>
          </Link>
          <Link href={"#about"} className="font-semibold hover:text-blue-700">
            <p>About</p>
          </Link>
          <Link href={"#skills"} className="font-semibold hover:text-blue-700">
            <p>Skills</p>
          </Link>
          <Link href={"/"} className="font-semibold hover:text-blue-700">
            <p>Services</p>
          </Link>
          <Link href={"/"} className="font-semibold hover:text-blue-700">
            <p>Projects</p>
          </Link>
          <Link href={"/"} className="font-semibold hover:text-blue-700">
            <p>Contact</p>
          </Link>
        </div>

        {/* Mobile screen Links */}
        {isOpen && (
          <div className="flex flex-col items-start gap-5 pl-7 justify-center lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg">
            <Link href={"#home"} className="font-semibold hover:text-blue-700">
              <p>Home</p>
            </Link>
            <Link href={"#about"} className="font-semibold hover:text-blue-700">
              <p>About</p>
            </Link>
            <Link href={"#skills"} className="font-semibold hover:text-blue-700">
              <p>Skills</p>
            </Link>
            <Link href={"/"} className="font-semibold hover:text-blue-700">
              <p>Services</p>
            </Link>
            <Link href={"/"} className="font-semibold hover:text-blue-700">
              <p>Projects</p>
            </Link>
            <Link href={"/"} className="font-semibold hover:text-blue-700 mb-3">
              <p>Contact</p>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

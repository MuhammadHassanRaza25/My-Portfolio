import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {

    let year = new Date()
    let currentYear = year.getFullYear()
    
  return (
    <>
      <div className="max-w-[1600px] ml-auto mr-auto pt-14 pb-5 border-t lg:px-20">
        
        <div>
          <h1 className="text-center lg:text-3xl text-2xl font-medium text-gray-900">
            Muhammad Hassan Raza
          </h1>
        </div>

        <div className="flex flex-wrap lg:px-0 md:px-0 px-5 items-center justify-center mt-5 gap-5">
          <Link href={"#home"} className="text-base font-semibold hover:text-blue-700"><p>Home</p></Link>
          <Link href={"#about"} className="text-base font-semibold hover:text-blue-700"><p>About</p></Link>
          <Link href={"#skills"} className="text-base font-semibold hover:text-blue-700"><p>Skills</p></Link>
          <Link href={"#services"} className="text-base font-semibold hover:text-blue-700"><p>Services</p></Link>
          <Link href={"#projects"} className="text-base font-semibold hover:text-blue-700"><p>Projects</p></Link>
          <Link href={"#testimonial"} className="text-base font-semibold hover:text-blue-700"><p>Testomonial</p></Link>
          <Link href={"#contact"} className="text-base font-semibold hover:text-blue-700"><p>Contact</p></Link>
        </div>

        <div className="mt-6 flex gap-3 justify-center">
          <Link href={'https://github.com/MuhammadHassanRaza25'} target="_blank"><p className="text-2xl bg-black text-white rounded-full p-2.5"><FaGithub/></p></Link>
          <Link href={'https://www.linkedin.com/in/muhammad-hassan-raza-aab5402b7/'} target="_blank"><p className="text-2xl bg-black hover:bg-blue-500 text-white rounded-full p-2.5"><FaLinkedinIn/></p></Link>
          <Link href={'mailto:hassanejaz773@gmail.com'}><p className="text-2xl bg-black hover:bg-red-500 text-white rounded-full p-2.5"><MdEmail/></p></Link>
        </div>

        <div className="mt-9">
          <p className="text-center lg:text-base md:text-base text-xs font-semibold text-gray-900">
             © {currentYear} Muhammad Hasssan Raza. All rights reserved.
          </p>
        </div>

      </div>
    </>
  );
}

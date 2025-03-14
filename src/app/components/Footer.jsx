import Link from "next/link";

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

        <div className="mt-9 flex gap-7 justify-center">
          <p>github</p>
          <p>github</p>
          <p>github</p>
        </div>

        <div className="mt-9">
          <h1 className="text-center lg:text-base md:text-base text-xs font-medium text-gray-900">
             © {currentYear} Muhammad Hasssan Raza. All rights reserved.
          </h1>
        </div>

      </div>
    </>
  );
}

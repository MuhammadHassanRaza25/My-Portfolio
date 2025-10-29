import { FaCode } from "react-icons/fa6";
import { MotionUp } from "./ui/motion-up";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { LuSettings } from "react-icons/lu";

export default function Services() {
  return (
    <>
      <div id="services" className="flex flex-col items-center justify-center lg:pt-24 pt-24">
        <MotionUp delay={0}>
          <h1 className="text-black font-bold lg:text-4xl text-2xl text-center">
            My Services{" "}
          </h1>
        </MotionUp>
        <MotionUp delay={0}>
          <p className="text-base font-semibold text-gray-500 mt-1">
            What I Offer
          </p>
        </MotionUp>
      </div>

      <div className="container servicesCardDiv lg:pb-10 pb-20 lg:mt-0 lg:px-14 px-5 mt-8 flex items-center justify-evenly min-h-[430px]">
        <MotionUp delay={0.1}>
          <div className="serviceCard hover:shadow-lg transition duration-300 ease-out hover:scale-[1] hover:-translate-y-2 flex flex-col justify-center gap-5 lg:w-[340px] bg-white rounded-2xl border border-gray-300 px-2 py-7">
            <p className="text-gray-800 px-5 flex flex-col gap-3 lg:text-xl md:text-xl font-semibold">
              <span className="flex justify-center items-center rounded-full w-[60px] h-[60px] p-3  bg-gradient-to-r from-blue-800 via-blue-800 to-blue-500 text-white">
                <FaCode className="text-4xl" />
              </span>
              Full Stack Development
            </p>
            <p className="px-5 text-gray-700 lg:text-base md:text-base text-sm">
               Building scalable full-stack web applications with MERN stack, Next.js and modern frameworks, delivering seamless user experiences and responsive designs across all devices.
            </p>
          </div>
        </MotionUp>

        <MotionUp delay={0.2}>
          <div className="serviceCard hover:shadow-lg transition duration-300 ease-out hover:scale-[1] hover:-translate-y-2 flex flex-col justify-center gap-5 lg:w-[340px] bg-white rounded-2xl border border-gray-300 px-2 py-7">
            <p className="text-gray-800 px-5 flex flex-col gap-3 lg:text-xl md:text-xl font-semibold">
              <span className="flex justify-center items-center rounded-full w-[60px] h-[60px] p-3  bg-gradient-to-r from-blue-800 via-blue-800 to-blue-500 text-white">
                <HiOutlineDesktopComputer className="text-4xl" />
              </span>
               Frontend Development
            </p>
            <p className="px-5 text-gray-700 lg:text-base md:text-base text-sm">
              Creating responsive and interactive websites with React, Next.js, and modern libraries, delivering optimized and user-friendly experiences across all devices.
            </p>
          </div>
        </MotionUp>

        <MotionUp delay={0.3}>
          <div className="serviceCard hover:shadow-lg transition duration-300 ease-out hover:scale-[1] hover:-translate-y-2 flex flex-col justify-center gap-5 lg:w-[340px] bg-white rounded-2xl border border-gray-300 px-2 py-7">
            <p className="text-gray-800 px-5 flex flex-col gap-3 lg:text-xl md:text-xl font-semibold">
              <span className="flex justify-center items-center rounded-full w-[60px] h-[60px] p-3  bg-gradient-to-r from-blue-800 via-blue-800 to-blue-500 text-white">
                <LuSettings className="text-4xl" />
              </span>
              Backend Development
            </p>
            <p className="px-5 text-gray-700 lg:text-base md:text-base text-sm">
               Developing scalable backend systems with Node.js, Express.js, MongoDB, and modern backend technologies, ensuring optimized performance, reliability, and security.
            </p>
          </div>
        </MotionUp>
      </div>
    </>
  );
}

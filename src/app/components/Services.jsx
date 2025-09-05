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

      <div className="container servicesCardDiv lg:pb-10 pb-20 lg:mt-0 lg:px-10 px-5 mt-8 flex items-center justify-evenly min-h-[430px]">
        <MotionUp delay={0.1}>
          <div className="serviceCard shadow transition duration-200 hover:scale-[1] hover:-translate-y-2 flex flex-col justify-center gap-5 lg:w-[350px] lg:h-[300px] h-[220px] bg-white rounded-2xl border-2 border-gray-300 hover:border-blue-500 px-3">
            <p className="text-gray-800 px-5 flex flex-col gap-3 lg:text-xl md:text-xl font-semibold">
              <span className="flex justify-center items-center rounded-full w-[60px] p-3 bg-black text-white">
                <FaCode className="text-4xl" />
              </span>
              Full Stack Development
            </p>
            <p className="px-5 lg:text-base md:text-base text-sm">
               I specialize in developing full-stack web applications that combine elegant frontends with scalable backends, ensuring a smooth user experience across all devices and platforms.
            </p>
          </div>
        </MotionUp>

        <MotionUp delay={0.2}>
          <div className="serviceCard shadow transition duration-200 hover:scale-[1] hover:-translate-y-2 flex flex-col justify-center gap-5 lg:w-[350px] lg:h-[300px] h-[220px] bg-white rounded-2xl border-2 border-gray-300 hover:border-blue-500 px-3">
            <p className="text-gray-800 px-5 flex flex-col gap-3 lg:text-xl md:text-xl font-semibold">
              <span className="flex justify-center items-center rounded-full w-[60px] p-3 bg-black text-white">
                <HiOutlineDesktopComputer className="text-4xl" />
              </span>
               Frontend Development
            </p>
            <p className="px-5 lg:text-base md:text-base text-sm">I specialize in developing responsive and interactive websites using React, Next.js, and modern tools, with a strong focus on performance optimization and user-friendly designs.</p>
          </div>
        </MotionUp>

        <MotionUp delay={0.3}>
          <div className="serviceCard shadow transition duration-200 hover:scale-[1] hover:-translate-y-2 flex flex-col justify-center gap-5 lg:w-[350px] lg:h-[300px] h-[220px] bg-white rounded-2xl border-2 border-gray-300 hover:border-blue-500 px-3">
            <p className="text-gray-800 px-5 flex flex-col gap-3 lg:text-xl md:text-xl font-semibold">
              <span className="flex justify-center items-center rounded-full w-[60px] p-3 bg-black text-white">
                <LuSettings className="text-4xl" />
              </span>
              Backend Development
            </p>
            <p className="px-5 lg:text-base md:text-base text-sm">
              {/* I focus on developing backend functionalities that ensure optimal
              functionality and a seamless user experience. */}
               I specialize in building scalable and efficient backend systems with Node.js, Express.js, MongoDB, and Firebase, ensuring speed, stability, and smooth user experiences.</p>
          </div>
        </MotionUp>
      </div>
    </>
  );
}

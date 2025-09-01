import { MotionUp } from "./ui/motion-up";
import { HiOutlineDesktopComputer } from "react-icons/hi";
// import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
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
          <div className="serviceCard shadow transition duration-200 hover:scale-[1.03] hover:-translate-y-1 flex flex-col justify-center gap-5 lg:w-[520px] lg:h-[260px] h-[220px] bg-white rounded-xl border border-gray-300 px-3">
            <p className="text-gray-800 px-5 flex flex-col gap-3 lg:text-xl md:text-xl font-semibold dark:text-neutral-200">
              <span className="flex justify-center items-center rounded-full w-[60px] p-3 bg-black text-white">
                <HiOutlineDesktopComputer className="text-4xl" />
              </span>
               Frontend Development
            </p>
            <p className="px-5 lg:text-base md:text-base text-sm">
               {/* I specialize in creating responsive web apps using modern tools like MERN stack and Next.js, ensuring smooth user experience. */}
               I specialize in building responsive and dynamic web interfaces using React, Next.js, and modern UI libraries, with a strong focus on performance and seamless user experiences.</p>
          </div>
        </MotionUp>

        {/* <MotionUp delay={0.2}>
          <div className="serviceCard shadow transition duration-200 hover:scale-[1.03] hover:-translate-y-1 flex flex-col justify-center gap-5 lg:w-[330px] lg:h-[280px] bg-white rounded-lg border border-gray-300 px-3">
            <p className="text-gray-800 px-5 flex flex-col gap-3 lg:text-xl md:text-xl font-semibold dark:text-neutral-200">
              <span className="flex justify-center items-center rounded-full w-[60px] p-3 bg-black text-white">
                <HiMiniDevicePhoneMobile className="text-4xl" />
              </span>
              Mobile App Development
            </p>
            <p className="px-5">
               I specialize in crafting highly responsive mobile apps using React Native, delivering a flawless user experience across all devices.
            </p>
          </div>
        </MotionUp> */}

        <MotionUp delay={0.3}>
          <div className="serviceCard shadow transition duration-200 hover:scale-[1.03] hover:-translate-y-1 flex flex-col justify-center gap-5 lg:w-[520px] lg:h-[260px] h-[220px] bg-white rounded-xl border border-gray-300 px-3">
            <p className="text-gray-800 px-5 flex flex-col gap-3 lg:text-xl md:text-xl font-semibold dark:text-neutral-200">
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

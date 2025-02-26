import { MotionUp } from "./ui/motion-up";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
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
            What i Offer
          </p>
        </MotionUp>
      </div>

      <div className="container servicesCardDiv lg:mt-2 lg:px-14 px-5 mt-8 flex items-center justify-evenly min-h-[400px]">
        <MotionUp delay={0.1}>
          <div className="serviceCard shadow transition duration-200 hover:scale-[1.03] hover:-translate-y-1 flex flex-col justify-center gap-5 lg:w-[330px] lg:h-[300px] bg-white rounded-lg border px-3">
            <p className="text-gray-800 px-5 flex flex-col gap-3 lg:text-xl md:text-xl font-semibold dark:text-neutral-200">
              <span className="flex justify-center items-center rounded-full w-[60px] p-3 bg-black text-white">
                <HiOutlineDesktopComputer className="text-4xl" />
              </span>
              Web Development
            </p>
            <p className="px-5">
              I specialize in developing scalable, responsive web applications
              that deliver an exceptional user experience.
            </p>
          </div>
        </MotionUp>

        <MotionUp delay={0.2}>
          <div className="serviceCard shadow transition duration-200 hover:scale-[1.03] hover:-translate-y-1 flex flex-col justify-center gap-5 lg:w-[330px] lg:h-[300px] bg-white rounded-lg border px-3">
            <p className="text-gray-800 px-5 flex flex-col gap-3 lg:text-xl md:text-xl font-semibold dark:text-neutral-200">
              <span className="flex justify-center items-center rounded-full w-[60px] p-3 bg-black text-white">
                <HiMiniDevicePhoneMobile className="text-4xl" />
              </span>
              Mobile App Development
            </p>
            <p className="px-5">
              I specialize in creating mobile apps that are fully responsive
              across all devices, delivering a seamless user experience.
            </p>
          </div>
        </MotionUp>

        <MotionUp delay={0.3}>
          <div className="serviceCard shadow transition duration-200 hover:scale-[1.03] hover:-translate-y-1 flex flex-col justify-center gap-5 lg:w-[330px] lg:h-[300px] bg-white rounded-lg border px-3">
            <p className="text-gray-800 px-5 flex flex-col gap-3 lg:text-xl md:text-xl font-semibold dark:text-neutral-200">
              <span className="flex justify-center items-center rounded-full w-[60px] p-3 bg-black text-white">
                <LuSettings className="text-4xl" />
              </span>
              Back End Development
            </p>
            <p className="px-5">
              I focus on developing backend functionalities that ensure optimal
              functionality and a seamless user experience.
            </p>
          </div>
        </MotionUp>
      </div>
    </>
  );
}

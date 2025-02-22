import Image from "next/image";
import { MotionUp } from "./ui/motion-up";
import myimage from "../assets/images/myimage.jpg";

export default function Aboutme({ data }) {
  return (
    <>
      <div
        id="about"
        className="flex flex-col items-center justify-center lg:pt-10 pt-24"
      >
        <MotionUp delay={0}>
          <h1 className="text-black font-bold lg:text-4xl text-2xl text-center">
            About Me{" "}
          </h1>
        </MotionUp>
        <MotionUp delay={0}>
          <p className="text-base font-semibold text-gray-500">My Introduction</p>
        </MotionUp>
      </div>

      <div className="container flex lg:flex-row flex-col items-center justify-evenly min-h-[500px]">
        <MotionUp delay={0}>
          <div className="lg:mt-0 mt-10">
            <Image
              className="rounded-lg"
              width={340}
              height={340}
              src={myimage}
              alt="about image"
            ></Image>
          </div>
        </MotionUp>

        <div className="flex flex-col lg:gap-2 gap-5">
          <MotionUp delay={0.3}>
            <p className="aboutDesc flex flex-col gap-3 text-black lg:w-[550px] md:w-[38vw] sm:w-[48vw] font-semibold lg:text-lg md:text-lg lg:pt-0 pt-10">
              {data.description}
              <span className="italic">
                Turning innovative ideas into seamless, high-quality{" "}
                <span className="text-blue-700">digital experiences</span>.
              </span>
            </p>
          </MotionUp>
        </div>
      </div>
    </>
  );
}

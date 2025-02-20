import Image from "next/image";
import { MotionUp } from "./ui/motion-up";

export default function Aboutme({ data }) {
  return (
    <>
      <div id="about" className="flex flex-col items-center justify-center lg:pt-10 pt-24">
        <MotionUp delay={0}>
          <h1 className="text-black font-bold lg:text-4xl text-2xl text-center">
            About Me{" "}
          </h1>
        </MotionUp>
        <MotionUp delay={0}>
          <p className="text-base font-semibold">My Introduction</p>
        </MotionUp>
      </div>

      <div className="container flex lg:flex-row flex-col items-center justify-evenly min-h-[500px]">
        <MotionUp delay={0}>
          <div className="lg:mt-0 mt-10">
            <Image
              className="rounded-lg"
              width={340}
              height={340}
              src={"https://avatars.githubusercontent.com/u/153998754?v=4"}
              alt="hero image"
            ></Image>
          </div>
        </MotionUp>

        <div className="flex lg:gap-6 gap-5">
          <MotionUp delay={0.3}>
            <p className="aboutDesc text-black lg:w-[550px] md:w-[38vw] sm:w-[48vw] font-semibold lg:text-xl md:text-xl lg:pt-0 pt-10">
              {data.description}
            </p>
          </MotionUp>
        </div>
      </div>
    </>
  );
}

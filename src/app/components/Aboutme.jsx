import Image from "next/image";
import { MotionUp } from "./ui/motion-up";

export default function Aboutme({ data }) {
  return (
    <>
      <div id="about" className="flex flex-col items-center justify-center lg:pt-[0] pt-24 dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
        <MotionUp delay={0}>
          <h1 className="text-black font-bold lg:text-4xl text-2xl text-center">
            About Me{" "}
          </h1>
        </MotionUp>
        <MotionUp delay={0}>
          <p className="text-base font-semibold">My Introduction</p>
        </MotionUp>
      </div>

      <div className="flex lg:flex-row flex-col lg:px-10 items-center justify-evenly min-h-[80vh] dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
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
            <p className="aboutDesc text-black lg:w-[40vw] md:w-[38vw] sm:w-[48vw] font-semiold lg:text-xl md:text-xl lg:pt-0 pt-10">
              {data.description}
            </p>
          </MotionUp>
        </div>
      </div>
    </>
  );
}

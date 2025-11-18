import { MotionUp } from "./ui/motion-up";
// import Image from "next/image";

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

      <div className="container flex lg:flex-row flex-col items-center justify-center lg:mt-10 md:mt-0 pb-16">
        {/* <MotionUp delay={0}>
          <div className="lg:mt-1 mt-10 lg:px-0 md:px-0 px-5">
            <Image
              className="rounded-lg"
              width={310}
              height={310}
              src="/images/mypicture.png"
              alt="about image"
            ></Image>
          </div>
        </MotionUp> */}

        <div className="flex flex-col lg:gap-2 gap-5">
          <MotionUp delay={0.3}>
            <p  
             style={{whiteSpace: "pre-line"}}
             className="aboutDesc bg-white flex flex-col gap-3 text-black lg:w-[650px] md:w-[38vw] sm:w-[48vw] font-semibold lg:text-lg md:text-lg text-base lg:mt-0 mt-10"
            >
              {data.description}
              {/* <span className="italic">
                Turning ideas into high-performance & {" "}
                <span className="text-blue-700">scalable solutions</span>.
              </span> */}
            </p>
          </MotionUp>
        </div>
      </div>
    </>
  );
}

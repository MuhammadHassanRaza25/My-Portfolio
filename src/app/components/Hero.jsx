import { Highlight } from "./ui/hero-highlight";
import { MotionUp } from "./ui/motion-up";
import { FlipWords } from "./ui/flip-words";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import { PiDownloadSimpleBold } from "react-icons/pi";
import Link from "next/link";
// import { Spotlight } from "./ui/Spotlight";

export default function Hero({ data }) {
  const words = [data.position1, data.position2, data.position3];
  const skills = ["MERN Stack", "React & Next.js"];

  return (
    <>
      {/* <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="#4a6bff"
      /> */}
      <div className="container flex lg:flex-row flex-col lg:pt-0 pt-16 items-center justify-between lg:px-20 md:px-5 px-5 min-h-[525px]">
        <div className="flex flex-col lg:items-start items-center lg:gap-6 gap-4">
          <MotionUp delay={0}>
            <h1 className="text-black font-extrabold lg:text-4xl text-3xl lg:text-start text-center">
              Hi<span className="hand-wave-animate ml-1">👋</span>, I'm Muhammad Hassan Raza
            </h1>
          </MotionUp>

          <MotionUp delay={0}>
            <div>
              <Highlight className="text-white font-extrabold lg:text-4xl text-2xl">
                <FlipWords words={words} />
              </Highlight>
            </div>
          </MotionUp>

          <MotionUp delay={0.3}>
            <div className="text-white font-bold lg:text-3xl text-lg mt-3">
              <div>
                <span className="text-black">Specialized in</span>{" "}
                 <Highlight className="py-1 px-1 lg:text-2xl text-base lg:rounded-md rounded-md">
                    <FlipWords words={skills} />
                  </Highlight>{" "}
                {/* <span className="text-black">,</span>{" "}
                <Highlight>React</Highlight>{" "}
                <span className="text-black">and</span>{" "}
                <Highlight>Next.js</Highlight> */}
              </div>
            </div>
          </MotionUp>

          <MotionUp delay={0.5}>
            <div className="text-white font-bold lg:text-2xl md:text-2xl">
              <span className="text-black">Based in {data.address}</span>
            </div>
          </MotionUp>

          <MotionUp delay={0.7}>
            <div className="flex gap-5">
              <Link href={"#contact"}>
                 <button className="shadow-black hover:shadow-lg animate-shimmer bg-[linear-gradient(110deg,#191919,40%,#1e2631,55%,#191919)] bg-[length:200%_100%] cursor-pointer flex hover:gap-3 transition-all items-center gap-2 text-white font-semibold lg:px-8 px-5 py-2 lg:text-xl sm:text-base rounded-lg">
                   Say Hello <FaLocationArrow />
                 </button>
              </Link>
              <Link href={"https://purple-aliza-13.tiiny.site/"} target="_blank">
                 <button className="shadow-black hover:shadow-lg animate-shimmer bg-[linear-gradient(110deg,#191919,40%,#1e2631,55%,#191919)] bg-[length:200%_100%] cursor-pointer flex hover:gap-3 transition-all items-center gap-2 text-white font-semibold lg:px-8 px-5 py-2 lg:text-xl sm:text-base rounded-lg">
                   Resume <PiDownloadSimpleBold />
                 </button>
              </Link>
            </div>
          </MotionUp>

          <MotionUp delay={0.8}>
            <div className="lg:flex items-center pl-1 hidden">
              <p className="text-lg font-medium">Scroll Down</p>
              <Image
                src="/images/scrollicon.gif"
                width={40}
                height={40}
                alt="scroll image"
                unoptimized
              ></Image>
            </div>
          </MotionUp>
        </div>

        <MotionUp delay={0.3}>
          <div className="lg:mt-0 mt-10 lg:px-0 md:px-0">
            <Image
              className="rounded-lg"
              width={310}
              height={310}
              src="/images/myimage.png"
              alt="hero image"
            ></Image>
          </div>
        </MotionUp>
      </div>
    </>
  );
}

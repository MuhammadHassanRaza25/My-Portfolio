import { Highlight } from "./ui/hero-highlight";
import { Spotlight } from "./ui/Spotlight";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { MotionUp } from "./ui/motion-up";
import { FlipWords } from "./ui/flip-words";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { FloatingDock } from "../components/ui/floating-dock";

export default function Hero({ data }) {
  const words = [data.position1, data.position2];

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  return (
    <>
      <Spotlight
        className="-z-20 lg:left-80 left-10 lg:top-28 lg:h-[90vh] h-[100vh] w-[50vw]"
        fill="lightblue"
      />
       
      {/* Hero Section Start */}
      <div className="flex lg:flex-row flex-col lg:pt-[0] pt-20 lg:px-10 px-6 items-center justify-evenly min-h-[90vh] dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
        <div className="flex flex-col lg:gap-6 gap-5">
          <MotionUp delay={0}>
            <h1 className="text-black font-extrabold lg:text-4xl text-2xl">
              Hi, I'm Muhammad Hassan Raza
            </h1>
          </MotionUp>

          <MotionUp delay={0}>
            <div>
              <Highlight className="text-white font-extrabold lg:text-5xl text-2xl">
                {/* {data.position} */}
                <FlipWords words={words} />
              </Highlight>
            </div>
          </MotionUp>

          <MotionUp delay={0.3}>
            <div className="text-white font-bold lg:text-3xl text-base mt-3">
              <div>
                <span className="text-black">Specialized in</span>{" "}
                <Highlight>React</Highlight>{" "}
                <span className="text-black">and</span>{" "}
                <Highlight>Next.js</Highlight>
              </div>
            </div>
          </MotionUp>

          <MotionUp delay={0.5}>
            <div className="text-white font-bold lg:text-3xl md:text-2xl mt-[-10]">
              <span className="text-black">Based in {data.address}</span>
            </div>
          </MotionUp>

          <MotionUp delay={0.7}>
            <div className="flex gap-5">
              <button className="btn flex items-center gap-2 text-white font-semibold lg:px-12 px-5 py-2 lg:text-xl sm:text-base rounded-md">
                Say Hi <FaLocationArrow />
              </button>
              <button className="btn flex items-center gap-2 text-white font-semibold lg:px-12 px-5 py-2 lg:text-xl sm:text-base rounded-md">
                Resume <PiDownloadSimpleBold />
              </button>
            </div>
          </MotionUp>
        </div>

        <MotionUp delay={0.3}>
          <div className="lg:mt-0 mt-10">
            <Image
              className="rounded-lg"
              width={330}
              height={330}
              src={"https://avatars.githubusercontent.com/u/153998754?v=4"}
              alt="hero image"
            ></Image>
          </div>
        </MotionUp>
      </div>

      <FloatingDock items={links} />
      {/* Hero Section End */}

      {/* About Me */}
      <div className="h-96 pt-14 dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
        <h1>In'shallah this will complete soon 💙</h1>
      </div>
    </>
  );
}

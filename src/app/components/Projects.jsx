import { MotionUp } from "./ui/motion-up";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
// import Link from "next/link";
import Image from "next/image";

export default function Projects() { 

  return (
    <>
      <div className="flex flex-col items-center justify-center lg:pt-24 pt-24">
        <MotionUp delay={0}>
          <h1 className="text-black font-bold lg:text-4xl text-2xl text-center">
            Project Overview{" "}
          </h1>
        </MotionUp>
        <MotionUp delay={0}>
          <p className="text-base font-semibold text-gray-500 mt-1">
            Explore My Work
          </p>
        </MotionUp>
      </div>

      <div id="projects" className="container flex lg:px-14 px-5 mt-5 lg:flex-row flex-col items-center justify-evenly"> 
        <MotionUp delay={0.1}>
          <CardContainer className="inter-var w-full my-4 flex items-stretch">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] min-h-[400px] h-full rounded-xl p-4 border">
              <CardItem translateZ="100" className="w-full">
                <Image
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <CardItem
                translateZ="50"
                className="mt-4 text-xl font-bold text-neutral-600 dark:text-white"
              >
                Make things float in air
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 h-[80px] text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Hover over this card to unleash the power of CSS perspective
                Hover over this card to unleash the power of CSS perspective
                Hover over this card to unleash the power of CSS perspective...
              </CardItem>
              <div className="flex justify-end items-center mt-4">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Read More
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </MotionUp>

        <MotionUp delay={0.2}>
          <CardContainer className="inter-var w-full my-4 flex items-stretch">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] min-h-[400px] h-full rounded-xl p-4 border">
              <CardItem translateZ="100" className="w-full">
                <Image
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <CardItem
                translateZ="50"
                className="mt-4 text-xl font-bold text-neutral-600 dark:text-white"
              >
                Make things float in air
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 h-[80px] text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Hover over this card to unleash the power of CSS perspective
                Hover over this card to unleash the power of CSS perspective
                Hover over this card to unleash the power of CSS perspective...
              </CardItem>
              <div className="flex justify-end items-center mt-4">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Read More
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </MotionUp>

        <MotionUp delay={0.3}>
          <CardContainer className="inter-var w-full my-4 flex items-stretch">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] min-h-[400px] h-full rounded-xl p-4 border">
              <CardItem translateZ="100" className="w-full">
                <Image
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <CardItem
                translateZ="50"
                className="mt-4 text-xl font-bold text-neutral-600 dark:text-white"
              >
                Make things float in air
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 h-[80px] text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Hover over this card to unleash the power of CSS perspective
                Hover over this card to unleash the power of CSS perspective
                Hover over this card to unleash the power of CSS perspective...
              </CardItem>
              <div className="flex justify-end items-center mt-4">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Read More
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </MotionUp>
      </div>
    </>
  );
}
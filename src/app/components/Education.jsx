import Image from "next/image";
import { MotionUp } from "./ui/motion-up";
import { Timeline } from "./ui/timeline";

export default function Education() {
  
  const data = [
    {
      title: "January 2024 - April 2024",
      content: (
        <div className="flex flex-col gap-5 lg:w-[430px] lg:h-auto bg-gray-50 rounded-lg border-b-2 border-blue-700 pb-5 pt-5 px-3">
          <p className="text-gray-800 px-5 flex flex-col lg:text-2xl md:text-xl font-bold dark:text-neutral-200">
            Front End Development Course
            <span className="font-semibold text-gray-500 lg:text-base md:text-sm">
              Saylani Mass IT Training
            </span>
          </p>
          <ul className="list-disc text-sm space-y-2 lg:px-9 pl-9 pr-2 text-gray-800 font-semibold">
            <li>Studied HTML, CSS, Tailwind CSS, JavaScript and Firebase.</li>
            <li>I'm group leader of my Batch in Front End Development.</li>
            <li>
              Developed Blogging Website as a Final Project using HTML, CSS, JS and
              Firebase.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "April 2024 - September 2024",
      content: (
        <div className="flex flex-col gap-5 lg:w-[430px] lg:h-auto bg-gray-50 rounded-lg border-b-2 border-blue-700 pb-5 pt-5 px-3">
          <p className="text-gray-800 px-5 flex flex-col lg:text-2xl md:text-xl font-bold dark:text-neutral-200">
            Full Stack Development Course
            <span className="font-semibold text-gray-500 lg:text-base md:text-sm">
              Saylani Mass IT Training
            </span>
          </p>
          <ul className="list-disc text-sm space-y-2 lg:px-9 pl-9 pr-2 text-gray-800 font-semibold">
            <li>
              Learned technologies such as ReactJS, NextJS, NodeJs, ExpressJS
              and MongoDB.
            </li>
            <li>Practiced mordern Frontend and Backend Technologies.</li>
            <li>
              Made LMS using MERN Stack: MongoDB, ExpressJS, ReactJS, NodeJS.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "September 2024 - October 2024",
      content: (
        <div className="flex flex-col gap-5 lg:w-[430px] lg:h-auto bg-gray-50 rounded-lg border-b-2 border-blue-700 pb-5 pt-5 px-3">
          <p className="text-gray-800 px-5 flex flex-col lg:text-2xl md:text-xl font-bold dark:text-neutral-200">
            Mobile App Development Course
            <span className="font-semibold text-gray-500 lg:text-base md:text-sm">
              Saylani Mass IT Training
            </span>
          </p>
          <ul className="list-disc text-sm space-y-2 lg:px-9 pl-9 pr-2 text-gray-800 font-semibold">
            <li>Studied about React native.</li>
            <li>Learned about Mobile App development.</li>
            <li>Made Bykea ui/ux using React Native.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center lg:pt-24 pt-24 lg:mb-0 md:mb-0 mb-7">
        <MotionUp delay={0}>
          <h1 className="text-black font-bold lg:text-4xl text-2xl text-center">
            Educational Milestones{" "}
          </h1>
        </MotionUp>
        <MotionUp delay={0}>
          <p className="text-base font-semibold text-gray-500 mt-1">
            What I Have Done So Far
          </p>
        </MotionUp>
      </div>

      <div className="container flex items-center justify-evenly min-h-[500px]">
        <MotionUp>
          <Timeline data={data} />
        </MotionUp>
      </div>
    </>
  );
}

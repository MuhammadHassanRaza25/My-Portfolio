// import Image from "next/image";
import { MotionUp } from "./ui/motion-up";
import { Timeline } from "./ui/timeline";

export default function Experience() {

  const data = [
     {
      title: "August 2025 - Present",
      content: (
        <div className="flex flex-col gap-5 lg:w-[430px] lg:h-auto bg-gray-50 rounded-lg border-b-2 border-blue-700 pb-5 pt-5 px-3">
          <p className="text-gray-800 px-5 flex flex-col lg:text-2xl md:text-xl font-bold">
            Front-End Developer 
            <span className="font-semibold text-gray-500 lg:text-base md:text-sm">
              Integral Technologists
            </span>
          </p>
          <ul className="list-disc text-sm space-y-2 lg:px-9 pl-9 pr-2 text-gray-800 font-semibold">
            <li>Designed, developed, and maintained scalable web applications using React.js and Next.js, with a strong focus on responsive design and reusable UI components.</li>
            <li>Collaborated with cross-functional teams to implement new features, resolve bugs, and ensure seamless integration with back-end APIs.</li>
            <li>Optimized performance across multiple web applications by implementing frontend best practices, resulting in faster load times, improved responsiveness, and a user-friendly experience.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "April 2025 - May 2025",
      content: (
        <div className="flex flex-col gap-5 lg:w-[430px] lg:h-auto bg-gray-50 rounded-lg border-b-2 border-blue-700 pb-5 pt-5 px-3">
          <p className="text-gray-800 px-5 flex flex-col lg:text-2xl md:text-xl font-bold">
            Front-End Developer Intern
            <span className="font-semibold text-gray-500 lg:text-base md:text-sm">
              Globus Solution
            </span>
          </p>
          <ul className="list-disc text-sm space-y-2 lg:px-9 pl-9 pr-2 text-gray-800 font-semibold">
            <li>Collaborated with an international team to design, develop, and maintain scalable web applications, including an advanced admin dashboard, using React.js.</li>
            <li>Improved overall application performance by applying best practices in code structure, state management, and load time optimization.</li>
            <li>Integrated multiple third-party APIs to ensure seamless data flow, real-time updates, and enhanced functionality across different parts of the application.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <>
      <div id="experience" className="flex flex-col items-center justify-center lg:pt-24 pt-24 lg:mb-0 md:mb-0 mb-7">
        <MotionUp delay={0}>
          <h1 className="text-black font-bold lg:text-4xl text-2xl text-center">
            Experience{" "}
          </h1>
        </MotionUp>
        <MotionUp delay={0}>
          <p className="text-base font-semibold text-gray-500 mt-1">
            What I’ve Done So Far
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

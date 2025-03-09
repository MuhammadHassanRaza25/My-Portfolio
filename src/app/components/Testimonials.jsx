import { MotionUp } from "./ui/motion-up";
import { InfiniteMovingCards2 } from "./ui/infinite-moving-cards";

export default function Testimonials() {

  const testimonialsData = [
    {
      quote:
        "It was the best it was the age of wisdom, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Muhammad Obaid Raza",
      title: "Graphic Designer & Video Editor",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "AfaqDev",
      title: "Full Stack Developer",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "Muhammad Bilal",
      title: "Full Stack Developer",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center lg:pt-24 pt-24 lg:mb-0 mb-7">
        <MotionUp delay={0}>
          <h1 className="text-black font-bold lg:text-4xl text-2xl text-center">
            Testimonials{" "}
          </h1>
        </MotionUp>
        <MotionUp delay={0}>
          <p className="text-base font-semibold text-gray-500 mt-1">
            Few Nice Words
          </p>
        </MotionUp>
      </div>

      <div className="container flex items-center justify-center lg:mt-0 lg:px-0 px-5 mt-8 min-h-[350px]">
        <MotionUp delay={0.1}>
          <InfiniteMovingCards2
            items={testimonialsData}
            direction="right"
            speed="slow"
          />
        </MotionUp>
      </div>
    </>
  );
}

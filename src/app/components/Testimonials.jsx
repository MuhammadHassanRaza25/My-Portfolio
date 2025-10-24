import { MotionUp } from "./ui/motion-up";
import { InfiniteMovingCards2 } from "./ui/infinite-moving-cards";

export default function Testimonials() {
  const testimonialsData = [
    {
      quote:
        "Muhammad Hassan Raza brought my vision to life with a stunning portfolio website. It perfectly showcases my skills as a Graphic Designer & Video Editor and elevates my brand.",
      name: "Muhammad Obaid Raza",
      title: "Graphic Designer & Video Editor",
    },
    {
      quote:
        "Working with Muhammad Hassan Raza was a game-changer for our online presence. His expertise in frontend development resulted in cutting-edge solutions that truly stands out.",
      name: "Intergral Technologists",
      title: "CEO",
    },
    {
      quote:
        "Muhammad Hassan Raza consistently delivers high-performance full-stack solutions. His deep technical expertise and innovative problem-solving ensure seamless and efficient development.",
      name: "Muhammad Ahmed",
      title: "Full Stack Developer",
    },
    {
      quote:
        "A true expert in Full Stack development, Muhammad Hassan Raza delivers innovative, efficient results with unmatched speed and precision, ensuring exceptional outcomes every time.",
      name: "Bilal Ahmed",
      title: "Software Engineer",
    },
  ];

  return (
    <>
      <div id="testimonial" className="flex flex-col items-center justify-center lg:pt-24 pt-24 lg:mb-0 mb-7">
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

      <div className="container flex items-center justify-center pb-10 lg:mt-0 lg:px-0 px-5 mt-8 min-h-[380px]">
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

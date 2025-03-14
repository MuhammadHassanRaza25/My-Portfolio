import { MotionUp } from "./ui/motion-up";
import { InfiniteMovingCards2 } from "./ui/infinite-moving-cards";

export default function Testimonials() {
  const testimonialsData = [
    {
      quote:
        "Muhammad Hassan Raza brought my vision to life with a stunning, professional portfolio website. It highlights my skills as a Graphic Designer & Video Editor and elevates my brand in an impactful way.",
      name: "Muhammad Obaid Raza",
      title: "Graphic Designer & Video Editor",
    },
    {
      quote:
        "Muhammad Hassan Raza's exceptional problem-solving mindset and keen attention to detail ensure every challenge is met with the most efficient and effective solutions.",
      name: "AfaqDev",
      title: "Full Stack Developer",
    },
    {
      quote:
        "Consistently delivering high-performance full-stack solutions, Muhammad Hassan Raza combines deep technical expertise with innovative problem-solving to ensure seamless, efficient development.",
      name: "Muhammad Ahmed",
      title: "Full Stack Developer",
    },
    {
      quote:
        "Muahmmad Hassan Raza is a true expert in building top-tier Full Stack solutions, delivering innovative and highly efficient results. His unmatched speed and precision ensure exceptional outcomes every time.",
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

      <div className="container flex items-center justify-center lg:mt-0 lg:px-0 px-5 mt-8 min-h-[340px]">
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

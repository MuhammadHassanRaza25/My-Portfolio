import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { MotionUp } from "./ui/motion-up";

export default function Skills({ data }) {
  return (
    <>
      <div
        id="skills"
        className="flex flex-col items-center justify-center lg:pt-28 pt-32"
      >
        <MotionUp delay={0}>
          <h1 className="text-black font-bold lg:text-4xl text-2xl text-center">
            Skills{" "}
          </h1>
        </MotionUp>
        <MotionUp delay={0}>
          <p className="text-base font-semibold text-gray-500 mt-1">
            My Expertise
          </p>
        </MotionUp>
      </div>

      <div className="container lg:px-28 px-3 pt-10 min-h-[350px]">
        <MotionUp delay={0.2}>
          <InfiniteMovingCards items={data} direction="right" speed="normal" />
        </MotionUp>
      </div>
    </>
  );
}

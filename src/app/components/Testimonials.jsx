import { MotionUp } from "./ui/motion-up";

export default function Testimonials(){
   return(
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
    
    </>
   )
}
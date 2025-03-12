"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/app/lib/utils";
import { MotionUp } from "./ui/motion-up";
import { FaLocationArrow } from "react-icons/fa6";

export default function Contact() {
  return (
    <>
      <div
        id="contact"
        className="flex flex-col items-center justify-center lg:pt-24 pt-24 lg:mb-0 mb-7"
      >
        <MotionUp delay={0}>
          <h1 className="text-black font-bold lg:text-4xl text-2xl text-center">
            Get in Touch{" "}
          </h1>
        </MotionUp>
        <MotionUp delay={0}>
          <p className="text-base font-semibold text-gray-500 mt-1">
            Contact Me
          </p>
        </MotionUp>
      </div>

      <div className="container flex lg:mt-0 lg:px-20 px-5 mt-8 min-h-[400px]">
          <form className="bg-white px-5 py-10 rounded-lg flex flex-col justify-center my-8 w-[600px]">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="Name">Name</Label>
                <Input
                  className="bg-white"
                  id="Name"
                  placeholder="Enter your Name"
                  type="text"
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="Email">Email</Label>
                <Input
                  className="bg-white"
                  id="Email"
                  placeholder="Enter your Email"
                  type="text"
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="subject">Subject</Label>
              <Input
                className="bg-white"
                id="subject"
                placeholder="Want to develop a website"
                type="email"
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="message">Message</Label>
              <Input
                className="bg-white"
                id="message"
                placeholder="Your Message"
                type="textarea"
              />
            </LabelInputContainer>

            <button
              className="shadow-black hover:shadow-md animate-shimmer bg-[linear-gradient(110deg,#191919,45%,#1e2631,55%,#191919)] bg-[length:200%_100%] cursor-pointer flex items-center justify-center gap-2 text-white font-semibold lg:px-10 px-3 py-2 lg:text-lg sm:text-base rounded-md"
              type="submit"
            >
              Send Message <FaLocationArrow />
            </button>
          </form>
      </div>
    </>
  );
}

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

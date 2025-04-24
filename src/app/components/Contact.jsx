"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/app/lib/utils";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

export default function Contact() {
  return (
    <>
      <div
        id="contact"
        className="flex flex-col items-center justify-center lg:pt-24 pt-24 lg:mb-0 mb-7"
      >
        <h1 className="text-black font-bold lg:text-4xl text-2xl text-center">
          Get in Touch{" "}
        </h1>
        <p className="text-base font-semibold text-gray-500 mt-1">Contact Me</p>
      </div>

      <div className="container pb-14 flex lg:flex-row flex-col lg:gap-8 gap-0 lg:mt-0 lg:px-20 px-5 mt-8 lg:justify-start justify-center lg:items-start items-center">
        <form className="bg-white border border-gray-300 lg:mt-16 mt-6 lg:mb-12 mb-0 p-8 rounded-lg flex flex-col gap-1 justify-center lg:w-[650px] md:w-[650px] w-full">
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
            className="shadow-black mt-3 hover:shadow-md animate-shimmer bg-[linear-gradient(110deg,#191919,45%,#1e2631,55%,#191919)] bg-[length:200%_100%] cursor-pointer flex items-center justify-center gap-3 hover:gap-4 transition-all text-white font-semibold lg:px-10 px-2 py-2 lg:w-60 w-full lg:text-lg sm:text-base rounded-md"
            type="submit"
          >
            Send Message <IoMdSend className="text-xl" />
          </button>
        </form>

        <div className="flex flex-col justify-start gap-5 lg:w-[390px] md:w-[650px] w-full mt-16 mb-16">
          <div className="flex gap-5 justify-start items-center bg-white border border-gray-300 rounded-lg py-4 pl-7">
            <span className="bg-black text-white text-xl rounded-full p-2">
              <FaLocationDot />
            </span>
            <h1 className="text-md font-semibold">
              Address <br />{" "}
              <span className="font-normal">Karachi, Pakistan</span>{" "}
            </h1>
          </div>

          <div className="flex gap-5 justify-start items-center bg-white border border-gray-300 rounded-lg py-4 pl-7">
            <span className="bg-black text-white text-xl rounded-full p-2">
              <IoCallSharp />
            </span>
            <h1 className="text-md font-semibold">
              Phone <br /> <span className="font-normal">+92 3452796379</span>{" "}
            </h1>
          </div>

          <div className="flex gap-5 justify-start items-center bg-white border border-gray-300 rounded-lg py-4 pl-7">
            <span className="bg-black text-white text-xl rounded-full p-2">
              <MdEmail />
            </span>
            <h1 className="text-md font-semibold">
              Email <br />{" "}
              <span className="font-normal">hassanejaz773@gmail.com</span>{" "}
            </h1>
          </div>
        </div>
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

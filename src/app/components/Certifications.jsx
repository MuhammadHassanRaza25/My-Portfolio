"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Navigation, Autoplay, Pagination } from "swiper/modules";
import { MotionUp } from "./ui/motion-up";

const certifications = [
  { image: "/images/cisco1.png" },
  { image: "/images/hackerrank1.png" },
  { image: "/images/hackerrank2.png" },
  { image: "/images/webandappcertificate.png" },
  { image: "/images/cisco2.png" },
];

export default function Certifications() {
  return (
    <>
      <div
        id="certifications"
        className="flex flex-col items-center justify-center lg:mt-28 mt-24 pt-20"
      >
        <MotionUp delay={0}>
          <h1 className="text-black font-bold lg:text-4xl text-2xl text-center">
            Certifications{" "}
          </h1>
        </MotionUp>
        <MotionUp delay={0}>
          <p className="text-base font-semibold text-gray-500 mt-1">
            What I’ve Achieved
          </p>
        </MotionUp>
      </div>
      <div className="container lg:px-20 px-5 mt-12 pb-20">
        <MotionUp delay={0.1}>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            keyboard={{ enabled: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Keyboard, Navigation, Autoplay, Pagination]}
            className="mySwiper"
            navigation={true} 
            pagination={{ clickable: true }} 
          >
            {certifications.map((cert, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center">
                  <Image
                    src={cert.image}
                    alt="Certificate Image"
                    width={200}
                    height={200}
                    className="w-96 object-contain rounded-lg shadow-lg mb-4 border border-blue-700"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </MotionUp>
      </div>
    </>
  );
}

"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import { MotionUp } from "./ui/motion-up";

const certifications = [
    { image: "https://images.unsplash.com/photo-1557353480-5550a3da186d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm9ydGglMjBzdGFyfGVufDB8fDB8fHww" },
    { image: "https://images.unsplash.com/photo-1604608676190-5201ba9c90cb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdGlvbmFsJTIwZ2VvZ3JhcGhpY3xlbnwwfHwwfHx8MA%3D%3D" },
    { image: "https://images.unsplash.com/photo-1454982606560-be985251f5b4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8MTU4NjQyfHxlbnwwfHx8fHw%3D&fm=jpg&q=60&w=3000" },
];

export default function Certifications() {
    return (
        <>
            <div id="certifications" className="flex flex-col items-center justify-center lg:mt-28 mt-24 pt-20">
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
            <div className="container lg:px-20 px-5 mt-10 pb-20">
                <MotionUp delay={0.1}>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        keyboard={{ enabled: true }}
                        pagination={{ clickable: true }}
                        navigation={true}
                        modules={[Keyboard, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {certifications.map((cert, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col items-center">
                                    <Image
                                        src={cert.image}
                                        alt="Certificate Image"
                                        width={200}
                                        height={200}
                                        className="w-96 object-contain rounded-lg shadow-lg mb-4"
                                        unoptimized
                                    />
                                    <h3 className="text-xl font-semibold">{cert.title}</h3>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </MotionUp>
            </div>
        </>
    )
}         
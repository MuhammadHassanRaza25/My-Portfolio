"use client";

import { cn } from "@/app/lib/utils";
import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// swiper drag version
export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {

  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView="auto"
      spaceBetween={16}
      loop={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: direction !== "right",
        pauseOnMouseEnter: pauseOnHover,
      }}
      speed={3000}
      className={cn(
        "relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]",
        className
      )}
    >
      {items.map((item, idx) => (
        <SwiperSlide key={idx} className="!w-[170px] flex-shrink-0">
          <li
            className="w-[170px] max-w-full transition-all relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-4 py-6"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
            }}
          >
            <div className="flex flex-col items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-[70px] h-[70px] object-cover rounded-full p-1 mb-4 bg-white"
              />
              <span className="relative text-center z-20 text-lg text-gray-100 font-bold">
                {item.name}
              </span>
            </div>
          </li>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export const InfiniteMovingCards2 = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {

  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView="auto"
      spaceBetween={16}
      loop={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: direction !== "right",
        pauseOnMouseEnter: pauseOnHover,
      }}
      speed={8000}
      className={cn(
        "relative z-20 lg:max-w-5xl md:max-w-3xl max-w-80 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]",
        className
      )}
    >
      {items.map((item) => (
        <SwiperSlide key={item.name} className="!w-[350px] md:!w-[450px] flex-shrink-0">
          <li
            className="w-[350px] transition duration-200 max-w-full relative rounded-2xl border border-b-0 shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
            }}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-md leading-[1.6] text-gray-100 font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-md leading-[1.3] text-white font-semibold">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.3] text-gray-300 font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};


// manual drag version
// export const InfiniteMovingCards = ({
//   items,
//   direction = "left",
//   speed = "fast",
//   pauseOnHover = true,
//   className,
// }) => {
//   const containerRef = React.useRef(null);
//   const scrollerRef = React.useRef(null);

//   const [start, setStart] = React.useState(false);

//   // Drag state
//   const isDragging = React.useRef(false);
//   const startX = React.useRef(0);
//   const scrollLeft = React.useRef(0);

//   React.useEffect(() => {
//     addAnimation();
//   }, []);

//   function addAnimation() {
//     if (containerRef.current && scrollerRef.current) {
//       const scrollerContent = Array.from(scrollerRef.current.children);

//       scrollerContent.forEach((item) => {
//         const duplicatedItem = item.cloneNode(true);
//         if (scrollerRef.current) {
//           scrollerRef.current.appendChild(duplicatedItem);
//         }
//       });

//       getDirection();
//       getSpeed();
//       setStart(true);
//     }
//   }

//   const getDirection = () => {
//     if (containerRef.current) {
//       if (direction === "left") {
//         containerRef.current.style.setProperty("--animation-direction", "forwards");
//       } else {
//         containerRef.current.style.setProperty("--animation-direction", "reverse");
//       }
//     }
//   };

//   const getSpeed = () => {
//     if (containerRef.current) {
//       if (speed === "fast") {
//         containerRef.current.style.setProperty("--animation-duration", "20s");
//       } else if (speed === "normal") {
//         containerRef.current.style.setProperty("--animation-duration", "40s");
//       } else {
//         containerRef.current.style.setProperty("--animation-duration", "80s");
//       }
//     }
//   };

//   // Drag handlers
//   const onDragStart = (e) => {
//     isDragging.current = true;
//     startX.current = e.pageX || e.touches[0].pageX;
//     scrollLeft.current = containerRef.current.scrollLeft;

//     // Pause animation
//     containerRef.current.style.animationPlayState = "paused";
//   };

//   const onDragMove = (e) => {
//     if (!isDragging.current) return;
//     e.preventDefault();
//     const x = e.pageX || e.touches[0].pageX;
//     const walk = (startX.current - x) * 1;
//     containerRef.current.scrollLeft = scrollLeft.current + walk;
//   };

//   const onDragEnd = () => {
//     if (!isDragging.current) return;
//     isDragging.current = false;

//     // Resume animation
//     containerRef.current.style.animationPlayState = "running";
//   };

//   return (
//     <div
//       ref={containerRef}
//       className={cn(
//         "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]",
//         className
//       )}
//       onMouseDown={onDragStart}
//       onMouseMove={onDragMove}
//       onMouseLeave={onDragEnd}
//       onMouseUp={onDragEnd}
//       onTouchStart={onDragStart}
//       onTouchMove={onDragMove}
//       onTouchEnd={onDragEnd}
//     >
//       <ul
//         ref={scrollerRef}
//         className={cn(
//           "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
//           start && "animate-scroll",
//           pauseOnHover && "hover:[animation-play-state:paused]"
//         )}
//       >
//         {items.map((item, idx) => (
//           <li
//             className="w-[170px] max-w-full transition-all hover:-translate-y-2 relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-4 py-6"
//             style={{
//               background:
//                 "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
//             }}
//             key={idx}
//           >
//             <div className="flex flex-col items-center">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-[70px] h-[70px] object-cover rounded-full p-1 mb-4 bg-white"
//               />
//               <span className="relative text-center z-20 text-lg text-gray-100 font-bold">
//                 {item.name}
//               </span>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export const InfiniteMovingCards2 = ({
//   items,
//   direction = "left",
//   speed = "fast",
//   pauseOnHover = true,
//   className,
// }) => {
//   const containerRef = useRef(null);
//   const scrollerRef = useRef(null);
//   const [start, setStart] = useState(false);

//   // Drag state
//   const isDragging = useRef(false);
//   const startX = useRef(0);
//   const scrollLeft = useRef(0);

//   useEffect(() => {
//     addAnimation();
//   }, []);

//   function addAnimation() {
//     if (containerRef.current && scrollerRef.current) {
//       const scrollerContent = Array.from(scrollerRef.current.children);

//       scrollerContent.forEach((item) => {
//         const duplicatedItem = item.cloneNode(true);
//         if (scrollerRef.current) {
//           scrollerRef.current.appendChild(duplicatedItem);
//         }
//       });

//       getDirection();
//       getSpeed();
//       setStart(true);
//     }
//   }

//   const getDirection = () => {
//     if (containerRef.current) {
//       if (direction === "left") {
//         containerRef.current.style.setProperty("--animation-direction", "forwards");
//       } else {
//         containerRef.current.style.setProperty("--animation-direction", "reverse");
//       }
//     }
//   };

//   const getSpeed = () => {
//     if (containerRef.current) {
//       if (speed === "fast") {
//         containerRef.current.style.setProperty("--animation-duration", "20s");
//       } else if (speed === "normal") {
//         containerRef.current.style.setProperty("--animation-duration", "40s");
//       } else {
//         containerRef.current.style.setProperty("--animation-duration", "80s");
//       }
//     }
//   };

//   // Drag handlers
//   const onDragStart = (e) => {
//     isDragging.current = true;
//     startX.current = e.pageX || e.touches[0].pageX;
//     scrollLeft.current = containerRef.current.scrollLeft;

//     // Pause animation
//     containerRef.current.style.animationPlayState = "paused";
//   };

//   const onDragMove = (e) => {
//     if (!isDragging.current) return;
//     e.preventDefault();
//     const x = e.pageX || e.touches[0].pageX;
//     const walk = (startX.current - x) * 1; // scroll speed factor
//     containerRef.current.scrollLeft = scrollLeft.current + walk;
//   };

//   const onDragEnd = () => {
//     if (!isDragging.current) return;
//     isDragging.current = false;

//     // Resume animation
//     containerRef.current.style.animationPlayState = "running";
//   };

//   return (
//     <div
//       ref={containerRef}
//       className={cn(
//         "scroller relative z-20 lg:max-w-5xl md:max-w-3xl max-w-80 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]",
//         className
//       )}
//       onMouseDown={onDragStart}
//       onMouseMove={onDragMove}
//       onMouseLeave={onDragEnd}
//       onMouseUp={onDragEnd}
//       onTouchStart={onDragStart}
//       onTouchMove={onDragMove}
//       onTouchEnd={onDragEnd}
//     >
//       <ul
//         ref={scrollerRef}
//         className={cn(
//           "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
//           start && "animate-scroll",
//           pauseOnHover && "hover:[animation-play-state:paused]"
//         )}
//       >
//         {items.map((item) => (
//           <li
//             className="w-[350px] transition duration-200 hover:scale-[1.03] hover:-translate-y-0.5 max-w-full relative rounded-2xl border border-b-0 shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
//             style={{
//               background:
//                 "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
//             }}
//             key={item.name}
//           >
//             <blockquote>
//               <div
//                 aria-hidden="true"
//                 className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
//               ></div>
//               <span className="relative z-20 text-md leading-[1.6] text-gray-100 font-normal">
//                 {item.quote}
//               </span>

//               <div className="relative z-20 mt-6 flex flex-row items-center">
//                 <span className="flex flex-col gap-1">
//                   <span className="text-md leading-[1.3] text-white font-semibold">
//                     {item.name}
//                   </span>
//                   <span className="text-sm leading-[1.3] text-gray-300 font-normal">
//                     {item.title}
//                   </span>
//                 </span>
//               </div>
//             </blockquote>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// normal version
// export const InfiniteMovingCards = ({
//   items,
//   direction = "left",
//   speed = "fast",
//   pauseOnHover = true,
//   className,
// }) => {
//   const containerRef = React.useRef(null);
//   const scrollerRef = React.useRef(null);

//   useEffect(() => {
//     addAnimation();
//   }, []);
//   const [start, setStart] = useState(false);
//   function addAnimation() {
//     if (containerRef.current && scrollerRef.current) {
//       const scrollerContent = Array.from(scrollerRef.current.children);

//       scrollerContent.forEach((item) => {
//         const duplicatedItem = item.cloneNode(true);
//         if (scrollerRef.current) {
//           scrollerRef.current.appendChild(duplicatedItem);
//         }
//       });

//       getDirection();
//       getSpeed();
//       setStart(true);
//     }
//   }
//   const getDirection = () => {
//     if (containerRef.current) {
//       if (direction === "left") {
//         containerRef.current.style.setProperty(
//           "--animation-direction",
//           "forwards"
//         );
//       } else {
//         containerRef.current.style.setProperty(
//           "--animation-direction",
//           "reverse"
//         );
//       }
//     }
//   };
//   const getSpeed = () => {
//     if (containerRef.current) {
//       if (speed === "fast") {
//         containerRef.current.style.setProperty("--animation-duration", "20s");
//       } else if (speed === "normal") {
//         containerRef.current.style.setProperty("--animation-duration", "40s");
//       } else {
//         containerRef.current.style.setProperty("--animation-duration", "80s");
//       }
//     }
//   };
//   return (
//     <div
//       ref={containerRef}
//       className={cn(
//         "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]",
//         className
//       )}
//     >
//       {/* <ul
//         ref={scrollerRef}
//         className={cn(
//           " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
//           start && "animate-scroll ",
//           pauseOnHover && "hover:[animation-play-state:paused]"
//         )}>
//         {items.map((item, idx) => (
//           <li
//             className="w-[300px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
//             style={{
//               background:
//                 "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
//             }}
//             key={'item.name'}>
//             <blockquote>
//               <div
//                 aria-hidden="true"
//                 className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"></div>
//               <span
//                 className=" relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
//                 {item.quote}
//               </span>
//             </blockquote>
//           </li>
//         ))}
//       </ul> */}
//       <ul
//         ref={scrollerRef}
//         className={cn(
//           "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
//           start && "animate-scroll ",
//           pauseOnHover && "hover:[animation-play-state:paused]"
//         )}
//       >
//         {items.map((item, idx) => (
//           <li
//             className="w-[170px] max-w-full transition-all hover:-translate-y-2 relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-4 py-6"
//             style={{
//               background:
//                 "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
//             }}
//             key={idx}
//           >
//             <div className="flex flex-col items-center">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-[70px] h-[70px] object-cover rounded-full p-1 mb-4 bg-white"
//               />
//               <span className="relative text-center z-20 text-lg text-gray-100 font-bold">
//                 {item.name}
//               </span>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export const InfiniteMovingCards2 = ({
//   items,
//   direction = "left",
//   speed = "fast",
//   pauseOnHover = true,
//   className,
// }) => {
//   const containerRef = React.useRef(null);
//   const scrollerRef = React.useRef(null);

//   useEffect(() => {
//     addAnimation();
//   }, []);
//   const [start, setStart] = useState(false);

//   function addAnimation() {
//     if (containerRef.current && scrollerRef.current) {
//       const scrollerContent = Array.from(scrollerRef.current.children);

//       scrollerContent.forEach((item) => {
//         const duplicatedItem = item.cloneNode(true);
//         if (scrollerRef.current) {
//           scrollerRef.current.appendChild(duplicatedItem);
//         }
//       });

//       getDirection();
//       getSpeed();
//       setStart(true);
//     }
//   }

//   const getDirection = () => {
//     if (containerRef.current) {
//       if (direction === "left") {
//         containerRef.current.style.setProperty(
//           "--animation-direction",
//           "forwards"
//         );
//       } else {
//         containerRef.current.style.setProperty(
//           "--animation-direction",
//           "reverse"
//         );
//       }
//     }
//   };

//   const getSpeed = () => {
//     if (containerRef.current) {
//       if (speed === "fast") {
//         containerRef.current.style.setProperty("--animation-duration", "20s");
//       } else if (speed === "normal") {
//         containerRef.current.style.setProperty("--animation-duration", "40s");
//       } else {
//         containerRef.current.style.setProperty("--animation-duration", "80s");
//       }
//     }
//   };

//   return (
//     <div
//       ref={containerRef}
//       className={cn(
//         "scroller relative z-20 lg:max-w-5xl md:max-w-3xl max-w-80 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]",
//         className
//       )}
//     >
//       <ul
//         ref={scrollerRef}
//         className={cn(
//           "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
//           start && "animate-scroll ",
//           pauseOnHover && "hover:[animation-play-state:paused]"
//         )}
//       >
//         {items.map((item, idx) => (
//           <li
//             className="w-[350px] transition duration-200 hover:scale-[1.03] hover:-translate-y-0.5 max-w-full relative rounded-2xl border border-b-0 shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
//             style={{
//               background:
//                 "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
//             }}
//             key={item.name}
//           >
//             <blockquote>
//               <div
//                 aria-hidden="true"
//                 className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
//               ></div>
//               <span className="relative z-20 text-md leading-[1.6] text-gray-100 font-normal">
//                 {item.quote}
//               </span>

//               <div className="relative z-20 mt-6 flex flex-row items-center">
//                 <span className="flex flex-col gap-1">
//                   <span className="text-md leading-[1.3] text-white font-semibold">
//                     {item.name}
//                   </span>
//                   <span className="text-sm leading-[1.3] text-gray-300 font-normal">
//                     {item.title}
//                   </span>
//                 </span>
//               </div>
//             </blockquote>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
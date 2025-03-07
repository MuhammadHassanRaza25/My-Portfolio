import { MotionUp } from "./ui/motion-up";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
// import Link from "next/link";
import Image from "next/image";
// import lmsimg1 from "../assets/images/lmsimg1.png"
import lmsimg2 from "../assets/images/lmsimg2.png";
// import lmsimg3 from "../assets/images/lmsimg3.png"
// import lmsimg4 from "../assets/images/lmsimg4.png"
import ecommerceimg1 from "../assets/images/ecommerceimg1.png";
// import ecommerceimg2 from "../assets/images/ecommerceimg2.png"
// import ecommerceimg3 from "../assets/images/ecommerceimg3.png"
// import ecommerceimg5 from "../assets/images/ecommerceimg5.png"
import webglowingimg1 from "../assets/images/webglowingimg1.png";
import { FaArrowRight } from "react-icons/fa6";
import { CgMoreO } from "react-icons/cg";
import Link from "next/link";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../components/ui/animated-modal";
import { FaEye } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export default function Projects() {
  const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center lg:pt-24 pt-24 lg:mb-0 mb-7">
        <MotionUp delay={0}>
          <h1 className="text-black font-bold lg:text-4xl text-2xl text-center">
            Project Overview{" "}
          </h1>
        </MotionUp>
        <MotionUp delay={0}>
          <p className="text-base font-semibold text-gray-500 mt-1">
            Explore My Work
          </p>
        </MotionUp>
      </div>

      <div
        id="projects"
        className="container flex lg:px-14 px-5 mt-3 lg:flex-row flex-col items-center justify-evenly"
      >
        <MotionUp delay={0.1}>
          <CardContainer className="inter-var w-full my-4 flex items-stretch">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] min-h-[400px] h-full rounded-xl p-4 border">
              <CardItem translateZ="70" className="w-full">
                <Image
                  src={lmsimg2}
                  height="1000"
                  width="1000"
                  className="border border-gray-300 h-48 w-full rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <CardItem
                translateZ="50"
                className="mt-4 text-xl font-bold text-neutral-600 dark:text-white"
              >
                Learning Management System
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 h-[80px] text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Hover over this card to unleash the power of CSS perspective
                Hover over this card to unleash the power of CSS perspective
                Hover over this card to unleash the power of CSS perspective...
              </CardItem>
              <div className="flex justify-between items-center gap-5 mt-5">
                <Link
                  href={"https://saylani-management-system.vercel.app/"}
                  target={"_blank"}
                >
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="flex cursor-pointer bg-black text-white items-center gap-2 pl-1 px-7 py-2 rounded-lg dark:bg-white dark:text-black text-xs font-bold"
                  >
                    Live Demo <FaArrowRight />
                  </CardItem>
                </Link>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="flex items-center gap-2 px-7 py-2 rounded-lg bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Read More <CgMoreO />
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </MotionUp>

        {/* like profolio */}
        {/* <div className="py-40  flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Book your flight
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            ✈️
          </div>
        </ModalTrigger>
        <ModalBody className="!max-w-[700px]">
        <ModalContent className="mt-5">
            <div className="mb-5 flex items-center flex-wrap gap-x-5 gap-y-2">
  
                <h1 className="text-xl font-semibold text-blue-100">
                    My Hardcoded Title
                </h1>
                <div className="flex gap-4 items-center">

                    <Link
                        href="https://example.com"  // replace with your actual live URL
                        target="_blank"
                        className="flex justify-center items-center text-purple"
                    >
                        <FaEye className="me-1" />
                        <span className="text-[15px]">Check Live Site</span>
                    </Link>
                    <Link
                        href="https://github.com/example"  // replace with your actual git URL
                        target="_blank"
                        className="flex justify-center items-center text-purple"
                    >
                        <FaGithub className="me-1" />
                        <span className="relative top-[1px] text-[15px]">
                            Get code
                        </span>
                    </Link>
                </div>
            </div>
            <div className="border border-gray-700 border-opacity-75 p-4 rounded-lg mb-5">
             
                <p className="leading-relaxed text-sm text-blue-100">
                    This is a hardcoded description of the project. Replace it with your own content.
                </p>
            </div>
            <div className="flex flex-wrap gap-3 mb-5">
              
                <p className="bg-slate-800/50  px-5 py-2 text-sm text-blue-100 rounded-sm">
                    React
                </p>
                <p className="bg-slate-800/50  px-5 py-2 text-sm text-blue-100 rounded-sm">
                    Tailwind CSS
                </p>
                <p className="bg-slate-800/50  px-5 py-2 text-sm text-blue-100 rounded-sm">
                    Node.js
                </p>
            </div>
            <div className="flex flex-wrap gap-x-2 gap-y-5 mb-5">
            
                <Link
                    className="w-full sm:w-[49%]"
                    href="https://unsplash.com/photos/8l8zZy8mToE"
                    target="_blank"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68"  // Unsplash image
                        alt="Project image"
                        height={500}
                        width={500}
                        className="rounded-lg w-full max-h-48 cursor-pointer aspect-video object-contain"
                    />
                </Link>
                <Link
                    className="w-full sm:w-[49%]"
                    href="https://unsplash.com/photos/ugkW-b_rfjA"
                    target="_blank"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1600729397215-66bff20b7460"  // Another Unsplash image
                        alt="Project image"
                        height={500}
                        width={500}
                        className="rounded-lg w-full max-h-48 cursor-pointer aspect-video object-contain"
                    />
                </Link>
            </div>
        </ModalContent>
    </ModalBody>
      </Modal>
    </div> */}

        {/* like aceternity */}
        {/* <div className="py-40  flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Book your flight
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            ✈️
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Book your trip to{" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                Bali
              </span>{" "}
              now! ✈️
            </h4>
            <div className="flex justify-center items-center">
              {images.map((image, idx) => (
                <div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={image}
                    alt="bali images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                  />
                </div>
              ))}
            </div>
            <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
              <div className="flex  items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  5 connecting flights
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  12 hotels
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  69 visiting spots
                </span>
              </div>
              <div className="flex  items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Good food everyday
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Open Mic
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Paragliding
                </span>
              </div>
            </div>
          </ModalContent>
          <ModalFooter className="gap-4">
            <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Cancel
            </button>
            <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
              Book Now
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div> */}

        <MotionUp delay={0.2}>
          <CardContainer className="inter-var w-full my-4 flex items-stretch">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] min-h-[400px] h-full rounded-xl p-4 border">
              <CardItem translateZ="70" className="w-full">
                <Image
                  src={ecommerceimg1}
                  height="1000"
                  width="1000"
                  className="border border-gray-300 h-48 w-full rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <CardItem
                translateZ="50"
                className="mt-4 text-xl font-bold text-neutral-600 dark:text-white"
              >
                E-Commerce Website
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 h-[80px] text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Explore my E-commerce website built with ReactJS & Firebase!
                Features include Google Authentication, Add to Cart, Delete
                items from the Cart, search products, select categories, ....
                {/* Explore my E-commerce website built with ReactJS & Firebase! Features include Google Authentication, Add to Cart, Delete items from the Cart, search products, select categories, Add & Delete products from Admin Dashboard, and easy checkout. Enjoy your shopping experience, designed for seamless performance and customer satisfaction. */}
              </CardItem>
              <div className="flex justify-between items-center gap-5 mt-5">
                <Link
                  href={"https://hassanonlinestore.vercel.app/"}
                  target={"_blank"}
                >
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="flex cursor-pointer bg-black text-white items-center gap-2 pl-1 px-7 py-2 rounded-lg dark:bg-white dark:text-black text-xs font-bold"
                  >
                    Live Demo <FaArrowRight />
                  </CardItem>
                </Link>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="flex items-center gap-2 px-7 py-2 rounded-lg bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Read More <CgMoreO />
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </MotionUp>

        <MotionUp delay={0.3}>
          <CardContainer className="inter-var w-full my-4 flex items-stretch">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] min-h-[400px] h-full rounded-xl p-4 border">
              <CardItem translateZ="70" className="w-full">
                <Image
                  src={webglowingimg1}
                  height="1000"
                  width="1000"
                  className="border border-gray-300 h-48 w-full rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <CardItem
                translateZ="50"
                className="mt-4 text-xl font-bold text-neutral-600 dark:text-white"
              >
                Web Glowing
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 h-[80px] text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Web Glowing offers a collection of essential design tools for
                web developers, including Box Shadow Generator, Text Shadow
                Generator, CSS Cursor, QR Code Generator, Text to Speech, ....
                {/* Web Glowing offers a collection of essential design tools for web developers, including Box Shadow Generator, Text Shadow Generator, CSS Cursor, QR Code Generator, Text to Speech, Gradient Color Generator, Border Radius Generator, and Border Generator. These tools are crafted to enhance productivity and streamline the design process for websites, helping developers at all skill levels create stunning, user-friendly designs with ease. */}
              </CardItem>
              <div className="flex justify-between items-center gap-5 mt-5">
                <Link href={"https://webglowing.com/"} target={"_blank"}>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="flex cursor-pointer bg-black text-white items-center gap-2 pl-1 px-7 py-2 rounded-lg dark:bg-white dark:text-black text-xs font-bold"
                  >
                    Live Demo <FaArrowRight />
                  </CardItem>
                </Link>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="flex items-center gap-2 px-7 py-2 rounded-lg bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Read More <CgMoreO />
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </MotionUp>
      </div>
    </>
  );
}

import { MotionUp } from "./ui/motion-up";
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

export default function Projects() {
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
                <Link href={"https://saylani-management-system.vercel.app/"} target={"_blank"}>
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
                <Link href={"https://hassanonlinestore.vercel.app/"} target={"_blank"}>
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
                Web Glowing offers a collection of essential design tools for web developers, including Box Shadow Generator, Text Shadow Generator, CSS Cursor, QR Code Generator, Text to Speech, ....
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

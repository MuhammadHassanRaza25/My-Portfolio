import { MotionUp } from "../../../src/app/components/ui/motion-up";
import { CardBody, CardContainer, CardItem } from "../../../src/app/components/ui/3d-card";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { CgMoreO } from "react-icons/cg";
import Link from "next/link";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "../../../src/app/components/ui/animated-modal";
import { FaEye } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const lmsimg1 = "/images/projects/lmsimg1.png";
const lmsimg2 = "/images/projects/lmsimg2.png";
const lmsimg3 = "/images/projects/lmsimg3.png";
const lmsimg4 = "/images/projects/lmsimg4.png";
const ecommerceimg1 = "/images/projects/ecommerceimg1.png";
const ecommerceimg2 = "/images/projects/ecommerceimg2.png";
const ecommerceimg3 = "/images/projects/ecommerceimg3.png";
const ecommerceimg4 = "/images/projects/ecommerceimg4.png";
const ecommerceimg5 = "/images/projects/ecommerceimg5.png";
const ecommerceimg6 = "/images/projects/ecommerceimg6.png";
const designagency = "/images/projects/designagency.png";
const agencyimg1 = "/images/projects/agencyimg1.png";
const agencyimg2 = "/images/projects/agencyimg2.png";
const agencyimg3 = "/images/projects/agencyimg3.png";
const agencyimg4 = "/images/projects/agencyimg4.png";
const quotesimg1 = "/images/projects/quotesimg1.png"
const quotesimg2 = "/images/projects/quotesimg2.png"
const quotesimg3 = "/images/projects/quotesimg3.png"
const quotesimg4 = "/images/projects/quotesimg4.png"
const comingsoon = "/images/projects/comingsoon.avif";
const weatherimg1 = "/images/projects/weatherimg1.png";
const weatherimg2 = "/images/projects/weatherimg2.png";

export default function Projects() {
  return (
    <>
      <div
        id="projects"
        className="flex flex-col items-center justify-center lg:pt-24 pt-24 lg:mb-0 mb-7"
      >
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

      {/* Container 1 */}
      <div className="container flex lg:px-14 px-5 mt-8 lg:flex-row flex-col items-center justify-evenly min-h-[400px]">
        {/* Card 1 */}
        <Modal>
          <MotionUp delay={0.1}>
            <CardContainer className="inter-var w-full my-4 flex items-stretch">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] min-h-[400px] h-full rounded-xl p-4 border">
                <CardItem translateZ="70" className="w-full">
                  <Image
                    src={comingsoon}
                    height="1000"
                    width="1000"
                    className="border border-gray-300 h-48 w-full rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="mt-4 text-xl font-bold text-black dark:text-white"
                >
                  GlassyBlog
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-700 h-[80px] text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Coming Soon ....
                </CardItem>
                <div className="flex justify-between items-center gap-5 mt-5">
                  <Link href={""} target={"_blank"}>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="flex cursor-pointer bg-black text-white items-center gap-2 pl-1 px-7 py-2.5 rounded-lg dark:bg-white dark:text-black text-xs font-bold"
                    >
                      Live Demo <FaArrowRight />
                    </CardItem>
                  </Link>
                  <ModalTrigger>
                    <div
                      translateZ={20}
                      as="button"
                      className="flex items-center gap-2 px-7 py-2.5 rounded-lg bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Read More <CgMoreO />
                    </div>
                  </ModalTrigger>
                </div>
              </CardBody>
            </CardContainer>
          </MotionUp>
          <ModalBody className="scrollHide !max-w-[700px] border-2 overflow-scroll">
            <ModalContent className="mt-5">
              <div className="mb-5 pr-1 flex justify-between items-center flex-wrap gap-x-5 gap-y-2">
                <h1 className="text-xl font-bold text-black dark:text-white">GlassyBlog</h1>
                <div className="flex gap-4 items-center">
                  <Link
                    href=""
                    target="_blank"
                    className="flex justify-center items-center"
                  >
                    <FaEye className="me-1 text-blue-700" />
                    <span className="text-[15px] font-semibold text-blue-700">
                      Check Live Site
                    </span>
                  </Link>
                  <Link
                    href="https://github.com/MuhammadHassanRaza25/Blog-App-NextJS"
                    target="_blank"
                    className="flex justify-center items-center"
                  >
                    <FaGithub className="me-1 text-blue-700" />
                    <span className="relative top-[1px] text-[15px] font-semibold text-blue-700">
                      Get code
                    </span>
                  </Link>
                </div>
              </div>
              <div className="border border-gray-300 p-4 rounded-lg mb-5">
                <p className="leading-relaxed text-sm text-neutral-700 dark:text-neutral-300 font-semibold">
                  Coming soon.....
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-5">
                <p className="px-5 py-2 text-sm bg-gray-800 text-white font-semibold rounded-md">
                  Next.js
                </p>
                <p className="px-5 py-2 text-sm bg-gray-800 text-white font-semibold rounded-md">
                  Next.js API Routes (Backend)
                </p>
                <p className="px-5 py-2 text-sm bg-gray-800 text-white font-semibold rounded-md">
                  Next.js Server Actions
                </p>
                <p className="px-5 py-2 text-sm bg-gray-800 text-white font-semibold rounded-md">
                  Tailwind CSS
                </p>
                <p className="px-5 py-2 text-sm bg-gray-800 text-white font-semibold rounded-md">
                  TanStack Query
                </p>  
                <p className="px-5 py-2 text-sm bg-gray-800 text-white font-semibold rounded-md">
                  JWT Authentication
                </p>
                <p className="px-5 py-2 text-sm bg-gray-800 text-white font-semibold rounded-md">
                  Bcrypt 
                </p>
                 <p className="px-5 py-2 text-sm bg-gray-800 text-white font-semibold rounded-md">
                  Joi
                </p>
                <p className="px-5 py-2 text-sm bg-gray-800 text-white font-semibold rounded-md">
                  Cloudinary
                </p>
                <p className="px-5 py-2 text-sm bg-gray-800 text-white font-semibold rounded-md">
                  MongoDB
                </p>
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-4 mb-5">
                <div className="w-full sm:w-[49%]">
                  <Image
                    src={comingsoon}
                    alt="Project image"
                    height={500}
                    width={500}
                    className="border border-gray-300 rounded-lg w-full max-h-48 cursor-pointer aspect-video object-contain"
                  />
                </div>
                <div className="w-full sm:w-[49%]">
                  <Image
                    src={comingsoon}
                    alt="Project image"
                    height={500}
                    width={500}
                    className="border border-gray-300 rounded-lg w-full max-h-48 cursor-pointer aspect-video object-contain"
                  />
                </div>
              </div>
            </ModalContent>
          </ModalBody>
        </Modal>

        {/* Card 2 */}
        <Modal>
          <MotionUp delay={0.2}>
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
                  className="mt-4 text-xl font-bold text-black dark:text-white"
                >
                  Learning Management System
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-700 h-[80px] text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  This Learning Management System is developed to streamline the
                  management and delivery of educational content, offering three
                  distinct user flows: Admin, Teacher, and Student ...
                </CardItem>
                <div className="flex justify-between items-center gap-5 mt-5">
                  <Link
                    href={""}
                    target={"_blank"}
                  >
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="flex cursor-pointer bg-black text-white items-center gap-2 pl-1 px-7 py-2.5 rounded-lg dark:bg-white dark:text-black text-xs font-bold"
                    >
                      Live Demo <FaArrowRight />
                    </CardItem>
                  </Link>
                  <ModalTrigger>
                    <div
                      translateZ={20}
                      as="button"
                      className="flex items-center gap-2 px-7 py-2.5 rounded-lg bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Read More <CgMoreO />
                    </div>
                  </ModalTrigger>
                </div>
              </CardBody>
            </CardContainer>
          </MotionUp>
          <ModalBody className="scrollHide !max-w-[700px] border-2 overflow-scroll">
            <ModalContent className="mt-5">
              <div className="mb-5 pr-1 flex justify-between items-center flex-wrap gap-x-5 gap-y-2">
                <h1 className="text-xl font-bold text-black dark:text-white">
                  Learning Management System
                </h1>
                <div className="flex gap-4 items-center">
                  <Link
                    href=""
                    target="_blank"
                    className="flex justify-center items-center"
                  >
                    <FaEye className="me-1 text-blue-700" />
                    <span className="text-[15px] font-semibold text-blue-700">
                      Check Live Site
                    </span>
                  </Link>
                  <Link
                    href=""
                    target="_blank"
                    className="flex justify-center items-center"
                  >
                    <FaGithub className="me-1 text-blue-700" />
                    <span className="relative top-[1px] text-[15px] font-semibold text-blue-700">
                      Get code
                    </span>
                  </Link>
                </div>
              </div>
              <div className="border border-gray-300 p-4 rounded-lg mb-5">
                <p className="leading-relaxed text-sm text-neutral-700 dark:text-neutral-300 font-semibold">
                  This Learning Management System is developed to streamline the
                  management and delivery of educational content, offering three
                  distinct user flows: Admin, Teacher, and Student. Admins have
                  full control over user management and course creation.
                  Teachers can manage courses, create quizzes, assign and grade
                  assignments, and engage with students. Students can enroll in
                  courses, take quizzes, submit assignments, and track their
                  progress. This system enhances educational content management and ensures seamless interaction among all users.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-5">
                <p className="px-5 py-2 text-sm bg-gray-800 text-white font-semibold rounded-md">
                  React.js
                </p>
                <p className="px-5 py-2 text-sm bg-gray-800 text-white font-semibold rounded-md">
                  Node.js
                </p>
                <p className="px-5 py-2 text-sm bg-gray-800 text-white font-semibold rounded-md">
                  Express.js
                </p>
                <p className="px-5 py-2 text-sm bg-gray-800 text-white font-semibold rounded-md">
                  MongoDB
                </p>
                <p className="px-5 py-2 text-sm bg-gray-800 text-white font-semibold rounded-md">
                  Tailwind CSS
                </p>
                <p className="px-5 py-2 text-sm bg-gray-800 text-white font-semibold rounded-md">
                  Shadcn
                </p>
                <p className="px-5 py-2 text-sm bg-gray-800 text-white font-semibold rounded-md">
                  Ant Design
                </p>
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-4 mb-5">
                <div className="w-full sm:w-[49%]">
                  <Image
                    src={lmsimg1}
                    alt="Project image"
                    height={500}
                    width={500}
                    className="border border-gray-300 rounded-lg w-full max-h-48 cursor-pointer aspect-video object-contain"
                  />
                </div>
                <div className="w-full sm:w-[49%]">
                  <Image
                    src={lmsimg2}
                    alt="Project image"
                    height={500}
                    width={500}
                    className="border border-gray-300 rounded-lg w-full max-h-48 cursor-pointer aspect-video object-contain"
                  />
                </div>

                <div className="w-full sm:w-[49%]">
                  <Image
                    src={lmsimg3}
                    alt="Project image"
                    height={500}
                    width={500}
                    className="border border-gray-300 rounded-lg w-full max-h-48 cursor-pointer aspect-video object-contain"
                  />
                </div>

                <div className="w-full sm:w-[49%]">
                  <Image
                    src={lmsimg4}
                    alt="Project image"
                    height={500}
                    width={500}
                    className="border border-gray-300 rounded-lg w-full max-h-48 cursor-pointer aspect-video object-contain"
                  />
                </div>
              </div>
            </ModalContent>
          </ModalBody>
        </Modal>

        {/* Card 3 */}
        <Modal>
          <MotionUp delay={0.3}>
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
                  className="mt-4 text-xl font-bold text-black dark:text-white"
                >
                  E-Commerce Website
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-700 h-[80px] text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  I developed a fully responsive e-commerce website using ReactJS, Tailwind CSS, Firebase, and Ant Design. It features Google Authentication, seamless cart management ...
                </CardItem>
                <div className="flex justify-between items-center gap-5 mt-5">
                  <Link
                    href={"https://hassanonlinestore.vercel.app/"}
                    target={"_blank"}
                  >
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="flex cursor-pointer bg-black text-white items-center gap-2 pl-1 px-7 py-2.5 rounded-lg dark:bg-white dark:text-black text-xs font-bold"
                    >
                      Live Demo <FaArrowRight />
                    </CardItem>
                  </Link>
                  <ModalTrigger>
                    <div
                      translateZ={20}
                      as="button"
                      className="flex items-center gap-2 px-7 py-2.5 rounded-lg bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Read More <CgMoreO />
                    </div>
                  </ModalTrigger>
                </div>
              </CardBody>
            </CardContainer>
          </MotionUp>
          <ModalBody className="scrollHide !max-w-[700px] border-2 overflow-scroll">
            <ModalContent className="mt-5">
              <div className="mb-5 pr-1 flex justify-between items-center flex-wrap gap-x-5 gap-y-2">
                <h1 className="text-xl font-bold text-black dark:text-white">
                  E-Commerce Website
                </h1>
                <div className="flex gap-4 items-center">
                  <Link
                    href="https://hassanonlinestore.vercel.app/"
                    target="_blank"
                    className="flex justify-center items-center"
                  >
                    <FaEye className="me-1 text-blue-700" />
                    <span className="text-[15px] font-semibold text-blue-700">
                      Check Live Site
                    </span>
                  </Link>
                  <Link
                    href="https://github.com/MuhammadHassanRaza25/E-commerce-Website-React"
                    target="_blank"
                    className="flex justify-center items-center"
                  >
                    <FaGithub className="me-1 text-blue-700" />
                    <span className="relative top-[1px] text-[15px] font-semibold text-blue-700">
                      Get code
                    </span>
                  </Link>
                </div>
              </div>
              <div className="border border-gray-300 p-4 rounded-lg mb-5">
                <p className="leading-relaxed text-sm text-neutral-700 dark:text-neutral-300 font-semibold">
                   I developed a fully responsive e-commerce website using ReactJS, Tailwind CSS, Firebase, and Ant Design. It features Google Authentication, seamless cart management, product search with category filters, and a fully functional Admin Dashboard. I implemented Context API for authentication and cart management, ensuring seamless state handling, optimized performance, and a smooth checkout experience across the site.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-5">
                <p className="px-5 py-2 text-sm bg-gray-800 text-white font-semibold rounded-md">
                  React.js
                </p>
                 <p className="px-5 py-2 text-sm bg-gray-800 text-white font-semibold rounded-md">
                  Tailwind CSS
                </p>
                <p className="px-5 py-2 text-sm bg-gray-800 text-white font-semibold rounded-md">
                  Firebase
                </p>
                <p className="px-5 py-2 text-sm bg-gray-800 text-white font-semibold rounded-md">
                  Ant Design
                </p>
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-4 mb-5">
                <div className="w-full sm:w-[49%]">
                  <Image
                    src={ecommerceimg1}
                    alt="Project image"
                    height={500}
                    width={500}
                    className="border border-gray-300 rounded-lg w-full max-h-48 cursor-pointer aspect-video object-contain"
                  />
                </div>
                <div className="w-full sm:w-[49%]">
                  <Image
                    src={ecommerceimg2}
                    alt="Project image"
                    height={500}
                    width={500}
                    className="border border-gray-300 rounded-lg w-full max-h-48 cursor-pointer aspect-video object-contain"
                  />
                </div>
                <div className="w-full sm:w-[49%]">
                  <Image
                    src={ecommerceimg3}
                    alt="Project image"
                    height={500}
                    width={500}
                    className="border border-gray-300 rounded-lg w-full max-h-48 cursor-pointer aspect-video object-contain"
                  />
                </div>
                <div className="w-full sm:w-[49%]">
                  <Image
                    src={ecommerceimg4}
                    alt="Project image"
                    height={500}
                    width={500}
                    className="border border-gray-300 rounded-lg w-full max-h-48 cursor-pointer aspect-video object-contain"
                  />
                </div>
                <div className="w-full sm:w-[49%]">
                  <Image
                    src={ecommerceimg5}
                    alt="Project image"
                    height={500}
                    width={500}
                    className="border border-gray-300 rounded-lg w-full max-h-48 cursor-pointer aspect-video object-contain"
                  />
                </div>
                <div className="w-full sm:w-[49%]">
                  <Image
                    src={ecommerceimg6}
                    alt="Project image"
                    height={500}
                    width={500}
                    className="border border-gray-300 rounded-lg w-full max-h-48 cursor-pointer aspect-video object-contain"
                  />
                </div>
              </div>
            </ModalContent>
          </ModalBody>
        </Modal>
      </div>

      {/* Container 2 */}
      <div className="container pb-20 flex lg:px-14 px-5 mt-1 lg:flex-row flex-col items-center justify-evenly min-h-[400px]">
        {/* Card 1 */}
        <Modal>
          <MotionUp delay={0.1}>
            <CardContainer className="inter-var w-full my-4 flex items-stretch">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] min-h-[400px] h-full rounded-xl p-4 border">
                <CardItem translateZ="70" className="w-full">
                  <Image
                    src={designagency}
                    height="1000"
                    width="1000"
                    className="border border-gray-300 h-48 w-full rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="mt-4 text-xl font-bold text-black dark:text-white"
                >
                  Design Agency Website
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-700 h-[80px] text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  I developed a fully responsive design agency website using React and Tailwind CSS, ensuring a smooth and modern user experience across all devices. The site features clean ...
                </CardItem>
                <div className="flex justify-between items-center gap-5 mt-5">
                  <Link
                    href={"https://creativedesignwebsite.netlify.app/"}
                    target={"_blank"}
                  >
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="flex cursor-pointer bg-black text-white items-center gap-2 pl-1 px-7 py-2.5 rounded-lg dark:bg-white dark:text-black text-xs font-bold"
                    >
                      Live Demo <FaArrowRight />
                    </CardItem>
                  </Link>
                  <ModalTrigger>
                    <div
                      translateZ={20}
                      as="button"
                      className="flex items-center gap-2 px-7 py-2.5 rounded-lg bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Read More <CgMoreO />
                    </div>
                  </ModalTrigger>
                </div>
              </CardBody>
            </CardContainer>
          </MotionUp>
          <ModalBody className="scrollHide !max-w-[700px] border-2 overflow-scroll">
            <ModalContent className="mt-5">
              <div className="mb-5 pr-1 flex justify-between items-center flex-wrap gap-x-5 gap-y-2">
                <h1 className="text-xl font-bold text-black dark:text-white">
                  Design Agency Website
                </h1>
                <div className="flex gap-4 items-center">
                  <Link
                    href="https://creativedesignwebsite.netlify.app/"
                    target="_blank"
                    className="flex justify-center items-center"
                  >
                    <FaEye className="me-1 text-blue-700" />
                    <span className="text-[15px] font-semibold text-blue-700">
                      Check Live Site
                    </span>
                  </Link>
                  <Link
                    href="https://github.com/MuhammadHassanRaza25/Design-Agency-Website"
                    target="_blank"
                    className="flex justify-center items-center"
                  >
                    <FaGithub className="me-1 text-blue-700" />
                    <span className="relative top-[1px] text-[15px] font-semibold text-blue-700">
                      Get code
                    </span>
                  </Link>
                </div>
              </div>
              <div className="border border-gray-300 p-4 rounded-lg mb-5">
                <p className="leading-relaxed text-sm text-neutral-700 dark:text-neutral-300 font-semibold">
                  I developed a fully responsive design agency website using React and Tailwind CSS, ensuring a smooth and modern user experience across all devices. The site features clean, efficient styling and fast performance, combining the power of React components with Tailwind's flexible design system to deliver a professional, visually appealing, and easy-to-navigate platform that perfectly represents the brand.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-5">
                 <p className="px-5 py-2 text-sm bg-gray-800 text-white font-semibold rounded-md">
                  React.js
                </p>
                <p className="px-5 py-2 text-sm bg-gray-800 text-white font-semibold rounded-md">
                  Tailwind CSS
                </p>
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-4 mb-5">
                <div className="w-full sm:w-[49%]">
                  <Image
                    src={agencyimg1}
                    alt="Project image"
                    height={500}
                    width={500}
                    className="border border-gray-300 rounded-lg w-full max-h-48 cursor-pointer aspect-video object-contain"
                  />
                </div>
                <div className="w-full sm:w-[49%]">
                  <Image
                    src={agencyimg2}
                    alt="Project image"
                    height={500}
                    width={500}
                    className="border border-gray-300 rounded-lg w-full max-h-48 cursor-pointer aspect-video object-contain"
                  />
                </div>
                <div className="w-full sm:w-[49%]">
                  <Image
                    src={agencyimg3}
                    alt="Project image"
                    height={500}
                    width={500}
                    className="border border-gray-300 rounded-lg w-full max-h-48 cursor-pointer aspect-video object-contain"
                  />
                </div>
                <div className="w-full sm:w-[49%]">
                  <Image
                    src={agencyimg4}
                    alt="Project image"
                    height={500}
                    width={500}
                    className="border border-gray-300 rounded-lg w-full max-h-48 cursor-pointer aspect-video object-contain"
                  />
                </div>
              </div>
            </ModalContent>
          </ModalBody>
        </Modal>

        {/* Card 2 */}
        <Modal>
          <MotionUp delay={0.2}>
            <CardContainer className="inter-var w-full my-4 flex items-stretch">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] min-h-[400px] h-full rounded-xl p-4 border">
                <CardItem translateZ="70" className="w-full">
                  <Image
                    src={quotesimg1}
                    height="1000"
                    width="1000"
                    className="border border-gray-300 h-48 w-full rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="mt-4 text-xl font-bold text-black dark:text-white"
                >
                  Quotes App
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-700 h-[80px] text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                 I developed this Quotes App using Next.js and Tailwind CSS, fetching quotes dynamically from an API. The app features copy-to-clipboard functionality, error handling, and a ...
                </CardItem>
                <div className="flex justify-between items-center gap-5 mt-5">
                  <Link href={"https://quotes-app-next-js.vercel.app/"} target={"_blank"}>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="flex cursor-pointer bg-black text-white items-center gap-2 pl-1 px-7 py-2.5 rounded-lg dark:bg-white dark:text-black text-xs font-bold"
                    >
                      Live Demo <FaArrowRight />
                    </CardItem>
                  </Link>
                  <ModalTrigger>
                    <div
                      translateZ={20}
                      as="button"
                      className="flex items-center gap-2 px-7 py-2.5 rounded-lg bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Read More <CgMoreO />
                    </div>
                  </ModalTrigger>
                </div>
              </CardBody>
            </CardContainer>
          </MotionUp>
          <ModalBody className="scrollHide !max-w-[700px] border-2 overflow-scroll">
            <ModalContent className="mt-5">
              <div className="mb-5 pr-1 flex justify-between items-center flex-wrap gap-x-5 gap-y-2">
                <h1 className="text-xl font-bold text-black dark:text-white">Quotes App</h1>
                <div className="flex gap-4 items-center">
                  <Link
                    href="https://quotes-app-next-js.vercel.app/"
                    target="_blank"
                    className="flex justify-center items-center"
                  >
                    <FaEye className="me-1 text-blue-700" />
                    <span className="text-[15px] font-semibold text-blue-700">
                      Check Live Site
                    </span>
                  </Link>
                  <Link
                    href="https://github.com/MuhammadHassanRaza25/Quotes-App-NextJS"
                    target="_blank"
                    className="flex justify-center items-center"
                  >
                    <FaGithub className="me-1 text-blue-700" />
                    <span className="relative top-[1px] text-[15px] font-semibold text-blue-700">
                      Get code
                    </span>
                  </Link>
                </div>
              </div>
              <div className="border border-gray-300 p-4 rounded-lg mb-5">
                <p className="leading-relaxed text-sm text-neutral-700 dark:text-neutral-300 font-semibold">
                  I developed this Quotes App using Next.js and Tailwind CSS, fetching quotes dynamically from an API. The app features copy-to-clipboard functionality, error handling, and a fully responsive interface across all devices.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-5">
                <p className="px-5 py-2 text-sm bg-gray-800 text-white font-semibold rounded-md">
                  Next.js
                </p>
                <p className="px-5 py-2 text-sm bg-gray-800 text-white font-semibold rounded-md">
                  Tailwind CSS
                </p>
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-4 mb-5">
                <div className="w-full sm:w-[49%]">
                  <Image
                    src={quotesimg1}
                    alt="Project image"
                    height={500}
                    width={500}
                    className="border border-gray-300 rounded-lg w-full max-h-48 cursor-pointer aspect-video object-contain"
                  />
                </div>
                <div className="w-full sm:w-[49%]">
                  <Image
                    src={quotesimg2}
                    alt="Project image"
                    height={500}
                    width={500}
                    className="border border-gray-300 rounded-lg w-full max-h-48 cursor-pointer aspect-video object-contain"
                  />
                </div>
                <div className="w-full sm:w-[49%]">
                  <Image
                    src={quotesimg3}
                    alt="Project image"
                    height={500}
                    width={500}
                    className="border border-gray-300 rounded-lg w-full max-h-48 cursor-pointer aspect-video object-contain"
                  />
                </div>
                <div className="w-full sm:w-[49%]">
                  <Image
                    src={quotesimg4}
                    alt="Project image"
                    height={500}
                    width={500}
                    className="border border-gray-300 rounded-lg w-full max-h-48 cursor-pointer aspect-video object-contain"
                  />
                </div>
              </div>
            </ModalContent>
          </ModalBody>
        </Modal>

        {/* Card 3 */}
        <Modal>
          <MotionUp delay={0.3}>
            <CardContainer className="inter-var w-full my-4 flex items-stretch">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] min-h-[400px] h-full rounded-xl p-4 border">
                <CardItem translateZ="70" className="w-full">
                  <Image
                    src={weatherimg1}
                    height="1000"
                    width="1000"
                    className="border border-gray-300 h-48 w-full rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="mt-4 text-xl font-bold text-black dark:text-white"
                >
                  Weather App
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-700 h-[80px] text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  WeatherNow is a fully responsive weather app built with ReactJS, Tailwind CSS, and the OpenWeather API. It provides real-time weather updates with a 5-day hourly forecast ...
                </CardItem>
                <div className="flex justify-between items-center gap-5 mt-5">
                  <Link
                    href={"https://weathernow-by-mhassanraza.vercel.app/"}
                    target={"_blank"}
                  >
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="flex cursor-pointer bg-black text-white items-center gap-2 pl-1 px-7 py-2.5 rounded-lg dark:bg-white dark:text-black text-xs font-bold"
                    >
                      Live Demo <FaArrowRight />
                    </CardItem>
                  </Link>
                  <ModalTrigger>
                    <div
                      translateZ={20}
                      as="button"
                      className="flex items-center gap-2 px-7 py-2.5 rounded-lg bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Read More <CgMoreO />
                    </div>
                  </ModalTrigger>
                </div>
              </CardBody>
            </CardContainer>
          </MotionUp>
          <ModalBody className="scrollHide !max-w-[700px] border-2 overflow-scroll">
            <ModalContent className="mt-5">
              <div className="mb-5 pr-1 flex justify-between items-center flex-wrap gap-x-5 gap-y-2">
                <h1 className="text-xl font-bold text-black dark:text-white">
                  Weather App
                </h1>
                <div className="flex gap-4 items-center">
                  <Link
                    href="https://weathernow-by-mhassanraza.vercel.app/"
                    target="_blank"
                    className="flex justify-center items-center"
                  >
                    <FaEye className="me-1 text-blue-700" />
                    <span className="text-[15px] font-semibold text-blue-700">
                      Check Live Site
                    </span>
                  </Link>
                  <Link
                    href="https://github.com/MuhammadHassanRaza25/Weather-App-React"
                    target="_blank"
                    className="flex justify-center items-center"
                  >
                    <FaGithub className="me-1 text-blue-700" />
                    <span className="relative top-[1px] text-[15px] font-semibold text-blue-700">
                      Get code
                    </span>
                  </Link>
                </div>
              </div>
              <div className="border border-gray-300 p-4 rounded-lg mb-5">
                <p className="leading-relaxed text-sm text-neutral-700 dark:text-neutral-300 font-semibold">
                 WeatherNow is a fully responsive weather app built with ReactJS, Tailwind CSS, and the OpenWeather API. It provides real-time weather updates with a 5-day hourly forecast, featuring a clean, modern interface for a smooth user experience across all devices.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-5">
                <p className="px-5 py-2 text-sm bg-gray-800 text-white font-semibold rounded-md">
                  React.js
                </p>
                <p className="px-5 py-2 text-sm bg-gray-800 text-white font-semibold rounded-md">
                  Tailwind CSS
                </p>
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-4 mb-5">
                <div className="w-full sm:w-[49%]">
                  <Image
                    src={weatherimg1}
                    alt="Project image"
                    height={500}
                    width={500}
                    className="border border-gray-300 rounded-lg w-full max-h-48 cursor-pointer aspect-video object-contain"
                  />
                </div>
                <div className="w-full sm:w-[49%]">
                  <Image
                    src={weatherimg2}
                    alt="Project image"
                    height={500}
                    width={500}
                    className="border border-gray-300 rounded-lg w-full max-h-48 cursor-pointer aspect-video object-contain"
                  />
                </div>
              </div>
            </ModalContent>
          </ModalBody>
        </Modal>
      </div>
    </>
  );
}

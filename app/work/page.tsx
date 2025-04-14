"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { Swiper as SwiperClass } from "swiper"; 
const projects = [
  {
    num: "01",
    category: "Full Stack",
    title: "Your Food – Smart Recipe Platform",
    description:
      "Your Food is an innovative web platform that offers a rich and interactive recipe experience. It features categorized global cuisine, AI-generated recipe suggestions, and a smart nutritional calculator. Developed from scratch, including backend, frontend, and UI/UX design, the project leverages modern technologies to deliver a seamless and enjoyable user journey.",
    stack: [
      { name: "Node.js" },
      { name: "Firebase" },
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "GEMINI API" },
      { name: "TheMealDB API" },
    ],
    image: "/your food.jpeg",
    live: "https://your-food-kappa.vercel.app/", 
    github: "https://github.com/hadilyahi/YourFood-Frontend", 
  },
  {
    num: "02",
    category: "Frontend",
    title: "Perfume E-commerce  & Frontend",
    description:
      "This project marks my first venture into UI/UX design, where I crafted a full e-commerce experience for a perfume store. Starting from in-depth user research to wireframing and high-fidelity designs, the goal was to create a smooth, attractive, and efficient user journey. The store features fast product navigation, clear presentation, advanced filtering, responsive design, and an easy checkout process. I also contributed to the frontend development using modern tools.",
    stack: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Figma (UI/UX Design)" }
    ],
    image: "/Parfume.jpeg", 
    live: "",
    github: "https://github.com/username/perfume-shop", 
  }
,  
   {
    num: "03",
    category: "Full stack",
    title: "Full Authentication and Authorization System",
    description:
      "Developed a comprehensive authentication and authorization system utilizing JSON Web Tokens (JWT). The system ensures secure user management with features such as:User Registration and Login with hashed passwords for enhanced security.Role-Based Access Control (RBAC) to manage permissions efficiently.Password Recovery and Reset using secure email workflows.Token Refresh for seamless and secure session management.",
    stack: [
      { name: "Express.js" },
      { name: "MongoDB " },
      { name: "Next.js " },
      { name: "Tailwind CSS" },
      { name: "bcrypt.js" },
      {
        name: "Nodemailer",
      },
      { name: "JWT" },
    ],
    image: "/project5.png",
    live: "https://rami-school.vercel.app/en",
    github: "https://github.com/chrhi/e-school-frontend",
  },
  {
    num: "04",
    category: "frontend",
    title: "Food Recipes",
    description:
      "Food recipes is a recipe website that features a variety of categories including main courses, beverages, desserts, and healthy food. It allows users to save their favorite recipes for easy access later.",
    stack: [{ name: "Next.Js" }, { name: "Tailwind.css" }],
    image: "/project1.png",
    live: "https://food-recipes-gamma.vercel.app/",
    github: "https://github.com/hadilyahi/Food-Recipes-",
  },
  
  {
    num: "05",
    category: "frontend",
    title: "Todo App",
    description: "This is a Todo App project for managing daily tasks.",
    stack: [{ name: "Next.Js" }, { name: "Tailwind.css" }],
    image: "/project3.png",
    live: "https://todo-app-p5pr.vercel.app/",
    github: "https://github.com/hadilyahi/TodoApp",
  },
  {
    num: "06",
    category: "frontend",
    title: "Login System",
    description: "this is page Login use Redux.",
    stack: [{ name: "React.js" }, { name: "Tailwind.css" }, { name: "Redux" }],
    image: "/project4.png",
    live: "https://login-two-rho-89.vercel.app/",
    github: "https://github.com/hadilyahi/LoginSystem",
  },
];
const Work = () => {
  const [project, setproject] = useState(projects[0]);
// Import the Swiper class

const handleSlideChange = (swiper: SwiperClass) => {
  const currentIndex = swiper.activeIndex; 
  setproject(projects[currentIndex]);
};
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-1/2 xl:h-auto flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[auto]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && " ,"}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* project github button */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-1/2">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 ">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt={""}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons  */}
              <WorkSliderBtns
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all  "
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;

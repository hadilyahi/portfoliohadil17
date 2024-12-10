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
    num: "02",
    category: "frontend",
    title: "Makeup Store",
    description:
      "A stylish and modern website dedicated to makeup enthusiasts, offering a variety of beauty tutorials, product reviews, tips, and trends. The site features makeup looks for different occasions, step-by-step guides, and expert recommendations to help users enhance their beauty routines.",
    stack: [{ name: "Html5" }, { name: "Css3" }],
    image: "/proj2.png",
    live: "https://makeupstoresite.vercel.app/",
    github: "https://github.com/hadilyahi/MakeupStore-",
  },
  {
    num: "03",
    category: "frontend",
    title: "Todo App",
    description: "This is a Todo App project for managing daily tasks.",
    stack: [{ name: "Next.Js" }, { name: "Tailwind.css" }],
    image: "/project3.png",
    live: "https://todo-app-p5pr.vercel.app/",
    github: "https://github.com/hadilyahi/TodoApp",
  },
  {
    num: "04",
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
              <ul className="flex gap-4">
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

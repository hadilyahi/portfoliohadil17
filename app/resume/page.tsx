"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaFigma,
  FaGithub,
  FaGit,
  FaReact,
} from "react-icons/fa";

import { MdTranslate } from "react-icons/md"; // i18next
import { DiDatabase } from "react-icons/di"; // SQL
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si"; // TypeScript
import { FaSyncAlt } from "react-icons/fa"; // React Query
import { IoStarOutline } from "react-icons/io5"; // Redux
import { MdSearch } from "react-icons/md"; // Axios

// about data
const about = {
  title: "About me ",
  description:
    "I am a Frontend Web Developer specializing in Next.js, React, TypeScript, and TailwindCSS, with hands-on experience building responsive, dynamic, and user-friendly web applications. My expertise extends to SQL, Redux, React Query, Axios, i18next, and backend integration, giving me the ability to connect frontend development with server-side operations seamlessly.I have a strong foundation in creating intuitive UI/UX designs and delivering smooth user experiences using modern tools and frameworks. Passionate about clean code, efficient workflows, and continuous learning, I strive to solve technical challenges with innovative solutions.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Hadil Yahi",
    },
    {
      fieldName: "Phone",
      fieldValue: "0660717211",
    },
    {
      fieldName: "Experience",
      fieldValue: "1 Years ",
    },
    {
      fieldName: "Email",
      fieldValue: "hadiltech17@gmail.com",
    },
    {
      fieldName: "Instagram",
      fieldValue: "hadil.yh404",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Algeria",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "Arabic , English",
    },
  ],
};
// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  desription:
    "Passionate Front-End Developer with experience in building responsive, user-friendly web applications using React.js, Next.js, TailwindCSS, and TypeScript. Proficient in integrating APIs with Axios, managing state with Redux, and implementing i18next for multi-language support.",
  items: [
    {
     company: "Freelance",
      Position: "Web developer",
      duration: "1/10/2024 - present",
    },
    {
      company: "Algerie Telecom",
      Position: "Intership ",
      duration: "23/12/2024 - 30/12/2024",
    },
    {
      company: "Nhannik",
      Position: "Front end Developer",
      duration: "15/06/2024 - 15/08/2024",
    },
      {
      company: "Nhannik",
      Position: "Intern Front end Developer",
      duration: "01/05/2024 - 01/06/2024",
    },
  ],
};
// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  desription:
    "Passionate Front-End Developer with experience in building responsive, user-friendly web applications using React.js, Next.js, TailwindCSS, and TypeScript. Proficient in integrating APIs with Axios, managing state with Redux, and implementing i18next for multi-language support.",
  items: [
    {
      institution: "Zaine Achour University Djelfa",
      degree: "Computer science student",
      duration: "2023 - present",
    },
     {
      institution: "Udemy ",
      degree: "Figma Course",
      duration: "20/12/2024 - 25/12/2024",
    },
    {
      institution: "Youtube ",
      degree: "Front end Developer",
      duration: "03/2024 - 04/2024",
    },
    {
      institution: "Coursera",
      degree: "SQl Cours",
      duration: "11/2024",
    },
  ],
};
//skills data
const skills = {
  title: "My skills",
  desription:
    "Skilled in building modern, responsive web applications with expertise in React.js, Next.js, TypeScript, TailwindCSS, and i18next. Proficient in Redux for state management, Axios and React Query for efficient API calls, and responsive mobile-first design strategies.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "React Js",
    },
    
    {
      icon: <SiTypescript />,
      name: "Typescript",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwindcss ",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next js",
    },
    {
      icon: <MdTranslate />,
      name: "I18Next Translate",
    },
    {
      icon: <DiDatabase />,
      name: "SQL",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaGithub />,
      name: "Github",
    },
    {
      icon: <FaGit />,
      name: "Git",
    },
    {
      icon: <FaSyncAlt />,
      name: "React Query",
    },
    {
      icon: <IoStarOutline />,
      name: "Redux",
    },
    {
      icon: <MdSearch />,
      name: "Axios",
    },
  ],
};
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value={"experience"}>Experience</TabsTrigger>
            <TabsTrigger value={"education"}>Education</TabsTrigger>
            <TabsTrigger value={"skills"}>Skills</TabsTrigger>
            <TabsTrigger value={"about"}>About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value={"experience"} className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.desription}
                </p>
                <ScrollArea className="h-[400px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-cente lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">
                            {item.Position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Education */}
            <TabsContent value={"education"} className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.desription}
                </p>
                <ScrollArea className="h-[400px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-cente lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value={"skills"} className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.desription}
                  </p>
                  <ScrollArea className="h-[400px] ">
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                      {skills.skillList.map((skill, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-cente lg:items-start gap-1"
                          >
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                  <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="capitalize">{skill.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent value={"about"} className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2  gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item,index)=>{
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                        
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;

"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion} from "framer-motion";


const services = [
  {
    num: "01",
    title: "Interactive Web Applications & Backend Integration",
    description:
      "Developing dynamic applications and integrating them with backend APIs for seamless functionality.",
    href: "",
  },
  {
    num: "02",
    title: "Responsive Web Development",
    description:
      "Building websites that work seamlessly across all devices, from desktops to smartphones.",
    href: "",
  },
  {
    num: "03",
    title: "Custom UI/UX Design",
    description:
      "Crafting visually appealing and user-friendly interfaces tailored to your needs.",
    href: "",
  },
  {
    num: "04",
    title: "Performance Optimization",
    description:
      "Enhancing website speed and performance for a better user experience.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 gap-[60px] md:grid-cols-2 "
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className=" w-full flex  justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}{" "}
                  </div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45  ">
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                {/* desctiption */} 
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogTitle } from "@radix-ui/react-dialog";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "./ui/button";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      {/* Trigger for MobileNav */}
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      {/* Content with DialogTitle */}
      <SheetContent className="flex flex-col">
        <DialogTitle className="text-2xl  font-semibold text-center mt-20 mb-20">
          Hadil <span className="text-accent">yahi</span>
        </DialogTitle>
        
        {/* Navigation links */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`${
                link.path === pathname && "text-accent border-b-2 border-accent"
              } capitalize text-xl hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
           <div className=" xl:flex items-center gap-8">
          <Link href="/contact">
          <Button>Contact me</Button>
          </Link>
        </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

import Image from "next/image";
import BlurIn from "@/components/magicui/blur-in";
import OrbitingCircles from "@/components/magicui/orbiting-circles";
import { OrbitingCirclesDemo } from "@/components/demos/banner";
import { SparklesPreview } from "@/components/demos/spark";
import { StickyScrollRevealDemo } from "@/components/demos/stikyScroll";
import { FloatingNavDemo } from "@/components/demos/nav";
import Navbar from "@/components/demos/navbar";
import { FloatingNav } from "@/components/ui/floating-navbar";

export default function Home() {
  return (
    <main className="">
      <div>
        {/* <FloatingNavDemo /> */}
        {/* <Navbar /> */}
        <FloatingNav navItems={navItems}/>
        <BlurIn word={"lorem"}></BlurIn>
        <OrbitingCirclesDemo />
        <SparklesPreview />
        <StickyScrollRevealDemo />
      </div>
    </main>
  );
}


const navItems = [
  {
    name: "Home",
    link: "/",
  //   icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "/about",
  //   icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "/contact",
  //   icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
    
  },
];




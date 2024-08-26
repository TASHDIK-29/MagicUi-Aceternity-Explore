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
        <FloatingNav />
        <BlurIn word={"lorem"}></BlurIn>
        <OrbitingCirclesDemo />
        <SparklesPreview />
        <StickyScrollRevealDemo />
      </div>
    </main>
  );
}




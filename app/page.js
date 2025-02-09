import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}

import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Project } from "@/components/Project";
import { Stack } from "@/components/Stack";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden">
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Project />
        <Stack />
        <Contact />
      </div>
    </main>
  );
}

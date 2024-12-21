"use client"

import { useState, useEffect } from "react";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import Loading from "@/components/Loading";
import { Project } from "@/components/Project";
import { Stack } from "@/components/Stack";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden">
      {isLoading ? (
        <div className="w-full">
          <Loading />
        </div>
      ) : (
        <div className="w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Project />
          <Stack />
          <Contact />
        </div>
      )}
    </main>
  );
}

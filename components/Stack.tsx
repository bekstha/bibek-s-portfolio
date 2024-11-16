"use client"

import React from "react";
import { FaCss3, FaHtml5, FaPython, FaReact, FaSwift } from "react-icons/fa";
import { SiAndroidstudio, SiFirebase, SiJavascript, SiJetpackcompose, SiNextdotjs, SiNumpy, SiPandas, SiPowerbi, SiTensorflow } from "react-icons/si";
import { TbBrandKotlin } from "react-icons/tb";

interface StackItem {
  icon: React.ReactNode;
  label: string;
}

const stackItems: StackItem[] = [
  { icon: <FaReact />, label: "React" },
  { icon: <SiFirebase />, label: "Firebase" },
  { icon: <SiNextdotjs />, label: "Next.js" },
  { icon: <FaPython />, label: "Python" },
  { icon: <SiPandas />, label: "Pandas" },
  { icon: <TbBrandKotlin />, label: "Kotlin" },
  { icon: <FaSwift />, label: "Swift UI" },
  { icon: <SiJetpackcompose />, label: "Jetpack Compose" },
  { icon: <FaCss3 />, label: "CSS" },
  { icon: <FaHtml5 />, label: "HTML" },
  { icon: <SiJavascript />, label: "JavaScript" },
  { icon: <SiPowerbi />, label: "PowerBI" },
  { icon: <SiAndroidstudio />, label: "Android Studio" },
  { icon: <SiTensorflow />, label: "Tensorflow" },
  { icon: <SiNumpy />, label: "Numpy" },
];

export const Stack = () => {
  return (
    <div id="stack" className="py-24 sm:py-32 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="heading">My Stack</h2>
        <div className="mx-auto mt-16 flex flex-wrap justify-center gap-16 md:gap-20 lg:gap-24">
          {stackItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3"
              style={{ maxWidth: "150px" }}
            >
              <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
                {item.icon}
              </div>
              <p className="text-center text-sm md:text-base lg:text-xl">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

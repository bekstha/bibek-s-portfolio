"use client"

import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaDownload } from "react-icons/fa";
import { BackgroundGradientAnimation } from "./ui/BackgroundGradientAnimation";

export const Hero = () => {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center px-4 pointer-events-none text-center">
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center ">
          <TextGenerateEffect
            words="Transforming Concepts into Intuitive User Experiences"
            className="font-bold text-center text-[40px] md:text-6xl lg:text-7xl "
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Bibek Shrestha, web & mobile developer based in Finland.
          </p>

          <div className="w-80 gap-2 flex items-center justify-center">
            <a href="#about">
              <MagicButton
                title="Download my CV"
                icon={<FaDownload />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    </BackgroundGradientAnimation>
  );
};

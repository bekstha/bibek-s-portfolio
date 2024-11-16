"use client"
/* eslint-disable @next/next/no-img-element */
import React from "react";
import MagicButton from "./ui/MagicButton";
import { socialMedia } from "@/data";
import { BackgroundBeamsWithCollision } from "./ui/BackgroundBeamsWithCollision";
import { LinkPreview } from "./ui/LinkPreview";
import { TbMail } from "react-icons/tb";

export const Contact = () => {
  return (
    <BackgroundBeamsWithCollision>
      <footer className="w-full pb-10 p-10" id="contact">
        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw] top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-blue-300 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            Hire Me?
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>

          <a href="mailto:work.bibekshrestha@gmail.com">
            <MagicButton
              title="Let's get in touch"
              icon={<TbMail />}
              position="right"
            />
          </a>
        </div>
        <div className="flex mt-20 md:flex-row flex-col justify-between items-center gap-5">
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2024 Bibek Shrestha
          </p>

          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
              <LinkPreview
                key={info.id}
                url={info.link}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </LinkPreview>
            ))}
          </div>
        </div>
      </footer>
    </BackgroundBeamsWithCollision>
  );
};

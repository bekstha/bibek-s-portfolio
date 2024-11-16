"use client";

import React from "react";
import { WobbleCard } from "./ui/WobbleCard";
import Image from "next/image";

export const Project = () => {
  return (
    <div id="projects">
      <div className="py-24 sm:py-32 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="heading">My Selected Projects</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full px-5">
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-xl mb-24 md:mb-0">
            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              AusculThing Learning Website
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Designed and developed a new learning environment for
              auscultation. Planned the project, designed UI/UX, developed the
              front-end and back-end, integrated audio examples of heart beats,
              and implemented quizzes for skill assessment. Delivered a fully
              functional, responsive web application.
            </p>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Stack used: Figma, React, TailwindCSS, Firebase
            </p>
          </div>
          <Image
            src="/ausculthing.png"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[10%] -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-green-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-xl mb-24 md:mb-0">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Sibbo Medical Devices Mobile App
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Designed and developed an Android application to connect
              seamlessly with an external digital otoscope. Managed entire
              process including UI/UX design, integration of the otoscope’s live
              feed, real-time image capture, and data storage. Delivered a
              reliable and intuitive app for enhanced medical imaging and
              diagnostics.
            </p>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Stack used: Figma, Kotlin, Android Studio, Jetpack Compose
            </p>
          </div>
          <Image
            src="/sibbo.png"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[10%] -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </div>
  );
};

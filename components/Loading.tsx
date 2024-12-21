"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Loading = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black-100">
      <DotLottieReact src="/Loading.json" loop autoplay />
    </div>
  );
};

export default Loading;

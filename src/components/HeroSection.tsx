"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import img from '@/assets/home_image.png'
import Image from "next/image";

const HeroSection = () => {
  return (
    <div id="home"  className="font-[Caveat] h-screen max-sm:h-auto  relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className=" absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <div className="flex md:p-20   max-sm:flex-col max-sm:mt-[8rem] max-md:ml-8 items-center justify-center">
        <div>
          <p className="text-3xl  mt-2 text-neutral-300 max-sm:pt-8 relative z-20">
            <span className="text-8xl max-sm:text-7xl">Hello, I&apos;m </span>
            <br />
            <span className="text-8xl max-sm:text-7xl">Devang Rathod</span>
            <br />
            <span className="text-8xl max-sm:text-7xl">Frontend Developer</span>
          </p>
          <div className="flex gap-3 mt-4 relative z-20">
            <a href="https://drive.google.com/file/d/113AMTtTPH3vbISgCFB_JhYKVvOMB9gIS/view?usp=drive_link"><button  className="px-6 py-3 font-[Montserrat] bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-lg text-sm shadow-lg transform hover:scale-105 transition-transform duration-200">CV Download</button></a>
          </div>
        </div>
        <div className="image-container ml-10">
          <Image
            className="w-[600px] h-[650px] object-cover drop-shadow-2xl z-20"
            src={img}
            alt="Developer Home"
          />
        </div>
      </div>

    </div>

  )
}

export default HeroSection
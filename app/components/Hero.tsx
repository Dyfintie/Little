"use client";
import React from "react";
const Hero = () => {
  return (
    <div className="bg-gradient-to-b h-screen from-orange-100 to-orange-200 w-full  flex flex-col md:flex-row items-center justify-center p-5 gap-8">
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="font-bold font-serif text-4xl sm:text-5xl lg:text-6xl text-orange-800 px-2 ">
          Little Cafe
        </h1>
        <p className="font-semibold font-serif text-2xl sm:text-3xl lg:text-4xl text-orange-700 px-2">
          A Culinary Journey: Italian, Chinese, and Continental Delights
        </p>
        <p className="font-serif text-lg sm:text-xl text-orange-600 max-w-xl mx-auto md:mx-0 p-2">
          Explore a menu inspired by Italian, Chinese, and Continental flavors,
          blending authenticity with modern flair in every bite.
        </p>
      </div>

      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <div className="relative rounded-lg overflow-hidden shadow-2xl ">
          <video preload="auto" autoPlay loop muted playsInline className="w-full h-auto ">
            <source src="/assets/cafe.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Hero;

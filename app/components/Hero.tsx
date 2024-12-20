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
          Exquisite North Indian Cuisine
        </p>
        <p className="font-serif text-lg sm:text-xl text-orange-600 max-w-xl mx-auto md:mx-0 p-2">
          Experience the rich flavors and aromatic spices of authentic North
          Indian dishes in a cozy, welcoming atmosphere.
        </p>
      </div>

      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <div className="relative rounded-lg overflow-hidden shadow-2xl">
          <video autoPlay loop muted playsInline className="w-full h-auto">
            <source src="/assets/cafe.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

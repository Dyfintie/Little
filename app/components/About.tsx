"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-b from-orange-200 to-orange-100">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-orange-800 text-center mb-8 sm:mb-12 flex-shrink-0">
        About Us
      </h2>
      <Card className="flex w-full max-w-6xl bg-gradient-to-r from-orange-200 to-orange-100 flex-grow">
        <CardContent className="p-0 flex flex-col lg:flex-row">
          <div className=" flex w-full lg:w-1/2 relative flex-shrink-0 lg:flex-grow">
            <div className=" flex w-full pb-[56.25%] lg:pb-[100%] relative">
              <Image
                src="/assets/lcafe.avif"
                alt="Little Cafe interior"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none absolute top-0 left-0"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <p className="text-orange-700 text-base sm:text-lg leading-relaxed mb-4 flex-shrink">
              Welcome to Little Cafe, where the rich flavors of North India come
              to life in every dish. Our story began with a passion for
              authentic cuisine and a dream to bring the warmth of traditional
              Indian hospitality to our community.
            </p>
            <p className="text-orange-700 text-base sm:text-lg leading-relaxed mb-4 flex-shrink">
              At Little Cafe, we believe in the power of food to bring people
              together. Our chefs, with years of experience in crafting
              exquisite North Indian delicacies, pour their heart and soul into
              every meal. We source the finest ingredients and use time-honored
              recipes to create dishes that not only satisfy your palate but
              also transport you to the vibrant streets of North India.
            </p>
            <p className="text-orange-700 text-base sm:text-lg leading-relaxed flex-shrink">
              From our aromatic curries to our freshly baked naan, every item on
              our menu is a testament to our commitment to quality and
              authenticity. We invite you to join us for a culinary journey that
              celebrates the rich tapestry of North Indian cuisine, right here
              at Little Cafe.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;

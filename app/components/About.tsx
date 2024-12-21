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
              Welcome to Little Cafe, where the vibrant essence of Italian,
              Chinese, and Continental cuisines comes alive in every dish. What
              began as a passion for authentic flavors has evolved into a dream
              to share the warmth of global culinary traditions with our
              community.
            </p>
            <p className="text-orange-700 text-base sm:text-lg leading-relaxed mb-4 flex-shrink">
              At Little Cafe, we believe in the magic of food to create
              connections. Our chefs, with years of expertise in crafting
              exquisite Italian pastas, bold Chinese stir-fries, and elegant
              Continental specialties, dedicate themselves to curating an
              experience that delights your senses. By using the finest
              ingredients and embracing both tradition and innovation, we aim to
              serve dishes that are truly memorable.
            </p>
            <p className="text-orange-700 text-base sm:text-lg leading-relaxed flex-shrink">
              From our creamy risottos and dim sum to perfectly grilled steaks
              and decadent desserts, every item on our menu reflects our
              commitment to quality, authenticity, and creativity. Join us at
              Little Cafe for a culinary journey across continents, and let us
              share the joy of exceptional dining with you.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;

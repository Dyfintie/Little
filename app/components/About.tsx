"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="h-screen w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-200 to-orange-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-orange-800 text-center mb-12 from-orange-200 to-orange-100">
          About Us
        </h2>
        <Card className="overflow-hidden bg-gradient-to-r from-orange-200 to-orange-100 ">
          <CardContent className="p-0 bg-gradient-to-r from-orange-200 to-orange-100">
            <div className="flex flex-col md:flex-row bg-gradient-to-r from-orange-200 to-orange-100">
              <div className="w-full md:w-1/2 relative bg-gradient-to-r h-full md:h-auto from-orange-200 to-orange-100">
                <Image
                  src="/assets/lcafe.avif"
                  alt="Little Cafe interior"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                />
              </div>
              <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-10 bg-gradient-to-r from-orange-200 to-orange-100">
                <p className="text-orange-700 text-lg leading-relaxed from-orange-200 to-orange-100">
                  Welcome to Little Cafe, where the rich flavors of North India
                  come to life in every dish. Our story began with a passion for
                  authentic cuisine and a dream to bring the warmth of
                  traditional Indian hospitality to our community.
                </p>
                <p className="mt-4 text-orange-700 text-lg leading-relaxed from-orange-200 to-orange-100">
                  At Little Cafe, we believe in the power of food to bring
                  people together. Our chefs, with years of experience in
                  crafting exquisite North Indian delicacies, pour their heart
                  and soul into every meal. We source the finest ingredients and
                  use time-honored recipes to create dishes that not only
                  satisfy your palate but also transport you to the vibrant
                  streets of North India.
                </p>
                <p className="mt-4 text-orange-700 text-lg leading-relaxed from-orange-200 to-orange-100">
                  From our aromatic curries to our freshly baked naan, every
                  item on our menu is a testament to our commitment to quality
                  and authenticity. We invite you to join us for a culinary
                  journey that celebrates the rich tapestry of North Indian
                  cuisine, right here at Little Cafe.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;

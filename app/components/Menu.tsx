"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Menu = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-100 to-orange-200">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-800 text-center mb-8 sm:mb-12 flex items-center justify-center">
        Our Menu
      </h2>
      <div className="flex justify-center w-full max-w-4xl">
        <Card className="w-full">
          <CardContent className="p-4 sm:p-6 flex flex-col items-center bg-gradient-to-r from-orange-100 to-orange-200 shadow-xl">
            <div className="relative w-1/2 h-96 rounded-lg overflow-hidden">
              <Image
                src="/assets/menu.png"
                alt="Menu item"
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-300 "
              />
            </div>
            <a
              href="/assets/menu.png"
              download="FullMenu.png"
              className="w-full mt-4 sm:mt-6 flex justify-center"
            >
              <Button className="bg-orange-500 hover:bg-orange-600 text-white transition-colors duration-300 px-6 py-2">
                Download Full Menu
              </Button>
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Menu;

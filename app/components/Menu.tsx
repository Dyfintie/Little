"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Menu = () => {
  return (
    <div className=" px-4 bg-gradient-to-b from-orange-100 to-orange-200 w-full h-full flex flex-col justify-center items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-orange-800 text-center mb-12 flex items-center justify-center ">
        Our Menu
      </h2>
      <div className="flex justify-center gap-8 flew-wrap ">
        <div className="w-full lg:w-1/3 flex justify-center">
          <Card className="flex">
            <CardContent className="p-6 w-[30rem] ">
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-auto flex">
                <Image
                  src="/assets/menu.png"
                  alt="Menu item"
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-300 flex justify-center w-12"
                />
              </div>
              <a
                href="/assets/menu.png" // Path to your menu file in the public folder
                download="FullMenu.png" // Sets the file name for the downloaded file
                className="w-full mt-4"
              >
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Download Full Menu
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    
  );
};

export default Menu;

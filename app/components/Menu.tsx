"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Menu = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-b from-orange-100 to-orange-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-800 text-center mb-12">
          Our Menu
        </h2>
        <div className="flex justify-center lg:flex-row gap-8">
          <div className="w-full lg:w-1/3">
            <Card>
              <CardContent className="p-6">
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden flex">
                  <Image
                    src="/assets/menu.png"
                    alt="Menu item"
                    layout="fill"
                    objectFit="cover"
                    className="transition-opacity duration-300 flex justify-center"
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
    </section>
  );
};

export default Menu;

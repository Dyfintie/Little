"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../nlcaafe.png";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#menu", label: "Menu" },
    { href: "#review", label: "Review" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="bg-orange-100 border-orange-200 sticky top-0 z-20 w-full border-b shadow-md">
      <div className="w-full md:px-1 mx-auto lg:px-3 md:py-1">
        <div className="flex items-center justify-between py-4 ml-3">
          <Link href="/" className="flex items-center space-x-2 ">
            <Image
              src={logo}
              alt="Little Cafe Logo"
              width={80}
              height={80}
              className="rounded-md"
            />
            <span className="lg:text-3xl md:text-2xl text-3xl  font-extrabold font-serif text-orange-800 ">
              Little Cafe
            </span>
          </Link>

          <nav className="hidden md:flex items-center mr-5 lg:space-x-8 md:space-x-4 font-serif font-bold md:text-[1.375rem] lg:text-2xl ">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-orange-800 hover:text-orange-600 hover:underline font-semibold transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            <Button
              onClick={() =>
                (window.location.href =
                  "https://www.zomato.com/bangalore/little-cafe-6-basavanagudi")
              }
              className="bg-orange-500 hover:bg-orange-600 text-white font-serif font-bold text-lg"
            >
              Order Now
            </Button>
          </nav>

          <Button
            onClick={() =>
              (window.location.href =
                "https://www.zomato.com/bangalore/little-cafe-6-basavanagudi")
            }
            className="md:hidden flex ml-auto mr-4 sticky right-0  bg-orange-500 hover:bg-orange-600 text-white lg:w-fit md:w-fit sm:sticky "
          >
            Order Now
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden "
            onClick={toggleNavbar}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-orange-50"
            >
              <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-orange-800 hover:text-orange-600 hover:underline font-semibold transition-colors duration-200"
                    onClick={toggleNavbar}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

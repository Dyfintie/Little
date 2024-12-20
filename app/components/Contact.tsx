"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";
import { FaInstagram } from "react-icons/fa"; // Import Instagram icon
const Contact = () => {
  return (
    <section className=" contact w-full h-10/12  py-12 md:py-24 bg-gradient-to-b from-orange-100 to-orange-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-800 text-center mb-12">
          Contact Us
        </h2>
        <div className="flex flex-wrap gap-8 justify-center ">
          <div className="space-y-6 bg-gradient-to-r from-orange-100 to-orange-200">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 ">
                  <Phone className="text-orange-500" />
                  <span>+919741248269</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-orange-500" />
                  <span>
                    Litte Cafe,21, National High School Road, Vishweshwarapura,
                    Shankarapura
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="text-orange-500" />
                  <span>Everyday : 11AM-10:30pm</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Find us on</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center space-x-4">
                <Button
                  onClick={() =>
                    (window.location.href =
                      "https://www.instagram.com/littlecafee1/")
                  }
                  variant="outline"
                  className="bg-pink-500 hover:bg-pink-600 text-white"
                >
                  <FaInstagram className="text-white text-2xl" />
                </Button>
                <Button
                  onClick={() =>
                    (window.location.href =
                      "https://www.zomato.com/bangalore/little-cafe-6-basavanagudi")
                  }
                  variant="outline"
                  className="bg-red-500 hover:bg-red-600 text-white text-5xl *:"
                >
                  <span className="text-lg font-bold font-mono">Zomato</span>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <iframe
                  title="Little Cafe Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.1789427739507!2d77.57749107204324!3d12.948936087055307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15ec23b1d307%3A0x6ca6939aa6bf084f!2slittle%20Cafe!5e0!3m2!1sen!2sin!4v1734681127720!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

"use client";
import React from "react";
import Slider from "react-slick";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, ArrowRight } from "lucide-react";
import Link from "next/link";

// Import CSS files for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    id: 1,
    name: "Harshitha Deviprasad",
    avatar: "/assets/avatar1.jpg",
    rating: 5,
    link: "https://maps.app.goo.gl/dtbF4K4fu1LyegbL6",
    comment:
      "Little cafe is little but they prepare so many varieties of food. Good service and so friendly. I ordered Tandoori Momos, pizza, Mushroom Fried rice and milkshake all items are taste good",
  },
  {
    id: 3,
    name: "Sharath Shantharam",
    avatar: "/assets/avatar2.jpg",
    rating: 4,
    link: "https://maps.app.goo.gl/mY8fC9Rh1KuQ8XAH9",
    comment:
      "A cozy cafe offering a wide variety of options,North Indian, Chinese, Italian you name it!Almost everything that we tried were tasty and some of the items were unique.",
  },
  {
    id: 2,
    name: "Kamal Govindraj",
    avatar: "/assets/avatar3.jpg",
    rating: 5,
    link: "https://maps.app.goo.gl/vW7uGuGguyGucgQR8",
    comment:
      "A tiny place packed with delicious and quality food. Pizzas, garlic breads and paneer. I stick to their Margarita pizza filled with cheese, panner tikka regular and jain style, soya chaap. They are really good. Strawberry milk shake to down it all. Little expensive, but to maintain the quality of their food, I don't mind the cost. Friendly staff.",
  },
  {
    id: 4,
    name: "S J",
    avatar: "/assets/avatar1.jpg",
    rating: 5,
    link: "https://maps.app.goo.gl/BnoefouSuibAjWyW7",
    comment:
      "Really superb experience. Delicious farm fresh pizza and Mexican gravy rice both are superb and yummy.",
  },
  {
    id: 5,
    name: "Saksham Yt",
    avatar: "/assets/avatar1.jpg",
    rating: 5,
    link: "https://maps.app.goo.gl/yPLXzaQVy1o244su5",
    comment:
      "Good spot and great work done by the staff and service is too damn good",
  },
  {
    id: 6,
    name: "Yug",
    avatar: "/assets/avatar1.jpg",
    rating: 5,
    link: "https://maps.app.goo.gl/La4TTSB2ePueygLb8",
    comment:
      "The food was really delicious and the services hospitality was top notch.Loved the overall experience.Would like to address that the interior could be better",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

const ReviewCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    // <section className="w-full h-full py-12 md:py-24 bg-gradient-to-b from-orange-200 to-orange-100">
    <div className="min-h-screen mx-auto px-4 bg-gradient-to-b from-orange-200 to-orange-100">
      <h2 className="text-4xl md:text-5xl font-bold text-orange-800 text-center mb-12">
        Customer Reviews
      </h2>
      <div className="px-4 md:px-10">
        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id} className="px-2">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg text-orange-800">
                        {review.name}
                      </h3>
                      <StarRating rating={review.rating} />
                    </div>
                  </div>
                  <p className="text-orange-700 mb-4 flex-grow">
                    {review.comment}
                  </p>
                  <div className="mt-4 pt-4 border-t border-orange-200">
                    <Link
                      href={review.link}
                      className="inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors duration-200"
                    >
                      View full review
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    // </section>
  );
};

export default ReviewCarousel;

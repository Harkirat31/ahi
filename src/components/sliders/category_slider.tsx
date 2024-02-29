"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const categorydate = {
  name: "Spring Hangers for Residential, Commercial & Industrial",
  image_url: "/dummy/spring-mount.png",
};

export default function CategorySlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <Slider className="" {...settings}>
      <div className="h-full">
        <div className="flex flex-row justify-center items-center">
          <Image
            className="h-40 w-20 md:h-60 md:w-32"
            width={500}
            height={250}
            src={categorydate.image_url}
            alt="category_image"
          ></Image>
          <div className="bg-black/40 ml-8">
            <p className="text-xs lmd:text-lg md:text-2xl px-5 py-3 font-bold">
              {categorydate.name}
            </p>
          </div>
        </div>
      </div>
      <div className="h-full">
        <div className="flex flex-row justify-center items-center">
          <Image
            className="h-40 w-20 md:h-60 md:w-32"
            width={500}
            height={250}
            src={categorydate.image_url}
            alt="category_image"
          ></Image>
          <div className="bg-black/40 ml-8">
            <p className="text-xs lmd:text-lg md:text-2xl px-5 py-3 font-bold">
              {categorydate.name}
            </p>
          </div>
        </div>
      </div>
      <div className="h-full">
        <div className="flex flex-row justify-center items-center">
          <Image
            className="h-40 w-20 md:h-60 md:w-32"
            width={500}
            height={250}
            src={categorydate.image_url}
            alt="category_image"
          ></Image>
          <div className="bg-black/40 w-96 ml-8">
            <p className="text-xs lmd:text-lg md:text-2xl px-5 py-3 font-bold">
              {categorydate.name}
            </p>
          </div>
        </div>
      </div>
    </Slider>
  );
}

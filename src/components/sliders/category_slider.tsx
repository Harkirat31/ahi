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
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <Slider {...settings}  >
      <SliderItem></SliderItem>
      <SliderItem></SliderItem>
      <SliderItem></SliderItem>
    </Slider>
  );
}


const SliderItem = () => {
  return <div className="h-full">
    <div className="flex flex-row justify-center items-center">
      <Image
        className="h-[20vw] w-[10vw]"
        width={500}
        height={250}
        src={categorydate.image_url}
        alt="category_image"
      ></Image>
      <div className="bg-black/40 ml-8">
        <p className="text-[1.75vw] sm:text-[1.25vw]  px-5 py-1 sm:py-3 font-bold">
          {categorydate.name}
        </p>
      </div>
    </div>
  </div>
}
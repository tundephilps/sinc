import React from "react";
import Slider1 from "./Slider1";
import Slider2 from "./Slider2";
import Slider3 from "./Slider3";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css/autoplay";

const Hero = () => {
  return (
    <section className="relative  mx-auto lg:h-[100%] h-[300px]">
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40 "></div>

      <Swiper
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-[100%]"
      >
        <SwiperSlide>
          <Slider1 />
        </SwiperSlide>
        <SwiperSlide>
          <Slider2 />
        </SwiperSlide>
        <SwiperSlide>
          <Slider3 />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;

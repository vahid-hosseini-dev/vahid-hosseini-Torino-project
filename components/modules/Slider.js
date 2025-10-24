"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Slider() {
  const images = [
    "/img/slider/car.png",
    "/img/slider/plane.png",
    "/img/slider/R.png",
    "/img/slider/OIP.png",
  ];

  return (
    <div className="w-[300px] mt-5">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={false}
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`carousel-${index}`}
              className="w-[300px] h-[300px] "
              width={300}
              height={300}
            />
          </SwiperSlide>
        ))}

        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </div>
  );
}

export default Slider;

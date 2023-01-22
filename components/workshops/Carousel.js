import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Keyboard, Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";

export default function Carousel({ images, slug }) {
  return (
    <div className="max-w-full overflow-x-scroll no-scrollbar">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination, Navigation, Keyboard]}
        className="mySwiper flex justify-center items-center w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide
            className="mySwiper flex justify-center items-center w-full"
            key={`carousel_image_${index}`}
          >
            <img
              src={`/images/workshops/${slug}/${image}`}
              alt="workshop"
              className="h-64 md:h-72 lg:h-80 xl:h-96 w-full object-cover rounded-xl"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";

export default function Carousel({ images, slug }) {
  return (
    <div className="max-w-full overflow-x-scroll no-scrollbar">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper flex justify-center items-center w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide
            className="mySwiper flex justify-center items-center w-full"
            key={`carousel_image_${index}`}
          >
            <img
              src={`/images/workshops/${slug}/${images[0]}`}
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

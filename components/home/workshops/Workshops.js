import React from "react";
import WorkshopCarousel from "./WorkshopCarousel";

export default function Workshops() {
  return (
    <div className="py-12 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 ">
      <div className="text-xl md:text-2xl lg:text-3xl font-bold text-center">
        Workshops
      </div>
      <WorkshopCarousel />
    </div>
  );
}

import React from "react";
import WorkshopCarousel from "./WorkshopCarousel";

export default function Workshops() {
  return (
    <div className="py-12 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 ">
      <div className="text-xl md:text-2xl lg:text-3xl font-bold text-center">
        Workshops
      </div>
      <p className="max-w-md md:max-w-lg xl:max-w-2xl 2xl:max-w-6xl text-lg mt-4 text-slate-800 mx-auto text-justify">
        Professional workshops and various events have been organized by the
        Techno-Cryptics Club from time to time. These workshops are organized
        during each semester in order to help anyone interested in becoming a
        professional graphic designer.
      </p>
      <WorkshopCarousel />
    </div>
  );
}

import React from "react";
import AnimationBg1 from "./AnimationBg1";

export default function Hero() {
  return (
    <div className="hero min-h-[90vh] relative">
      <AnimationBg1 />
      <div className="hero-content">
        <div className="h-48 md:h-52 lg:h-72 aspect-[2/3] z-[-1] bg-[#F0CE00] absolute left-0 top-24 "></div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl absolute left-12 md:left-16 lg:left-28 top-32 lg:top-40 font-bold py-2 text-[#031261] w-fit">
          Hey there
        </h1>
        <div className="w-[90vw] mx-auto">
          <p className="pt-3 pb-6 text-xl lg:text-2xl xl:text-3xl">
            Technocryptics is a graphic designing club of Rajasthan Technical
            University, Kota. We organize workshops to make you get statred
            towards Graphic Design and Out team have professionals who can guide
            you towards a shining future of Graphic Designing.
          </p>
          <div className="flex justify-center items-center">
            {" "}
            <a
              className="bg-[#29ABE2] p-4 text-2xl lg:text-3xl font-semibold text-white rounded-tl-xl rounded-tr-xl rounded-br-xl absolute bottom-24 lg:bottom-32  ring-2 ring-[#031261]"
              href="#workshops"
            >
              See Workshops
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

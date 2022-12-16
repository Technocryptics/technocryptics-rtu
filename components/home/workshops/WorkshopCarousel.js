import React from "react";
import WorkshopCard from "./WorkshopCard";

export default function WorkshopCarousel() {
  return (
    <div className=" w-[90%] ring-4 ring-slate-800 mt-12 mx-auto rounded-3xl pt-4 pb-2 px-4 md:w-[70%] lg:w-[60%]  bg-yellow-600/5">
      <p className="text-slate-600 py-2 font-mono">Scroll this way &gt;&gt;</p>
      <div className="w-full horizontal-scroll overflow-x-auto flex flex-row gap-4 snap-x snap-mandatory py-2">
        <WorkshopCard />
        <WorkshopCard />
        <WorkshopCard />
      </div>
    </div>
  );
}

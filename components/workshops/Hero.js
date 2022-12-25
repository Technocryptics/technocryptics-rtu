import React from "react";
import Carousel from "./Carousel";

export default function Hero({ images, slug, name, description, type, link }) {
  return (
    <div className="hero min-h-[80vh] overflow-x-hidden">
      <div className="hero-content flex-col lg:flex-row">
        <div className="max-w-[90vw] mx-auto sm:max-w-sm lg:max-w-md xl:max-w-lg">
          <Carousel images={images} slug={slug} key={slug} />
        </div>
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold">
            {name}
          </h1>
          <p className="w-fit mt-4 p-2 bg-sky-200 rounded-full text-sm px-4 font-bold font-mono">
            {type}
          </p>
          <p className="py-6">{description}</p>
          {type == "completed" && (
            <button
              className="btn btn-warning text-slate-700 active:bg-amber-400"
              onClick={() => {
                alert("Form Inactive: Workshop has been completed");
              }}
            >
              Google Form
            </button>
          )}
          {type == "upcoming" && (
            <a
              className="btn btn-warning text-slate-700 active:bg-amber-400"
              href={link}
            >
              Google Form
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

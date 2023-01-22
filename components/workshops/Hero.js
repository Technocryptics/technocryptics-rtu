import React from "react";

export default function Hero({ images, slug, name, description, type }) {
  return (
    <div className="hero my-12 md:my-16 overflow-x-hidden">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={`/images/workshops/${slug}/${images[0]}`}
          alt="workshop"
          className="h-80 md:h-96 rounded-xl w-auto object-cover mx-auto"
          loading="lazy"
        />

        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold">
            {name}
          </h1>
          <p className="w-fit mt-4 p-2 bg-sky-200 rounded-full text-sm px-4 font-bold font-mono">
            {type}
          </p>
          <p className="py-6">{description}</p>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function Hero() {
  return (
    <div className="hero min-h-[90vh] relative">
      <div className="hero-content text-center">
        <div className="max-w-md md:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-500 py-2">
            Hey there
          </h1>
          <p className="pt-3 pb-6 text-lg">
            Technocryptics is a graphic designing club of Rajasthan Technical
            University, Kota. We organize workshops to make you get statred
            towards Graphic Design and Out team have professionals who can guida
            you towards a shining future of Graphic Designing.
          </p>
          <a className="btn btn-wide shadow-[4px_4px_0_0_rgba(0,0,0,1)] active:shadow-[0_0_0_0_rgba(0,0,0,1)] btn-warning text-slate-800 text-2xl outline-none">
            See Workshops
          </a>
        </div>
      </div>
    </div>
  );
}

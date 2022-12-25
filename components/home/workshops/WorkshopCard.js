import Link from "next/link";
import React from "react";

export default function WorkshopCard({ name, type, image, slug }) {
  return (
    <div className="card w-[90%] lg:w-[70%] xl:w-[50%] bg-white text-slate-800 border-2 border-fuchsia-100 nap-center flex-shrink-0 snap-start">
      <figure>
        <img
          src={image}
          loading="lazy"
          alt="workshop"
          className="h-64 md:h-72 lg:h-80 rounded-xl w-auto object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="badge badge-warning">{type}</div>
      </div>
      <div className="card-actions mx-auto pb-4">
        <Link
          href={slug}
          className="btn bg-fuchsia-400 text-slate-900 border-1 hover:bg-fuchsia-500"
        >
          View Workshop
        </Link>
      </div>
    </div>
  );
}

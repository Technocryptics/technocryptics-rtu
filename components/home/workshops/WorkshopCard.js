import React from "react";

export default function WorkshopCard({ is = "upcoming", name = "Workshop" }) {
  return (
    <div className="card w-[90%] sm:w-96 bg-slate-50 text-slate-800 border-2 border-fuchsia-100 nap-center flex-shrink-0">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="badge badge-warning">{is}</div>
        <p>....about....20words...</p>
        <div className="card-actions justify-end">
          <button className="btn bg-fuchsia-400 border-1 hover:bg-fuchsia-500">
            Register Today
          </button>
        </div>
      </div>
    </div>
  );
}

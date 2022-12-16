import React from "react";

export default function Navbar() {
  return (
    <div className="navbar bg-white/20 backdrop-blur-md border-b-2 sm:border-none border-b-slate-100/20 text-black fixed top-0 left-0 w-full z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 ring-2 ring-amber-100 rounded-box w-52 bg-white"
          >
            <li>
              <a className="active:bg-amber-400">Home</a>
            </li>
            <li>
              <a className="active:bg-amber-400">Workshops</a>
            </li>
            <li>
              <a className="active:bg-amber-400">Links</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl hover:bg-transparent active:bg-amber-200">
          Technocryptics RTU
        </a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            {/* Show on basis of state if a first user or not:  <span className="badge badge-xs badge-primary indicator-item"></span> */}
          </div>
        </button>
      </div>
    </div>
  );
}

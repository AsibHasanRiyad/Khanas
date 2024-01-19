"use client";
import React from "react";

function SharedButton({ title }) {
  return (
    <div>
      <button className="w-36 h-16 border-2 border-red-600 text-sky-800 font-black rounded-full hover:text-black duration-300 relative group">
        <span className="absolute w-12 group-hover:w-[88%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-green-500 group-hover:bg-green-700 group-hover:duration-500 -z-10"></span>
        {title}
      </button>
    </div>
  );
}

export default SharedButton;

import React from "react";

export default function TopDate({ date }) {
  return (
    <div className="relative flex flex-row justify-center items-center w-full h-16 py-2 px-6">
      <div className="text-xs mr-4 h-12 w-20 flex flex-row justify-center items-center">Test</div>
      <div className="w-full h-full bg-slate-800 flex flex-row justify-center items-center rounded-xl text-white font-extrabold tracking-wider">{date}</div>
      <div className="text-xs ml-4 h-12 w-20 flex flex-row justify-center items-center">Remove</div>
    </div>
  );
}

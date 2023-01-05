import React from "react";

export default function TopDate({ date }) {
  return (
    <div className="relative flex flex-row justify-center items-center w-full h-16 py-2 px-8">
      <div className="w-full h-full bg-green-400 flex flex-row justify-center items-center rounded-2xl">{date}</div>
    </div>
  );
}

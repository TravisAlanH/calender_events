import React from "react";

export default function Calender({ date, events }) {
  return (
    <div className="w-full h-full fixed p-8 bg-red-300 -z-10">
      <div className="w-full h-full bg-cyan-400">
        {events.map((item, index) => {
          if (date === item.Date) {
            return <p key={index}>{item.Task}</p>;
          }
          return null;
        })}
      </div>
    </div>
  );
}

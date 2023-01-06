import React from "react";
import CalenderHourBlock from "./CalenderHourBlock";

const time = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

export default function Calender({ date, events }) {
  return (
    <div className="w-full h-full fixed p-8 bg-red-300 -z-10">
      <div className="w-full h-full bg-cyan-400 pt-2">
        {time.map((item, index) => {
          return <CalenderHourBlock time={item} events={events} date={date} key={index} />;
        })}
      </div>
    </div>
  );
}

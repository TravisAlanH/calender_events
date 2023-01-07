import React from "react";
import CalenderEventBlock from "./CalenderEventBlock";

export default function CalenderHourBlock({ time, events, date }) {
  let dailyEvent = [];

  events.map((item, index) => {
    // console.log(time.substr(0, 2));
    // console.log(item.Time.substr(0, 2));
    // console.log(date);
    // console.log(item.Date);

    if (time.substr(0, 2) === item.Time.substr(0, 2) && date === item.Date) {
      dailyEvent.push(item);
      dailyEvent.sort((a, b) => a.Time.localeCompare(b.Time));
    }
    return null;
  });

  // console.log(dailyEvent[0].Event || false);

  return (
    <div className="max-w-full h-auto m-2 bg-orange-500">
      <div className="flex flex-row w-full border-b-2 border-black">
        <div className="h-6">{time}</div>
      </div>
      <div className="min-h-min w-full flex flex-col">
        {dailyEvent.map((item, index) => {
          return <CalenderEventBlock data={item} key={index} />;
        })}
      </div>
    </div>
  );
}

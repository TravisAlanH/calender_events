import React, { createContext } from "react";
import CalenderEventBlock from "./CalenderEventBlock";

export const render = createContext();

export default function CalenderHourBlock({ time, events, date, force, update, setEventData, setEditData }) {
  let dailyEvent = [];

  events = JSON.parse(localStorage.getItem("TodoList")) || [];

  events.map((item, index) => {
    if (time.substr(0, 2) === item.Time.substr(0, 2) && date === item.Date) {
      dailyEvent.push(item);
      dailyEvent.sort((a, b) => a.Time.localeCompare(b.Time));
    }
    return null;
  });

  return (
    <div className="max-w-full h-auto m-2 bg-red-800 bg-opacity-30">
      <div className="flex flex-row w-full border-b-2 border-black">
        <div className="h-6">{time}</div>
      </div>
      <div className="min-h-min w-full flex flex-col">
        {dailyEvent.map((item, index) => {
          return <CalenderEventBlock data={item} key={index} events={events} force={force} update={update} setEventData={setEventData} setEditData={setEditData} />;
        })}
      </div>
    </div>
  );
}

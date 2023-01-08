import React, { useState } from "react";
import CalenderHourBlock from "./CalenderHourBlock";

const time = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

export default function Calender({ date, events, setEventData, setEditData }) {
  const [forceUpdate, setForceUpdate] = useState(false);
  return (
    <div className="w-full h-full fixed px-6 -z-30 ">
      <div className="w-full h-full bg-slate-400 bg-opacity-30 pt-2 rounded-xl">
        {time.map((item, index) => {
          return <CalenderHourBlock time={item} events={events} date={date} force={forceUpdate} update={setForceUpdate} setEventData={setEventData} setEditData={setEditData} key={index} />;
        })}
      </div>
    </div>
  );
}

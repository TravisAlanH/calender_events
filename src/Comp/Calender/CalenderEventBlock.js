import React, { useState } from "react";
import { FaCheckSquare, FaWindowClose, FaCog } from "react-icons/fa";
// import { EditData } from "../TodoHome";
// import { Data } from "../TodoHome";

export default function CalenderEventBlock({ data, events, force, update, setEventData, setEditData }) {
  const [view, setView] = useState(false);
  const [rerender, setRerender] = useState(false);

  let idView = "id" + data.ID;

  function ViewInfo() {
    if (view === false) {
      document.getElementById(idView).classList.replace("h-11", "min-h-11");
      setView(!view);
    } else {
      document.getElementById(idView).classList.replace("min-h-11", "h-11");
      setView(!view);
    }
  }

  function deleteItem(ID, Task) {
    if (window.confirm("Are you sure you want to Delete:" + Task) === false) return;
    events.map((item, index) => {
      if (ID === item.ID) {
        events.splice(index, 1);
      }
      return item;
    });
    localStorage.setItem("TodoList", JSON.stringify(events));
    setRerender(!rerender);
    setEventData(events);
    update(!force);
  }

  return (
    <div id={idView} className="flex flex-row w-full my-1 h-11 transition-all border-b-2 border-black  bg-red-800 bg-opacity-90">
      <div className="w-12 flex flex-row justify-center items-start py-2">
        <div style={{ backgroundColor: data.Color }} className="w-6 h-6 rounded-full"></div>
      </div>
      <div className="flex flex-row w-full">
        <div id="EventName" className="w-full h-full  overflow-hidden" onClick={() => ViewInfo()}>
          <div className="flex flex-row justify-start items-center px-2 h-10">
            <div className="text-white pr-4">{data.Time}</div>
            <div className="text-white uppercase font-bold">{data.Event}</div>
          </div>
          <div className="">asdf</div>
        </div>
        <div id="EventEdit" className="h-full flex flex-row justify-center items-start pt-3 text-white text-xl">
          <button className="px-1">
            <FaCheckSquare />
          </button>
          <button
            className="px-1"
            onClick={() => {
              deleteItem(data.ID, data.Event);
            }}
          >
            <FaWindowClose />
          </button>
          <button
            className="px-1"
            onClick={() => {
              document.getElementById("EditEvent").classList.replace("-bottom-48", "bottom-0");
              setEditData(data);
            }}
          >
            <FaCog />
          </button>
        </div>
      </div>
    </div>
  );
}

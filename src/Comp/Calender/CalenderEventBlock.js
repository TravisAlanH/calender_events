import React, { useState } from "react";
import { EditData } from "../TodoHome";
// import { Data } from "../TodoHome";

export default function CalenderEventBlock({ data, events, force, update }) {
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
    update(!force);
    // window.location.reload();
  }

  return (
    <div id={idView} className="flex flex-row w-full my-1 h-11 transition-all">
      <div className="w-12 border-2 border-black flex flex-row justify-center items-start py-2">
        <div style={{ backgroundColor: data.Color }} className="w-6 h-6 rounded-full"></div>
      </div>
      <div className="flex flex-row w-full">
        <div id="EventName" className="w-full h-full  border-2 border-black overflow-hidden" onClick={() => ViewInfo()}>
          <div className="flex flex-col justify-start items-start px-2">
            <div className="text-xs">{data.Time}</div>
            <div className="">{data.Event}</div>
          </div>
          <div className="">asdf</div>
        </div>
        <div id="EventEdit" className="h-full flex flex-row justify-center items-start border-2 border-black">
          <button>M</button>
          <button
            onClick={() => {
              deleteItem(data.ID, data.Event);
            }}
          >
            D
          </button>
          <EditData.Consumer>
            {({ editData, setEditData }) => {
              function sendData() {
                setEditData(data);
              }
              return (
                <button
                  onClick={() => {
                    sendData();
                    document.getElementById("EditEvent").classList.replace("-bottom-56", "bottom-0");
                  }}
                >
                  E
                </button>
              );
            }}
          </EditData.Consumer>
        </div>
      </div>
    </div>
  );
}

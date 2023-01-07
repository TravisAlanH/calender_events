import React, { useState } from "react";
import { EditData } from "../TodoHome";

export default function CalenderEventBlock({ data }) {
  const [view, setView] = useState(false);
  let idView = "id" + data.ID;

  function ViewInfo() {
    if (view === false) {
      document.getElementById(idView).classList.replace("h-12", "h-24");
      setView(!view);
    } else {
      document.getElementById(idView).classList.replace("h-24", "h-12");
      setView(!view);
    }
  }

  return (
    <div id={idView} className="flex flex-row w-full my-1 h-12 transition-all">
      <div className="w-12 border-2 border-black">ll</div>
      <div className="flex flex-row w-full">
        <div id="EventName" className="w-full h-full  border-2 border-black" onClick={() => ViewInfo()}>
          <div className="">{data.Event}</div>
        </div>
        <div id="EventEdit" className="h-full flex flex-row justify-center items-start border-2 border-black">
          <button>M</button>
          <button>D</button>
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

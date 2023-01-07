import React from "react";

export default function CalenderEventBlock() {
  return (
    <div className="flex flex-row w-full my-1">
      <div className="w-12 h-12 border-2 border-black">dasdf</div>
      <div className="flex flex-row w-full">
        <div id="EventName" className="w-full h-full  border-2 border-black">
          asdf
        </div>
        <div id="EventEdit" className="h-full flex flex-row justify-center items-center border-2 border-black">
          <button>M</button>
          <button>D</button>
          <button>E</button>
        </div>
      </div>
    </div>
  );
}

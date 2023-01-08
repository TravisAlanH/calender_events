import React from "react";
import AddTask from "./AddTask";
import EditTask from "./EditTask";

import NavButtonCenter from "./NavButtonCenter";
// import NavButtonViewGen from "./NavButtonViewGen";
import NavButtonSubDay from "./NavButtonSubDay";
import NavButtonAddDay from "./NavButtonAddDay";

export default function NavBase({ events, editData, setEventData, setEditData }) {
  return (
    <>
      <div id="NavBar" className="fixed bottom-0 w-full h-16 bg-slate-800 rounded-t-3xl z-10 transition-all">
        <div id="NavBarItems" className="fixed bottom-2 flex flex-row justify-center items-center w-full gap-6 z-10 transition-all">
          {/* <NavButtonViewGen /> */}
          <NavButtonSubDay />
          <NavButtonCenter />
          <NavButtonAddDay />
          {/* <NavButtonViewGen /> */}
        </div>
      </div>
      <div>
        <AddTask events={events} />
        <EditTask events={events} setEventData={setEventData} editData={editData} setEditData={setEditData} />
      </div>
    </>
  );
}

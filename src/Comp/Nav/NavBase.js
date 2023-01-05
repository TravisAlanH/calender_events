import React from "react";
import AddTask from "./AddTask";
import NavButtonCenter from "./NavButtonCenter";
import NavButtonViewGen from "./NavButtonViewGen";
import NavButtonSubDay from "./NavButtonSubDay";
import NavButtonAddDay from "./NavButtonAddDay";

export default function NavBase() {
  return (
    <>
      <div className="fixed bottom-0 w-full h-16 bg-red-500 rounded-t-3xl z-10">
        <div id="NavBarItems" className="fixed bottom-4 flex flex-row justify-center items-center w-full gap-4 z-10 transition-all">
          <NavButtonViewGen />
          <NavButtonSubDay />
          <NavButtonCenter />
          <NavButtonAddDay />
          <NavButtonViewGen />
        </div>
      </div>
      <div>
        <AddTask />
      </div>
    </>
  );
}

import React from "react";
import AddTask from "./AddTask";
import NavButtonCenter from "./NavButtonCenter";
import NavButtonViewGen from "./NavButtonViewGen";

export default function NavBase() {
  return (
    <>
      <div className="fixed bottom-0 w-full h-12 bg-red-500 rounded-t-xl z-10">
        <div id="NavBarItems" className="fixed bottom-1 flex flex-row justify-center items-center w-full gap-4 z-10 transition-all">
          <NavButtonViewGen />
          <NavButtonViewGen />
          <NavButtonCenter />
          <NavButtonViewGen />
          <NavButtonViewGen />
        </div>
      </div>
      <div>
        <AddTask />
      </div>
    </>
  );
}

import React, { useState } from "react";

export default function NavButtonCenter() {
  const [show, setShow] = useState(false);

  function ShowAddTask() {
    if (show === true) {
      document.getElementById("AddTask").classList.remove("-bottom-56");
      document.getElementById("AddTask").classList.add("bottom-0");
      document.getElementById("NavBarItems").classList.remove("gap-4");
      document.getElementById("NavBarItems").classList.add("gap-8");
      document.getElementById("NavBar").classList.remove("h-16");
      document.getElementById("NavBar").classList.add("h-12");

      document.querySelectorAll("[id=NavButtonGen]").forEach((element) => {
        // element.classList.remove("border-4");
        element.classList.remove("w-14");
        element.classList.remove("h-14");
        element.classList.add("w-8");
        element.classList.add("h-8");
        element.classList.add("mt-6");
      });
    } else {
      document.getElementById("AddTask").classList.remove("bottom-0");
      document.getElementById("AddTask").classList.add("-bottom-56");
      document.getElementById("NavBarItems").classList.add("gap-4");
      document.getElementById("NavBarItems").classList.remove("gap-8");
      document.getElementById("NavBar").classList.add("h-16");
      document.getElementById("NavBar").classList.remove("h-12");
      document.querySelectorAll("[id=NavButtonGen]").forEach((element) => {
        // element.classList.add("border-4");
        element.classList.remove("w-8");
        element.classList.remove("h-8");
        element.classList.add("w-14");
        element.classList.add("h-14");
        element.classList.remove("mt-6");
      });
    }
  }
  return (
    <>
      <div
        className="bg-white rounded-full w-16 h-16 border-4 border-red-500 flex flex-row justify-center items-center mb-2"
        onClick={() => {
          setShow(!show);
          ShowAddTask();
        }}
      >
        A
      </div>
    </>
  );
}

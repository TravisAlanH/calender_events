import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

export default function NavButtonCenter() {
  const [show, setShow] = useState(true);

  function ShowAddTask() {
    if (show === true) {
      document.getElementById("AddTask").classList.remove("-bottom-52");
      document.getElementById("AddTask").classList.add("bottom-0");
      // document.getElementById("NavBarItems").classList.remove("gap-4");
      // document.getElementById("NavBarItems").classList.add("gap-8");

      // document.querySelectorAll("[id=NavButtonGen]").forEach((element) => {
      //   // element.classList.remove("border-4");
      //   element.classList.remove("w-14");
      //   element.classList.remove("h-14");
      //   element.classList.add("w-8");
      //   element.classList.add("h-8");
      //   element.classList.add("mt-6");
      // });
    } else {
      document.getElementById("AddTask").classList.remove("bottom-0");
      document.getElementById("AddTask").classList.add("-bottom-52");
      // document.getElementById("NavBarItems").classList.add("gap-4");
      // document.getElementById("NavBarItems").classList.remove("gap-8");

      // document.querySelectorAll("[id=NavButtonGen]").forEach((element) => {
      //   // element.classList.add("border-4");
      //   element.classList.remove("w-8");
      //   element.classList.remove("h-8");
      //   element.classList.add("w-14");
      //   element.classList.add("h-14");
      //   element.classList.remove("mt-6");
      // });
    }
  }
  return (
    <>
      <div
        className="bg-white rounded-full w-12 h-12 flex flex-row justify-center items-center "
        onClick={() => {
          setShow(!show);
          ShowAddTask();
        }}
      >
        <FaPlus />
      </div>
    </>
  );
}

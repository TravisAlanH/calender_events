import React from "react";
import TextInputWithLabel from "../Inputs/TextInputWithLabel";
import { v4 as uuid } from "uuid";
import { FaWindowClose } from "react-icons/fa";

const data = [
  {
    "Name": "Event",
    "ElementID": "AddNewEvent",
    "DefaultValue": "",
    "PlaceHolder": "Event Name",
    "Required": true,
  },
  {
    "Name": "Email",
    "ElementID": "AddNewEmail",
    "DefaultValue": "",
    "PlaceHolder": "Email Address",
    "Required": false,
  },
  {
    "Name": "Comment",
    "ElementID": "AddNewComment",
    "DefaultValue": "",
    "PlaceHolder": "Additional Info",
    "Required": false,
  },
];

export default function AddTask({ events }) {
  // TodoList
  let newData = {};
  function AddEvent() {
    newData["ID"] = uuid();
    newData["Checked"] = false;
    newData["Dot"] = "block";
    newData["Edit"] = false;
    newData["CheckMark"] = "none";
    newData["Event"] = document.getElementById("AddNewEvent").value;
    newData["Email"] = document.getElementById("AddNewEmail").value;
    newData["Comment"] = document.getElementById("AddNewComment").value;
    newData["Date"] = document.getElementById("AddNewDate").value;
    newData["Time"] = document.getElementById("AddNewTime").value;
    newData["Color"] = document.getElementById("AddNewColor").value;
    // console.log(events);
    events.push(newData);
    localStorage.setItem("TodoList", JSON.stringify(events));
    // setRerender(!rerender);
  }
  return (
    <div id="AddTask" className="fixed -bottom-52 w-full bg-red-900 h-72 flex flex-col justify-start items-center -z-10 rounded-t-3xl transition-all">
      <div
        className="w-full flex flex-row justify-end mr-12 mt-4 mb-2 text-white"
        onClick={() => {
          document.getElementById("AddTask").classList.replace("bottom-0", "-bottom-52");
        }}
      >
        <FaWindowClose />
      </div>

      <form onSubmit={AddEvent} className="flex flex-col gap-2 mb-4 pr-16">
        {data.map((item, index) => {
          return <TextInputWithLabel {...item} key={index} />;
        })}
        <div className="flex flex-row justify-center items-center translate-x-8">
          <input className="mx-2" type={"date"} defaultValue="yyyy-mm-dd" id="AddNewDate" />
          <input className="mx-2" type={"time"} id="AddNewTime" />
          <input className="mx-2" type={"color"} id="AddNewColor" defaultValue={"#000033"} />
        </div>
        <input className="mx-2 text-white font-bold translate-x-8" type={"submit"} />
      </form>
    </div>
  );
}

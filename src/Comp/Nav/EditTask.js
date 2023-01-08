import React, { useState } from "react";
import TextInputWithLabel from "../Inputs/TextInputWithLabel";
import { FaWindowClose } from "react-icons/fa";

export default function EditTask({ editData, events, setEventData, setEditData }) {
  const [reRender, setReRender] = useState(false);

  let data = [
    {
      "Name": "Event",
      "ElementID": "EditNewEvent",
      "DefaultValue": editData.Event,
      "PlaceHolder": "Event Name",
      "Required": true,
    },
    {
      "Name": "Email",
      "ElementID": "EditNewEmail",
      "DefaultValue": editData.Email,
      "PlaceHolder": "Email Address",
      "Required": false,
    },
    {
      "Name": "Comment",
      "ElementID": "EditNewComment",
      "DefaultValue": editData.Comment,
      "PlaceHolder": "Additional Info",
      "Required": false,
    },
  ];
  console.log(editData);
  console.log(editData.Color);

  // TodoList
  function EditEvent(e) {
    e.preventDefault();
    events.map((item) => {
      if (item.ID === editData.ID) {
        item["ID"] = editData.ID;
        item["Checked"] = false;
        item["Dot"] = "block";
        item["Edit"] = false;
        item["CheckMark"] = "none";
        item["Event"] = document.getElementById("EditNewEvent").value;
        item["Email"] = document.getElementById("EditNewEmail").value;
        item["Comment"] = document.getElementById("EditNewComment").value;
        item["Date"] = document.getElementById("EditNewDate").value;
        item["Time"] = document.getElementById("EditNewTime").value;
        item["Color"] = document.getElementById("EditNewColor").value;

        setEditData(item);
      }
      localStorage.setItem("TodoList", JSON.stringify(events));
      setEventData(events);
      setReRender(!reRender);

      document.getElementById("EditEvent").classList.replace("bottom-0", "-bottom-48");

      return null;
    });
  }
  return (
    <div id="EditEvent" className="fixed -bottom-48 w-full bg-cyan-900 h-72 flex flex-col justify-start items-center -z-20 rounded-t-3xl transition-all">
      <div
        className="w-full flex flex-row justify-end mr-12 mt-4 mb-2 text-white"
        onClick={() => {
          document.getElementById("EditEvent").classList.replace("bottom-0", "-bottom-48");
        }}
      >
        <FaWindowClose />
      </div>
      <form onSubmit={EditEvent} className="flex flex-col gap-2 mb-4 pr-6">
        {data.map((item, index) => {
          return <TextInputWithLabel {...item} key={index} />;
        })}
        <div className="flex flex-row justify-center items-center translate-x-4">
          <input className="mx-2" type={"date"} defaultValue={editData.Date} id="EditNewDate" />
          <input className="mx-2" type={"time"} defaultValue={editData.Time} id="EditNewTime" />
        </div>
        <input className="mx-2 text-white font-bold translate-x-4" type={"submit"} />
      </form>
    </div>
  );
}

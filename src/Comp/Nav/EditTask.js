import React from "react";
import TextInputWithLabel from "../Inputs/TextInputWithLabel";

export default function EditTask({ dataInput, events }) {
  let data = [
    {
      "Name": "Event",
      "ElementID": "EditNewEvent",
      "DefaultValue": "",
      "PlaceHolder": "Event Name",
      "Required": true,
    },
    {
      "Name": "Email",
      "ElementID": "EditNewEmail",
      "DefaultValue": "",
      "PlaceHolder": "Email Address",
      "Required": false,
    },
    {
      "Name": "Comment",
      "ElementID": "EditNewComment",
      "DefaultValue": "",
      "PlaceHolder": "Additional Info",
      "Required": false,
    },
  ];

  // TodoList
  //   let newData = {};
  function EditEvent() {
    // newData["ID"] = dataInput.ID;
    // newData["Checked"] = false;
    // newData["Dot"] = "block";
    // newData["Edit"] = false;
    // newData["CheckMark"] = "none";
    // newData["Event"] = document.getElementById("EditNewEvent").value;
    // newData["Email"] = document.getElementById("EditNewEmail").value;
    // newData["Comment"] = document.getElementById("EditNewComment").value;
    // newData["Date"] = document.getElementById("EditNewDate").value;
    // newData["Time"] = document.getElementById("EditNewTime").value;
    // newData["Color"] = document.getElementById("EditNewColor").value;
    // events.push(newData);
    // localStorage.setItem("TodoList", JSON.stringify(events));
    document.getElementById("EditEvent").classList.replace("bottom-0", "-bottom-56");
  }
  return (
    <div id="EditEvent" className="fixed -bottom-56 w-full bg-cyan-900 h-72 flex flex-row justify-center items-start -z-10 rounded-t-3xl transition-all">
      <form onSubmit={EditEvent} className="flex flex-col gap-2 my-4">
        {data.map((item, index) => {
          return <TextInputWithLabel {...item} key={index} />;
        })}
        <div className="flex flex-row justify-center items-center">
          <input className="mx-2" type={"date"} defaultValue="yyyy-mm-dd" id="EditNewDate" />
          <input className="mx-2" type={"time"} id="EditNewTime" />
          <input className="mx-2" type={"color"} id="EditNewColor" defaultValue={"#000033"} />
        </div>
        <input className="mx-2 text-white font-bold" type={"submit"} />
      </form>
    </div>
  );
}

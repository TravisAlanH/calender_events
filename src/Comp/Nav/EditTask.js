import React, { useContext, useState } from "react";
import TextInputWithLabel from "../Inputs/TextInputWithLabel";
import { EditData } from "../TodoHome";

export default function EditTask({ dataInput, events, setEventData, setEditData }) {
  const [reRender, setReRender] = useState(false);
  const EditDataContext = useContext(EditData);

  let data = [
    {
      "Name": "Event",
      "ElementID": "EditNewEvent",
      "DefaultValue": dataInput.Event,
      "PlaceHolder": "Event Name",
      "Required": true,
    },
    {
      "Name": "Email",
      "ElementID": "EditNewEmail",
      "DefaultValue": dataInput.Email,
      "PlaceHolder": "Email Address",
      "Required": false,
    },
    {
      "Name": "Comment",
      "ElementID": "EditNewComment",
      "DefaultValue": dataInput.Comment,
      "PlaceHolder": "Additional Info",
      "Required": false,
    },
  ];

  // TodoList
  // let newData = {};
  function EditEvent(e) {
    e.preventDefault();
    events.map((item) => {
      if (item.ID === dataInput.ID) {
        item["ID"] = dataInput.ID;
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

        // EditDataContext(item);
        // <EditData.Consumer>
        //   {({ editData, setEditData }) => {
        //     setEditData(item);
        //   }}
        // </EditData.Consumer>;
      }
      localStorage.setItem("TodoList", JSON.stringify(events));
      setEventData(events);
      setReRender(!reRender);

      document.getElementById("EditEvent").classList.replace("bottom-0", "-bottom-56");

      return null;
    });
  }
  return (
    <div id="EditEvent" className="fixed -bottom-56 w-full bg-cyan-900 h-72 flex flex-row justify-center items-start -z-10 rounded-t-3xl transition-all">
      <form onSubmit={EditEvent} className="flex flex-col gap-2 my-4">
        {data.map((item, index) => {
          return <TextInputWithLabel {...item} key={index} />;
        })}
        <div className="flex flex-row justify-center items-center">
          <input className="mx-2" type={"date"} defaultValue={dataInput.Date} id="EditNewDate" />
          <input className="mx-2" type={"time"} defaultValue={dataInput.Time} id="EditNewTime" />
          <input className="mx-2" type={"color"} id="EditNewColor" defaultValue={dataInput.Color} />
        </div>
        <input className="mx-2 text-white font-bold" type={"submit"} />
      </form>
    </div>
  );
}

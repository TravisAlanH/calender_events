import React from "react";
import TextInputWithLabel from "../Inputs/TextInputWithLabel";

const data = [
  {
    "Name": "Event",
    "DefaultValue": "",
    "PlaceHolder": "Event Name",
    "Required": true,
  },
  {
    "Name": "Email",
    "DefaultValue": "",
    "PlaceHolder": "Email Address",
    "Required": false,
  },
  {
    "Name": "Comment",
    "DefaultValue": "",
    "PlaceHolder": "Additional Info",
    "Required": false,
  },
];

export default function AddTask() {
  return (
    <div id="AddTask" className="fixed -bottom-56 w-full bg-red-900 h-64 flex flex-row justify-center items-start -z-10 rounded-t-xl transition-all">
      <form className="flex flex-col gap-2 my-4">
        {data.map((item, index) => {
          return <TextInputWithLabel {...item} key={index} />;
        })}
        <div className="flex flex-row justify-center items-center">
          <input className="mx-2" type={"date"} defaultValue="mm/dd/yyyy" />
          <input className="mx-2" type={"color"} />
          <input className="mx-2 text-white font-bold" type={"submit"} />
        </div>
      </form>
    </div>
  );
}

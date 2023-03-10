import React from "react";

export default function TextInputWithLabel({ Name, PlaceHolder, DefaultValue, Required, ElementID }) {
  return (
    <div className="flex flex-row justify-end font-bold">
      <label className="text-white px-2">{Name}</label>
      <input type={"text"} placeholder={PlaceHolder} defaultValue={DefaultValue} name={Name} required={Required} id={ElementID} className="text-base" />
    </div>
  );
}

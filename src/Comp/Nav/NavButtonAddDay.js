import React from "react";
import { AdjustDate } from "../TodoHome";

export default function Add() {
  return (
    <AdjustDate.Consumer>
      {({ adjustDate, setAdjustDate }) => {
        return (
          <div id="NavButtonGen" className=" NavButtonGen bg-white rounded-full w-14 h-14 border-4 border-red-500 flex flex-row justify-center items-center z-10 transition-all" onClick={() => setAdjustDate(adjustDate + 1)}>
            +
          </div>
        );
      }}
    </AdjustDate.Consumer>
  );
}

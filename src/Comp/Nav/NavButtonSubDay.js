import React from "react";
import { AdjustDate } from "../TodoHome";
import { FaAngleDoubleLeft } from "react-icons/fa";

export default function Sub() {
  return (
    <AdjustDate.Consumer>
      {({ adjustDate, setAdjustDate }) => {
        return (
          <div id="NavButtonGen" className=" NavButtonGen bg-white rounded-full w-12 h-12 flex flex-row justify-center items-center z-10 transition-all" onClick={() => setAdjustDate(adjustDate - 1)}>
            <FaAngleDoubleLeft />
          </div>
        );
      }}
    </AdjustDate.Consumer>
  );
}

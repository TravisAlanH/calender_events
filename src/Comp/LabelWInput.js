import React from "react";

export default function LabelWInput({ command, dataInput }) {
  return (
    <div className="FlexRowCenterEnd">
      <label>{command}</label>
      <input
        type="text"
        id={command}
        placeholder={command}
        defaultValue={dataInput}
      />
    </div>
  );
}

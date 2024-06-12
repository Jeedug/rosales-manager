import React, { useState } from "react";
import GetStatusIcon from "./GetStatusIcon";

export default function Title({ colIndex, colData, customStyle }) {
    const [value, setValue] = useState(colData.text);
  
    return (
      <div
        key={colIndex}
        className="w-full items-center flex flex-row gap-1 leading-1"
      >
        <input
          style={{ 
            width: value?.length * 8 - value.length - 5,
            color : customStyle,
           }}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
          className="font-semibold text-[14px] text-black leading-0 h-[24px] outline-none  "
        />
        <GetStatusIcon status={colData.status} />
      </div>
    );
  }
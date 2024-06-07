import React, { useState } from "react";

export default function Paragraph({ colIndex, colData }) {
    const [value, setValue] = useState(colData.text);
  
    return (
      <div
        key={colIndex}
        className="w-full items-center flex flex-row gap-1 leading-1"
      >
        <input
          style={{ width: value.length * 7 }}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onBlur={()=>{
            console.log(value.length)
            if (!value.length){
              console.log("perdido")
            }
          }}
          value={value}
          className="font-semibold text-[11px] h-[18px] outline-none "
        />
  
      </div>
    );
  }
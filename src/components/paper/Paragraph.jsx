import React, { useState } from "react";

export default function Paragraph({ colIndex, colData, customStyle }) {
    const [value, setValue] = useState(colData.text);
  
    return (
      <div
        key={colIndex}
        className="w-full items-center flex flex-row "
      >
        <input
          style={{ width: value?.length * 7, color : customStyle }}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onBlur={()=>{
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
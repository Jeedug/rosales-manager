import React, { useState } from "react";

export default function Title({ colIndex, colData, customStyle }) {
  const [value, setValue] = useState(() => {
    return colData.text.split("");
  });

  return (
    <div
      key={colIndex}
      className="w-full items-center flex flex-row gap-1 leading-1 cursor-text"
    >
      <span className="font-semibold text-[14px] text-black items-center leading-0 h-[24px] flex flex-row justify-center">
        {value.map((char, index) => (
          <Char char={char} index={index} />
        ))}
      </span>
    </div>
  );
}

function Char({ char, index }) {
  const [selected, setSelected] = useState(false);

  return (
    <>
      <button
        style={selected ? customStyle : {}}
        onClick={() => setSelected(true)}
        className=" w-[0.1px] h-[12px] animate-pulse ml-[0.05px] cursor-text"
      ></button>
      {char === " " ? (
        <span
          onClick={() => setSelected(true)}
          className="w-[4px] h-[12px] animate-pulse ml-[0.1px] cursor-text"
        ></span>
      ) : (
        <span
          onClick={() => setSelected(true)}
          className="text-[14px] text-black"
        >
          {char}
        </span>
      )}
    </>
  );
}

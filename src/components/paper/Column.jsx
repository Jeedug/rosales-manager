import React, { useRef, useState } from "react";
import Title from "./Title";
import Paragraph from "./Paragraph";
import { motion } from "framer-motion";

function AddParagraphInCol({ setIsHoveringEdit, setWantsto }) {
  const [isDragging, setIsDragging] = useState(false);
  const initialPosition = useRef(null);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    initialPosition.current = event.clientX;
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const currentX = event.clientX;
      const movement = currentY - initialPosition.current;

      if (movement > 50) {
        setWantsto("add");
      } else if (movement < -50) {
        setWantsto("delete");
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    initialPosition.current = null;
  };

  return (
    <div
      onMouseEnter={() => {
        setIsHoveringEdit(true);
      }}
      onMouseLeave={() => {
        setIsHoveringEdit(false);
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      className="h-[6px] z-20 cursor-pointer w-full absolute right-0 left-0 -bottom-1 hover:bg-black/50 animate-pulse transition rounded-full text-[12px]"
    ></div>
  );
}

function ColItem({ rowIndex, colIndex, rowData }) {
  const [isHoveringEdit, setIsHoveringEdit] = useState(false);
  const [wantsTo, setWantsTo] = useState("");
  
  return (
    <>
      <div
        key={`${rowIndex}-${colIndex}`}
        style={{
          paddingLeft: colIndex > 0 ? "8px" : "0px",
          color: wantsTo === "delete" ? "#b23f3f" : "#000000",
        }}
        className="h-[10px] items-center flex flex-row gap-2 py-3 pr-2 relative"
      >
        {rowData.type === "paragraph" ? (
          <Paragraph key={rowIndex} colData={rowData} colIndex={rowIndex} />
        ) : (
          <Title key={rowIndex} colData={rowData} colIndex={rowIndex} />
        )}

        <AddParagraphInCol setWantsto={setWantsTo} setIsHoveringEdit={setIsHoveringEdit} />
      </div>
        {isHoveringEdit && (
          <motion.div
            key={`${rowIndex}-${colIndex}-hover`}
            style={{
              paddingLeft: colIndex > 0 ? "8px" : "0px",
            }}
            className=" h-[32px] items-center flex flex-row gap-2 translate-y-1 relative text-gray-400"
              initial={{ opacity: 0, x: 10, height: 0, paddingTop: 0 }}
              animate={{ opacity: 1, x: 0, height: "auto", paddingTop: 5 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2,  }}
          >
            <span className="text-black">Paragraph</span>
            <span className="">Image</span>
          </motion.div>
        )}
    </>
  );
}

export default function Column({ rowIndex, item }) {
    return (
      <div
        key={rowIndex}
        className=" justify-start gap-1 "
      >
        <div className="flex flex-col w-auto py-1 pr-4">
          {item.data.map((colData, colIndex) =>
            <ColItem colindex={colIndex} rowIndex={rowIndex} rowData={colData} />
          )}
        </div>
      </div>
    );
  }
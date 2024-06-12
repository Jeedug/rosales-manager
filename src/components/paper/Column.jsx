import React, { useEffect, useRef, useState } from "react";
import Title from "./Title";
import Paragraph from "./Paragraph";
import { motion } from "framer-motion";
import useUpdateNote from "../../hooks/updateNote";
import useNoteStore from "../../stores/note";

function ParagraphCol({ setIsHoveringEdit, setWantsto, rowIndex, colIndex }) {
  const {
    elementRef,
    handleMouseDown,
    handleMouseUp,
    handleMouseEnter,
    handleMouseLeave,
  } = useUpdateNote("vertical", setWantsto, setIsHoveringEdit, rowIndex, colIndex);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      ref={elementRef}
      className="h-[6px] z-20 cursor-pointer w-full absolute right-0 left-0 -bottom-1 hover:bg-black/50 animate-pulse transition rounded-full text-[12px]"
    ></div>
  );
}

function ColItem({ rowIndex, colIndex, rowData, initialWantsTo }) {
  const [isHoveringEdit, setIsHoveringEdit] = useState(false);
  const [wantsTo, setWantsTo] = useState(initialWantsTo);
  const noteStatus = useNoteStore((state) => state.status);

  return (
    <>
      <div
        key={`${rowIndex}-${colIndex}`}
        className="h-[10px] justify-start  flex flex-row py-3 relative "
      >
        {rowData.type === "paragraph" ? (
          <Paragraph
            key={rowIndex}
            colData={rowData}
            colIndex={rowIndex}
            customStyle={wantsTo === "delete" ? "#b23f3f" : "#000000"}
          />
        ) : rowData.type === "title" ? (
          <Title
            key={rowIndex}
            colData={rowData}
            colIndex={rowIndex}
            customStyle={wantsTo === "delete" ? "#b23f3f" : "#000000"}
          />
        ) : (
          <Image key={rowIndex} colIndex={rowIndex} colData={rowData} />
        )}

        <ParagraphCol
          setWantsto={setWantsTo}
          setIsHoveringEdit={setIsHoveringEdit}
          rowIndex={rowIndex}
          colIndex={colIndex}
        />
      </div>
      {isHoveringEdit && noteStatus === `${rowIndex}-${colIndex}` ? (
        <motion.div
          key={`${rowIndex}-${colIndex}-hover`}
          style={{
            paddingLeft: colIndex > 0 ? "8px" : "0px",
          }}
          className=" h-[32px] gap-1 items-center flex flex-row translate-y-1 relative text-gray-400"
          initial={{ opacity: 0, x: 10, height: 0, paddingTop: 0 }}
          animate={{ opacity: 1, x: 0, height: "auto", paddingTop: 5 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-black h-3">Paragraph</span>
          <span className="h-3">Image</span>
        </motion.div>
      ) : (
        ""
      )}
    </>
  );
}

function AddNewCol({ setIsHoveringEdit, setWantsto, rowIndex }) {
  const {
    elementRef,
    handleMouseDown,
    handleMouseUp,
    handleMouseEnter,
    handleMouseLeave,
  } = useUpdateNote("horizontal", setWantsto, setIsHoveringEdit, rowIndex, undefined);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      ref={elementRef}
      className=" h-full w-[5px] z-20 cursor-pointer absolute right-0 hover:bg-black/50 animate-pulse transition rounded-full text-[12px]"
    ></div>
  );
}

export default function Column({ rowIndex, item }) {
  const [isHoveringEdit, setIsHoveringEdit] = useState(false);
  const [wantsTo, setWantsTo] = useState("");
  const noteStatus = useNoteStore((state) => state.status);

  return (
    <>
      <div key={rowIndex} className=" justify-start gap-1 ">
        <div className="flex flex-col w-auto pr-2 relative rounded-md border border-t-transparent border-b-transparent border-l-transparent">
          {item.data.map((colData, colIndex) => (
            <ColItem
              key={`${rowIndex}-${colIndex}`}
              colIndex={colIndex}
              rowIndex={rowIndex}
              rowData={colData}
              initialWantsTo={wantsTo}
            />
          ))}
          <AddNewCol
            setWantsto={setWantsTo}
            setIsHoveringEdit={setIsHoveringEdit}
            rowIndex={rowIndex}
          />
        </div>
      </div>
      {isHoveringEdit && noteStatus === `${rowIndex}-undefined` ? (
        <motion.div
          key={`${rowIndex}-hover`}
          className=" items-start justify-start px-2 h-full flex flex-col whitespace-nowrap"
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "auto" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-black">New Column</span>

          <span className="text-gray-400">New Row</span>
        </motion.div>
      ) : (
        ""
      )}
    </>
  );
}

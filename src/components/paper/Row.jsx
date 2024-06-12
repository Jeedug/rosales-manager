import React, { useRef, useState } from "react";
import Paragraph from "./Paragraph";
import Title from "./Title";
import { motion } from "framer-motion";
import Image from "./Image";
import useUpdateNote from "../../hooks/updateNote";
import useNoteStore from "../../stores/note";

function ParagraphRow({ setIsHoveringEdit, setWantsto, rowIndex, colIndex }) {
  const {
    handleMouseDown,
    handleMouseUp,
    handleMouseEnter,
    handleMouseLeave,
    elementRef,
  } = useUpdateNote("horizontal", setWantsto, setIsHoveringEdit, rowIndex, colIndex);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className="h-full w-[6px] absolute right-0 cursor-pointer hover:bg-black/50 animate-pulse transition rounded-full text-[12px] z-10"
      ref={elementRef}
    ></div>
  );
}

function RowItem({ rowIndex, colIndex, rowData }) {
  const [isHoveringEdit, setIsHoveringEdit] = useState(false);
  const [wantsTo, setWantsTo] = useState("");
  const noteStatus = useNoteStore((state) => state.status);

  return (
    <>
      <div
        key={`${rowIndex}-${colIndex}`}
        className=" h-[10px] items-center flex flex-row gap-2 py-2 pr-2 relative "
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

        <ParagraphRow
          setWantsto={setWantsTo}
          setIsHoveringEdit={setIsHoveringEdit}
          rowIndex={rowIndex}
          colIndex={colIndex} 
        />
      </div>

      {isHoveringEdit && noteStatus === `${rowIndex}-${colIndex}` ? (
        <motion.div
          key={`${rowIndex}-${colIndex}`}
          style={{
            paddingLeft: colIndex > 0 ? "8px" : "0px",
          }}
          className=" h-[12px] flex flex-col pb-4 pl-5 ml-2 items-center whitespace-nowra gap-2 justify-center pr-2 relative text-gray-400"
          initial={{ opacity: 0, y: -10, width: 0 }}
          animate={{ opacity: 1, y: 0, width: "auto" }}
          transition={{ duration: 0.2 }}
        >
          <span className="h-[2px] text-black">Paragraph</span>
          <span className="h-[2px] ">Image</span>
        </motion.div>
      ) : (
        ""
      )}
    </>
  );
}

function AddNewRow({ setIsHoveringEdit, setWantsto, rowIndex }) {
  const {
    handleMouseDown,
    handleMouseUp,
    handleMouseEnter,
    handleMouseLeave,
    elementRef,
  } = useUpdateNote("vertical", setWantsto, setIsHoveringEdit, rowIndex, undefined);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className="h-[8px] w-full absolute -bottom-1 cursor-pointer hover:bg-black/50 animate-pulse transition rounded-full text-[12px] z-10"
      elementRef={elementRef}
    ></div>
  );
}

export default function Row({ rowIndex, item }) {
  const [isHoveringEdit, setIsHoveringEdit] = useState(false);
  const [wantsTo, setWantsTo] = useState("");
  const noteStatus = useNoteStore((state) => state.status);

  return (
    <>
      <div className="flex flex-row items-center relative py-1  border border-l-transparent border-r-transparent border-t-transparent">
        {item.data.map((rowData, colIndex) => (
          <RowItem key={`${rowIndex}-${colIndex}`} colIndex={colIndex} rowIndex={rowIndex} rowData={rowData} />
        ))}

        <AddNewRow
          setWantsto={setWantsTo}
          setIsHoveringEdit={setIsHoveringEdit}
          rowIndex={rowIndex}
        />
      </div>

      {isHoveringEdit && noteStatus === `${rowIndex}-undefined` ? (
        <motion.div
          className="flex flex-row gap-2 items-start whitespace-nowrap justify-start relative text-gray-400 "
          initial={{ opacity: 0, y: -10, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <span className="h-[13px] text-black">New Row</span>
          <span className="h-[13px] ">New Column</span>
        </motion.div>
      ) : (
        ""
      )}
    </>
  );
}

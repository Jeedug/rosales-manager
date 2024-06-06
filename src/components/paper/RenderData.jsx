import React, { useState } from "react";
import { Timer } from "lucide-react";

function getStatusIcon(status) {
  switch (status) {
    case "pending":
      return (
        <div className="w-[18px] h-[18px] rounded-full border-2 cursor-pointer" />
      );
    case "completed":
      return (
        <div className="w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center cursor-pointer">
          ✓
        </div>
      );
    case "failed":
      return (
        <div className="w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center cursor-pointer">
          ✗
        </div>
      );
    default:
      return null;
  }
}

function Paragraph({ colIndex, colData }) {
  return (
    <div
      key={colIndex}
      className="w-full items-center flex flex-row gap-1 leading-1"
    >
      <span className="font-semibold text-[11px] h-[10px]">{colData.text}</span>
      {getStatusIcon(colData.status)}
    </div>
  );
}

function Title({ colIndex, colData }) {
  return (
    <div key={colIndex} className="flex flex-col ">
      <div className="w-full items-center flex flex-row gap-1 ">
        <span className="font-semibold text-[14px] text-black leading-0 h-[16px] ">
          {colData.text}
        </span>
        {getStatusIcon(colData.status)}
      </div>
    </div>
  );
}

function Column({ rowIndex, item }) {
  return (
    <div key={rowIndex} className="w- gap-5 flex flex-col">
      <div className="flex flex-col border gap-0 py-2 pr-4">
        {item.data.map((colData, colIndex) =>
          colData.type === "title" ? (
            <Title key={colIndex} colData={colData} colIndex={colIndex} />
          ) : (
            <Paragraph key={colIndex} colData={colData} colIndex={colIndex} />
          )
        )}
      </div>
    </div>
  );
}

function AddParagraphInRow() {
  return <div className="h-full border w-2 absolute right-0 cursor-copy"></div>;
}

function RemoveParagraphInRow() {
  return <div className="h-full border border-r-transparent w-2 absolute left-0 cursor-copy"></div>;
}

function Row({ rowIndex, item }) {
  return (
    <div className="  flex flex-row items-center relative">
      {item.data.map((rowData, colIndex) => (
        <>
          <div
            key={`${rowIndex}-${colIndex}`}
            style={{
              paddingLeft: colIndex > 0 ? "8px" : "0px",
            }}
            className=" h-[10px] items-center flex flex-row gap-2 py-3 pr-2 relative"
          >
            {rowData.text}
            {getStatusIcon(rowData.status)}
            <AddParagraphInRow />
            { colIndex > 0 ? (
              <RemoveParagraphInRow />
            )
            : null}
          </div>
        </>
      ))}
    </div>
  );
}

export default function RenderData({ data }) {
  return (
    <div className="text-[11px] flex flex-col w-full font-medium text-gray-800 py-1 overflow-y-auto">
      {data.map((item, rowIndex) => {
        if (item.type === "row") {
          return <Row key={rowIndex} item={item} rowIndex={rowIndex} />;
        } else if (item.type === "columnRow") {
          return (
            <div className="flex flex-row">
              {item.data.map((columnItem) => {
                return (
                  <Column
                    key={rowIndex}
                    rowIndex={rowIndex}
                    item={columnItem}
                  />
                );
              })}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

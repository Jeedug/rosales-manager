import React from "react";
import { Timer } from "lucide-react";

function getStatusIcon(status) {
  switch (status) {
    case "pending":
      return <div className="w-[18px] h-[18px] rounded-full border-2 cursor-pointer" />;
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
    <div key={colIndex} className="w-full items-center flex border flex-row gap-2 leading-1">
      <span className="font-semibold text-[11px] ">
        {colData.text}
      </span>
      {getStatusIcon(colData.status)}
    </div>
  );
}

function Title({ colIndex, colData }) {
  return (
    <div key={colIndex} className="flex flex-col ">
      <div className="w-full items-center flex flex-row gap-2 border">
        <span className="font-semibold text-[14px] text-black leading-0">
          {colData.text}
        </span>
        {getStatusIcon(colData.status)}
      </div>
    </div>
  );
}

export default function RenderData({ data }) {
  return (
    <div className="text-[11px] flex flex-col w-full font-medium text-gray-800 border h-[300px] border-l-transparent border-r-transparent border-b-transparent overflow-y-auto">
      {data.map((item, rowIndex) => {
        if (item.type === "row") {
          return item.data.map((rowData, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="w-full items-center flex border border-gray-200/50 border-b-transparent border-t-transparent border-r-transparent border-l-transparent  flex-row gap-2"
            >
              {rowData.text}
              {getStatusIcon(rowData.status)}
            </div>
          ));
        } else if (item.type === "column") {
          return (
            <div
              key={rowIndex}
              className="w-full gap-5 border-bt-transparent flex border border-r-transparent border-l-transparent flex-col"
            >
              <div className="flex flex-col border pr-2 gap-0">
                {item.data.map((colData, colIndex) => (
                  colData.type === "title"
                    ? <Title key={colIndex} colData={colData} colIndex={colIndex} />
                    : <Paragraph key={colIndex} colData={colData} colIndex={colIndex} />
                ))}
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

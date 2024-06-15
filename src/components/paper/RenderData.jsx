import React from "react";
import Column from "./Column";
import Row from "./Row";

export default function RenderData({ data }) {
  return (
    <div className="text-[11px] flex flex-col w-full font-medium text-gray-800 py-1 overflow-y-auto">
      {data?.map((item, rowIndex) => (
        item.type === "row" ? (
          <Row key={rowIndex} item={item} rowIndex={rowIndex} />
        ) : item.type === "columnRow" ? (
          <div key={rowIndex} className="flex flex-row border-l-transparent border-r-transparent border-t-transprent">
            {item.data.map((columnItem, colIndex) => (
              <Column key={`${rowIndex}-${colIndex}`} rowIndex={rowIndex} item={columnItem} />
            ))}
          </div>
        ) : null
      ))}
    </div>
  );
}

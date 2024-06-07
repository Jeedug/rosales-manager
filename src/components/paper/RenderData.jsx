import React from "react";
import Column from "./Column";
import Row from "./Row";

export default function RenderData({ data }) {
  return (
    <div className="text-[11px] flex flex-col w-full font-medium text-gray-800 py-1 overflow-y-auto">
      {data.map((item, rowIndex) => {
        if (item.type === "row") {
          return <Row key={rowIndex} item={item} rowIndex={rowIndex} />;
        } else if (item.type === "columnRow") {
          return (
            <div className="flex flex-row border-l-transparent border-r-transparent border-t-transprent">
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

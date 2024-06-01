import React from "react";
import FileBrowser from "../menus/FileBrowser";

export default function Files({ selected }) {
  return (
    selected === "Files" && (
      <div className="w-full h-full flex flex-col items-start justify-start text-[14px] font-light ">
        <div className="flex flex-col gap-1">
          <span>Saving Path</span>
        </div>
        <FileBrowser />
      </div>
    )
  );
}

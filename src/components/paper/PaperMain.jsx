import { AArrowDown, AArrowUp, ImageDownIcon, Trash2 } from "lucide-react";
import React, { useEffect } from "react";
import RenderData from "./RenderData";
import useCurrentNote from "../../stores/currentNote";

export default function PaperMain() {
  const currentNote = useCurrentNote((state) => state.note);

  return (
    <div className="flex flex-col w-full">
      <div className="h-full w-full px-4 gap-2 flex flex-col rounded-xl mr-3 text-[13px] font-light pt-16 transition">
        <div className="flex flex-row justify-between items-center ">
          <span className="text-[24px] font-semibold leading-6">{ currentNote?.name }</span>

          <div className="flex flex-row gap-1">
            <AArrowUp className="w-[32px] h-[32px] rounded-full p-2 hover:bg-gray-50 cursor-pointer hover:text-black transition text-gray-400" />
            <AArrowDown className="w-[32px] h-[32px] rounded-full p-2 hover:bg-gray-50 cursor-pointer hover:text-black transition text-gray-400" />
            <Trash2 className="w-[32px] h-[32px] rounded-full p-2 hover:bg-gray-50 cursor-pointer hover:text-black transition text-gray-400" />
            <ImageDownIcon className="w-[32px] h-[32px] rounded-full p-2 hover:bg-gray-50 cursor-pointer hover:text-black transition text-gray-400" />
          </div>
        </div>

        <div className="flex flex-row gap-3">
          <span className="font-medium">5 Pending</span>
          <span className="font-medium">0 Completed</span>
          <span className="font-medium">0 Failed</span>
        </div>

        <RenderData data={currentNote?.data} />
      </div>

      <div className="flex flex-row gap-3 w-full py-2 border items-center px-5 justify-end border-l-transparent border-r-transparent bottom-0 relative">
        <button className="bg-blue-400/40 text-white font-normal px-6 text-[14px] py-2 rounded-full">
          Save
        </button>
      </div>
    </div>
  );
}

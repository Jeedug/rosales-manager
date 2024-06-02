import React from "react";

export default function PaperMain() {
  return (
    <div className="h-full w-full px-3 gap-2 flex flex-col rounded-xl mr-3 mb-[5000px] text-[13px] font-light pt-16">
      <span className="text-[24px] font-semibold ">Timers</span>

      <div className="text-[13px] flex flex-col w-full font-medium text-gray-500">
        <span className="w-full items-center flex border border-t-transparent border-r-transparent border-l-transparent py-1 flex-row gap-2">
          Text
          <div className="w-[18px] h-[18px] rounded-full border-2" />
        </span>

        <span className="w-full gap-5 items-center border-t-transparent flex border border-r-transparent border-l-transparent py-1 flex-row">
          <div className="flex flex-col">
            <span className="font-semibold text-[16px] text-black">Section</span>
            <span className="w-full items-center flex bordere border-t-transparent border-r-transparent border-l-transparent py-1 flex-row gap-2">
              Text
              <div className="w-[18px] h-[18px] rounded-full border-2" />
            </span>
            <span className="w-full items-center flex bordere border-t-transparent border-r-transparent border-l-transparent py-1 flex-row gap-2">
              Text
              <div className="w-[18px] h-[18px] rounded-full border-2" />
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-[16px] text-black">Section</span>
            <span className="w-full items-center flex bordere border-t-transparent border-r-transparent border-l-transparent py-1 flex-row gap-2">
              Text
              <div className="w-[18px] h-[18px] rounded-full border-2" />
            </span>
            <span className="w-full items-center flex bordere border-t-transparent border-r-transparent border-l-transparent py-1 flex-row gap-2">
              Text
              <div className="w-[18px] h-[18px] rounded-full border-2" />
            </span>
          </div>
        </span>
      </div>
    </div>
  );
}

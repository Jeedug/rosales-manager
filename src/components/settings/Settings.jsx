import { PinRightIcon } from "@radix-ui/react-icons";
import RightArrow from "../icons/RightArrow";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../shadcdn/Drawer";

import React from "react";

export default function Settings() {
  return (
    <DrawerContent className="bg-white items-start  h-screen w-[500px]  outline-none">
      <span className="px-10 text-2xl text-gray-700 font-light tracking-wide">
        Settings
      </span>
      <main className="flex flex-row pt-5 h-full w-full mt-5 border-b border">
        <nav className="h-full w-[120px] flex flex-col text-gray-500 font-light items-start">
          <div className="flex flex-row gap-2 items-center justify-start px-2 w-full h-[30px] text-gray-700">
            <RightArrow />
            <span className=" text-[13px]">
              General
            </span>
          </div>

          <div className="flex flex-row gap-2 items-center justify-start px-2 w-full h-[30px] text-gray-400 cursor-pointer">
            <PinRightIcon />
            <span className="text-[13px]">
              Files
            </span>
          </div>

          <div className="flex flex-row gap-2 items-center justify-start px-2 w-full h-[30px] text-gray-400 cursor-pointer">
            <PinRightIcon />
            <span className="text-[13px]">
              Preferences
            </span>
          </div>

          <div className="flex flex-row gap-2 items-center justify-start px-2 w-full h-[30px] text-gray-400 cursor-pointer">
            <PinRightIcon />
            <span className="text-[13px]">
              Notifications
            </span>
          </div>
        </nav>


        <div className="w-full h-full ">

        </div>
      </main>

      <DrawerFooter className="flex flex-row justify-end px-10 w-full">
        <DrawerClose className="flex flex-row gap-3 ">
          <button
            variant="outline"
            className="py-2 px-6 border border-gray-400 rounded-full text-black text-[13px] hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            variant="outline"
            className="bg-blue-500 hover:bg-blue-600 rounded-full text-white px-6 py-2 text-[13px] transition"
          >
            Accept
          </button>
        </DrawerClose>
      </DrawerFooter>
      <figure className="absolute right-1 bottom-[35%] h-[200px] w-[7px] rounded-full bg-gray-700/10"></figure>
    </DrawerContent>
  );
}

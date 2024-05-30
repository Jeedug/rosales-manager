import {
  DrawerClose,
  DrawerContent,
  DrawerFooter,
} from "../shadcdn/Drawer";

import React from "react";
import Tab from "./Tab";
import { Settings2, ArchiveRestore } from "lucide-react";
import Preferences from "./Preferences";
import Files from "./Files";

export default function Settings() {
  const [selected, setSelected] = React.useState("Preferences");

  return (
    <DrawerContent className="bg-white items-start  h-screen w-[500px]  outline-none">
      <span className="px-10 text-2xl text-gray-700 font-light tracking-wide">
        Settings
      </span>
      <main className="flex flex-row pt-5 h-full w-full mt-5 border-l-transparent border-r-transparent border-2 border-gray-200 ">
        <nav className="h-full w-[120px] flex flex-col text-gray-500 font-light items-start">
          <Tab
            selected={selected}
            setSelected={setSelected}
            title="Preferences"
          >
            <Settings2 className="h-4 w-4 " />
          </Tab>
          <Tab 
            selected={selected} 
            setSelected={setSelected} 
            title="Files"
          >
            <ArchiveRestore className="h-4 w-4 " />
          </Tab>
        </nav>

        <div className="w-full h-full px-10 relative overflow-y-auto">
          <Preferences selected={selected} />
          <Files selected={selected} />
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

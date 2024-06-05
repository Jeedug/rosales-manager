import React, { useState } from "react";
import { appWindow } from "@tauri-apps/api/window";
import CloseWindow from "../icons/CloseWindow";
import MinimizeWindow from "../icons/MinimizeWindow";
import ToggleWindow from "../icons/ToggleWindow";
import MenuBarContext from "./MenuBarContext";
import SettingsButton from '../settings/SettingsButton'

export default function MenuBar() {
  const [isMaximized, setIsMaximized] = useState(false);

  const handleCloseWindow = () => {
    appWindow.close();
  };

  const handleMinimizeWindow = (event) => {
    appWindow.minimize();
    setIsMaximized(false);
    event.stopPropagation();
  };

  const handleToggleWindow = (event) => {
    appWindow.toggleMaximize();
    setIsMaximized(!isMaximized);
    event.stopPropagation();
  };

  const disableContext = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <MenuBarContext>
        <div
          data-tauri-drag-region
          className="fixed px-1 items-center rounded-tl-xl rounded-tr-xl flex top-0 left-0 right-0 justify-end h-10 select-none z-10"
        >
          <figure
            className="bg-transparent w-full h-[4px] absolute top-0"
            onContextMenu={disableContext}
          />
          <div className="flex flex-row">
            <div
              onClick={handleMinimizeWindow}
              className="p-2 px-4 from-transparent to-transparent bg-gradient-to-b hover:from-gray-300/10 hover:to-gray-300/25 rounded-tr-xl flex items-center rounded-lg"
            >
              <MinimizeWindow />
            </div>
            {/* <div
              onClick={handleToggleWindow}
              className="p-2 px-4 from-transparent to-transparent bg-gradient-to-b hover:from-gray-300/10 hover:to-gray-300/25 rounded-tr-xl flex items-center rounded-lg"
            >
              <ToggleWindow />
            </div> */}
            <div
              onClick={handleCloseWindow}
              className="p-2 px-4 from-transparent to-transparent bg-gradient-to-b hover:from-gray-300/10 hover:to-gray-300/25 rounded-tr-xl flex items-center rounded-lg"
            >
              <CloseWindow />
            </div>
          </div>
        </div>
      </MenuBarContext>
      <SettingsButton />
    </>
  );
}

import React from "react";
import TittleBarStyle from "../menubar/MenuBar";

export default function MainLayout({ children }) {
  
  // const handleContextDisable = (event) => {
  //   event.preventDefault();
  // };

  return (
    <div
      draggable="false"
      // onContextMenu={handleContextDisable}
      className="bg-white overflow-hidden cursor-default rounded-xl h-screen w-full text-gray-600 font-medium flex flex-row items-center justify-center select-none"
    >
      <TittleBarStyle />
      {children}
    </div>
  );
}

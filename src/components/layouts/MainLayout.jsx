import React from "react";
import TittleBarStyle from "../../components/navigation/TittleBarStyle";

export default function MainLayout({ children }) {
  
  // const handleContextDisable = (event) => {
  //   event.preventDefault();
  // };

  return (
    <div
      draggable="false"
      // onContextMenu={handleContextDisable}
      className="bg-slate-100 cursor-default rounded-xl h-screen w-full text-gray-600 font-medium items-center justify-center select-none flex flex-col border border-gray-200 gap-5 "
    >
      <TittleBarStyle />
      {children}
    </div>
  );
}

import React, { useState } from "react";

export default function Webs({ selected }) {
  const [subMenu, setSubMenu] = useState("europamundo");

  if (selected == "Webs") {
    return (
      <div className="w-full h-full select-auto flex flex-col pt-10">
        <nav className="h-[40px] flex flex-row justify-start">
        <button
            onClick={() => {
              setSubMenu("europamundo");
            }}
            style={{
              backgroundColor:
                subMenu == "europamundo"
                  ? "rgb(255, 255, 255)"
                  : "rgb(245, 245, 245)",
            }}
            className="cursor-pointer hover:bg-gray-50 border-r-2 rounded px-2 py-1 bg-white text-[12px] font-light"
          >
            Europamundo
          </button>
          <button
            onClick={() => {
              setSubMenu("sierramadre");
            }}
            style={{
              backgroundColor:
                subMenu == "sierramadre"
                  ? "rgb(255, 255, 255)"
                  : "rgb(245, 245, 245)",
            }}
            className="cursor-pointer hover:bg-gray-50 border-r-2 rounded px-2 py-1 bg-white text-[12px] font-light"
          >
            Sierra Madre
          </button>
          <button
            onClick={() => {
              setSubMenu("magnicharters");
            }}
            style={{
              backgroundColor:
                subMenu == "magnicharters"
                  ? "rgb(255, 255, 255)"
                  : "rgb(245, 245, 245)",
            }}
            className="cursor-pointer hover:bg-gray-50 border-r-2 rounded px-2 py-1 bg-white text-[12px] font-light"
          >
            Magnicharters
          </button>
          <a className="flex flex-row items-center" href="https://contravel.com.mx/" rel="noreferrer" target="_blank">
            <button className="cursor-pointer hover:bg-gray-50 border-r-2 rounded px-2 py-1 bg-white text-[12px] font-light">
              Contravel
            </button>
          </a>
          <button
            onClick={() => {
              setSubMenu("flyaerus");
            }}
            style={{
              backgroundColor:
                subMenu == "flyaerus"
                  ? "rgb(255, 255, 255)"
                  : "rgb(245, 245, 245)",
            }}
            className="cursor-pointer hover:bg-gray-50 border-r-2 rounded px-2 py-1 bg-white text-[12px] font-light"
          >
            Fly Aerus
          </button>
        </nav>

        {subMenu == "sierramadre" && (
          <iframe
            className="w-full h-full"
            src="https://www.sierramadre.travel/es"
          ></iframe>
        )}
        {subMenu == "magnicharters" && (
          <iframe
            className="w-full h-full"
            src="https://www.magnicharters.com"
          ></iframe>
        )}
        {subMenu == "flyaerus" && (
          <iframe
            className="w-full h-full"
            src="https://flyaerus.com/"
          ></iframe>
        )}
        {subMenu == "europamundo" && (
          <iframe
            className="w-full h-full"
            src="https://www.europamundo-online.com/"
          ></iframe>
        )}
      </div>
    );
  }

  return null;
}

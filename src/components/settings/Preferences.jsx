import React from "react";
import useSettings from "../../hooks/settings";

export default function Preferences({ selected }) {

  const {settings, updateFontSize} = useSettings();

  const handleChange = (e) => {
    updateFontSize(e.target.value);
  }

  return (
    selected === "Preferences" && (
      <div className="w-full h-full flex flex-col items-start justify-start text-[14px] font-light">
        <div className="flex flex-col gap-1">
            <span>Font Size</span>
            <input onChange={handleChange} value={settings.preferences.fontSize} type="number" className="w-[100px] h-[27px] rounded-full border px-2 py-2 text-[12px] flex items-center justify-center outline-none" />
        </div>
      </div>
    )
  );
}

import React from "react";
import useSettings from "../../hooks/settings";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../shadcdn/Select";

export default function Preferences({ selected }) {
  const { settings, updateKey } = useSettings();

  const handleChange = (value) => {
    updateKey(value.target.value);
  };

  return (
    selected === "Acceso" && (
      <div className="w-full h-full flex flex-col items-start justify-start text-[14px] font-light outline-none">
        <div className="flex flex-col gap-1">
          <span>Llave de acceso</span>
          <input class="rounded-full border px-2 py-1 outline-none" type="password" value={settings.access.key} onChange={handleChange} />
          
        </div>
      </div>
    )
  );
}

function Item({ value }) {
  return (
    <SelectItem key={value} value={value}>
      {value}
    </SelectItem>
  );
}

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
  const { settings, updateFontSize } = useSettings();

  const handleChange = (value) => {
    updateFontSize(value);
  };

  return (
    selected === "Preferences" && (
      <div className="w-full h-full flex flex-col items-start justify-start text-[14px] font-light outline-none">
        <div className="flex flex-col gap-1">
          <span>Font Size</span>
          <Select onValueChange={handleChange} >
            <SelectTrigger className="flex items-center w-[80px] rounded-full py-0 outline-none gap-2">
              <SelectValue className="outline-none w-full" placeholder={settings.preferences.fontSize} />
            </SelectTrigger>
            <SelectContent >
              <SelectGroup className="w-[80px]">
                <Item value="10" />
                <Item value="12" />
                <Item value="14" />
                <Item value="16" />
                <Item value="20" />
                <Item value="24" />
                <Item value="32" />
                <Item value="36" />
                <Item value="40" />
              </SelectGroup>
            </SelectContent>
          </Select>
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

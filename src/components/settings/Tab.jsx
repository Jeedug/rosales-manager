import React from "react";

export default function Tab({ selected, setSelected, title, children }) {
  const handleClick = (e) => {
    e.preventDefault();
    setSelected(title);
    console.log(selected);
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-row gap-2 items-center justify-start px-2 w-full h-[30px] text-gray-600 cursor-pointer"
      style={{ color: selected === title ? "#2563eb" : "#6c757d" }}
    >
      {children}
      <span className="text-[13px]">{title}</span>
    </div>
  );
}

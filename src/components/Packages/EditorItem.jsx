import React from "react";

export default function EditorItem({ item, index, setPackageItem, packageItem, setHasChanged }) {

  const handleChange = (e) => {
    setPackageItem({
      ...packageItem,
      items: packageItem.items.map((itm, idx) => idx === index ? e.target.value : itm)
    });

    setHasChanged(true);
  };

  const handleRemoveItem = () => {
    setPackageItem({
      ...packageItem,
      items: packageItem.items.filter((itm, idx) => idx !== index)
    });

    setHasChanged(true);
  };

  return (
    <div
      className="flex flex-row items-center justify-between w-full py-2"
      key={index}
    >
      <input
        onChange={handleChange}
        type="text"
        value={item}
        className="border rounded-full border-gray-400 py-1 px-3 w-full text-[12px] font-normal"
      />
      <button
        variant="outline"
        className="rounded-full text-black px-4 py-1 hover:bg-gray-100 h-full border text-[13px] transition"
        onClick={handleRemoveItem}
      >
        -
      </button>
    </div>
  );
}

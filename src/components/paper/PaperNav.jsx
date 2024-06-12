import React from "react";
import useAllNotes from "../../stores/allNotes";

export default function PaperNav() {
  const notes = useAllNotes((state) => state.notes);

  console.log(notes)

  return (
    <div className="w-[150px] pb-10 bg-gray-50 shadow-sm h-full border-2 border-gray-100 border-t-transparent border-l-transparent focus:bg-gray-100 flex flex-col relative transition hover:translate-x-0 duration-200  -translate-x-[95%]e pt-12">
      <div className=" font-medium px-2 mb-2 flex flex-col ">
        <div className="text-[24px]">Notes</div>
        <span className="text-[12px] text-gray-500 font-normal py-1">
          Searh by name
        </span>
        <input
          autoCorrect="false"
          type="text"
          placeholder="Search"
          className="rounded-full outline-none px-2 border mr-4 w-full text-[14px] py-[0.5px]"
        />
      </div>
      <div className="flex flex-col overflow-x-hidden">
        {notes.map((note, index) => (
          <div className="flex flex-col px-3 font-medium text-[14px]  border-t-transparent border-r-transparent py-1 hover:bg-gray-100 transition cursor-pointer border-l-transparent">
            <div className="text-[15px] font-semibold">{ note.name}</div>
            <div className="flex flex-row justify-between ">
              <div className="text-[11px] font-medium text-gray-400">
                { note.createdAt }
              </div>
              <div className="text-[11px] font-light text-gray-400">
                Updated
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}

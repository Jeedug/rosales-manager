import React from "react";
import useNoteSelected from "../../hooks/noteSelected";
import useSearchNote from "../../hooks/searchNote";

export default function PaperNav() {
  const { handleClick, notes, currentIndex } = useNoteSelected();
  const { handleSearch, filteredNotes, searchTerm } = useSearchNote(notes);

  return (
    <div className="w-[150px] pb-10 bg-gray-50 shadow-sm h-full border-2 border-gray-100 border-t-transparent border-l-transparent focus:bg-gray-100 flex flex-col relative transition hover:translate-x-0 duration-200 pt-12">
      <div className="font-medium px-2 mb-2 flex flex-col">
        <div className="text-[24px]">Notes</div>
        <span className="text-[12px] text-gray-500 font-normal py-1">
          Search by name
        </span>
        <input
          autoCorrect="false"
          type="text"
          placeholder="Search"
          className="rounded-full outline-none px-2 border mr-4 w-full text-[14px] py-[0.5px]"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="flex flex-col overflow-x-hidden">
        {filteredNotes.map((note, index) => (
          <div
            key={index}
            style={{
              backgroundColor:
                index === currentIndex ? "#eceded" : "transparent",
            }}
            className="flex flex-col px-3 font-medium text-[14px] border-t-transparent border-r-transparent py-1 hover:bg-gray-2  00 transition cursor-pointer border-l-transparent"
            onClick={() => handleClick(index)}
          >
            <div className="text-[15px] font-semibold">{note.name}</div>
            <div className="flex flex-col gap-0 justify-between">
              <div className="text-[11px] font-medium text-gray-400">
                {note.createdAt}
              </div>
              {undefined ? (
                <div className="text-[11px] font-light text-gray-400">
                  Updated
                </div>
              ) : ""}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../shadcdn/Dialog";

export default function Image({ colIndex, colData, customStyle }) {
  const [src, setSrc] = useState(colData.src);

  return (
    <>
      <Dialog>
          <DialogTrigger>
            <button
              className="relative"
            >
              <img src={src} className="rounded-md object-fit h-5 " />
            </button>
          </DialogTrigger>

        <DialogContent className=" bg-white rounded-xl">
          <DialogHeader>
            <img src={src} className="w-full h-full outline-none  rounded-xl" />
          </DialogHeader>
          <div className="grid">Change image</div>
          <input  
            accept="image/*"
            type="file"
            className="file:bg-white file:outline-none focus:outline-none file:border-gray-200 file:shadow-none file:rounded-full"
          />
          <div className="flex pt-4 mt-5 justify-end border border-l-transparent border-r-transparent border-b-transparent">
          <button className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-full">
            Save
          </button>
          </div>
          <DialogFooter></DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

import React, { useEffect, useState } from "react";
import { resolve, desktopDir } from "@tauri-apps/api/path";
import { readDir } from "@tauri-apps/api/fs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

const Item = ({ handleClick, file }) => (
  <div
    key={file.name}
    className={file.isDir ? "dir" : "file"}
    onClick={() => {
      if (!file.isDir) return;

      handleClick(file.name);
    }}
  >
    {file.isDir ? "📁" : "📄"}
    {file.name.length > 20 ? file.name.slice(0, 25) + "..." : file.name}
    {file.isDir ? "" : ""}
  </div>
);

const FileBrowser = () => {
  const [files, setFiles] = useState([]);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    async function getHomeDir() {
      const desktopDirPath = await desktopDir();
      setCurrentPath(desktopDirPath);
    }

    getHomeDir();
  }, []);

  useEffect(() => {
    async function getFiles() {
      const contents = await readDir(currentPath);

      const entries = [
        { name: ".", children: [] },
        { name: "..", children: [] },
        ...contents,
      ];

      const names = entries.map((entry) => ({
        name: entry.name || "",
        isDir: !!entry.children,
      }));

      setFiles(names);
    }
    getFiles();
  }, [currentPath]);

  async function handleClick(name) {
    if (name === ".") {
      const desktopPath = await desktopDir();
      setCurrentPath(desktopPath);
    } else {
      const newPath = await resolve(currentPath, name);
      setCurrentPath(newPath);
    }
  }

  return (
    <DropdownMenu >
      <DropdownMenuTrigger>
        <div className="border px-2 py-2 rounded-full bg-slate-50 text-[13px]">
          {currentPath.slice(0, -1)}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="translate ">
        <div className=" h-[200px] w-[300px] right-0 px-3 py-4 absolute overflow-y-auto shadow-md rounded-xl">
          {files.map((file) => (
            <Item handleClick={handleClick} file={file} />
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FileBrowser;

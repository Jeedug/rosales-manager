import React, { useEffect, useState } from "react";
import { resolve, desktopDir } from "@tauri-apps/api/path";
import { readDir } from "@tauri-apps/api/fs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { useSettingsStore } from "../../stores/settings";
import useSettings from "../../hooks/settings";

const Item = ({ handleClick, file }) => (
  <div
    key={file.name}
    className="hover:bg-slate-50 rounded-full py-[0.5px] px-1 cursor-pointer"
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
  const {localSettings, updateSavePath} = useSettings();

  useEffect(() => {
    async function getHomeDir() {
      setCurrentPath(localSettings.files.savePath);
      console.log(localSettings.savePath)
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
      updateSavePath(desktopPath);
    } else {
      const newPath = await resolve(currentPath, name); 
      setCurrentPath(newPath);
      updateSavePath(newPath);
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full justify-start flex items-start ">
        <div className="border px-2 py-1 rounded-full  text-[13px] w-full items-start text-start">
          {currentPath}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="translate">
        <div className="px-3 w-[300px] left-0 max-h-[260px] py-4 relative overflow-y-auto shadow-md rounded-xl">
          {files.map((file) => (
            <Item handleClick={handleClick} file={file} />
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FileBrowser;

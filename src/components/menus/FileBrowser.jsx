import React, { useEffect, useState } from "react";
import { homeDir, resolve, desktopDir } from "@tauri-apps/api/path";
import { readDir } from "@tauri-apps/api/fs";

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
      const desktopDirPath = await desktopDir ();
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
    <div className="px-1">
      <div className="border ">Files in {currentPath}</div>
      <div className=" h-[200px] px-3 py-4 relative overflow-y-auto shadow-lg rounded-xl">
        {files.map((file) => (
          <Item handleClick={handleClick} file={file} />
        ))}
      </div>
    </div>
  );
};

export default FileBrowser;

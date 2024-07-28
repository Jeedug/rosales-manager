import React, { useEffect, useState } from "react";

import Table from "./Table";
import Editor from "./Editor";
import useSettings from "../../hooks/settings";
import { http } from "@tauri-apps/api";
import { fetch } from "@tauri-apps/api/http";
import Creator from "./Creator";

export default function Packages({ selected }) {
  const [subMenu, setSubMenu] = useState("Table");
  const [editablePackage, setEditablePackage ] = useState({});

  const [allPackages, setAllPackages] = useState([]);
  const [status, setStatus] = useState(false);

  const { settings } = useSettings();

  useEffect(() => {
    const getAllPackages = async () => {
      const data = await fetch(
        "https://viajesrosales.netlify.app/api/packages/read",
        {
          method: "POST",
          body: http.Body.json({
            key: settings.access.key,
          }),
          headers: {
            "Content-Type": "application/json",
            Origin: "https://viajesrosales.netlify.app",
          },
        }
      );

      let fetchedPackages = [];

      if (data.status) {
        setStatus(404);
      } else {
        setStatus(data.status);
      }

      if (data.status == 200) {
        data.data.packages.forEach((packageItem) => {
          fetchedPackages.push(packageItem);
        });
        setAllPackages(fetchedPackages);
      } else {
        setAllPackages([]);
      }
    };
    getAllPackages();
  }, [settings, subMenu]);

  if (selected == "Paquetes") {
    return (
      <>
        <Table allPackages={allPackages} setAllPackages={setAllPackages} status={status} subMenu={subMenu} setSubMenu={setSubMenu} setEditablePackage={setEditablePackage} />
        <Editor setAllPackages={setAllPackages} subMenu={subMenu} setSubMenu={setSubMenu} editablePackage={editablePackage} />
        <Creator setAllPackages={setAllPackages} subMenu={subMenu} setSubMenu={setSubMenu} />
      </>
    );
  }
}

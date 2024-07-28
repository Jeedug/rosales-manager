import React, { useEffect, useState } from "react";

import Table from "./Table";
import Editor from "./Editor";
import useSettings from "../../hooks/settings";
import { http } from "@tauri-apps/api";
import { fetch } from "@tauri-apps/api/http";
import Creator from "./Creator";

export default function Clients({ selected }) {
  const [subMenu, setSubMenu] = useState("Table");
  const [editableClient, setEditableClient ] = useState({});

  const [allClients, setAllClients] = useState([]);
  const [status, setStatus] = useState(false);

  const { settings } = useSettings();

  useEffect(() => {
    const getAllClients = async () => {
      const data = await fetch(
        "https://viajesrosales.netlify.app/api/clients/read",
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

      let fetchedClients = [];

      if (data.status) {
        setStatus(404);
      } else {
        setStatus(data.status);
      }

      if (data.status == 200) {
        data.data.clients.forEach((client) => {
          fetchedClients.push(client);
        });
        setAllClients(fetchedClients);
      } else {
        setAllClients([]);
      }
    };
    getAllClients();
  }, [settings, subMenu]);

  if (selected == "Clientes") {
    return (
      <>
        <Table allClients={allClients} setAllClients={setAllClients} status={status} subMenu={subMenu} setSubMenu={setSubMenu} setEditableClient={setEditableClient} />
        <Editor setAllClients={setAllClients} subMenu={subMenu} setSubMenu={setSubMenu} editableClient={editableClient} />
        <Creator setAllClients={setAllClients} subMenu={subMenu} setSubMenu={setSubMenu} />
      </>
    );
  }
}

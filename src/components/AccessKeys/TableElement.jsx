import { http } from "@tauri-apps/api";
import { fetch } from "@tauri-apps/api/http";
import { Copy } from "lucide-react";
import React from "react";

export default function TableElement({ keyItem, keyId, setAllKeys }) {
  const handleDelete = async () => {
    const data = await fetch(
      "https://viajesrosales.netlify.app/api/keys/delete",
      {
        method: "POST",
        body: http.Body.json({
          key: keyItem,
          idToDelete: keyId,
        }),
        headers: {
          "Content-Type": "application/json",
          Origin: "https://viajesrosales.netlify.app",
        },
      }
    );

    const res = data;

    if (res.status == 200) {
      setAllKeys((allKeys) => allKeys.filter((key) => key.id !== keyId));
    }
  };

  return (
    <tr
      key={keyItem}
      className="  dark:border-gray-700"
    >
      <th
        scope="row"
        className="px-6 py-2 font-medium text-black whitespace-nowrap "
      >
        {keyItem}
      </th>
      <th
        onClick={() => {
          navigator.clipboard.writeText(keyItem);
        }}
      >
        <Copy className="w-3 h-3 text-gray-500 cursor-pointer hover:text-gray-700" />
      </th>
      <td
        className="px-6 py-2 text-red-700 hover:cursor-pointer hover:text-red-500 hover:bg-red-100/30"
        onClick={handleDelete}
      >
        Eliminar
      </td>
    </tr>
  );
}

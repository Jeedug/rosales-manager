import { http } from "@tauri-apps/api";
import { fetch } from "@tauri-apps/api/http";
import { Copy } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";

export default function TableElement({
  keyItem,
  client,
  setAllClients,
  setEditableClient,
  setSubMenu,
}) {
  const handleDelete = async () => {
    const data = await fetch(
      "https://viajesrosales.netlify.app/api/clients/delete",
      {
        method: "POST",
        body: http.Body.json({
          key: keyItem,
          id: client.id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const res = data;

    if (res.status == 200) {
      setAllClients((allClients) =>
        allClients.filter((clien) => clien.id !== client.id)
      );
    }
  };

  const handleEdit = async () => {
    setEditableClient(client);

    setSubMenu("Editor");
  };

  return (
    <tr className="  ">
      <Accordion
        type="single"
        collapsible
        className="w-full border-b-2 py-2 px-4"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-black font-normal w-full h-full flex items-start hover:bg-gray-100">
            {client.name}
          </AccordionTrigger>
          <AccordionContent className="text-gray-700 text-[12px] font-light flex flex-row justify-between">
            <div className="flex flex-col justify-between">
              <div className="flex flex-col">
                {client.email}
              </div>

              <div className="flex flex-row">
                {client.phone}
              </div>
            </div>

            <div className="flex gap-1 flex-col items-end">
              <button
                onClick={handleEdit}
                className="text-yellow-500 underline text-sm "
              >
                Editar
              </button>
              <button
                onClick={handleDelete}
                className="text-red-500 underline text-sm "
              >
                Eliminar
              </button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </tr>
  );
}

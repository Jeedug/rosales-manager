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
  packageItem,
  setAllPackages,
  setEditablePackage,
  setSubMenu,
}) {
  const handleDelete = async () => {
    const data = await fetch(
      "https://viajesrosales.netlify.app/api/packages/delete",
      {
        method: "POST",
        body: http.Body.json({
          key: keyItem,
          id: packageItem.id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const res = data;

    if (res.status == 200) {
      setAllPackages((allPacks) =>
        allPacks.filter((pack) => pack.id !== packageItem.id)
      );
    }
  };

  const handleEdit = async () => {
    setEditablePackage(packageItem);

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
            {packageItem.name}
          </AccordionTrigger>
          <AccordionContent className="text-gray-700 text-[12px] font-light flex flex-row justify-between">
            <div className="flex flex-col justify-between">
              <div className="flex flex-col">
                <span className="text-black font-bold mr-2">Descripcion:</span>
                {packageItem.description}
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-gray-black font-bold mr-2">Elementos:</span>
                <ul className="list-disc ml-2">
                {packageItem.items.map((items, index) => {
                  return (
                    <li key={index} className="">{items}</li>
                  );
                })}
                </ul>
              </div>

              <div className="flex flex-row">
                <span className="text-black font-bold mr-2">Descuento:</span>
                {packageItem.discount}
              </div>
              <div className="flex flex-row">
                <span className="text-black font-bold mr-2">Precio:</span>
                {packageItem.price}
              </div>
              <div className="flex flex-row">
                <img
                  src={packageItem.image}
                  alt="image"
                  className="w-20 h-20 mr-2"
                />
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

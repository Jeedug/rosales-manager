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

export default function TableElement({ keyItem, promotion, setAllPromotions, setEditablePromotion, setSubMenu }) {
  const handleDelete = async () => {
    const data = await fetch(
      "https://viajesrosales.netlify.app/api/promotions/delete",
      {
        method: "POST",
        body: http.Body.json({
          key: keyItem,
          id: promotion.id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const res = data;

    if (res.status == 200) {
      setAllPromotions((allSubs) =>
        allSubs.filter((sub) => sub.id !== promotion.id)
      );
    }
  };

  const handleEdit = async () => {


    setEditablePromotion(promotion);


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
            {promotion.name}
          </AccordionTrigger>
          <AccordionContent className="text-gray-700 text-[12px] font-light flex flex-row justify-between">
            <div className="flex flex-col justify-between">
              <div className="flex flex-col">
                <span className="text-black font-bold mr-2">Descripcion:</span>
                {promotion.description}
              </div>
              <div className="flex flex-row">
                <span className="text-black font-bold mr-2">Descuento:</span>
                {promotion.discount}
              </div>
              <div className="flex flex-row">
                <span className="text-black font-bold mr-2">Precio:</span>
                {promotion.price}
              </div>
              <div className="flex flex-row">
                <img
                  src={promotion.image}
                  alt="image"
                  className="w-20 h-20 mr-2"
                />
              </div>
            </div>

            <div className="flex gap-1 flex-col items-end">
              <button className="text-blue-500 underline text-sm ">
                Enviar a correos
              </button>
              <button onClick={handleEdit} className="text-yellow-500 underline text-sm ">
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

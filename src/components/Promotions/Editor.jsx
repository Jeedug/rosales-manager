import React, { useEffect, useState } from "react";
import useSettings from "../../hooks/settings";
import { fetch } from "@tauri-apps/api/http";
import { http } from "@tauri-apps/api";

export default function Editor({
  subMenu,
  setSubMenu,
  editablePromotion,
  setAllPromotions,
}) {
  const { settings } = useSettings();

  const [hasChanged, setHasChanged] = useState(false);

  const handleEdit = async () => {
    const data = await fetch(
      "https://viajesrosales.netlify.app/api/promotions/update",
      {
        method: "POST",
        body: http.Body.json({
          key: settings.access.key,
          id: editablePromotion.id,
          values: promotion,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setHasChanged(false);
    setAllPromotions((allSubs) =>
      allSubs.map((sub) => (sub.id === editablePromotion.id ? promotion : sub))
    );
  };

  const [promotion, setPromotion] = useState(editablePromotion);

  const handleEditLocalName = (e) => {
    setPromotion({
      ...promotion,
      name: e.target.value,
    });

    setHasChanged(true);
  };

  const handleEditLocalDescription = (e) => {
    setPromotion({
      ...promotion,
      description: e.target.value,
    });

    setHasChanged(true);
  };

  const handleEditLocalDiscount = (e) => {
    setPromotion({
      ...promotion,
      discount: e.target.value,
    });

    setHasChanged(true);
  };

  const handleEditLocalPrice = (e) => {
    setPromotion({
      ...promotion,
      price: e.target.value,
    });

    setHasChanged(true);
  };

  const handleEditLocalImage = (e) => {
    setPromotion({
      ...promotion,
      image: e.target.value,
    });

    setHasChanged(true);
  };

  useEffect(() => {
    setPromotion(editablePromotion);
  }, [editablePromotion]);

  const handleGoBack = () => {
    setSubMenu("Table");
  };

  if (subMenu == "Editor") {
    return (
      <div className="flex flex-col items-start justify-start pt-10 border w-full px-10 ">
        <h1 className="text-2xl font-semibold text-center mb-2">
          Llaves de accesos
        </h1>
        <h2 className="text-[12px] text-gray-700 font-normal mr-40 mb-2">
          Las llaves son un identificador único que se utiliza para acceder a la
          API de Viajes Rosales, puedes crear llaves para permitir el acceso a
          más usuarios. También puedes eliminar llaves para eliminar el acceso.
        </h2>

        <div className=" w-full flex flex-col relative overflow-y-scroll">
          <div className="w-full border-b-2">
            <label className="text-gray-500 text-[14px] font-normal ">
              Nombre
            </label>
            <input
              type="text"
              value={promotion.name}
              className="border rounded-full border-gray-400 py-1 px-3 w-full text-[14px] font-normal mb-2"
              onChange={handleEditLocalName}
            />
          </div>

          <div className="w-full border-b-2">
            <label className="text-gray-500 text-[14px] font-normal ">
              Descripción
            </label>
            <input
              type="text"
              value={promotion.description}
              className="border rounded-full border-gray-400 py-1 px-3 w-full text-[14px] font-normal mb-2"
              onChange={handleEditLocalDescription}
            />
          </div>

          <div className="w-full border-b-2">
            <label className="text-gray-500 text-[14px] font-normal ">
              Descuento
            </label>
            <input
              type="number"
              value={promotion.discount}
              className="border rounded-full border-gray-400 py-1 px-3 w-full text-[14px] font-normal mb-2"
              onChange={handleEditLocalDiscount}
            />
          </div>

          <div className="w-full border-b-2">
            <label className="text-gray-500 text-[14px] font-normal ">
              Precio
            </label>
            <input
              type="number"
              value={promotion.price}
              className="border rounded-full border-gray-400 py-1 px-3 w-full text-[14px] font-normal mb-2"
              onChange={handleEditLocalPrice}
            />
          </div>

          <div className="relative pb-40">
            <label className="text-gray-500 text-[14px] font-normal ">
              Imagen
            </label>
            <input
              type="text"
              value={promotion.image}
              className="border rounded-full border-gray-400 py-1 px-3 w-full text-[14px] font-normal mb-2"
              onChange={handleEditLocalImage}
            />

            <div className="overflow-hidden">
              <img src={promotion.image} className="w-full" alt="Promotion" />
            </div>
          </div>
        </div>

        <div className="w-full h-[80px] border-t-2 py-4 pb-5 flex flex-row justify-end gap-2">
          <button
            onClick={handleGoBack}
            variant="outline"
            className="text-gray-500 border rounded-full border-gray-400 px-6 py-2 text-[13px] transition"
          >
            Volver
          </button>

          {hasChanged ? (
            <button
              onClick={handleEdit}
              variant="outline"
              className="bg-blue-500 hover:bg-blue-600 rounded-full text-white px-6 py-2 text-[13px] transition"
            >
              Guardar
            </button>
          ) : (
            <button
              variant="outline"
              className="bg-blue-500/50  rounded-full text-white px-6 py-2 text-[13px] transition"
              disabled={true}
            >
              Guardado
            </button>
          )}
        </div>
      </div>
    );
  }

  return null;
}

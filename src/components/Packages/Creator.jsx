import React, { useEffect, useState } from "react";
import useSettings from "../../hooks/settings";
import { fetch } from "@tauri-apps/api/http";
import { http } from "@tauri-apps/api";
import EditorItem from "./EditorItem";

export default function Editor({
  subMenu,
  setSubMenu,
}) {
  const { settings } = useSettings();

  const [ allDefined, setAllDefined ] = useState(true);
  const [packageItem, setPackageItem] = useState({ items: []});

  useEffect(() => {
    if (
      packageItem.name &&
      packageItem.description &&
      packageItem.items.length > 0 &&
      packageItem.price &&
      packageItem.image
    ) {
      setAllDefined(true);
    } else {
      setAllDefined(false);
    }

  }, [packageItem]);


  const handleCreate = async () => {
    await fetch(
      "https://viajesrosales.netlify.app/api/packages/create",
      {
        method: "POST",
        body: http.Body.json({
          key: settings.access.key,
          values: packageItem,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setSubMenu("Table");
  };


  const handleEditLocalName = (e) => {
    setPackageItem({
      ...packageItem,
      name: e.target.value,
    });
  };

  const handleEditLocalDescription = (e) => {
    setPackageItem({
      ...packageItem,
      description: e.target.value,
    });
  };

  const handleEditLocalDiscount = (e) => {
    setPackageItem({
      ...packageItem,
      discount: e.target.value,
    });
  };

  const handleEditLocalPrice = (e) => {
    setPackageItem({
      ...packageItem,
      price: e.target.value,
    });
  };

  const handleEditLocalImage = (e) => {
    setPackageItem({
      ...packageItem,
      image: e.target.value,
    });
  };

  const handleAddNewItem = () => {
    setPackageItem({
      ...packageItem,
      items: [...packageItem.items, ""],
    });
  };

  const handleGoBack = () => {
    setSubMenu("Table");
  };

  if (subMenu == "Creador") {
    return (
      <div className="flex flex-col items-start justify-start pt-10 border w-full px-10 ">
        <h1 className="text-2xl font-semibold text-center mb-2">
          Creador de paquetes
        </h1>
        <h2 className="text-[12px] text-gray-700 font-normal mr-40 mb-2">
          Crea un nuevo paquete.
        </h2>

        <div className=" w-full flex flex-col relative overflow-y-scroll">
          <div className="w-full border-b-2">
            <label className="text-black text-[14px] font-bold ">
              Nombre
            </label>
            <input
              type="text"
              value={packageItem.name}
              className="border rounded-full border-gray-400 py-1 px-3 w-full text-[14px] font-normal mb-2"
              onChange={handleEditLocalName}
            />
          </div>

          <div className="w-full border-b-2">
            <label className="text-black text-[14px] font-bold ">
              Descripción
            </label>
            <input
              type="text"
              value={packageItem.description}
              className="border rounded-full border-gray-400 py-1 px-3 w-full text-[14px] font-normal mb-2"
              onChange={handleEditLocalDescription}
            />
          </div>

          <div className="w-full border-b-2">
            <label className="text-black text-[14px] font-bold ">
              Elementos
            </label>
            {packageItem?.items?.map((item, index) => (
              <EditorItem key={index} item={item} index={index} setPackageItem={setPackageItem} packageItem={packageItem} />
            ))}

            <div className="flex flex-row items-center justify-between w-full  py-2">

              <button
                onClick={handleAddNewItem}
                variant="outline"
                className=" rounded-full w-full text-black px-4 py-1 hover:bg-gray-100 h-full border text-[12px] transition"
              >
                Nuevo elemento
              </button>
            </div>
          </div>

          <div className="w-full border-b-2">
            <label className="text-black text-[14px] font-bold ">
              Descuento
            </label>
            <input
              type="number"
              value={packageItem.discount}
              className="border rounded-full border-gray-400 py-1 px-3 w-full text-[14px] font-normal mb-2"
              onChange={handleEditLocalDiscount}
            />
          </div>

          <div className="w-full border-b-2">
            <label className="text-black text-[14px] font-bold ">
              Precio
            </label>
            <input
              type="number"
              value={packageItem.price}
              className="border rounded-full border-gray-400 py-1 px-3 w-full text-[14px] font-normal mb-2"
              onChange={handleEditLocalPrice}
            />
          </div>

          <div className="relative pb-40">
            <label className="text-black text-[14px] font-bold ">
              Imagen
            </label>
            <input
              type="text"
              value={packageItem.image}
              className="border rounded-full border-gray-400 py-1 px-3 w-full text-[14px] font-normal mb-2"
              onChange={handleEditLocalImage}
            />

            <div className="overflow-hidden">
              <img src={packageItem.image} className="w-full" alt="Promotion" />
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

          {allDefined ? (
            <button
              onClick={handleCreate}
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

import React, { useEffect, useState } from "react";
import useSettings from "../../hooks/settings";
import { fetch } from "@tauri-apps/api/http";
import { http } from "@tauri-apps/api";

export default function Editor({ subMenu, setSubMenu }) {
  const { settings } = useSettings();

  const [allDefined, setAllDefined] = useState(true);
  const [client, setClient] = useState({});

  useEffect(() => {
    if (client.name && client.email && client.phone) {
      setAllDefined(true);
    } else {
      setAllDefined(false);
    }
  }, [client]);

  const handleCreate = async () => {
    await fetch("https://viajesrosales.netlify.app/api/clients/create", {
      method: "POST",
      body: http.Body.json({
        key: settings.access.key,
        values: client,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setSubMenu("Table");
  };

  const handleEditLocalName = (e) => {
    setClient({
      ...client,
      name: e.target.value,
    });
  };

  const handleEditLocalEmail = (e) => {
    setClient({
      ...client,
      email: e.target.value,
    });
  };

  const handleEditLocalPhone = (e) => {
    setClient({
      ...client,
      phone: e.target.value,
    });
  };

  const handleGoBack = () => {
    setSubMenu("Table");
  };

  if (subMenu == "Creador") {
    return (
      <div className="flex flex-col items-start justify-start pt-10 border w-full px-10 ">
        <h1 className="text-2xl font-semibold text-center mb-2">
          Crea un nuevo cliente
        </h1>
        <h2 className="text-[12px] text-gray-700 font-normal mr-40 mb-2">
          Crea un nuevo clientes con el numero de telefono, correo electronico y nombre.
        </h2>

        <div className=" w-full flex flex-col relative overflow-y-scroll">
          <div className="w-full border-b-2">
            <label className="text-black text-[14px] font-bold ">Nombre</label>
            <input
              type="text"
              value={client.name}
              className="border rounded-full border-gray-400 py-1 px-3 w-full text-[14px] font-normal mb-2"
              onChange={handleEditLocalName}
            />
          </div>

          <div className="w-full border-b-2">
            <label className="text-black text-[14px] font-bold ">Email</label>
            <input
              type="text"
              value={client.email}
              className="border rounded-full border-gray-400 py-1 px-3 w-full text-[14px] font-normal mb-2"
              onChange={handleEditLocalEmail}
            />
          </div>

          <div className="w-full border-b-2">
            <label className="text-black text-[14px] font-bold ">
              Teléfono
            </label>
            <input
              type="number"
              value={client.phone}
              className="border rounded-full border-gray-400 py-1 px-3 w-full text-[14px] font-normal mb-2"
              onChange={handleEditLocalPhone}
            />
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

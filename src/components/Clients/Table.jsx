import { useEffect, useState } from "react";
import useSettings from "../../hooks/settings";
import TableElement from "./TableElement";

export default function Table({
  subMenu,
  setSubMenu,
  setEditableClient,
  status,
  setAllClients,
  allClients,
}) {
  const { settings } = useSettings();

  const [filteredClients, setFilteredClients] = useState([]);
  const [searchParameters, setSearchParameters] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (searchParameters.name !== "") {
      setFilteredClients(
        allClients.filter((client) =>
          client.name
            .toLowerCase()
            .includes(searchParameters.name.toLowerCase())
        )
      );
    } else if (searchParameters.email !== "") {
      setFilteredClients(
        allClients.filter((client) =>
          client.email
            .toLowerCase()
            .includes(searchParameters.email.toLowerCase())
        )
      );
    } else if (searchParameters.phone !== "") {
      setFilteredClients(
        allClients.filter((client) =>
          client.phone
            .toLowerCase()
            .includes(searchParameters.phone.toLowerCase())
        )
      );
    } else {
      setFilteredClients(allClients);
    }
  }, [searchParameters, allClients]);

  const handleCreatePackage = () => {
    setSubMenu("Creador");
  };

  if (subMenu == "Table") {
    return (
      <>
        <div className="flex flex-col items-start justify-start pt-10 border w-full px-10">
          <h1 className="text-2xl font-semibold text-center mb-2">Clientes</h1>
          <h2 className="text-[12px] text-gray-700 font-normal mr-40 mb-2">
            Gestiona los clientes registrados en la aplicacion, puedes eliminar
            los clientes, filtrar por nombre, email o telefono y crear nuevos
            clientes.
          </h2>

          <div className="relative overflow-x-auto w-full sm:rounded-lg">
            <div className="flex flex-row justify-between items-center w-full">
              <input
                type="text"
                placeholder="Buscar por nombre"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) =>
                  setSearchParameters({
                    ...searchParameters,
                    name: e.target.value,
                  })
                }
              />
              <input
                type="text"
                placeholder="Buscar por email"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) =>
                  setSearchParameters({
                    ...searchParameters,
                    email: e.target.value,
                  })
                }
              />
              <input
                type="text"
                placeholder="Buscar por telefono"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) =>
                  setSearchParameters({
                    ...searchParameters,
                    phone: e.target.value,
                  })
                }
              />
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border rounded-xl">
              <thead className="text-xs text-gray-700 border">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Llave
                  </th>
                </tr>
              </thead>
              <tbody>
                {allClients?.length > 0 ? (
                  filteredClients.map((client) => (
                    <TableElement
                      key={client.id}
                      keyItem={settings.access.key}
                      client={client}
                      setAllClients={setAllClients}
                      setEditableClient={setEditableClient}
                      setSubMenu={setSubMenu}
                    />
                  ))
                ) : status === 404 ? (
                  <tr>
                    <td
                      colSpan="2"
                      className="w-full h-full text-2xl font-semibold text-center py-5"
                    >
                      Llave no ingresada o no hay elementos en esta lista.
                    </td>
                  </tr>
                ) : (
                  <figure
                    colSpan="2"
                    className="w-full h-full flex items-center justify-center"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-8 h-8 text-gray-100 animate-spin dark:text-gray-300 fill-gray-700 border"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </figure>
                )}

                {status !== 200 ? (
                  <tr className="odd:bg-white  border-b text-black hover:bg-gray-100 cursor-pointer">
                    <th
                      scope="row"
                      className="px-6 py-2 font-medium text-gray-900 "
                      onClick={handleCreatePackage}
                    >
                      Crear nuevo cliente
                    </th>
                    <th></th>
                    <th></th>
                  </tr>
                ) : (
                  ""
                )}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

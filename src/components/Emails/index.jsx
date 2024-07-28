import React, { useState, useEffect, Suspense } from "react";
import { fetch } from "@tauri-apps/api/http";
import { http } from "@tauri-apps/api";
import useSettings from "../../hooks/settings";
import TableElement from "./TableElement";
import { Copy } from "lucide-react";

export default function Emails({ selected }) {
  const [allSubscriptions, setAllSubscriptions] = useState([]);
  const [status, setStatus] = useState(false);

  const [imageSrc, setImageSrc] = useState(null);
  const [text, setText] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch(
      "https://viajesrosales.netlify.app/api/subscriptions/send-email",
      {
        method: "POST",
        body: http.Body.json({
          key: settings.access.key,
          imageSrc: imageSrc,
          text: text,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    
  };

  const handleImageUpload = (event) => {
    setImageSrc(event.target.value);
  };

  const { settings } = useSettings();

  useEffect(() => {
    const getAllSubscriptions = async () => {
      const data = await fetch(
        "https://viajesrosales.netlify.app/api/subscriptions/read",
        {
          method: "POST",
          body: http.Body.json({
            key: settings.access.key,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      let fetchedSubscriptions = [];

      if (data.status) {
        setStatus(404);
      } else {
        setStatus(data.status);
      }

      if (data.status == 200) {
        data.data.subscriptions.forEach((key) => {
          fetchedSubscriptions.push(key);
        });

        setAllSubscriptions(fetchedSubscriptions);
      } else {
        setAllSubscriptions([]);
      }

      setAllSubscriptions(fetchedSubscriptions);

      console.log(status);
    };
    getAllSubscriptions();
  }, [settings]);

  if (selected == "Correos") {
    return (
      <>
        <div className="flex flex-col items-start justify-start pt-10 border w-full px-10">
          <h1 className="text-2xl font-semibold text-center mb-2">Emails</h1>
          <h2 className="text-[12px] text-gray-700 font-normal mr-40 mb-2">
            Gestiona los emails registrados en la aplicacion, bloquea emails
            para evitar que se envien correos o desbloquealos para hacer lo
            contrario. 
          </h2>
          <h3 className="text-[14px] font-bold mb-5 mr-40">
          Envia un correo electronico con la url de la imagen, y un texto descriptivo.
          </h3>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 w-full"
          >
            <label className="flex flex-col w-full">
              Text
              <input
                type="text"
                onChange={() => {
                  setText(event.target.value);
                }}
                className="mt-1 p-2 border rounded w-full"
                accept="image/*"
                required
              />
            </label>
            <label className="flex flex-col w-full">
              Imagen:
              <input
                type="text"
                onChange={handleImageUpload}
                className="mt-1 p-2 border rounded w-full"
                accept="image/*"
                required
              />
            </label>
            <button
              disabled={!imageSrc || !text}
              type="submit"
              className="p-2 bg-blue-500 active:bg-blue-700 text-white rounded"
            >
              Enviar Imagen
            </button>
          </form>

          <img src={imageSrc} alt="Imagen" className="w-32 h-32 rounded-lg" />

          <div class="relative overflow-x-auto border w-full sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 border">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Llave
                  </th>
                  <th scope="col" class="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {allSubscriptions.length > 0 ? (
                  allSubscriptions.map((subscription) => (
                    <TableElement
                      key={subscription.id}
                      keyItem={settings.access.key}
                      subscription={subscription}
                      setAllSubscriptions={setAllSubscriptions}
                    />
                  ))
                ) : status === 404 ? (
                  <tr>
                    <td
                      colSpan="2"
                      className="w-full h-full text-2xl font-semibold text-center py-5"
                    >
                      Llave de acceso no ingresada o invalida.
                    </td>
                  </tr>
                ) : (
                  <div
                    colSpan="2"
                    className="w-full h-full flex items-center justify-center"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-8 h-8 text-gray-100 animate-spin dark:text-gray-300 fill-gray-700 border"
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
                  </div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

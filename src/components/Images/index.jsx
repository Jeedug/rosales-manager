import React, { useEffect, useState } from "react";
import { fetch } from "@tauri-apps/api/http";
import useSettings from "../../hooks/settings";
import { http } from "@tauri-apps/api";
import Image from "./Image";

export default function Images({ selected }) {
  const [image, setImage] = useState(null);

  const [allImages, setAllImages] = useState([]);

  const { settings } = useSettings();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!image) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    await fetch("https://viajesrosales.netlify.app/api/images/upload", {
      method: "POST",
      body: http.Body.json({
        key: settings.access.key,
        image: image.split(",")[1], // Elimina el encabezado de la base64
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const fetchImages = async () => {
      const response = await fetch(
        "https://viajesrosales.netlify.app/api/images/readAll",
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

      setAllImages(response.data.images);
    };
    fetchImages();
  };

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(
        "https://viajesrosales.netlify.app/api/images/readAll",
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

      setAllImages(response.data.images);
    };
    fetchImages();
  }, [settings.access.key]);

  if (selected === "Imagenes") {
    return (
      <div className="flex flex-col items-start justify-start pt-10 w-full px-10">
        <h1 className="text-2xl font-semibold text-center mb-2">Imagenes</h1>
        <h2 className="text-[12px] text-gray-700 font-normal mr-40 mb-2">
          Sube nuevas imagenes al servidor para ser usados a la hora de enviar
          correos, o crear nuevos paquetes.
        </h2>
        <div className="relative overflow-x-auto  w-full sm:rounded-lg">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <label className="flex flex-col">
              Imagen:
              <input
                type="file"
                onChange={handleImageUpload}
                className="mt-1 p-2 border rounded"
                accept="image/*"
                required
              />
            </label>
            <button
              type="submit"
              className="p-2 bg-blue-500 active:bg-blue-700 text-white rounded"
            >
              Enviar Imagen
            </button>
          </form>
          <div className="flex flex-wrap spcae-x-4 space-y-4">
            {allImages?.map((image, index) => (
              <Image
                allImages={allImages}
                setAllImages={setAllImages}
                id={image.id}
                url={image.image}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
  return null;
}

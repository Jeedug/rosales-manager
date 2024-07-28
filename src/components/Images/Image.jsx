import { http } from "@tauri-apps/api";
import { Copy, X } from "lucide-react";
import React from "react";
import useSettings from "../../hooks/settings";
import { fetch } from "@tauri-apps/api/http";

export default function Image({ url, index, id, setAllImages }) {

  const { settings } = useSettings();

  const copyUrlToClipboard = () => {
    const textField = document.createElement("textarea");
    textField.innerText = url;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  const handleDelete = async () => {
    await fetch(
      "https://viajesrosales.netlify.app/api/images/delete",
      {
        method: "POST",
        body: http.Body.json({
          key: settings.access.key,
          id: id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setAllImages((allImgs) => allImgs.filter((img) => img.id !== id));

  };

  return (
    <div
      className="flex flex-col items-center rounded justify-center cursor-pointer  border"
      key={index}
    >
      <div className="h-[35px] flex flex-row justify-end w-full items-center">
        <X className="active:scale-75 h-[20px]" onClick={handleDelete} />
        <Copy
          className="active:scale-75 h-[15px]"
          onClick={copyUrlToClipboard}
        />
      </div>
      <img src={url} alt="Imagen" className="w-32 h-32 rounded-lg" />
    </div>
  );
}

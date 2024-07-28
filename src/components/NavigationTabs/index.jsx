import {
  Archive,
  AtSign,
  Bookmark,
  BookMarked,
  BookUser,
  Folder,
  Image,
  Key,
  Mail,
  Package,
  PictureInPicture,
  Ticket,
} from "lucide-react";

export default function NavigationTabs({ selected, setSelected }) {
  return (
    <>
      <div className="flex flex-col gap-2 items-start w-[150px] border pt-10 ">
        <div
          style={{
            backgroundColor:
              selected === "Clientes" ? "rgb(239, 246, 255)" : "transparent",
          }}
          onClick={() => setSelected("Clientes")}
          className="flex text-[12px] text-gray-500 font-normal flex-row cursor-pointer px-2 items-center gap-2 w-full h-[35px] hover:bg-gray-100"
        >
          <BookUser className="h-4 w-4" />
          Clientes
        </div>
        <div
          style={{
            backgroundColor:
              selected === "Webs" ? "rgb(239, 246, 255)" : "transparent",
          }}
          onClick={() => setSelected("Webs")}
          className="flex text-[12px] text-gray-500 font-normal flex-row cursor-pointer px-2 items-center gap-2 w-full h-[35px] hover:bg-gray-100"
        >
          <BookMarked className="h-4 w-4" />
          Webs
        </div>
        <div
          style={{
            backgroundColor:
              selected === "Paquetes" ? "rgb(239, 246, 255)" : "transparent",
          }}
          onClick={() => setSelected("Paquetes")}
          className="flex text-[12px] text-gray-500 font-normal flex-row cursor-pointer px-2 items-center gap-2 w-full h-[35px] hover:bg-gray-100"
        >
          <Package className="h-4 w-4" />
          Paquetes
        </div>
        <div
          style={{
            backgroundColor:
              selected === "Correos" ? "rgb(239, 246, 255)" : "transparent",
          }}
          onClick={() => setSelected("Correos")}
          className="flex text-[12px] text-gray-500 font-normal flex-row cursor-pointer px-2 items-center gap-2 w-full h-[35px] hover:bg-gray-100"
        >
          <AtSign className="h-4 w-4" />
          Correos
        </div>
        <div
          style={{
            backgroundColor:
              selected === "Imagenes" ? "rgb(239, 246, 255)" : "transparent",
          }}
          onClick={() => setSelected("Imagenes")}
          className="flex text-[12px] text-gray-500 font-normal flex-row cursor-pointer px-2 items-center gap-2 w-full h-[35px] hover:bg-gray-100"
        >
          <Image className="h-4 w-4" />
          Imagenes
        </div>
        <div
          style={{
            backgroundColor:
              selected === "Llaves de acceso"
                ? "rgb(239, 246, 255)"
                : "transparent",
          }}
          onClick={() => setSelected("Llaves de acceso")}
          className="flex text-[12px] text-gray-500 font-normal flex-row cursor-pointer px-2 items-center gap-2 w-full h-[35px] hover:bg-gray-100"
        >
          <Key className="h-4 w-4" />
          Llaves de acceso
        </div>
      </div>
    </>
  );
}

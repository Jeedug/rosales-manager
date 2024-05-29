import {
  isPermissionGranted,
  requestPermission,
  sendNotification,
} from "@tauri-apps/api/notification";

import { Settings2, Cog, SwatchBook } from "lucide-react";

import logo from "../../assets/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../shadcdn/DropdownMenu";
import SettingsMenu from "../menus/SettingsMenu";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import Settings from "../settings/Settings";
import { DrawerTrigger, Drawer } from "../shadcdn/Drawer";

export function DropdownButton() {
  return (
    <>
      <Drawer direction="left">
        <DrawerTrigger className=" top-0 z-10 left-10 ">
          <div className="absolute top-2 left-2 p-2 px-2 from-transparent to-transparent bg-gradient-to-b hover:from-gray-300/10 hover:to-gray-300/25 rounded-tr-xl flex items-center rounded-lg">
            <img src={logo} className="h-4" />
          </div>
        </DrawerTrigger>
        <Settings />
      </Drawer>
    </>
  );
}

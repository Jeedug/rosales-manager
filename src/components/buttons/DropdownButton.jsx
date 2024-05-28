import {
  isPermissionGranted,
  requestPermission,
  sendNotification,
} from "@tauri-apps/api/notification";

import { Settings2, User, UserPlus, X, SwatchBook } from "lucide-react";

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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="absolute top-2 left-2 p-2 px-2 from-transparent to-transparent bg-gradient-to-b hover:from-gray-300/10 hover:to-gray-300/25 rounded-tr-xl flex items-center rounded-lg">
              <img src={logo} className="h-4" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" min-w-[120px] bg-white">
            <DropdownMenuGroup>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <SwatchBook className="mr-2 h-4 w-4 text-gray-500" />
                  <span>Themes</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <span>Black and White</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Red Corvet</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                      <span>Electronic</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Blue Velvet</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Black and White</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                      <span>Red Corvet</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Electronic</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Blue Velvet</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <span>All themes...</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DrawerTrigger className=" relative w-full">
                <DropdownMenuItem >
                  <Settings2 className="mr-2 h-4 w-4 text-gray-500" />
                  <span>Settings</span>
                </DropdownMenuItem>
              </DrawerTrigger>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <Settings />
      </Drawer>
    </>
  );
}

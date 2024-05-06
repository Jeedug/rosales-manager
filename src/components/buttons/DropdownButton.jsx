import {
  isPermissionGranted,
  requestPermission,
  sendNotification,
} from "@tauri-apps/api/notification";

import { Settings2, User, UserPlus, X, SwatchBook } from "lucide-react";

import reactLogo from "../../assets/react.svg";
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
} from "../menus/DropdownMenu";
import SettingsMenu from "../menus/SettingsMenu";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";

export function DropdownButton() {
  const handleOnClick = async () => {
    let permissionGranted = await isPermissionGranted();
    if (!permissionGranted) {
      const permission = await requestPermission();
      permissionGranted = permission === "granted";
    }
    if (permissionGranted) {
      sendNotification("Tauri is awesome!");
      sendNotification({ title: "TAURI", body: "Tauri is awesome!" });
      console.log(permissionGranted);
    }

    console.log(permissionGranted);
  };

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="p-2 px-2 from-transparent to-transparent bg-gradient-to-b hover:from-gray-300/10 hover:to-gray-300/25 rounded-tr-xl flex items-center rounded-lg">
            <img src={reactLogo} className="h-4" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" min-w-[120px]">
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={handleOnClick}>
              <User className="mr-2 h-4 w-4" />
              <span>Log in</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleOnClick}>
              <UserPlus className="mr-2 h-4 w-4" />
              <span>Sign up</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
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
            <DialogTrigger asChild>
              <DropdownMenuItem>
                <Settings2 className="mr-2 h-4 w-4 text-gray-500" />
                <span>Settings</span>
              </DropdownMenuItem>
            </DialogTrigger>
            <SettingsMenu />
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </Dialog>
  );
}

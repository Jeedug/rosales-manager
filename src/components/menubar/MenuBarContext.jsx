import { appWindow } from "@tauri-apps/api/window";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "../shadcdn/ContextMenu";

import { Maximize2, X, Minimize2 } from "lucide-react";

export default function MenuBarContext({ children }) {
  const handleCloseWindow = () => {
    appWindow.close();
  };

  const handleMinimizeWindow = (event) => {
    appWindow.minimize();
    event.stopPropagation();
  };

  const handleMaximizeWindow = (event)=>{ 
    appWindow.maximize();
  }

  return (
    
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[40px] absolute top-0  w-full">
        {children}
      </ContextMenuTrigger>
      <ContextMenuContent className="min-w-[100px] bg-[#f8fafc]">
        <ContextMenuItem inset>
          Back
          <ContextMenuShortcut></ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset enabled>
          Forward
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem inset enabled onClick={handleMaximizeWindow}>
          Maximize
          <ContextMenuShortcut>
            <Maximize2 className="w-3 h-3" />
          </ContextMenuShortcut>
        </ContextMenuItem>

        <ContextMenuItem inset enabled onClick={handleMinimizeWindow}>
          Minimize
          <ContextMenuShortcut>
            <Minimize2 className="w-3 h-3" />
          </ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset enabled onClick={handleCloseWindow}>
          Close
          <ContextMenuShortcut>
            <X className="w-3 h-3" />
          </ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}

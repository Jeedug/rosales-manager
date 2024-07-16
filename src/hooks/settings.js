import { desktopDir } from "@tauri-apps/api/path";
import { useState, useEffect } from "react";
import { useSettingsStore } from "../stores/settings";

export default function useSettings() {
  const { settings, setSavePath, setFontSize, setSettings, setKey } = useSettingsStore(); 

  const [ hasChanged, setHasChanged ] = useState(false);

  const [localSettings, setLocalSettings] = useState(() => {
    const item = localStorage.getItem("settings");
    return item ? JSON.parse(item) : undefined;
  });

  useEffect(() => {
    setHasChanged(true);
  }, [settings, localSettings]);

  useEffect(() => {
    const createNewSettings = async () => {
      try {
        if (!localSettings) {
          const desktopPath = await desktopDir();
          const newSettings = {
            access: {
              key: undefined
            }
          };
          setLocalSettings(newSettings);
          setSettings(newSettings);
          localStorage.setItem("settings", JSON.stringify(newSettings));
        }
      } catch (error) {
        console.error("Error obtaining desktop directory:", error);
      }
    };

    createNewSettings();
    setHasChanged(false);
  }, []); // Empty dependency array to run only once

  const updateSavePath = (path) => {
    setSavePath(path);
  };

  const updateFontSize = (size) => {
    setFontSize(size);
  };

  const updateKey = (key) => {
    setKey(key);
  };

  const saveToLocalStorage = () => {
    localStorage.setItem("settings", JSON.stringify(settings));
    setHasChanged(false);
  };

  return {
    settings,
    localSettings,
    hasChanged,
    updateSavePath, 
    updateFontSize,
    updateKey,
    saveToLocalStorage
  };
}

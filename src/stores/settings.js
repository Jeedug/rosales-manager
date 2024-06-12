import { create } from "zustand";

export const useSettingsStore = create((set, get) => ({
  settings: JSON.parse(localStorage.getItem("settings")) || undefined,
  setSavePath: (savePath) =>
    set((state) => {
      const newSettings = {
        ...state.settings,
        files: {
          ...state.settings.files,
          savePath,
        },
      };
      return { settings: newSettings };
    }),
  setFontSize: (fontSize) =>
    set((state) => {
      const newSettings = {
        ...state.settings,
        preferences: {
          ...state.settings.preferences,
          fontSize,
        },
      };
      return { settings: newSettings };
    }),
  setSettings: (newSettings) => set({ settings: newSettings }),
}));



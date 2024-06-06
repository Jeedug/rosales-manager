import { create } from "zustand";

const useToolSelected = create((set) => ({
  selectedTool: "cursor", // cursor, timer, wrench
  setSelectedTool: (tool) => set({ selectedTool: tool }),
}));
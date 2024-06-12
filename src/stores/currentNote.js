import { create } from "zustand";

const useCurrentNote = create((set) => ({
  note: "",
  setNote: (note) => set({ note }),
}));

export default useNote;
import { create } from "zustand";

const useCurrentNote = create((set) => ({
  note: undefined,
  setNote: (note) => set({ note }),
}));

export default useCurrentNote;
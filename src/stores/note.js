import { create } from "zustand";


const useNoteStore = create((set) => ({
    status: "idle",
    setStatus: (status) => set({ status }),
}));


export default useNoteStore;



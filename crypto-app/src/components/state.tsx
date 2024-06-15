import { create } from "zustand";

interface StoreState {
  pageScrollPos: number;
  setPageScrollPos: (pos: number) => void;
}

export const useStore = create<StoreState>((set) => ({
  pageScrollPos: 0,
  setPageScrollPos: (pos) => set({ pageScrollPos: pos }),
}));

import { create } from "zustand";

interface SelectedPokeState {
  poke: number | null;
  setPoke: (id: number | null) => void;
}

export const useSelectedPoke = create<SelectedPokeState>()((set) => ({
  poke: null,
  setPoke: (id: number | null) => set(() => ({ poke: id })),
}));

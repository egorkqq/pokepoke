import { create } from 'zustand'

interface SelectedHabitatsState {
  habitats: string[]
  selectHabitat: (id: string) => void
  removeHabitat: (id: string) => void
  clear: () => void
}

export const useSelectedHabitats = create<SelectedHabitatsState>()((set) => ({
  habitats: [],
  selectHabitat: (id: string) => set((state) => ({ habitats: [...state.habitats, id] })),
  removeHabitat: (id: string) => set((state) => ({ habitats: state.habitats.filter((habitat) => habitat !== id) })),
  clear: () => set({ habitats: [] }),
}))

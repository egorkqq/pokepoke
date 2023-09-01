import { create } from 'zustand'

interface SelectedAbilitiesState {
  abilities: string[]
  selectAbility: (id: string) => void
  removeAbility: (id: string) => void
  clear: () => void
}

export const useSelectedAbilities = create<SelectedAbilitiesState>()((set) => ({
  abilities: [],
  selectAbility: (id: string) => set((state) => ({ abilities: [...state.abilities, id] })),
  removeAbility: (id: string) => set((state) => ({ abilities: state.abilities.filter((ability) => ability !== id) })),
  clear: () => set({ abilities: [] }),
}))

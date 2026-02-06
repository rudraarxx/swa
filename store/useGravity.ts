import { create } from 'zustand'

interface GravityState {
  isGravityEnabled: boolean;
  toggleGravity: () => void;
  isMenuOpen: boolean;
  setMenuOpen: (isOpen: boolean) => void;
}

export const useGravity = create<GravityState>((set) => ({
  isGravityEnabled: true,
  toggleGravity: () => set((state) => ({ isGravityEnabled: !state.isGravityEnabled })),
  isMenuOpen: false,
  setMenuOpen: (isOpen) => set({ isMenuOpen: isOpen }),
}))

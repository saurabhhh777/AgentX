// store/walletStore.ts

import { create } from "zustand";

interface WalletStore {
  address: string | null;
  setAddress: (addr: string | null) => void;
}

export const useWalletStore = create<WalletStore>((set) => ({
  address: null,
  setAddress: (address) => set({ address }),
}));

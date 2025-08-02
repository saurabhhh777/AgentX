// store/bountyStore.ts

import { create } from "zustand";
import { Bounty } from "@/types";

interface BountyStore {
  bounties: Bounty[];
  claiming: boolean;
  setBounties: (b: Bounty[]) => void;
  setClaiming: (c: boolean) => void;
}

export const useBountyStore = create<BountyStore>((set) => ({
  bounties: [],
  claiming: false,
  setBounties: (bounties) => set({ bounties }),
  setClaiming: (claiming) => set({ claiming }),
}));

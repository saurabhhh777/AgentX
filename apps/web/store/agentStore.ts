// store/agentStore.ts

import { create } from "zustand";
import { Agent, AgentRunResult } from "@/types";

interface AgentStore {
  agents: Agent[];
  result: AgentRunResult | null;
  loading: boolean;
  setAgents: (a: Agent[]) => void;
  setLoading: (l: boolean) => void;
  setResult: (r: AgentRunResult | null) => void;
}

export const useAgentStore = create<AgentStore>((set) => ({
  agents: [],
  result: null,
  loading: false,
  setAgents: (agents) => set({ agents }),
  setLoading: (loading) => set({ loading }),
  setResult: (result) => set({ result }),
}));

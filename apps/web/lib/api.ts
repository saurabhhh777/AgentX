// lib/api.ts

import { Agent, AgentRunResult, Bounty } from "@/types";

// -- Agent APIs
export async function createAgent(data: Partial<Agent>) {
  const res = await fetch("/api/agents", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to create agent");

  return res.json();
}

export async function runAgent(agentId: string): Promise<AgentRunResult> {
  const res = await fetch(`/api/agents/${agentId}/run`, { method: "POST" });

  if (!res.ok) throw new Error("Failed to run agent");

  return res.json();
}

export async function fetchAgents(): Promise<Agent[]> {
  const res = await fetch("/api/agents");

  if (!res.ok) throw new Error("Failed to fetch agents");

  return res.json();
}

// -- Bounty APIs
export async function fetchBounties(): Promise<Bounty[]> {
  const res = await fetch("/api/bounties");

  if (!res.ok) throw new Error("Failed to fetch bounties");

  return res.json();
}

export async function claimBounty(bountyId: string) {
  const res = await fetch(`/api/bounties/${bountyId}/claim`, {
    method: "POST",
  });

  if (!res.ok) throw new Error("Failed to claim bounty");

  return res.json();
}

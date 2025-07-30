// app/dashboard/[agentId]/page.tsx
"use client";

import { useParams } from "next/navigation";
import RunAgentModal from "@/components/agent/RunAgentModal";
import AgentResultDisplay from "@/components/agent/AgentResultDisplay";

export default function AgentDetailPage() {
  const { agentId } = useParams();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Agent: {agentId}</h2>
      <RunAgentModal agentId={agentId as string} />
      <AgentResultDisplay agentId={agentId as string} />
    </div>
  );
}

// app/dashboard/page.tsx
import AgentCard from "@/components/ui/AgentCard";
import BountyCard from "@/components/ui/BountyCard";

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Agents</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <AgentCard />
        {/* Repeat for multiple cards or map through zustand store */}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Available Bounties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <BountyCard />
        {/* Map bounties here */}
      </div>
    </div>
  );
}

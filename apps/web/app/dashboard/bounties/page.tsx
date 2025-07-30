// app/dashboard/bounties/page.tsx
import ClaimBounty from "@/components/bounty/ClaimBounty";

export default function BountyPage() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Claim Bounties</h2>
      <ClaimBounty />
    </div>
  );
}

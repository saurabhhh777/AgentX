import { Bounty } from '@/types';

const BountyCard = ({ bounty }: { bounty?: Bounty }) => {
  if (!bounty) {
    return (
      <div className="p-4 border rounded-xl shadow-md text-red-500">
        Bounty data not available.
      </div>
    );
  }

  return (
    <div className="p-4 border rounded-xl shadow-md">
      <h3 className="text-lg font-semibold">{bounty.title || "Untitled Bounty"}</h3>
      <p className="text-sm text-gray-600">{bounty.description || "No description"}</p>
    </div>
  );
};

export default BountyCard;

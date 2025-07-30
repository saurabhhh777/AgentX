import { Bounty } from '@/types';

const BountyCard = ({ bounty }: { bounty: Bounty }) => {
  return (
    <div className="p-4 border rounded-xl shadow-md">
      <h3 className="text-lg font-semibold">{bounty.title}</h3>
      <p className="text-sm text-gray-600">{bounty.description}</p>
    </div>
  );
};

export default BountyCard;
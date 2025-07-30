import { Agent } from '@/types';

const AgentCard = ({ agent }: { agent: Agent }) => {
  return (
    <div className="p-4 border rounded-xl shadow-md">
      <h3 className="text-lg font-semibold">{agent.name}</h3>
      <p className="text-sm text-gray-600">{agent.description}</p>
    </div>
  );
};

export default AgentCard;   
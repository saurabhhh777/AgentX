import { Agent } from '@/types';

const AgentCard = ({ agent }: { agent?: Agent }) => {
  if (!agent) {
    return (
      <div className="p-4 border rounded-xl shadow-md text-red-500">
        Agent data not available.
      </div>
    );
  }

  return (
    <div className="p-4 border rounded-xl shadow-md">
      <h3 className="text-lg font-semibold">{agent.name || "Unnamed Agent"}</h3>
      <p className="text-sm text-gray-600">{agent.description || "No description"}</p>
    </div>
  );
};

export default AgentCard;
 
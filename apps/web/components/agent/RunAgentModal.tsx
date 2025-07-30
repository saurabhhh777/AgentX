import React from "react";

interface Props {
  agentId: string;
}

const RunAgentModal: React.FC<Props> = ({ agentId }) => {
  return (
    <div>
      {/* Replace this with your modal logic */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Run Agent {agentId}
      </button>
    </div>
  );
};

export default RunAgentModal;

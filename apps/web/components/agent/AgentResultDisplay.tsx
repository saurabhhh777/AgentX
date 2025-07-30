const AgentResultDisplay = ({ result }: { result: string }) => {
  return <pre className="bg-gray-100 p-4 rounded">{result}</pre>;
};

export default AgentResultDisplay;
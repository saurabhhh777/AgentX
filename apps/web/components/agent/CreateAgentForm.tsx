'use client';
import { useAgent } from '@/hooks/useAgent';
import { useState } from 'react';

const CreateAgentForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const { createAgent, loading } = useAgent();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createAgent({ name, description });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Agent Name"
        className="w-full p-2 border rounded"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Agent Description"
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        {loading ? 'Creating...' : 'Create Agent'}
      </button>
    </form>
  );
};

export default CreateAgentForm;
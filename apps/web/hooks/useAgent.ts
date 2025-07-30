'use client';
import { useState } from 'react';
import { Agent } from '@/types';

export const useAgent = () => {
  const [loading, setLoading] = useState(false);
  const [agents, setAgents] = useState<Agent[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchAgents = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/agents');
      const data = await res.json();
      setAgents(data);
    } catch (err) {
      setError('Failed to fetch agents');
    } finally {
      setLoading(false);
    }
  };

  const createAgent = async ({ name, description }: { name: string; description: string }) => {
    try {
      setLoading(true);
      await fetch('/api/agents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, description }),
      });
      await fetchAgents();
    } catch (err) {
      setError('Failed to create agent');
    } finally {
      setLoading(false);
    }
  };

  return {
    agents,
    loading,
    error,
    fetchAgents,
    createAgent,
  };
};
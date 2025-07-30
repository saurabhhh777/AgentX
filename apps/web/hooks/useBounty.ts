'use client';
import { useState } from 'react';
import { Bounty } from '@/types';

export const useBounty = () => {
  const [loading, setLoading] = useState(false);
  const [bounties, setBounties] = useState<Bounty[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchBounties = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/bounties');
      const data = await res.json();
      setBounties(data);
    } catch (err) {
      setError('Failed to fetch bounties');
    } finally {
      setLoading(false);
    }
  };

  return {
    bounties,
    loading,
    error,
    fetchBounties,
  };
};
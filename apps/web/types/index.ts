export interface Agent {
  id: string;
  name: string;
  description: string;
  status?: 'idle' | 'running' | 'completed';
  result?: string;
}

export interface Bounty {
  id: string;
  title: string;
  description: string;
  status?: 'open' | 'claimed' | 'closed';
}

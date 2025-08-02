// types.ts

export interface Agent {
  id: string;
  name: string;
  description: string;
  status: 'idle' | 'running' | 'completed' | 'failed';
  type: 'single' | 'swarm';
  createdAt: Date;
  updatedAt: Date;
}

export interface AgentRunResult {
  id: string;
  agentId: string;
  output: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  summary?: string;
  charts?: ChartData[];
  insights?: string[];
  exportData?: {
    pdf?: string;
    json?: string;
  };
  createdAt: Date;
  completedAt?: Date;
}

export interface ChartData {
  type: 'bar' | 'line' | 'pie' | 'scatter';
  title: string;
  data: any;
  config?: any;
}

export interface Bounty {
  id: string;
  title: string;
  description: string;
  reward: number;
  currency: 'SOL' | 'USDC' | 'BONUS';
  difficulty: 'easy' | 'medium' | 'hard';
  status: 'open' | 'claimed' | 'completed';
  claimedBy?: string;
  createdAt: Date;
  expiresAt?: Date;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  complexity: 'simple' | 'complex';
  inputData: any;
  agentId?: string;
  swarmId?: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  result?: AgentRunResult;
  createdAt: Date;
  completedAt?: Date;
}

export interface User {
  id: string;
  publicKey: string;
  walletType: 'phantom' | 'solflare' | 'other';
  hasValidNFT: boolean;
  hasValidToken: boolean;
  accessLevel: 'free' | 'premium' | 'enterprise';
  createdAt: Date;
  lastLoginAt: Date;
}

export interface SwarmExecution {
  id: string;
  taskId: string;
  agents: string[];
  status: 'pending' | 'running' | 'completed' | 'failed';
  partialResults: PartialResult[];
  finalResult?: AgentRunResult;
  createdAt: Date;
  completedAt?: Date;
}

export interface PartialResult {
  agentId: string;
  output: string;
  status: 'completed' | 'failed';
  timestamp: Date;
}

export interface AuthResponse {
  success: boolean;
  token?: string;
  user?: User;
  message?: string;
  requiresNFT?: boolean;
  requiresToken?: boolean;
}

export interface TaskSubmission {
  title: string;
  description: string;
  inputData: any;
  complexity: 'simple' | 'complex';
}

export interface Analytics {
  totalTasks: number;
  completedTasks: number;
  totalRewards: number;
  averageCompletionTime: number;
  popularAgents: string[];
  userRanking: number;
}

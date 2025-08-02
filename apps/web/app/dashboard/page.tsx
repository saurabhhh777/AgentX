"use client";

import { useState, useEffect } from 'react';
import { 
  Bot, 
  Plus, 
  Play, 
  Clock, 
  CheckCircle, 
  XCircle, 
  TrendingUp,
  Wallet,
  Shield,
  Zap,
  Users,
  Award
} from 'lucide-react';
import { Agent, Task, Bounty, User, Analytics } from '@/types';

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [agents, setAgents] = useState<Agent[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [bounties, setBounties] = useState<Bounty[]>([]);
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);

  // Mock data for demonstration
  useEffect(() => {
    // Simulate authentication check
    const mockUser: User = {
      id: '1',
      publicKey: '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU',
      walletType: 'phantom',
      hasValidNFT: true,
      hasValidToken: true,
      accessLevel: 'premium',
      createdAt: new Date(),
      lastLoginAt: new Date()
    };

    const mockAgents: Agent[] = [
      {
        id: '1',
        name: 'Research Agent',
        description: 'Conducts comprehensive research on given topics',
        status: 'idle',
        type: 'single',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2',
        name: 'Data Analysis Swarm',
        description: 'Multi-agent system for complex data analysis',
        status: 'completed',
        type: 'swarm',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    const mockTasks: Task[] = [
      {
        id: '1',
        title: 'Market Research: AI Trends 2024',
        description: 'Analyze current AI market trends and provide insights',
        complexity: 'complex',
        inputData: { topic: 'AI Trends 2024', depth: 'comprehensive' },
        status: 'completed',
        createdAt: new Date(),
        completedAt: new Date()
      }
    ];

    const mockBounties: Bounty[] = [
      {
        id: '1',
        title: 'DeFi Protocol Analysis',
        description: 'Analyze top 10 DeFi protocols and their security measures',
        reward: 50,
        currency: 'SOL',
        difficulty: 'hard',
        status: 'open',
        createdAt: new Date()
      },
      {
        id: '2',
        title: 'NFT Market Research',
        description: 'Research current NFT market trends and opportunities',
        reward: 25,
        currency: 'USDC',
        difficulty: 'medium',
        status: 'open',
        createdAt: new Date()
      }
    ];

    const mockAnalytics: Analytics = {
      totalTasks: 15,
      completedTasks: 12,
      totalRewards: 150,
      averageCompletionTime: 2.5,
      popularAgents: ['Research Agent', 'Data Analysis Swarm'],
      userRanking: 5
    };

    setUser(mockUser);
    setAgents(mockAgents);
    setTasks(mockTasks);
    setBounties(mockBounties);
    setAnalytics(mockAnalytics);
    setIsAuthenticated(true);
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center">
          <Wallet className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <h2 className="text-2xl font-bold mb-2">Connect Your Wallet</h2>
          <p className="text-gray-600 mb-6">Connect your Solana wallet to access AgentX</p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
            Connect Wallet
          </button>
        </div>
      </div>
    );
  }

  if (showPaywall) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-red-50">
        <div className="text-center max-w-md">
          <Shield className="w-16 h-16 mx-auto mb-4 text-orange-500" />
          <h2 className="text-2xl font-bold mb-2">Premium Access Required</h2>
          <p className="text-gray-600 mb-6">You need to hold a valid NFT or token to access this feature</p>
          <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
            Mint NFT
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Stats */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Welcome back, {user?.publicKey.slice(0, 8)}...</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-green-100 px-3 py-1 rounded-full">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-600">Premium</span>
              </div>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>New Task</span>
              </button>
            </div>
          </div>

          {/* Analytics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm">Total Tasks</p>
                  <p className="text-3xl font-bold">{analytics?.totalTasks}</p>
                </div>
                <Bot className="w-8 h-8 text-blue-200" />
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm">Completed</p>
                  <p className="text-3xl font-bold">{analytics?.completedTasks}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-200" />
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm">Total Rewards</p>
                  <p className="text-3xl font-bold">{analytics?.totalRewards} SOL</p>
                </div>
                <Award className="w-8 h-8 text-purple-200" />
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm">Ranking</p>
                  <p className="text-3xl font-bold">#{analytics?.userRanking}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-orange-200" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Agents & Tasks */}
          <div className="lg:col-span-2 space-y-8">
            {/* Agents Section */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Your Agents</h2>
                <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-2">
                  <Plus className="w-4 h-4" />
                  <span>Create Agent</span>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {agents.map((agent) => (
                  <div key={agent.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-900">{agent.name}</h3>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        agent.status === 'idle' ? 'bg-gray-100 text-gray-600' :
                        agent.status === 'running' ? 'bg-blue-100 text-blue-600' :
                        agent.status === 'completed' ? 'bg-green-100 text-green-600' :
                        'bg-red-100 text-red-600'
                      }`}>
                        {agent.status}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{agent.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <Bot className="w-3 h-3" />
                        <span>{agent.type}</span>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        Run Agent
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Tasks */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Tasks</h2>
              <div className="space-y-4">
                {tasks.map((task) => (
                  <div key={task.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{task.title}</h3>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        task.status === 'pending' ? 'bg-yellow-100 text-yellow-600' :
                        task.status === 'processing' ? 'bg-blue-100 text-blue-600' :
                        task.status === 'completed' ? 'bg-green-100 text-green-600' :
                        'bg-red-100 text-red-600'
                      }`}>
                        {task.status}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{task.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Complexity: {task.complexity}</span>
                      <span>{task.createdAt.toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Bounties */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Available Bounties</h2>
                <Zap className="w-5 h-5 text-yellow-500" />
              </div>
              <div className="space-y-4">
                {bounties.map((bounty) => (
                  <div key={bounty.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{bounty.title}</h3>
                      <div className="text-sm font-bold text-green-600">
                        {bounty.reward} {bounty.currency}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{bounty.description}</p>
                    <div className="flex items-center justify-between">
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        bounty.difficulty === 'easy' ? 'bg-green-100 text-green-600' :
                        bounty.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-red-100 text-red-600'
                      }`}>
                        {bounty.difficulty}
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        Claim Bounty
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center space-x-2">
                  <Play className="w-4 h-4" />
                  <span>Run New Task</span>
                </button>
                <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Create Swarm</span>
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all flex items-center justify-center space-x-2">
                  <Award className="w-4 h-4" />
                  <span>View Leaderboard</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

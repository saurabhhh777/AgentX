import axios from "axios";

const ASI_API_KEY = process.env.ASI_API_KEY;
const ASI_API_URL = "https://api.asi1.ai/v1/chat/completions";

export const executeSwarmTask = async (question: string): Promise<string> => {
  try {
    // Simulate swarm: you can expand this to call multiple agents in parallel
    const swarmAgents = ["Agent1", "Agent2", "Agent3"];

    const results = await Promise.all(
      swarmAgents.map(async (agentName) => {
        const response = await axios.post(
          ASI_API_URL,
          {
            model: "asi1-mini",
            messages: [
              { role: "system", content: `You are ${agentName} of a swarm team.` },
              { role: "user", content: question },
            ],
            temperature: 0.5,
            stream: false,
            max_tokens: 0,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${ASI_API_KEY}`,
            },
          }
        );
        return {
          agent: agentName,
          response: (response.data as any).choices[0].message.content,
        };
      })
    );

    return results;
  } catch (error: any) {
    console.error("Swarm Service Error:", error?.response?.data || error.message);
    throw new Error("Failed to execute swarm task");
  }
};

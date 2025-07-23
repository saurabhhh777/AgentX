import axios from "axios";

const ASI_API_KEY = process.env.ASI_API_KEY || "your_api_key_here";
const ASI_API_URL = "https://api.asi1.ai/v1/chat/completions";

export const getASIResponse = async (input: string): Promise<string> => {
  try {
    const response = await axios.post(
      ASI_API_URL,
      {
        model: "asi1-mini",
        messages: [{ role: "user", content: input }],
        temperature: 0,
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

    return (response.data as any).choices[0].message.content;
  } catch (error: any) {
    console.error("ASI API Error:", error?.response?.data || error.message);
    throw new Error("Failed to get response from ASI");
  }
};

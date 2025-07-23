const { summarizeResearch} from "";
const { agent } from "juliaos-sdk";
const axios = require("axios");
const { convertHtmlToText } = require("../../utils/htmlParser"); 



exports.runSummarizer = async (req, res) => {
  try {
    const { url } = req.body;
    const summary = await summarizeResearch(url);
    res.json({ summary });
  } catch (error) {
    console.error("Summarizer Error:", error);
    res.status(500).json({ error: "Summarization failed" });
  }
};


exports.summarizeResearch = async (url) => {
  const html = await axios.get(url)
  const plainText = convertHtmlToText(html.data);

  const prompt = `Summarize the following research paper:\n\n${plainText}`;
  const summary = await agent.useLLM(prompt);
  
  return summary;
};

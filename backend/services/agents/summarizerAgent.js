import { agent } from "juliaos-sdk"; 
import { get } from "axios";
import { convertHtmlToText } from "../../utils/htmlParser"; 

export async function summarizeResearch(url) {
  const html = await get(url);
  const plainText = convertHtmlToText(html.data);

  const prompt = `Summarize the following research paper:\n\n${plainText}`;
  const summary = await agent.useLLM(prompt);
  
  return summary;
}

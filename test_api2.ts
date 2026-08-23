import { GoogleGenAI, ThinkingLevel } from "@google/genai";
import "dotenv/config";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
async function test() {
  try {
    const res = await ai.models.generateContentStream({
      model: "gemini-3.1-pro-preview",
      contents: "Tell me a very short joke.",
      config: {
        thinkingConfig: { thinkingLevel: ThinkingLevel.HIGH }
      }
    });
    for await (const chunk of res) {
      console.log("CHUNK PARTS:", JSON.stringify(chunk.candidates?.[0]?.content?.parts));
    }
  } catch (e) {
    console.log("ERROR:", e.message);
  }
}
test();

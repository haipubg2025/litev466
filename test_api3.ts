import { GoogleGenAI, ThinkingLevel } from "@google/genai";
import "dotenv/config";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
async function test() {
  try {
    const res = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite", // let's try to see if it supports thinking or we just mock a log
      contents: "Tell me a very short joke.",
    });
    console.log("RESPONSE:", JSON.stringify(res.candidates[0].content.parts));
  } catch (e) {
    console.log("ERROR:", e.message);
  }
}
test();

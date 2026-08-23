import { GoogleGenAI } from "@google/genai";
import "dotenv/config";
const aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
async function run() {
  const stream = await aiClient.models.generateContentStream({ 
    model: "gemini-3.5-flash", 
    contents: "Hi"
  });
  for await (const chunk of stream) {
    console.log("CHUNK:", chunk.text);
  }
}
run().catch(console.error);

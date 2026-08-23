import { GoogleGenAI } from "@google/genai";
import "dotenv/config";
const aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
async function run() {
  for await (const m of await aiClient.models.list()) {
    console.log(m.name);
  }
}
run().catch(console.error);

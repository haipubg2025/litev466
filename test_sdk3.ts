import { GoogleGenAI } from "@google/genai";
import "dotenv/config";
const aiClient = new GoogleGenAI({ 
  apiKey: process.env.GEMINI_API_KEY, 
});
aiClient.models.generateContent({ 
  model: "gemini-3.7-flash", 
  contents: "Hi",
  config: { systemInstruction: "Be a pirate." }
}).then(r => console.log("SUCCESS:", r.text)).catch(e => console.error("ERROR:", e));

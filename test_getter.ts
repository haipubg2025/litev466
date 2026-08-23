import { GoogleGenAI } from "@google/genai";
import "dotenv/config";
const aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
aiClient.models.generateContent({ 
  model: "gemini-3.5-flash", 
  contents: "Hi"
}).then(r => {
  const parts = r.candidates?.[0]?.content?.parts;
  console.log("PARTS RAW:", JSON.stringify(parts));
  console.log("GETTER TEXT:", r.text);
}).catch(e => console.error("ERROR:", e));

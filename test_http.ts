import { GoogleGenAI } from "@google/genai";
import "dotenv/config";
try {
  const aiClient = new GoogleGenAI({ 
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: { headers: { 'User-Agent': 'aistudio-build' }, timeout: 600000 }
  });
  console.log("INIT SUCCESS");
  
  aiClient.models.generateContent({
    model: "gemini-3.5-flash",
    contents: "Hi"
  }).then(r => console.log("FETCH SUCCESS")).catch(e => console.error("FETCH ERROR:", e));
} catch (e) {
  console.error("INIT ERROR:", e);
}

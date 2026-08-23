import { GoogleGenAI, Type } from "@google/genai";
import "dotenv/config";
const aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
aiClient.models.generateContent({ 
  model: "gemini-3.5-flash", 
  contents: "Hi",
  config: { 
    systemInstruction: "",
    responseMimeType: "application/json",
    responseSchema: { type: Type.OBJECT, properties: { msg: { type: Type.STRING } } }
  }
}).then(r => console.log("SUCCESS:", r.text)).catch(e => console.error("ERROR:", e));

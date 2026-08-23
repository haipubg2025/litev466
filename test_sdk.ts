import { GoogleGenAI } from "@google/genai";
const aiClient = new GoogleGenAI({ 
  apiKey: "test", 
  httpOptions: { headers: { 'User-Agent': 'aistudio-build' }, timeout: 600000 } 
});
console.log("SUCCESS");

import { GoogleGenAI } from "@google/genai";
import "dotenv/config";
try {
  const signal = AbortSignal.timeout(600000);
  console.log("AbortSignal works");
} catch (e) {
  console.error("AbortSignal ERROR:", e);
}

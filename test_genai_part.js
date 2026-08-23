const { GoogleGenAI } = require("@google/genai");
const aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
async function run() {
  const stream = await aiClient.models.generateContentStream({
    model: "gemini-3.5-flash", // Does 3.5 flash support thinking? No, it's flash. Wait, let's just see normal output.
    contents: "Hi"
  });
  for await (const chunk of stream) {
    if (chunk.candidates && chunk.candidates.length > 0) {
      console.log(JSON.stringify(chunk.candidates[0].content.parts, null, 2));
    }
  }
}
run().catch(console.error);

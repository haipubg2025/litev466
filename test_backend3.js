fetch("http://localhost:3000/api/generate-stream", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    prompt: "Hello",
    providedApiKey: process.env.GEMINI_API_KEY,
    selectedAIModel: "gemini-3.5-flash"
  })
}).then(async r => {
  const reader = r.body.getReader();
  const decoder = new TextDecoder("utf-8");
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    console.log("CHUNK:", decoder.decode(value));
  }
});

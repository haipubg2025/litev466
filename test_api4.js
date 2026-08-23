const apiKey = process.env.GEMINI_API_KEY;
fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-pro-preview:generateContent?key=${apiKey}`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    contents: [{ role: "user", parts: [{ text: "Explain how AI works." }] }],
    generationConfig: {
      thinkingConfig: { thinkingLevel: "HIGH" }
    }
  })
}).then(r => r.json()).then(console.log);

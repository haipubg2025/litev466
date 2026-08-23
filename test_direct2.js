const apiKey = process.env.GEMINI_API_KEY;
fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.7-flash:generateContent?key=${apiKey}`, {
  method: 'POST',
  headers: { 
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    contents: [{ role: "user", parts: [{ text: "Hello" }] }],
    generationConfig: {
      temperature: 0.7,
      topP: 0.95,
      topK: 40
    },
    systemInstruction: { parts: [{ text: "Be pirate" }] }
  })
}).then(r => r.json()).then(console.log).catch(console.error);

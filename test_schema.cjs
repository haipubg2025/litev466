const http = require('http');

const req = http.request({
  hostname: 'localhost',
  port: 3000,
  path: '/api/generate-stream',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
}, (res) => {
  let buffer = "";
  res.on('data', (chunk) => {
    buffer += chunk;
  });
  res.on('end', () => {
    console.log(`BODY: ${buffer}`);
  });
});

req.write(JSON.stringify({
  prompt: "Hello",
  providedApiKey: process.env.GEMINI_API_KEY,
  selectedAIModel: "gemini-3.5-flash",
  schema: {
    type: "OBJECT",
    properties: {
      reply: { type: "STRING" }
    }
  }
}));
req.end();

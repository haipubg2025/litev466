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
  console.log(`STATUS: ${res.statusCode}`);
  let buffer = "";
  res.on('data', (chunk) => {
    buffer += chunk.toString();
  });
  res.on('end', () => {
    console.log(`BODY: ${buffer}`);
  });
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

req.write(JSON.stringify({
  prompt: "Say testing 123",
  providedApiKey: process.env.GEMINI_API_KEY, // Note: Assuming env has a working key, otherwise we get the exact error format
  selectedAIModel: "gemini-3.5-flash",
  temperature: 0.7,
  topP: 0.9,
  topK: 40
}));
req.end();

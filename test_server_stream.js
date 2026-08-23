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
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

req.write(JSON.stringify({
  prompt: "Xin chào",
  providedApiKey: process.env.GEMINI_API_KEY,
  selectedAIModel: "gemini-3.5-flash",
  temperature: 0.7,
  topP: 0.9,
  topK: 40
}));
req.end();

const fs = require('fs');
let code = fs.readFileSync('src/services/aiService.ts', 'utf-8');

code = code.replace(
  /const model = isUsingProxy \s*\?\s*\(activeProxy\.selectedModel \|\| "gemini-3\.7-flash"\)\s*:\s*\(state\.selectedAIModel \|\| "gemini-3\.7-flash"\);/g,
  'const model = isUsingProxy \n      ? (activeProxy.selectedModel || "")\n      : (state.selectedAIModel || "gemini-3.7-flash");'
);

fs.writeFileSync('src/services/aiService.ts', code);
console.log("Patched aiService.ts 2");

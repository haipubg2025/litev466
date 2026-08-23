const fs = require('fs');
let code = fs.readFileSync('src/services/aiService.ts', 'utf-8');

code = code.replace(
  'const model = isUsingProxy \n        ? (activeProxy.selectedModel || "gemini-3.7-flash")\n        : (state.selectedAIModel || "gemini-3.7-flash");',
  'const model = isUsingProxy \n        ? (activeProxy.selectedModel || "")\n        : (state.selectedAIModel || "gemini-3.7-flash");'
);

code = code.replace(
  'selectedAIModel: isUsingProxy ? (activeProxy.selectedModel || "gemini-3.7-flash") : state.selectedAIModel',
  'selectedAIModel: isUsingProxy ? (activeProxy.selectedModel || "") : state.selectedAIModel'
);

fs.writeFileSync('src/services/aiService.ts', code);
console.log("Patched aiService.ts");

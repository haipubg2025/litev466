const fs = require('fs');
let code = fs.readFileSync('src/store/useStore.ts', 'utf-8');
code = code.replace(
  `selectedAIModel: "gemini-3.5-flash",`,
  `selectedAIModel: "gemini-2.5-flash",`
);
fs.writeFileSync('src/store/useStore.ts', code);
console.log("Patched useStore.ts default");

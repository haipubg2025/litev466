const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf-8');

const target = `      if (activeProxy && activeProxy.url && activeProxy.key) {
        model = activeProxy.selectedModel || "gemini-3.6-flash";`;

const replace = `      if (activeProxy && activeProxy.url && activeProxy.key) {
        model = activeProxy.selectedModel || "";`;

if (code.includes(target)) {
  code = code.replace(target, replace);
  fs.writeFileSync('server.ts', code);
  console.log("Patched server.ts");
} else {
  console.log("Could not find target in server.ts");
}

const fs = require('fs');
let code = fs.readFileSync('src/components/Settings.tsx', 'utf-8');
code = code.replace(
  `                          "gemini-3.7-flash",`,
  `                          "gemini-3.7-flash",\n                          "gemini-2.5-flash",\n                          "gemini-2.5-pro",`
);
fs.writeFileSync('src/components/Settings.tsx', code);
console.log("Patched Settings.tsx");

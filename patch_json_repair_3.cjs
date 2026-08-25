const fs = require('fs');
let content = fs.readFileSync('src/utils/jsonRepair.ts', 'utf8');

content = content.replace(
  /data\.outline = decodeJsonEscapeSymbols\(outlineMatch\[1\]\);\s*hasData = true;\s*\}/,
  `data.outline = decodeJsonEscapeSymbols(outlineMatch[1]);
      hasData = true;
    }
    const memoryMatch = rawText.match(/"memory"\\s*:\\s*"([^"\\\\]*(?:\\\\.[^"\\\\]*)*)"/i);
    if (memoryMatch) {
      data.memory = decodeJsonEscapeSymbols(memoryMatch[1]);
      hasData = true;
    }`
);

fs.writeFileSync('src/utils/jsonRepair.ts', content);
console.log("Patched jsonRepair.ts again!");

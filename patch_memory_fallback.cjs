const fs = require('fs');
let content = fs.readFileSync('src/utils/jsonRepair.ts', 'utf8');

const target = `    const memoryMatch = rawText.match(/"memory"\\s*:\\s*"([^"\\\\]*(?:\\\\.[^"\\\\]*)*)"/i);
    if (memoryMatch) {
      data.memory = decodeJsonEscapeSymbols(memoryMatch[1]);
      hasData = true;
    }`;

const replacement = `    const memoryMatch = rawText.match(/"memory"\\s*:\\s*"([^"\\\\]*(?:\\\\.[^"\\\\]*)*)"/i);
    if (memoryMatch) {
      data.memory = decodeJsonEscapeSymbols(memoryMatch[1]);
      hasData = true;
    } else {
       // Thử tìm trong khối json_memory
       const memBlockMatch = rawText.match(/<json_memory>[\\s\\S]*?"memory"\\s*:\\s*"([^"\\\\]*(?:\\\\.[^"\\\\]*)*)"[\\s\\S]*?(?:<\\/json_memory>|$)/i);
       if (memBlockMatch) {
          data.memory = decodeJsonEscapeSymbols(memBlockMatch[1]);
          hasData = true;
       }
    }`;

content = content.replace(target, replacement);

fs.writeFileSync('src/utils/jsonRepair.ts', content);
console.log("Patched memory fallback");

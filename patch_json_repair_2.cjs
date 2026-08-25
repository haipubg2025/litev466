const fs = require('fs');
let content = fs.readFileSync('src/utils/jsonRepair.ts', 'utf8');

// Replace using regex
content = content.replace(
  /data\.outline = decodeJsonEscapeSymbols\(outlineMatch\[1\]\);\s*\}/,
  `data.outline = decodeJsonEscapeSymbols(outlineMatch[1]);
    }
    const memoryMatch = rawText.match(/"memory"\\s*:\\s*"([^"\\\\]*(?:\\\\.[^"\\\\]*)*)"/i);
    if (memoryMatch) {
      data.memory = decodeJsonEscapeSymbols(memoryMatch[1]);
    }`
);

content = content.replace(
  /mergedData\.outline = Array\.from\(uniqueOutlinesMap\.values\(\)\)\.map\(p => typeof p\.value === 'string' \? p\.value : ''\)\.join\("\\n\\n"\);\s*\}/,
  `mergedData.outline = Array.from(uniqueOutlinesMap.values()).map(p => typeof p.value === 'string' ? p.value : '').join("\\n\\n");
  }
  
  const memories = storyParts.filter(p => p.key === "memory");
  if (memories.length > 0) {
    const uniqueMemoriesMap = new Map();
    memories.forEach(p => uniqueMemoriesMap.set(p.key, p));
    mergedData.memory = Array.from(uniqueMemoriesMap.values()).map(p => typeof p.value === 'string' ? p.value : '').join("\\n\\n");
  }`
);

fs.writeFileSync('src/utils/jsonRepair.ts', content);
console.log("Patched jsonRepair.ts again");

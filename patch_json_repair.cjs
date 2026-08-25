const fs = require('fs');
let content = fs.readFileSync('src/utils/jsonRepair.ts', 'utf8');

// 1. Add memory?: string; to GameplayParsedData interface (after outline?: string;)
content = content.replace(/outline\?: string;/, 'outline?: string;\n  memory?: string;');

// 2. Add fallback regex extraction for memory
const targetExtract = `    const outlineMatch = rawText.match(/"outline"\\s*:\\s*"([^"\\\\]*(?:\\\\.[^"\\\\]*)*)"/i);
    if (outlineMatch) {
      data.outline = decodeJsonEscapeSymbols(outlineMatch[1]);
    }`;

const replacementExtract = `    const outlineMatch = rawText.match(/"outline"\\s*:\\s*"([^"\\\\]*(?:\\\\.[^"\\\\]*)*)"/i);
    if (outlineMatch) {
      data.outline = decodeJsonEscapeSymbols(outlineMatch[1]);
    }
    const memoryMatch = rawText.match(/"memory"\\s*:\\s*"([^"\\\\]*(?:\\\\.[^"\\\\]*)*)"/i);
    if (memoryMatch) {
      data.memory = decodeJsonEscapeSymbols(memoryMatch[1]);
    }`;

if (content.includes('data.outline = decodeJsonEscapeSymbols(outlineMatch[1]);')) {
    content = content.replace(targetExtract, replacementExtract);
}

// 3. Add "memory" to storyParts filter logic (similar to outline)
const targetFilter = `  const outlines = storyParts.filter(p => p.key === "outline");
  if (outlines.length > 0) {
    const uniqueOutlinesMap = new Map();
    outlines.forEach(p => uniqueOutlinesMap.set(p.key, p));
    mergedData.outline = Array.from(uniqueOutlinesMap.values()).map(p => typeof p.value === 'string' ? p.value : '').join("\\n\\n");
  }`;

const replacementFilter = `  const outlines = storyParts.filter(p => p.key === "outline");
  if (outlines.length > 0) {
    const uniqueOutlinesMap = new Map();
    outlines.forEach(p => uniqueOutlinesMap.set(p.key, p));
    mergedData.outline = Array.from(uniqueOutlinesMap.values()).map(p => typeof p.value === 'string' ? p.value : '').join("\\n\\n");
  }
  
  const memories = storyParts.filter(p => p.key === "memory");
  if (memories.length > 0) {
    const uniqueMemoriesMap = new Map();
    memories.forEach(p => uniqueMemoriesMap.set(p.key, p));
    mergedData.memory = Array.from(uniqueMemoriesMap.values()).map(p => typeof p.value === 'string' ? p.value : '').join("\\n\\n");
  }`;

if (content.includes('const outlines = storyParts.filter(p => p.key === "outline");')) {
    content = content.replace(targetFilter, replacementFilter);
}

fs.writeFileSync('src/utils/jsonRepair.ts', content);
console.log("Patched jsonRepair.ts");

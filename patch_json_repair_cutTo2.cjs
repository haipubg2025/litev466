const fs = require('fs');
let content = fs.readFileSync('src/utils/jsonRepair.ts', 'utf8');

const target1 = `    const jsonUpdateStart = afterThinking.toLowerCase().indexOf("<json_update>");
    const jsonOutputStart = afterThinking.toLowerCase().indexOf("<json_output>");
    const markdownJsonStart = afterThinking.toLowerCase().indexOf("\`\`\`json");
    const curlyBraceStart = afterThinking.indexOf("{");
    
    if (jsonUpdateStart !== -1) {
      cutTo = jsonUpdateStart;
    } else if (jsonOutputStart !== -1) {
      cutTo = jsonOutputStart;
    } else if (markdownJsonStart !== -1) {
      cutTo = markdownJsonStart;
    } else if (curlyBraceStart !== -1) {`;

const replacement1 = `    const jsonUpdateStart = afterThinking.toLowerCase().indexOf("<json_update>");
    const jsonMcStart = afterThinking.toLowerCase().indexOf("<json_mc>");
    const jsonOutputStart = afterThinking.toLowerCase().indexOf("<json_output>");
    const jsonMemoryStart = afterThinking.toLowerCase().indexOf("<json_memory>");
    const jsonActionsStart = afterThinking.toLowerCase().indexOf("<json_actions>");
    const markdownJsonStart = afterThinking.toLowerCase().indexOf("\`\`\`json");
    const curlyBraceStart = afterThinking.indexOf("{");
    
    if (jsonUpdateStart !== -1) {
      cutTo = jsonUpdateStart;
    } else if (jsonMcStart !== -1) {
      cutTo = jsonMcStart;
    } else if (jsonOutputStart !== -1) {
      cutTo = jsonOutputStart;
    } else if (jsonMemoryStart !== -1) {
      cutTo = jsonMemoryStart;
    } else if (jsonActionsStart !== -1) {
      cutTo = jsonActionsStart;
    } else if (markdownJsonStart !== -1) {
      cutTo = markdownJsonStart;
    } else if (curlyBraceStart !== -1) {`;

content = content.replace(target1, replacement1);

fs.writeFileSync('src/utils/jsonRepair.ts', content);
console.log("Patched cutTo logic for afterThinking");

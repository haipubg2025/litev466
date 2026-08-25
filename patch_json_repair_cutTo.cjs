const fs = require('fs');
let content = fs.readFileSync('src/utils/jsonRepair.ts', 'utf8');

const target1 = `      const jsonUpdateStart = cleanRaw.toLowerCase().indexOf("<json_update>");
      const jsonOutputStart = cleanRaw.toLowerCase().indexOf("<json_output>");
      const markdownJsonStart = cleanRaw.toLowerCase().indexOf("\`\`\`json");`;

const replacement1 = `      const jsonUpdateStart = cleanRaw.toLowerCase().indexOf("<json_update>");
      const jsonMcStart = cleanRaw.toLowerCase().indexOf("<json_mc>");
      const jsonOutputStart = cleanRaw.toLowerCase().indexOf("<json_output>");
      const jsonMemoryStart = cleanRaw.toLowerCase().indexOf("<json_memory>");
      const jsonActionsStart = cleanRaw.toLowerCase().indexOf("<json_actions>");
      const markdownJsonStart = cleanRaw.toLowerCase().indexOf("\`\`\`json");`;

content = content.replace(target1, replacement1);

const target2 = `      if (jsonUpdateStart !== -1 && jsonUpdateStart > startIdx) {
        cutTo = jsonUpdateStart;
      } else if (jsonOutputStart !== -1 && jsonOutputStart > startIdx) {
        cutTo = jsonOutputStart;
      } else if (markdownJsonStart !== -1 && markdownJsonStart > startIdx) {
        cutTo = markdownJsonStart;
      } else if (firstCurlyBrace !== -1) {`;

const replacement2 = `      if (jsonUpdateStart !== -1 && jsonUpdateStart > startIdx) {
        cutTo = jsonUpdateStart;
      } else if (jsonMcStart !== -1 && jsonMcStart > startIdx) {
        cutTo = jsonMcStart;
      } else if (jsonOutputStart !== -1 && jsonOutputStart > startIdx) {
        cutTo = jsonOutputStart;
      } else if (jsonMemoryStart !== -1 && jsonMemoryStart > startIdx) {
        cutTo = jsonMemoryStart;
      } else if (jsonActionsStart !== -1 && jsonActionsStart > startIdx) {
        cutTo = jsonActionsStart;
      } else if (markdownJsonStart !== -1 && markdownJsonStart > startIdx) {
        cutTo = markdownJsonStart;
      } else if (firstCurlyBrace !== -1) {`;

content = content.replace(target2, replacement2);

fs.writeFileSync('src/utils/jsonRepair.ts', content);
console.log("Patched cutTo logic");

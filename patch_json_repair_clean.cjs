const fs = require('fs');
let content = fs.readFileSync('src/utils/jsonRepair.ts', 'utf8');

const target = `  cleaned = cleaned.replace(/<\\/?json_output>/gi, "");`;
const replacement = `  cleaned = cleaned.replace(/<\\/?json_update>/gi, "");
  cleaned = cleaned.replace(/<\\/?json_MC>/gi, "");
  cleaned = cleaned.replace(/<\\/?json_output>/gi, "");
  cleaned = cleaned.replace(/<\\/?json_memory>/gi, "");
  cleaned = cleaned.replace(/<\\/?json_actions>/gi, "");`;

content = content.replace(target, replacement);

fs.writeFileSync('src/utils/jsonRepair.ts', content);
console.log("Patched jsonRepair clean tags");

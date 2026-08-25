const fs = require('fs');
let content = fs.readFileSync('src/utils/jsonRepair.ts', 'utf8');

content = content.replace(
  `let cleaned = sanitizedRaw.trim();
  
  const jsonMatch = cleaned.match(/<json_output>\\s*({[\\s\\S]*?})\\s*(?:<\\/json_output>|$)/) || `,
  `let cleaned = sanitizedRaw.trim();
  
  const jsonMatch = cleaned.match(/<json_output>\\s*({[\\s\\S]*?})\\s*(?:<\\/json_output>|$)/) || `
);

fs.writeFileSync('src/utils/jsonRepair.ts', content);

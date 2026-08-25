const fs = require('fs');
let content = fs.readFileSync('src/utils/jsonRepair.ts', 'utf8');

const target = `  const actionsMatches = [...cleanRaw.matchAll(/<json_actions>([\\s\\S]*?)(?:<\\/json_actions>|$)/gi)];
  actionsMatches.forEach(m => {
    if (m[1] && m[1].trim()) jsonBlockCandidates.push(m[1].trim());
  });`;

const replacement = `  const actionsMatches = [...cleanRaw.matchAll(/<json_actions>([\\s\\S]*?)(?:<\\/json_actions>|$)/gi)];
  actionsMatches.forEach(m => {
    if (m[1] && m[1].trim()) jsonBlockCandidates.push(m[1].trim());
  });

  const memoryMatches = [...cleanRaw.matchAll(/<json_memory>([\\s\\S]*?)(?:<\\/json_memory>|$)/gi)];
  memoryMatches.forEach(m => {
    if (m[1] && m[1].trim()) jsonBlockCandidates.push(m[1].trim());
  });`;

content = content.replace(target, replacement);

const targetMarker = `    /<json_update>/gi,
    /<json_actions>/gi,
    /<json_MC>/gi
  ];`;

const replacementMarker = `    /<json_update>/gi,
    /<json_actions>/gi,
    /<json_MC>/gi,
    /<json_memory>/gi
  ];`;

content = content.replace(targetMarker, replacementMarker);

fs.writeFileSync('src/utils/jsonRepair.ts', content);
console.log("Patched jsonRepair.ts for memory matches");

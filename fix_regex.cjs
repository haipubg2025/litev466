const fs = require('fs');
let code = fs.readFileSync('src/components/CodexUpdateModal.tsx', 'utf-8');

code = code.replace(
  'const sentences2 = s2.split(/([.!?]+(?:\\s+|\\n+|$)/g).filter(Boolean);',
  'const sentences2 = s2.split(/([.!?]+(?:\\s+|\\n+|$))/g).filter(Boolean);'
);

fs.writeFileSync('src/components/CodexUpdateModal.tsx', code);

const fs = require('fs');
let code = fs.readFileSync('src/components/CodexUpdateModal.tsx', 'utf-8');

code = code.replace(
  "value={val as string || ''}",
  "value={typeof val === 'object' && val !== null ? JSON.stringify(val, null, 2) : (val as string || '')}"
);

fs.writeFileSync('src/components/CodexUpdateModal.tsx', code);
console.log('Patched');

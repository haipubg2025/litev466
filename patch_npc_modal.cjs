const fs = require('fs');
let code = fs.readFileSync('src/components/NpcUpdateModal.tsx', 'utf-8');

code = code.replace(
  "value={pending[key] !== undefined && pending[key] !== null ? String(pending[key]) : ''}",
  "value={pending[key] !== undefined && pending[key] !== null ? (typeof pending[key] === 'object' ? JSON.stringify(pending[key], null, 2) : String(pending[key])) : ''}"
);

fs.writeFileSync('src/components/NpcUpdateModal.tsx', code);
console.log('Patched');

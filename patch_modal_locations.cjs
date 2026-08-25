const fs = require('fs');

let codexModal = fs.readFileSync('src/components/CodexUpdateModal.tsx', 'utf8');

const targetLocName = `value={item.name || ''}`;
const replacementLocName = `value={typeof item.name === 'object' && item.name !== null ? JSON.stringify(item.name) : (item.name || '')}`;

const targetLocDesc = `value={item.description || ''}`;
const replacementLocDesc = `value={typeof item.description === 'object' && item.description !== null ? JSON.stringify(item.description, null, 2) : (item.description || '')}`;

let patched = false;
if (codexModal.includes(targetLocName)) {
    codexModal = codexModal.replace(targetLocName, replacementLocName);
    patched = true;
}
if (codexModal.includes(targetLocDesc)) {
    codexModal = codexModal.replace(targetLocDesc, replacementLocDesc);
    patched = true;
}

if (patched) {
    fs.writeFileSync('src/components/CodexUpdateModal.tsx', codexModal);
    console.log("Patched location inputs for object-to-string fallback");
} else {
    console.log("No location targets found");
}

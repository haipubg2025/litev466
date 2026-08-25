const fs = require('fs');

let codexModal = fs.readFileSync('src/components/CodexUpdateModal.tsx', 'utf8');

const targetPlacesStr = `value={pending.worldDetails.places || ''}`;
const replacementPlacesStr = `value={typeof pending.worldDetails.places === 'object' && pending.worldDetails.places !== null ? JSON.stringify(pending.worldDetails.places, null, 2) : (pending.worldDetails.places || '')}`;

const targetRulesStr = `value={pending.creativeRules || ''}`;
const replacementRulesStr = `value={typeof pending.creativeRules === 'object' && pending.creativeRules !== null ? JSON.stringify(pending.creativeRules, null, 2) : (pending.creativeRules || '')}`;

let patched = false;
if (codexModal.includes(targetPlacesStr)) {
    codexModal = codexModal.replace(targetPlacesStr, replacementPlacesStr);
    patched = true;
}
if (codexModal.includes(targetRulesStr)) {
    codexModal = codexModal.replace(targetRulesStr, replacementRulesStr);
    patched = true;
}

if (patched) {
    fs.writeFileSync('src/components/CodexUpdateModal.tsx', codexModal);
    console.log("Patched textareas for object-to-string fallback");
} else {
    console.log("No textarea targets found");
}

const fs = require('fs');

let codexModal = fs.readFileSync('src/components/CodexUpdateModal.tsx', 'utf8');

const targetStr = `      if (needsHeal) {
        next.codexPendingUpdates = nextUpdates;
        setGameData(next);
      }`;

const replacementStr = `      if (needsHeal) {
        next.codexPendingUpdates = nextUpdates;
        setGameData(next);
        setPending(nextUpdates);
      }`;

if (codexModal.includes(targetStr)) {
    codexModal = codexModal.replace(targetStr, replacementStr);
    fs.writeFileSync('src/components/CodexUpdateModal.tsx', codexModal);
    console.log("Patched setPending into CodexUpdateModal");
} else {
    console.log("Target not found");
}

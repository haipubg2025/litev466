const fs = require('fs');
let code = fs.readFileSync('src/components/Gameplay.tsx', 'utf-8');

const oldCode = `    if (codexUpdatesData.worldDetails && typeof codexUpdatesData.worldDetails === "object" && Object.keys(codexUpdatesData.worldDetails).length > 0) {
      targetCodexUpdates.worldDetails = { ...codexUpdatesData.worldDetails };
      hasCodexUpdate = true;
    }`;

const newCode = `    if (codexUpdatesData.worldDetails && typeof codexUpdatesData.worldDetails === "object" && Object.keys(codexUpdatesData.worldDetails).length > 0) {
      let details = { ...codexUpdatesData.worldDetails };
      if (typeof details.locations === 'string') {
        try {
          details.locations = JSON.parse(details.locations);
        } catch (e) {
          // If parsing fails, just leave it as string (though array is expected)
        }
      }
      targetCodexUpdates.worldDetails = details;
      hasCodexUpdate = true;
    }`;

if (code.includes(oldCode)) {
    code = code.replace(oldCode, newCode);
    fs.writeFileSync('src/components/Gameplay.tsx', code);
    console.log("Patched Gameplay.tsx string locations");
} else {
    console.log("oldCode not found in Gameplay.tsx");
}

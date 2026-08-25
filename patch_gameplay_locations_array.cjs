const fs = require('fs');
let gameplay = fs.readFileSync('src/components/Gameplay.tsx', 'utf8');

const targetStr = `    // Auto-heal: Move worldDetails properties mistakenly placed in worldData to worldDetails (if we missed any)`;

const replacementStr = `    if (codexUpdatesData.worldDetails && codexUpdatesData.worldDetails.locations) {
      if (!Array.isArray(codexUpdatesData.worldDetails.locations)) {
         if (typeof codexUpdatesData.worldDetails.locations === 'string') {
            try {
                const parsed = JSON.parse(codexUpdatesData.worldDetails.locations);
                codexUpdatesData.worldDetails.locations = Array.isArray(parsed) ? parsed : [parsed];
            } catch (e) {
                codexUpdatesData.worldDetails.locations = [{ name: "New Location", description: codexUpdatesData.worldDetails.locations }];
            }
         } else {
            codexUpdatesData.worldDetails.locations = [codexUpdatesData.worldDetails.locations];
         }
      }
    }

    // Auto-heal: Move worldDetails properties mistakenly placed in worldData to worldDetails (if we missed any)`;

if (gameplay.includes(targetStr)) {
    gameplay = gameplay.replace(targetStr, replacementStr);
    fs.writeFileSync('src/components/Gameplay.tsx', gameplay);
    console.log("Patched array normalization Gameplay");
} else {
    console.log("Array normalization Gameplay target not found");
}

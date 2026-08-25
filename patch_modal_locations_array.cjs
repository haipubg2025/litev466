const fs = require('fs');

let codexModal = fs.readFileSync('src/components/CodexUpdateModal.tsx', 'utf8');

const targetStr = `      for (const key of worldDataKeys) {
        if (nextUpdates[key] !== undefined) {
          if (!nextUpdates.worldData) nextUpdates.worldData = {};
          nextUpdates.worldData[key] = nextUpdates[key];
          delete nextUpdates[key];
          needsHeal = true;
        }
      }`;

const replacementStr = `      for (const key of worldDataKeys) {
        if (nextUpdates[key] !== undefined) {
          if (!nextUpdates.worldData) nextUpdates.worldData = {};
          nextUpdates.worldData[key] = nextUpdates[key];
          delete nextUpdates[key];
          needsHeal = true;
        }
      }

      if (nextUpdates.worldDetails && nextUpdates.worldDetails.locations) {
        if (!Array.isArray(nextUpdates.worldDetails.locations)) {
           // If it's a string, try parsing it, or wrap it in an object
           if (typeof nextUpdates.worldDetails.locations === 'string') {
              try {
                  const parsed = JSON.parse(nextUpdates.worldDetails.locations);
                  nextUpdates.worldDetails.locations = Array.isArray(parsed) ? parsed : [parsed];
              } catch (e) {
                  nextUpdates.worldDetails.locations = [{ name: "New Location", description: nextUpdates.worldDetails.locations }];
              }
           } else {
              nextUpdates.worldDetails.locations = [nextUpdates.worldDetails.locations];
           }
           needsHeal = true;
        }
      }`;

if (codexModal.includes(targetStr)) {
    codexModal = codexModal.replace(targetStr, replacementStr);
    fs.writeFileSync('src/components/CodexUpdateModal.tsx', codexModal);
    console.log("Patched array normalization");
} else {
    console.log("Array normalization target not found");
}

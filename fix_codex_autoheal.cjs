const fs = require('fs');

const WORLD_DATA_KEYS = [
  "name", "difficulty", "worldState", "leaderboards", "background", 
  "starterTimeline", "starterScenario", "mainScenario", "worldRules", 
  "namingConventions", "genre", "mainMood", "pacing", "geography", 
  "worldHistory", "culture", "economy", "religion", "factions", 
  "factionRelations", "uniqueElements", "powerSystem", "logicControl", 
  "writingStyle", "narrativePerspective"
];

let gameplay = fs.readFileSync('src/components/Gameplay.tsx', 'utf8');

// Replace the auto-heal block in Gameplay.tsx
const healStartGameplay = '// Auto-heal: Fix if AI mistakenly placed locations or places directly into worldData or root';
const healEndGameplay = 'if (codexUpdatesData.worldData && typeof codexUpdatesData.worldData === "object" && Object.keys(codexUpdatesData.worldData).length > 0) {';

const newHealGameplay = `// Auto-heal: Fix if AI mistakenly placed locations or places directly into worldData or root
    const worldDataKeys = ${JSON.stringify(WORLD_DATA_KEYS)};
    
    if (codexUpdatesData.worldData && typeof codexUpdatesData.worldData === "object") {
      if (codexUpdatesData.worldData.locations || codexUpdatesData.worldData.places) {
        if (!codexUpdatesData.worldDetails) codexUpdatesData.worldDetails = {};
        if (codexUpdatesData.worldData.locations) {
          codexUpdatesData.worldDetails.locations = codexUpdatesData.worldData.locations;
          delete codexUpdatesData.worldData.locations;
        }
        if (codexUpdatesData.worldData.places) {
          codexUpdatesData.worldDetails.places = codexUpdatesData.worldData.places;
          delete codexUpdatesData.worldData.places;
        }
      }
    }
    
    // Auto-heal: Move root-level worldDetails properties to worldDetails
    if (codexUpdatesData.locations || codexUpdatesData.places) {
      if (!codexUpdatesData.worldDetails) codexUpdatesData.worldDetails = {};
      if (codexUpdatesData.locations) {
        codexUpdatesData.worldDetails.locations = codexUpdatesData.locations;
        delete codexUpdatesData.locations;
      }
      if (codexUpdatesData.places) {
        codexUpdatesData.worldDetails.places = codexUpdatesData.places;
        delete codexUpdatesData.places;
      }
    }

    // Auto-heal: Move root-level worldData properties to worldData
    for (const key of worldDataKeys) {
      if (codexUpdatesData[key] !== undefined) {
        if (!codexUpdatesData.worldData) codexUpdatesData.worldData = {};
        codexUpdatesData.worldData[key] = codexUpdatesData[key];
        delete codexUpdatesData[key];
      }
    }
    
    // Auto-heal: Move worldDetails properties mistakenly placed in worldData to worldDetails (if we missed any)
    if (codexUpdatesData.worldData && typeof codexUpdatesData.worldData === "object") {
       if (codexUpdatesData.worldData.creativeRules) {
           codexUpdatesData.creativeRules = codexUpdatesData.worldData.creativeRules;
           delete codexUpdatesData.worldData.creativeRules;
       }
    }

    if (codexUpdatesData.worldData && typeof codexUpdatesData.worldData === "object" && Object.keys(codexUpdatesData.worldData).length > 0) {`;

if (gameplay.includes(healStartGameplay)) {
    const startIdx = gameplay.indexOf(healStartGameplay);
    const endIdx = gameplay.indexOf(healEndGameplay, startIdx);
    if (endIdx > -1) {
        const oldBlock = gameplay.substring(startIdx, endIdx + healEndGameplay.length);
        gameplay = gameplay.replace(oldBlock, newHealGameplay);
        fs.writeFileSync('src/components/Gameplay.tsx', gameplay);
        console.log('Patched Gameplay.tsx');
    }
} else {
    console.log('Could not find heal block in Gameplay.tsx');
}

let codexModal = fs.readFileSync('src/components/CodexUpdateModal.tsx', 'utf8');

const healStartModal = '// Auto-heal misplaced locations/places in existing pending updates';
const healEndModal = 'if (needsHeal) {';

const newHealModal = `// Auto-heal misplaced locations/places in existing pending updates
    if (gameData && gameData.codexPendingUpdates) {
      const updates = gameData.codexPendingUpdates;
      let needsHeal = false;
      const next = { ...gameData };
      const nextUpdates = { ...next.codexPendingUpdates };
      const worldDataKeys = ${JSON.stringify(WORLD_DATA_KEYS)};
      
      if (nextUpdates.worldData) {
        if (nextUpdates.worldData.locations) {
          if (!nextUpdates.worldDetails) nextUpdates.worldDetails = {};
          nextUpdates.worldDetails.locations = nextUpdates.worldData.locations;
          delete nextUpdates.worldData.locations;
          needsHeal = true;
        }
        if (nextUpdates.worldData.places) {
          if (!nextUpdates.worldDetails) nextUpdates.worldDetails = {};
          nextUpdates.worldDetails.places = nextUpdates.worldData.places;
          delete nextUpdates.worldData.places;
          needsHeal = true;
        }
        if (nextUpdates.worldData.creativeRules) {
          nextUpdates.creativeRules = nextUpdates.worldData.creativeRules;
          delete nextUpdates.worldData.creativeRules;
          needsHeal = true;
        }
      }
      
      if (nextUpdates.locations) {
        if (!nextUpdates.worldDetails) nextUpdates.worldDetails = {};
        nextUpdates.worldDetails.locations = nextUpdates.locations;
        delete nextUpdates.locations;
        needsHeal = true;
      }
      if (nextUpdates.places) {
        if (!nextUpdates.worldDetails) nextUpdates.worldDetails = {};
        nextUpdates.worldDetails.places = nextUpdates.places;
        delete nextUpdates.places;
        needsHeal = true;
      }

      for (const key of worldDataKeys) {
        if (nextUpdates[key] !== undefined) {
          if (!nextUpdates.worldData) nextUpdates.worldData = {};
          nextUpdates.worldData[key] = nextUpdates[key];
          delete nextUpdates[key];
          needsHeal = true;
        }
      }

      if (needsHeal) {`;

if (codexModal.includes(healStartModal)) {
    const startIdx = codexModal.indexOf(healStartModal);
    const endIdx = codexModal.indexOf(healEndModal, startIdx);
    if (endIdx > -1) {
        const oldBlock = codexModal.substring(startIdx, endIdx + healEndModal.length);
        codexModal = codexModal.replace(oldBlock, newHealModal);
        fs.writeFileSync('src/components/CodexUpdateModal.tsx', codexModal);
        console.log('Patched CodexUpdateModal.tsx');
    }
} else {
    console.log('Could not find heal block in CodexUpdateModal.tsx');
}


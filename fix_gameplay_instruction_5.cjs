const fs = require('fs');
let content = fs.readFileSync('src/utils/gameplaySystemInstruction.ts', 'utf8');

content = content.replace(
  `"mcUpdates", "npcUpdates" VÀ "codexUpdates" (bên trong <json_update>)`,
  `"mcUpdates" (bên trong <json_MC>), "npcUpdates" VÀ "codexUpdates" (bên trong <json_update>)`
);

fs.writeFileSync('src/utils/gameplaySystemInstruction.ts', content);
console.log("Polished instructions");

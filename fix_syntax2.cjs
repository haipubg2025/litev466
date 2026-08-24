const fs = require('fs');
let code = fs.readFileSync('src/components/CodexUpdateModal.tsx', 'utf-8');

code = code.replace(/return JSON\.parse\(JSON\.stringify\(gameData\?\.codexPendingUpdates \|\| \{\}\);/g, 
  'return JSON.parse(JSON.stringify(gameData?.codexPendingUpdates || {}));');

code = code.replace(/let newData = JSON\.parse\(JSON\.stringify\(gameData\);/g, 
  'let newData = JSON.parse(JSON.stringify(gameData));');

code = code.replace(/some\(key => !isFieldEqual\(key, pending\.worldData\[key\], currentWorldData\[key\]\);/g, 
  'some(key => !isFieldEqual(key, pending.worldData[key], currentWorldData[key]));');

code = code.replace(/\|\| \{\}\);/g, '|| {}));');

code = code.replace(/currentWorldData\[key\]\)\.length : 0/g, 'currentWorldData[key])).length : 0');
code = code.replace(/loc\.name === item\.name\) \|\| \{\}\)\.length : 0/g, 'loc.name === item.name) || {}))).length : 0');

fs.writeFileSync('src/components/CodexUpdateModal.tsx', code);

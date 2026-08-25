const fs = require('fs');
let content = fs.readFileSync('src/components/Gameplay.tsx', 'utf8');

content = content.replace(/outline: parsedData\.outline,/g, 'outline: parsedData.memory || parsedData.outline,');

fs.writeFileSync('src/components/Gameplay.tsx', content);
console.log("Patched Gameplay UI");

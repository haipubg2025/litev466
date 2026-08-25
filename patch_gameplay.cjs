const fs = require('fs');
let content = fs.readFileSync('src/components/Gameplay.tsx', 'utf8');

// Replace parsedData.outline with parsedData.memory || parsedData.outline
content = content.replace(/parsedData\.outline \|\| "",/g, 'parsedData.memory || parsedData.outline || "",');

fs.writeFileSync('src/components/Gameplay.tsx', content);
console.log("Patched Gameplay.tsx");

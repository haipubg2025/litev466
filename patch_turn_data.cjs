const fs = require('fs');
let content = fs.readFileSync('src/utils/memoryUtils.ts', 'utf8');

content = content.replace(/outline\?: string;/, 'outline?: string;\n    memory?: string;');

fs.writeFileSync('src/utils/memoryUtils.ts', content);
console.log("Patched memoryUtils.ts");

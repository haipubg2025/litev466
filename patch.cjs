const fs = require('fs');
let code = fs.readFileSync('src/utils/errorHandler.ts', 'utf-8');
code = code.replace(/msg\.includes\("{\\n"\)/g, 'msg.includes("{")');
fs.writeFileSync('src/utils/errorHandler.ts', code);

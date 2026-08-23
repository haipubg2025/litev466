const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf-8');
if (code.includes('AbortSignal.timeout')) {
  code = code.replace(
    `             signal: AbortSignal.timeout(600000)`,
    `             // signal: AbortSignal.timeout(600000) removed`
  );
  fs.writeFileSync('server.ts', code);
  console.log("Patched server.ts");
}

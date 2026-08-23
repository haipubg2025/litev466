const fs = require('fs');
let code = fs.readFileSync('src/services/aiService.ts', 'utf-8');
code = code.replace(
  `          signal: AbortSignal.timeout(600000) // Khắc phục tự ngắt kết nối: nâng thời hạn chờ lên 10 phút`,
  `          // signal được thiết lập qua AbortController\n          signal: controller.signal`
);
code = code.replace(
  `        const fetchUrl = '/api/generate-stream';`,
  `        const fetchUrl = '/api/generate-stream';\n        const controller = new AbortController();\n        const timeoutId = setTimeout(() => controller.abort(), 600000);`
);
code = code.replace(
  `        if (response.status === 404) {`,
  `        clearTimeout(timeoutId);\n        if (response.status === 404) {`
);
fs.writeFileSync('src/services/aiService.ts', code);
console.log("Patched aiService.ts");

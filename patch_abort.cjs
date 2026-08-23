const fs = require('fs');
let code = fs.readFileSync('src/services/aiService.ts', 'utf-8');
code = code.replace(
  `          signal: AbortSignal.timeout(600000) // Khắc phục tự ngắt kết nối: nâng thời hạn chờ lên 10 phút`,
  `          // signal được thiết lập qua AbortController\n          signal: controller.signal`
);
code = code.replace(
  `        const fetchUrl = '/api/generate-stream';\n        const headers: Record<string, string> = { 'Content-Type': 'application/json' };`,
  `        const fetchUrl = '/api/generate-stream';\n        const controller = new AbortController();\n        const timeoutId = setTimeout(() => controller.abort(), 600000);\n        const headers: Record<string, string> = { 'Content-Type': 'application/json' };`
);
code = code.replace(
  `        // Nếu gặp lỗi 404, tức là website được deploy tĩnh (Netlify, GitHub Pages...) không có server Node.js chạy ngầm!`,
  `        clearTimeout(timeoutId);\n\n        // Nếu gặp lỗi 404, tức là website được deploy tĩnh (Netlify, GitHub Pages...) không có server Node.js chạy ngầm!`
);
fs.writeFileSync('src/services/aiService.ts', code);
console.log("Patched aiService.ts");

const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf-8');
code = code.replace(
  `    if (errMsg.includes("ApiError:") || errMsg.includes("throwErrorIfNotOK") || errMsg.includes("{\\n") || errMsg.includes("error\\":{")) {\n      return "Lỗi kết nối máy chủ AI gặp sự cố hoặc hết tài nguyên. Vui lòng đổi mô hình hoặc thử lại sau vài giây.";\n    }`,
  `// Removed generic ApiError masking to expose real errors`
);
fs.writeFileSync('server.ts', code);
console.log("Patched server.ts error mask");

const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf-8');
if (!code.includes('Mô hình không tồn tại')) {
  code = code.replace(
    `if (errMsg.includes("403") || errMsg.includes("permission")) {`,
    `if (errMsg.includes("404") || errMsg.includes("not found")) {\n      return "Lỗi 404: Mô hình không tồn tại hoặc API Key của bạn chưa được cấp quyền dùng mô hình này. Vui lòng vào Cài đặt đổi sang mô hình gemini-2.5-flash hoặc gemini-1.5-pro.";\n    }\n\n    if (errMsg.includes("403") || errMsg.includes("permission")) {`
  );
  fs.writeFileSync('server.ts', code);
  console.log("Patched server.ts error message");
}

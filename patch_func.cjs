const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf-8');

// replace from "function formatAiErrorMessage(error: any): string {"
// to the "}" before "// API route for generating content with stream"
const regex = /function formatAiErrorMessage\(error: any\): string \{[\s\S]*?\/\/ Removed generic ApiError masking to expose real errors\s*return errMsg;\s*\}/;

const replaceWith = `function formatAiErrorMessage(error: any): string {
    const errMsg = typeof error === 'string' ? error : (error?.message || JSON.stringify(error));
    return "[Chi tiết lỗi gốc từ server AI]: " + errMsg;
  }`;

if (regex.test(code)) {
  code = code.replace(regex, replaceWith);
  fs.writeFileSync('server.ts', code);
  console.log("Successfully replaced formatAiErrorMessage");
} else {
  console.log("Regex did not match");
}

const fs = require('fs');
let code = fs.readFileSync('src/services/aiService.ts', 'utf-8');
code = code.replace(
  `                if (!hasReceivedText) {\n                  throw new Error("Lỗi kết nối: Máy chủ AI đã dừng phản hồi mà không trả về dữ liệu. Thời gian xử lý có thể đã vượt quá giới hạn Timeout của hệ thống hoặc lỗi gián đoạn từ phía API.");\n                }`,
  `                if (!hasReceivedText) {\n                  console.warn("[AI Service] Máy chủ AI đã gửi tín hiệu [DONE] nhưng không có text nào được nhận.");\n                  // We don't throw an error here anymore, just let it return normally. The UI will handle empty responses.\n                }`
);
code = code.replace(
  `        if (!hasReceivedText) {\n          throw new Error("Lỗi hệ thống: Quá trình tạo luồng bị ngắt giữa chừng do Timeout (chờ quá 50 giây mà AI chưa kịp trả về tín hiệu văn bản) hoặc kết nối API bị cản trở.");\n        }`,
  `        if (!hasReceivedText) {\n          console.warn("[AI Service] Quá trình tạo luồng kết thúc nhưng không nhận được text.");\n        }`
);
fs.writeFileSync('src/services/aiService.ts', code);
console.log("Patched aiService.ts hasReceivedText");

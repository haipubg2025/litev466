const fs = require('fs');
let code = fs.readFileSync('src/services/aiService.ts', 'utf-8');

const searchStr = `              try {
                const parsed = JSON.parse(dataStr);
                if (parsed.text && parsed.text.trim().length > 0) hasReceivedText = true;
                yield {
                  thought: parsed.thought || "",
                  text: parsed.text || "",
                  usage: parsed.usage || null
                };
              } catch (e) {
                // Bỏ qua lỗi parse lỗi nhỏ của proxy
              }
            } else if (chunkText.startsWith("event: error")) {
              let errorMsg = "Có lỗi báo về từ server API (Mô hình không tồn tại, API bị chặn hoặc hết hạn ngạch).";
              if (chunkText.includes("data: ")) {
                try {
                  const errJsonStr = chunkText.split("data: ")[1].split("\\n")[0].trim();
                  const errJson = JSON.parse(errJsonStr);
                  if (errJson.error) errorMsg = errJson.error;
                } catch(e){}
              }
              throw new Error(errorMsg);
            }`;

const replaceStr = `              try {
                const parsed = JSON.parse(dataStr);
                if (parsed.error) {
                  throw new Error(parsed.error);
                }
                if (parsed.text && parsed.text.trim().length > 0) hasReceivedText = true;
                yield {
                  thought: parsed.thought || "",
                  text: parsed.text || "",
                  usage: parsed.usage || null
                };
              } catch (e) {
                if (e && e.message && !e.message.includes("JSON")) {
                  throw e;
                }
              }
            } else if (chunkText.startsWith("event: error")) {
              // Just skip the event line, the next line will be data: {"error": ...}
              continue;
            }`;

if (code.includes(searchStr)) {
  code = code.replace(searchStr, replaceStr);
  fs.writeFileSync('src/services/aiService.ts', code);
  console.log("Patched aiService.ts error parser");
} else {
  console.log("Could not find string in aiService.ts");
}

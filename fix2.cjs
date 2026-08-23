const fs = require('fs');
let code = fs.readFileSync('src/services/aiService.ts', 'utf-8');

// We will just do a regex replace to clean up from the second targetUrl = ... to the end of the block.
const searchStr = `    if (!response.body) {
      throw new Error("Không có luồng dữ liệu trả về từ máy chủ AI.");
    }      targetUrl = \`https://generativelanguage.googleapis.com/v1beta/models/\${model}:streamGenerateContent?key=\${apiKey}&alt=sse\`;

      reqBody = {
        contents: [{ role: "user", parts: geminiParts }],
        generationConfig: {
          temperature: temperature,
          topP: typeof topP === 'number' ? topP : 0.95,
          topK: typeof topK === 'number' ? topK : 40,
          maxOutputTokens: maxLength,
        }
      };
      if (schema) {
        reqBody.generationConfig.responseMimeType = "application/json";
        reqBody.generationConfig.responseSchema = schema;
      }
      if (systemInstruction) {
        reqBody.systemInstruction = { parts: [{ text: systemInstruction }] };
      }
    }

    const response = await fetch(targetUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(reqBody)
    });

    if (!response.ok) {
      if (providedApiKey && !isUsingProxy) {
        console.warn(\`[AI Service] API Key lỗi (Direct), thêm vào blacklist: \${providedApiKey.substring(0, 8)}...\`);
        this.apiKeysBlacklist.add(providedApiKey);
      }
      let errText = await response.text().catch(() => "");
      if (errText.includes("<!DOCTYPE") || errText.includes("<html") || errText.includes("cf-error")) {
        if (response.status === 524) {
          errText = "Cloudflare Error 524: Máy chủ Proxy phản hồi quá thời gian chờ (Timeout 100s).";
        } else {
          errText = \`Cloudflare/HTTP Error \${response.status}: Máy chủ trả về trang HTML lỗi.\`;
        }
      } else if (errText.length > 250) {
        errText = errText.substring(0, 250) + "...";
      }
      let errMsg = \`Lỗi kết nối trực tiếp (\${response.status}): \${errText || response.statusText}\`;
      if (providedApiKey) {
        errMsg = \`[Key: *\${providedApiKey.slice(-4)}] \` + errMsg;
      }
      throw new Error(errMsg);
    }

    if (!response.body) {
      throw new Error("Không có luồng dữ liệu trả về từ máy chủ AI.");
    }`;

const replacement = `    if (!response.body) {
      throw new Error("Không có luồng dữ liệu trả về từ máy chủ AI.");
    }`;

if (code.includes(searchStr)) {
  code = code.replace(searchStr, replacement);
  fs.writeFileSync('src/services/aiService.ts', code);
  console.log("Fix 2 applied");
} else {
  console.log("Could not find string for fix 2");
}

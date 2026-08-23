const fs = require('fs');
let code = fs.readFileSync('src/services/aiService.ts', 'utf-8');

// I will just read the file, locate the broken part, and replace it.
// The broken part starts at:
/*
      if (isOAI) {
        if (!proxyBaseUrl.includes("chat/completions")) {
          if (!proxyBaseUrl.includes("/v1")) proxyBaseUrl += "/v1";
          targetUrl = `${proxyBaseUrl}/chat/completions`;
      } else {
      // GỌI TRỰC TIẾP LÊN MÁY CHỦ GOOGLE GEMINI TỪ CLIENT
*/

const searchStr = `      if (isOAI) {
        if (!proxyBaseUrl.includes("chat/completions")) {
          if (!proxyBaseUrl.includes("/v1")) proxyBaseUrl += "/v1";
          targetUrl = \`\${proxyBaseUrl}/chat/completions\`;
      } else {
      // GỌI TRỰC TIẾP LÊN MÁY CHỦ GOOGLE GEMINI TỪ CLIENT`;

const replacement = `      if (isOAI) {
        if (!proxyBaseUrl.includes("chat/completions")) {
          if (!proxyBaseUrl.includes("/v1")) proxyBaseUrl += "/v1";
          targetUrl = \`\${proxyBaseUrl}/chat/completions\`;
        } else {
          targetUrl = proxyBaseUrl;
        }

        reqBody = {
          model: model,
          messages: [],
          temperature: temperature,
          top_p: typeof topP === 'number' ? topP : 0.95,
          stream: true
        };

        if (systemInstruction) {
          reqBody.messages.push({ role: "system", content: systemInstruction });
        }
        reqBody.messages.push({ role: "user", content: openAiContent });

        if (schema) {
          reqBody.response_format = { type: "json_object" };
          reqBody.messages.push({ role: "system", content: "You MUST return a valid JSON object matching the requested schema structure." });
        }
      } else {
        if (!proxyBaseUrl.includes('/v1beta') && !proxyBaseUrl.includes('/v1alpha') && !proxyBaseUrl.includes('/v1')) {
          proxyBaseUrl += '/v1beta';
        }
        targetUrl = \`\${proxyBaseUrl}/models/\${model}:streamGenerateContent?alt=sse\`;

        reqBody = {
          contents: [{ role: "user", parts: geminiParts }],
          generationConfig: {
            temperature: temperature,
            topP: typeof topP === 'number' ? topP : 0.95,
            topK: typeof topK === 'number' ? topK : 40,
            maxOutputTokens: maxLength,
          },
          safetySettings: [
            { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
            { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
            { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" },
            { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" }
          ]
        };
        if (schema) {
          reqBody.generationConfig.responseMimeType = "application/json";
          reqBody.generationConfig.responseSchema = schema;
        }
        if (systemInstruction) {
          reqBody.systemInstruction = { parts: [{ text: systemInstruction }] };
        }
      }
    } else {
      // GỌI TRỰC TIẾP LÊN MÁY CHỦ GOOGLE GEMINI TỪ CLIENT`;

if (code.includes(searchStr)) {
  code = code.replace(searchStr, replacement);
  fs.writeFileSync('src/services/aiService.ts', code);
  console.log("Fix applied");
} else {
  console.log("Could not find string");
}

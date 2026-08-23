const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf-8');

// Replace the inner catch in handleApiKeyGeneration
code = code.replace(
  `} catch (err: any) {\n          console.error("Lỗi Bộ giải mã API Key:", err);\n          const friendlyError = formatAiErrorMessage(err);\n          res.write(\`event: error\\ndata: \${JSON.stringify({ error: friendlyError })}\\n\\n\`);\n        }`,
  `} catch (err: any) {\n          throw err;\n        }`
);

// Do the same for handleProxyGeneration if it exists
code = code.replace(
  `} catch (err: any) {\n           console.error("Lỗi Bộ giải mã Proxy:", err);\n           const friendlyError = formatAiErrorMessage(err);\n           res.write(\`event: error\\ndata: \${JSON.stringify({ error: friendlyError })}\\n\\n\`);\n        }`,
  `} catch (err: any) {\n           throw err;\n        }`
);

// In the outermost try-catch, do a cleaner log instead of a full stack trace for known HTTP errors
code = code.replace(
  `} catch (error: any) {\n      console.error("Lỗi tạo nội dung từ AI:", error);\n      const friendlyError = formatAiErrorMessage(error);\n      res.write(\`event: error\\ndata: \${JSON.stringify({ error: friendlyError })}\\n\\n\`);\n      res.end();\n    }`,
  `} catch (error: any) {\n      const errMsg = error.message || String(error);\n      if (errMsg.includes("429") || errMsg.includes("404") || errMsg.includes("403") || errMsg.includes("Quota")) {\n        console.warn("[AI Server] Yêu cầu bị từ chối bởi API (Quota/Auth/Not Found)");\n      } else {\n        console.error("Lỗi tạo nội dung từ AI:", error);\n      }\n      const friendlyError = formatAiErrorMessage(error);\n      res.write(\`event: error\\ndata: \${JSON.stringify({ error: friendlyError })}\\n\\n\`);\n      res.end();\n    }`
);

fs.writeFileSync('server.ts', code);
console.log("Patched server.ts error handling");

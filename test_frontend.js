const buffer = `data: {"thought":"[SYSTEM] Đang xử lý bằng API Key | Model: gemini-3.5-flash\\n","text":"","usage":null}\n\ndata: {"thought":"","text":"Hello! How can I help you today?","usage":{"promptTokenCount":3,"candidatesTokenCount":9,"totalTokenCount":214,"promptTokensDetails":[{"modality":"TEXT","tokenCount":3}],"thoughtsTokenCount":202,"serviceTier":"standard"}}\n\ndata: [DONE]\n\n`;

let hasReceivedText = false;
let myBuffer = buffer;

let boundary = myBuffer.indexOf('\n');
while (boundary !== -1) {
  let chunkText = myBuffer.slice(0, boundary).trim();
  myBuffer = myBuffer.slice(boundary + 1);
  boundary = myBuffer.indexOf('\n');

  if (!chunkText) continue;
  
  if (chunkText.startsWith("data: ")) {
    const dataStr = chunkText.slice(6).trim();
    if (dataStr === "[DONE]") {
      if (!hasReceivedText) {
        console.error("ERROR: NO TEXT RECEIVED");
      } else {
        console.log("SUCCESS DONE");
      }
      break;
    }
    try {
      const parsed = JSON.parse(dataStr);
      if (parsed.text && parsed.text.trim().length > 0) hasReceivedText = true;
      console.log("YIELD:", parsed.text);
    } catch (e) {
      console.error("JSON ERROR", e, dataStr);
    }
  }
}

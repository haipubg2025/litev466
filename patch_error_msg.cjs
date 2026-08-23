const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf-8');

const searchStr = `  function formatAiErrorMessage(error: any): string {
    const errMsg = typeof error === 'string' ? error : (error?.message || JSON.stringify(error));
    
    if (errMsg.includes("<!DOCTYPE") || errMsg.includes("<html") || errMsg.includes("cf-error") || errMsg.includes("Cloudflare")) {
      if (errMsg.includes("524") || errMsg.includes("Error code 524")) {
        return "Lỗi thời gian chờ Proxy (Cloudflare 524 Timeout): Máy chủ Proxy phản hồi quá chậm hoặc bị ngắt kết nối (chờ quá 100s). Vui lòng thử đổi sang mô hình nhanh hơn (như Gemini Flash) hoặc kiểm tra lại địa chỉ/máy chủ Proxy.";
      }
      if (errMsg.includes("502") || errMsg.includes("503") || errMsg.includes("504")) {
        return "Lỗi kết nối máy chủ Proxy (Gateway Error): Máy chủ Proxy hiện tại đang bị quá tải hoặc ngưng hoạt động. Vui lòng kiểm tra lại Cài đặt Proxy.";
      }
      return "Lỗi kết nối máy chủ Proxy/API: Máy chủ trả về trang lỗi HTML thay vì dữ liệu AI. Vui lòng kiểm tra lại cấu hình Proxy hoặc API Key.";
    }

    const lower = errMsg.toLowerCase();
    
    if (lower.includes("524") || lower.includes("gateway timeout") || lower.includes("error code 524") || lower.includes("proxy error: 524")) {
      return "Lỗi thời gian chờ Proxy (Cloudflare 524 Timeout): Máy chủ Proxy phản hồi quá chậm (chờ quá 100 giây). Vui lòng đổi sang mô hình Flash nhẹ hơn hoặc chọn nguồn Proxy khác.";
    }

    if (lower.includes("terminated") || lower.includes("und_err") || lower.includes("fetch failed")) {
      return "Lỗi kết nối Proxy/API: Kết nối bị đóng đột ngột (terminated). Proxy hoặc máy chủ có thể đã quá tải, vui lòng thử lại sau.";
    }
    
    if (
      lower.includes("resource_exhausted") || 
      lower.includes("429") || 
      lower.includes("quota exceeded") ||
      lower.includes("quota") ||
      lower.includes("rate limit") ||
      lower.includes("too many requests")
    ) {
      return "Hạn ngạch thử nghiệm của mô hình hiện tại đã hết! Bạn hãy vào mục Cài đặt -> tab Chung để đổi sang dòng Flash (như 'gemini-3.5-flash' hoặc 'gemini-3.1-flash-lite') để cuộc chơi không bị gián đoạn nhé.";
    }
    
    if (lower.includes("api key") || lower.includes("api_key") || lower.includes("key not found") || lower.includes("invalid key")) {
      return "API Key của bạn không hợp lệ hoặc thiếu. Vui lòng mở Cài đặt -> tab Chung để cập nhật.";
    }

// Removed generic ApiError masking to expose real errors
    return errMsg;
  }`;

const replacement = `  function formatAiErrorMessage(error: any): string {
    const errMsg = typeof error === 'string' ? error : (error?.message || JSON.stringify(error));
    return "[Chi tiết lỗi gốc]: " + errMsg;
  }`;

if (code.includes(searchStr)) {
  code = code.replace(searchStr, replacement);
  fs.writeFileSync('server.ts', code);
  console.log("Patched server.ts error message format");
} else {
  console.log("Could not find string in server.ts");
}

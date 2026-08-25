const fs = require('fs');
let content = fs.readFileSync('src/utils/gameplaySystemInstruction.ts', 'utf8');

// Replace the strict append rule for objectives
content = content.replace(
    /"objectives": ".*?TUYỆT ĐỐI KHÔNG xóa gì hay dán đè lên nội dung cũ.*?",/g,
    `"objectives": "Ghi nhận các mục tiêu lớn, nhiệm vụ của MC. Nếu có mục tiêu mới, hãy thêm vào. QUAN TRỌNG: Nếu một mục tiêu cũ ĐÃ ĐƯỢC HOÀN THÀNH hoặc BỊ HỦY BỎ, BẮT BUỘC PHẢI XÓA BỎ nó khỏi danh sách hoặc GHI ĐÈ bằng trạng thái mới (VD: thay vì để 'Đang nợ 50tr', hãy viết đè thành 'Đã trả xong nợ 50tr'). Tuyệt đối không giữ lại các mục tiêu đã cũ/hết hạn gây nhiễu loạn trí nhớ.",`
);

// Replace the strict append rule for generic fields in npcUpdates
content = content.replace(
    /KHI CẬP NHẬT BẤT KỲ TRƯỜNG VĂN BẢN NÀO ĐƯỢC PHÉP, BẠN BẮT BUỘC PHẢI COPY TOÀN BỘ NỘI DUNG CŨ RỒI CHÈN THÊM NỘI DUNG MỚI VÀO, để tránh việc xuất 1 câu ngắn làm ghi đè mất sạch lịch sử cũ của NPC!/g,
    `KHI CẬP NHẬT, HÃY PHÂN LOẠI: Với các trường 'tính cách', 'tiểu sử' -> Copy nội dung cũ và chèn thêm mới. VỚI CÁC TRƯỜNG 'mục tiêu', 'bí mật', 'trạng thái' (các sự kiện có tính thời điểm) -> NẾU SỰ VIỆC ĐÃ KẾT THÚC, BẮT BUỘC PHẢI GHI ĐÈ/XÓA BỎ thông tin cũ, không được copy lại nguyên văn gây rác bộ nhớ (VD: Nợ đã trả thì xóa dòng 'đang nợ', thay bằng 'đã trả xong nợ').`
);

// Replace the TÊN_TRƯỜNG_ĐÃ_TỒN_TẠI warning
content = content.replace(
    /"TÊN_TRƯỜNG_ĐÃ_TỒN_TẠI": "CẢNH BÁO: BẮT BUỘC VIẾT LẠI Y NGUYÊN TOÀN BỘ THÔNG TIN CŨ \+ GIAO THOA THÊM THÔNG TIN MỚI VÀO. CẤM XUẤT RA DỮ LIỆU NGẮN TỦN GÂY GHI ĐÈ VÀ MẤT SẠCH DỮ LIỆU GỐC! Chỉ cập nhật những trường thực sự cần thiết."/g,
    `"TÊN_TRƯỜNG_ĐÃ_TỒN_TẠI": "CẢNH BÁO: Tùy thuộc vào loại dữ liệu! Nếu là Đặc điểm/Tính cách: Copy thông tin cũ + thêm mới. Nếu là Mục tiêu/Sự kiện/Tình trạng đã giải quyết xong: BẮT BUỘC GHI ĐÈ hoặc XÓA BỎ cái cũ, tuyệt đối không copy lại những sự việc đã kết thúc gây mâu thuẫn ký ức AI!"`
);

fs.writeFileSync('src/utils/gameplaySystemInstruction.ts', content);
console.log("Memory rules patched.");

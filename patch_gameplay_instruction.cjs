const fs = require('fs');
let content = fs.readFileSync('src/utils/gameplaySystemInstruction.ts', 'utf8');

// 1. Move mcUpdates from json_update to json_MC
const oldJsonUpdateMc = `  "mcUpdates": {
    \${mcUpdatesJsonStructure},
    "fashion": "Trạng thái trang phục/ăn mặc/khỏa thân hiện tại MỚI NHẤT của MC ở cuối lượt chơi (VD: 'đồng phục học sinh', 'đồ ngủ', 'bộ đồ lót ren', 'khỏa thân'...). [BẮT BUỘC LUÔN LUÔN CẬP NHẬT VÀ XUẤT TRƯỜNG NÀY Ở MỖI LƯỢT CHƠI DIỄN RA].",
    "statusData": { "mood": [], "psychological": [{ "name": "Căng thẳng", "description": "Trạng thái hồi hộp cao độ do đối mặt cường địch.", "type": "temporary", "solvable": "solvable", "duration": "Hiện tại" }], "physiological": [], "health": [], "condition": [] },
    "partyList": "Cập nhật danh sách Tổ đội / Harem / Gia đình của MC. Ghi nhận Tên, vị trí và vai trò của từng thành viên để không bị quên.",
    "objectives": "Ghi nhận các mục tiêu lớn, nhiệm vụ của MC. Nếu có mục tiêu mới, hãy thêm vào. QUAN TRỌNG: Nếu một mục tiêu cũ ĐÃ ĐƯỢC HOÀN THÀNH hoặc BỊ HỦY BỎ, BẮT BUỘC PHẢI XÓA BỎ nó khỏi danh sách hoặc GHI ĐÈ bằng trạng thái mới (VD: thay vì để 'Đang nợ 50tr', hãy viết đè thành 'Đã trả xong nợ 50tr'). Tuyệt đối không giữ lại các mục tiêu đã cũ/hết hạn gây nhiễu loạn trí nhớ.",
    "IN_THIS_JSON_OUTPUT": "CẢNH BÁO TỐI QUAN TRỌNG: CHỈ CẬP NHẬT KHI THẬT SỰ CẦN THIẾT. VỚI statusData: nộp LẠI toàn bộ trạng thái chưa bị xoá + trạng thái MỚI! Tuyệt đối không xuất dòng ghi chú này!"
  },`;

content = content.replace(oldJsonUpdateMc, '');

const mcUpdatesBlock = `<json_MC>
{
  "mcUpdates": {
    \${mcUpdatesJsonStructure},
    "fashion": "Trạng thái trang phục/ăn mặc/khỏa thân hiện tại MỚI NHẤT của MC ở cuối lượt chơi (VD: 'đồng phục học sinh', 'đồ ngủ', 'bộ đồ lót ren', 'khỏa thân'...). [BẮT BUỘC LUÔN LUÔN CẬP NHẬT VÀ XUẤT TRƯỜNG NÀY Ở MỖI LƯỢT CHƠI DIỄN RA].",
    "statusData": { "mood": [], "psychological": [{ "name": "Căng thẳng", "description": "Trạng thái hồi hộp cao độ do đối mặt cường địch.", "type": "temporary", "solvable": "solvable", "duration": "Hiện tại" }], "physiological": [], "health": [], "condition": [] },
    "partyList": "Cập nhật danh sách Tổ đội / Harem / Gia đình của MC. Ghi nhận Tên, vị trí và vai trò của từng thành viên để không bị quên.",
    "objectives": "Ghi nhận các mục tiêu lớn, nhiệm vụ của MC. Nếu có mục tiêu mới, hãy thêm vào. QUAN TRỌNG: Nếu một mục tiêu cũ ĐÃ ĐƯỢC HOÀN THÀNH hoặc BỊ HỦY BỎ, BẮT BUỘC PHẢI XÓA BỎ nó khỏi danh sách hoặc GHI ĐÈ bằng trạng thái mới (VD: thay vì để 'Đang nợ 50tr', hãy viết đè thành 'Đã trả xong nợ 50tr'). Tuyệt đối không giữ lại các mục tiêu đã cũ/hết hạn gây nhiễu loạn trí nhớ.",
    "IN_THIS_JSON_OUTPUT": "CẢNH BÁO TỐI QUAN TRỌNG: CHỈ CẬP NHẬT KHI THẬT SỰ CẦN THIẾT. VỚI statusData: nộp LẠI toàn bộ trạng thái chưa bị xoá + trạng thái MỚI! Tuyệt đối không xuất dòng ghi chú này!"
  }
}
</json_MC>`;

content = content.replace('</json_update>', '</json_update>\\n\\n' + mcUpdatesBlock);

// 2. Move memory out of json_output into json_memory
const oldMemoryField = `  "memory": "Viết TÓM TẮT KÝ ỨC NGẮN GỌN về những sự kiện, tình tiết quan trọng vừa mới xảy ra trong chính văn phía trên. Hãy tóm lược thành các gạch đầu dòng (Sự kiện gì vừa xảy ra, ai làm gì ai, kết quả ra sao). Đây sẽ là Log Ký Ức chính thức được lưu vào hệ thống, do đó BẮT BUỘC phải tập trung vào SỰ THẬT và HÀNH ĐỘNG khách quan, không viết kiểu tiểu thuyết."
}`;

const memoryBlock = `}
</json_output>

<json_memory>
{
  "memory": "Viết TÓM TẮT KÝ ỨC NGẮN GỌN về những sự kiện, tình tiết quan trọng vừa mới xảy ra trong chính văn phía trên. Hãy tóm lược thành các gạch đầu dòng (Sự kiện gì vừa xảy ra, ai làm gì ai, kết quả ra sao). Đây sẽ là Log Ký Ức chính thức được lưu vào hệ thống, do đó BẮT BUỘC phải tập trung vào SỰ THẬT và HÀNH ĐỘNG khách quan, không viết kiểu tiểu thuyết."
}
</json_memory>`;

content = content.replace(oldMemoryField, memoryBlock);

fs.writeFileSync('src/utils/gameplaySystemInstruction.ts', content);
console.log("Patched instruction");

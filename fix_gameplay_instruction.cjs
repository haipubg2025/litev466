const fs = require('fs');
let content = fs.readFileSync('src/utils/gameplaySystemInstruction.ts', 'utf8');

// Reverse the bad replacement at line 2976
const badString = `1. <json_update>...</json_update>\\n\\n<json_MC>
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
</json_MC>: Chuyên cập nhật hoặc tạo mới mọi thứ trong game`;

content = content.replace(badString, '1. <json_update>...</json_update>: Chuyên cập nhật hoặc tạo mới mọi thứ trong game');

// And we also need to change the numbering in BƯỚC 2
const oldList = `1. <json_update>...</json_update>: Chuyên cập nhật hoặc tạo mới mọi thứ trong game (thời gian, thời tiết, vị trí, cập nhật thông tin MC, NPC, tạo NPC mới).
2. <json_output>...</json_output>: Chứa dàn ý và chính văn truyện.
3. <json_actions>...</json_actions>: Chứa các gợi ý hành động rẽ nhánh.`;

const newList = `1. <json_update>...</json_update>: Cập nhật thời gian, thời tiết, vị trí, NPC...
2. <json_MC>...</json_MC>: Chuyên cập nhật thông tin cho MC.
3. <json_output>...</json_output>: Chứa dàn ý và chính văn truyện.
4. <json_memory>...</json_memory>: Chứa tóm tắt sự kiện ký ức ngắn gọn.
5. <json_actions>...</json_actions>: Chứa các gợi ý hành động rẽ nhánh.`;

content = content.replace(oldList, newList);

// Now we need to append the json_MC block after the REAL closing of json_update
const correctReplacement = `</json_update>

<json_MC>
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

content = content.replace('</json_update>', correctReplacement);

fs.writeFileSync('src/utils/gameplaySystemInstruction.ts', content);
console.log("Fixed gameplaySystemInstruction.ts");

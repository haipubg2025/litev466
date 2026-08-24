const fs = require('fs');
let code = fs.readFileSync('src/utils/gameplaySystemInstruction.ts', 'utf-8');

// 1. Fix "âm thanh" confusion
code = code.replace(/CẤM TUYỆT ĐỐI TỪ 'THANH THÚY' KHI MIÊU TẢ ÂM THANH/g, "CẤM TUYỆT ĐỐI TỪ 'THANH THÚY' KHI MIÊU TẢ TIẾNG ĐỘNG");
code = code.replace(/KHI MIÊU TẢ ÂM THANH HOẶC NỘI TÂM/g, "KHI MIÊU TẢ TIẾNG ĐỘNG HOẶC NỘI TÂM");

// 2. Ban "thô ráp", "chai sần"
const oldMaleDesc = '3. NGHIÊM CẤM Các từ lạm dụng miêu tả vẻ đẹp sáo rỗng: "hoàn mỹ", "tinh xảo", "yêu nghiệt", "bá đạo", "ngạo nghễ", "lãnh khốc", "lạnh lùng" (cấm tuyệt đối từ lạnh lùng).';
const newMaleDesc = '3. NGHIÊM CẤM Các từ lạm dụng miêu tả vẻ đẹp sáo rỗng: "hoàn mỹ", "tinh xảo", "yêu nghiệt", "bá đạo", "ngạo nghễ", "lãnh khốc", "lạnh lùng" (cấm tuyệt đối từ lạnh lùng). ĐỐI VỚI NAM GIỚI: Tuyệt đối không lạm dụng các từ "thô ráp", "chai sần" một cách thừa thãi để tỏ vẻ nam tính, hãy miêu tả tự nhiên hơn (ví dụ: rắn rỏi, ấm áp, vững chãi).';
code = code.replace(oldMaleDesc, newMaleDesc);

// 3. Prevent exaggerated/violent words in NSFW
const oldNSFW = 'Đạo diễn BẮT BUỘC phải dàn dựng cảnh mây mưa vô cùng chi tiết, trần trụi và bạo dạn bằng nghệ thuật văn chương đỉnh cao';
const newNSFW = 'Đạo diễn BẮT BUỘC phải dàn dựng cảnh mây mưa vô cùng chi tiết, gợi cảm và táo bạo bằng nghệ thuật văn chương đỉnh cao, TUYỆT ĐỐI KHÔNG lạm dụng các từ ngữ bạo lực, thô bạo, hay cường điệu hóa quá mức không cần thiết (chỉ dùng nếu đúng thiết lập BDSM/bạo lực của nhân vật)';
code = code.replace(oldNSFW, newNSFW);

// Also add a bullet point in banned words
const oldBan10 = '10. NGHIÊM CẤM Lỗi sai giải phẫu';
const newBan10 = '10. NGHIÊM CẤM Cường điệu hóa/Bạo lực thừa thãi trong cảnh nóng: Tuyệt đối không dùng các từ bạo lực, cường điệu thô bạo (như cắn xé, xé nát, va đập nát bấy, điên cuồng phá hủy...) nếu nhân vật không có thiết lập bạo lực/S&M. Giữ sự gợi cảm, ướt át và tự nhiên.\n11. NGHIÊM CẤM Lỗi sai giải phẫu';
code = code.replace(oldBan10, newBan10);

fs.writeFileSync('src/utils/gameplaySystemInstruction.ts', code);
console.log('Patched gameplaySystemInstruction.ts');

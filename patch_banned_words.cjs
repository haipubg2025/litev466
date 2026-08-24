const fs = require('fs');
let code = fs.readFileSync('src/utils/gameplaySystemInstruction.ts', 'utf-8');

const oldPhonThuc = '             - ❌ "phồn thực" (Cực kỳ sáo rỗng và phản cảm khi tả phụ nữ): -> ✅ Thay bằng đa dạng: gợi cảm, quyến rũ, bốc lửa, đầy đặn, nảy nở, căng mọng, nóng bỏng, đẫy đà, đường cong tuyệt mỹ, ngực nở mông cong, tràn đầy sức sống.';
const newPhonThuc = '             - ❌ "phồn thực" (CẤM TUYỆT ĐỐI), "thân hình phồn...", "cơ thể phồn thực": -> ✅ LỆNH CẤM: AI tuyệt đối không được viết chữ "phồn thực" hay bất kỳ biến thể nào của từ này vào truyện (rất sáo rỗng và phản cảm). Hãy thay bằng: gợi cảm, quyến rũ, bốc lửa, đầy đặn, nảy nở, căng mọng, nóng bỏng, đẫy đà, đường cong tuyệt mỹ, tràn đầy sức sống.';

code = code.replace(oldPhonThuc, newPhonThuc);

const oldSection5End = '             - ❌ "phản ứng sinh lý", "nhu cầu sinh lý", "khoái cảm sinh lý", "bản năng sinh lý", "đòi hỏi sinh lý", "thỏa mãn sinh lý": -> ✅ Thay bằng: phản ứng tự nhiên của cơ thể, cảm giác rạo rực, sự khao khát tự nhiên, khoái cảm mãnh liệt, nhu cầu gần gũi, thỏa mãn thể xác và tâm hồn.';

const newSection6 = `             - ❌ "phản ứng sinh lý", "nhu cầu sinh lý", "khoái cảm sinh lý", "bản năng sinh lý", "đòi hỏi sinh lý", "thỏa mãn sinh lý": -> ✅ Thay bằng: phản ứng tự nhiên của cơ thể, cảm giác rạo rực, sự khao khát tự nhiên, khoái cảm mãnh liệt, nhu cầu gần gũi, thỏa mãn thể xác và tâm hồn.
          6. Bệnh lạm dụng từ "cơ học":
             - ❌ "cơ học", "động tác cơ học", "áp bách cơ học": -> ✅ LỆNH CẤM: TUYỆT ĐỐI không lạm dụng từ "cơ học" khi miêu tả chuyển động cơ thể, cảm giác, hành động hay áp lực. Từ này làm văn bản trở nên giống văn mẫu AI vô hồn. Thay vì "động tác cơ học" hãy viết "động tác lặp đi lặp lại/nhịp nhàng/cứng nhắc". Thay vì "sự áp bách cơ học" hãy viết "áp lực nặng nề/sự đè nén". Chữ "cơ học" CHỈ ĐƯỢC DÙNG khi thực sự nói về máy móc cơ khí!`;

code = code.replace(oldSection5End, newSection6);

fs.writeFileSync('src/utils/gameplaySystemInstruction.ts', code);
console.log('Patched banned words');

const fs = require('fs');
let code = fs.readFileSync('src/utils/gameplaySystemInstruction.ts', 'utf-8');

const targetStr = 'Khởi tạo nhân vật với trạng thái trong sáng, lương thiện hoặc trung lập cơ bản.\\n';
const replacementStr = 'Khởi tạo nhân vật với trạng thái trong sáng, lương thiện hoặc trung lập cơ bản. [HƯỚNG DẪN TỐI QUAN TRỌNG KHI NGƯỜI CHƠI YÊU CẦU TẠO/GẶP NPC]: Nếu trong hành động/yêu cầu của người chơi có ngụ ý "tạo NPC mới" hoặc "gặp một nhân vật mới", AI BẮT BUỘC phải tạo thêm 1 NPC hoàn toàn CHƯA TỪNG TỒN TẠI trong thế giới và đưa vào mảng \`newNPCs\`. NGƯỢC LẠI, nếu yêu cầu là "gặp một người nào đó", "gọi..." hoặc mô tả khớp với một NPC ĐÃ CÓ SẴN TRONG DANH SÁCH (Dữ liệu đầu vào) nhưng chưa xuất hiện trong cảnh, AI BẮT BUỘC phải LẤY NGAY NPC CÓ SẴN ĐÓ để đưa vào cảnh truyện (thay đổi currentLocation của họ), TUYỆT ĐỐI KHÔNG ĐƯỢC TẠO RA NPC MỚI TRÙNG LẶP HOẶC CLONE LẠI NPC ĐÃ CÓ!\\n';

if (code.includes(targetStr)) {
  code = code.replace(targetStr, replacementStr);
  fs.writeFileSync('src/utils/gameplaySystemInstruction.ts', code);
  console.log('Successfully patched the NPC instruction!');
} else {
  console.log('Target string not found in the file.');
}

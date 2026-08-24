const fs = require('fs');
let code = fs.readFileSync('src/utils/gameplaySystemInstruction.ts', 'utf-8');

code = code.replace(
  '<json_actions>\n{\n  "suggestedActions": [',
  '<json_actions>\n{\n  "thought_process": {\n    "requests": "Suy nghĩ sâu về số lượng yêu cầu và các điều kiện/phong cách mà người chơi đã cài đặt (nếu có) đối với phần gợi ý hành động",\n    "ideas": "Phác thảo nhanh các ý tưởng rẽ nhánh kịch bản dựa trên tình huống hiện tại sao cho hợp lý và hấp dẫn nhất, đảm bảo tương ứng chính xác với số lượng yêu cầu."\n  },\n  "suggestedActions": ['
);

fs.writeFileSync('src/utils/gameplaySystemInstruction.ts', code);
console.log('Patched gameplaySystemInstruction.ts');

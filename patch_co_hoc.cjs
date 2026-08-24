const fs = require('fs');
let code = fs.readFileSync('src/utils/gameplaySystemInstruction.ts', 'utf-8');

code = code.replace(/Nhịp độ dập hông cơ học dứt khoát/g, 'Nhịp độ dập hông nhịp nhàng dứt khoát');
code = code.replace(/b\) Đặc tả động tác cơ học và sự tiến triển/g, 'b) Đặc tả động tác và sự tiến triển');
code = code.replace(/- Động tác cơ học chân thực:/g, '- Động tác chân thực:');
code = code.replace(/từng nhịp va đập cơ học/g, 'từng nhịp va đập mãnh liệt');
code = code.replace(/tần suất cơ học của nhịp va đập cơ thể/g, 'tần suất của nhịp va đập cơ thể');

fs.writeFileSync('src/utils/gameplaySystemInstruction.ts', code);
console.log('Removed cơ học from prompt templates');

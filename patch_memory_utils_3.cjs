const fs = require('fs');
let content = fs.readFileSync('src/utils/memoryUtils.ts', 'utf8');

content = content.replace(/Khái quát Diễn biến \(Dàn ý\)/g, "Ký Ức Lượt (Tóm tắt sự kiện)");
content = content.replace(/Khái quát\/Dàn ý/g, "Ký Ức Lượt");

fs.writeFileSync('src/utils/memoryUtils.ts', content);
console.log("Patched label in synthesizeTurnStoryMemory");

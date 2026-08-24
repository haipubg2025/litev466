const fs = require('fs');
let code = fs.readFileSync('src/utils/gameplaySystemInstruction.ts', 'utf-8');

code = code.replace(/độ co giãn đàn hồi cơ học/g, 'độ co giãn đàn hồi vật lý');
code = code.replace(/mất đi cảm giác cơ học/g, 'mất đi xúc giác');
code = code.replace(/góc nhìn cơ học và cảm giác/g, 'góc nhìn vật lý và cảm giác');
code = code.replace(/động tác cơ học, nhịp độ sinh học/g, 'động tác chân thực, nhịp độ sinh học');
code = code.replace(/Động tác hoang dã cơ học/g, 'Động tác hoang dã mạnh mẽ');

fs.writeFileSync('src/utils/gameplaySystemInstruction.ts', code);
console.log('Removed more cơ học from prompt templates');

const fs = require('fs');
let code = fs.readFileSync('src/components/CodexUpdateModal.tsx', 'utf-8');

code = code.replace('.map(s => s.trim().toLowerCase()', '.map(s => s.trim().toLowerCase())');
code = code.replace('if (!/[a-zA-Z0-9\\p{L}]/u.test(trimmed) {', 'if (!/[a-zA-Z0-9\\p{L}]/u.test(trimmed)) {');
code = code.replace('const existsInOld = cleanOldSentences.some(old => old === cleanPart || old.includes(cleanPart) || cleanPart.includes(old);', 'const existsInOld = cleanOldSentences.some(old => old === cleanPart || old.includes(cleanPart) || cleanPart.includes(old));');
code = code.replace('const dp: number[][] = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0);', 'const dp: number[][] = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));');
code = code.replace('} else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j]) {', '} else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {');
code = code.replace('} else if (i > 0 && (j === 0 || dp[i][j - 1] < dp[i - 1][j]) {', '} else if (i > 0 && (j === 0 || dp[i][j - 1] < dp[i - 1][j])) {');
// I need to look at other errors...
fs.writeFileSync('src/components/CodexUpdateModal.tsx', code);

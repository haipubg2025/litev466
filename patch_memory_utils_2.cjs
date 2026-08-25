const fs = require('fs');
let content = fs.readFileSync('src/utils/memoryUtils.ts', 'utf8');

const target = `    const outline = t.aiMsg?.outline || "Chưa có dàn ý";`;
const replacement = `    const outline = t.aiMsg?.memory || t.aiMsg?.outline || "Chưa có dàn ý";`;

if (content.includes(target)) {
    content = content.replace(target, replacement);
    fs.writeFileSync('src/utils/memoryUtils.ts', content);
    console.log("Patched buildDetailedRecentTurnsMemories");
} else {
    console.log("Target not found");
}

const fs = require('fs');
let code = fs.readFileSync('src/utils/wordFilter.ts', 'utf-8');

const anchor = 'return sanitized.trim();';
const newFix = `    // Hotfix cho lỗi "m thanh" thay vì "Âm thanh"
    sanitized = sanitized.replace(/(^|[\\s\\.:;?!,])m thanh\\b/g, "$1Âm thanh");
    sanitized = sanitized.replace(/(^|[\\s\\.:;?!,])M thanh\\b/g, "$1Âm thanh");
    
    return sanitized.trim();`;

if (code.includes(anchor)) {
    code = code.replace(anchor, newFix);
    fs.writeFileSync('src/utils/wordFilter.ts', code);
    console.log("Patched wordFilter.ts with hotfix for 'm thanh'.");
} else {
    console.log("Anchor not found in wordFilter.ts.");
}

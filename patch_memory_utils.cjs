const fs = require('fs');
let content = fs.readFileSync('src/utils/memoryUtils.ts', 'utf8');

const target = `  return \`[LƯỢT \${turnIndex} - KÝ ỨC CHI TIẾT TỔNG HỢP CHÍNH VĂN]
• Số lượt: \${turnIndex} (Lượt càng lớn = Càng mới = Ưu tiên tối cao)
• Vị trí & Thời gian: \${locationStr} [Thời điểm: \${timeStr}\${weatherStr}]
• Hành động MC: \${userAction || "Tiến trình câu chuyện"}
• Dàn ý / Khái quát: \${outline || "Chưa có dàn ý"}\${keyDialogueBlock}
• Tổng hợp diễn biến chính văn toàn lượt:
\${storySynthesis}\`;
}`;

const replacement = `  return \`[LƯỢT \${turnIndex} - KÝ ỨC CHI TIẾT TỔNG HỢP]
• Số lượt: \${turnIndex} (Lượt càng lớn = Càng mới = Ưu tiên tối cao)
• Vị trí & Thời gian: \${locationStr} [Thời điểm: \${timeStr}\${weatherStr}]
• Hành động MC: \${userAction || "Tiến trình câu chuyện"}
• Khái quát Diễn biến (Dàn ý): \${outline || "Chưa có dàn ý"}\${keyDialogueBlock}\`;
}`;

if (content.includes('Tổng hợp diễn biến chính văn toàn lượt')) {
    content = content.replace(target, replacement);
    fs.writeFileSync('src/utils/memoryUtils.ts', content);
    console.log("Patched synthesizeTurnStoryMemory");
} else {
    console.log("Target not found");
}

const fs = require('fs');
let content = fs.readFileSync('src/utils/gameplaySystemInstruction.ts', 'utf8');

const target = `  "outline": "Trình bày chi tiết toàn bộ Dàn ý đã thống nhất trong quá trình Suy nghĩ (Thinking Process). KHÔNG TÓM TẮT NGẮN GỌN. Ghi RÕ RÀNG Tên Part, mốc thời gian, vị trí không gian, nội dung diễn biến chi tiết và Role nào của Hội đồng AI được chỉ định 'chấp bút' cho Part đó.",
\${partsJson}
}
</json_output>`;

const replacement = `  "outline": "Trình bày chi tiết toàn bộ Dàn ý đã thống nhất trong quá trình Suy nghĩ (Thinking Process). KHÔNG TÓM TẮT NGẮN GỌN. Ghi RÕ RÀNG Tên Part, mốc thời gian, vị trí không gian, nội dung diễn biến chi tiết và Role nào của Hội đồng AI được chỉ định 'chấp bút' cho Part đó.",
\${partsJson}
  "memory": "Viết TÓM TẮT KÝ ỨC NGẮN GỌN về những sự kiện, tình tiết quan trọng vừa mới xảy ra trong chính văn phía trên. Hãy tóm lược thành các gạch đầu dòng (Sự kiện gì vừa xảy ra, ai làm gì ai, kết quả ra sao). Đây sẽ là Log Ký Ức chính thức được lưu vào hệ thống, do đó BẮT BUỘC phải tập trung vào SỰ THẬT và HÀNH ĐỘNG khách quan, không viết kiểu tiểu thuyết."
}
</json_output>`;

if (content.includes('</json_output>')) {
    content = content.replace(target, replacement);
    fs.writeFileSync('src/utils/gameplaySystemInstruction.ts', content);
    console.log("Patched json_output");
} else {
    console.log("Target not found");
}

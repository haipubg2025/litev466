const regexes = [
  // Three rounds
  /\b\d{2,3}\s*[-–—]\s*\d{2,3}\s*[-–—]\s*\d{2,3}\b/g,
  /\bcao\s*(?:khoảng|chừng)?\s*(?:\d+m\d+|\d+(?:[.,]\d+)?\s*(?:cm|mét|m))\b/gi,
  /\bnặng\s*(?:khoảng|chừng)?\s*\d+(?:[.,]\d+)?\s*(?:kg|cân|kí|kilôgam)\b/gi,
  // Dọn dẹp khoảng trắng
  /(nước\s+mắt)\s+sinh\s+lý/gi,
  /(giọt\s+lệ)\s+sinh\s+lý/gi,
  /(khoái\s+cảm)\s+sinh\s+lý/gi,
  /(nhu\s+cầu)\s+sinh\s+lý/gi,
  /(bản\s+năng)\s+sinh\s+lý/gi,
  /(đòi\s+hỏi)\s+sinh\s+lý/gi,
  /(thỏa\s+mãn)\s+sinh\s+lý/gi,
  /(cọ\s+xát|va\s+chạm|đâm|nhấp|thúc|tiến\s+vào)\s+chí\s+mạng/gi,
  /(?:khóe\s+môi|khẽ\s+nhếch|môi)?(?:\s*\.\.\.|\s*,\s*|\s+)?(?<![a-zA-Z0-9_À-ỹ])à\s+không(?![a-zA-Z0-9_À-ỹ])/gi,
  /(?:lượng\s+)?(?:hormone|hotmone|nội\s+tiết\s+tố)\s*(?:nữ\s+tính|nam\s+tính)?/gi,
  /\b(?:hormone|hotmone|nội\s+tiết\s+tố)\b/gi,
  /(?:(?<![a-zA-Z0-9_À-ỹ])(?:cỡ|size)\s+)?(?:cup|cúp)\s*[-–—]?\s*[a-gA-G0-9]+/gi,
  /(?<![a-zA-Z0-9_À-ỹ])[a-gA-G]\s*[-–—]?\s*(?:cup|cúp)(?![a-zA-Z0-9_À-ỹ])/gi,
  /(?<![a-zA-Z0-9_À-ỹ])(?:cỡ|size)\s+[-–—]?\s*[a-gA-G0-9]+(?![a-zA-Z0-9_À-ỹ])/gi,
  /(?<![a-zA-Z0-9_À-ỹ])(?:cỡ|cup|cúp|size)\s+ngực(?![a-zA-Z0-9_À-ỹ])/gi,
  /(?<![a-zA-Z0-9_À-ỹ])(?:cỡ|size)\s+(?=(?:đầy|căng|khổng|đồ|nhỏ|vừa|nảy|nhô|lớn|to|tròn|mọng)\b)/gi,
  /(?<![a-zA-Z0-9_À-ỹ])(?:cup|cúp)(?![a-zA-Z0-9_À-ỹ])/gi,
  /(đẫy đà)(?:[\s,]*đẫy đà)+/gi,
  /(căng đầy)(?:[\s,]*căng đầy)+/gi,
  /(gợi cảm|quyến rũ|bốc lửa|đầy đặn|nảy nở|căng mọng|nóng bỏng)(?:[\s,]*và[\s,]*|\s*,\s*)\1+/gi,
  /(gợi cảm)(?:[\s,]*gợi cảm)+/gi,
  /(quyến rũ)(?:[\s,]*quyến rũ)+/gi,
  /nhếch\s*\.\.\.\s*khẽ\s*mỉm\s*cười/gi,
  /nhếch\s*\.\.\./gi,
  /,\s*,/g,
  /,\s*\./g,
  /[ \t]+([.,?!;])/g,
  /[ \t]+/g,
  /^\s*,\s*/g,
  /,\s*$/g
];

let text = "Âm thanh của bước chân.";
for (let r of regexes) {
  let temp = text.replace(r, "");
  if (temp !== text) {
    console.log("Regex changed text: ", r);
    console.log("New text:", temp);
  }
}

const fs = require('fs');

let text = "Âm thanh của bước chân. Cỡ A cup ngực.";

let sanitized = text;
sanitized = sanitized.replace(/(?:(?<![a-zA-Z0-9_À-ỹ])(?:cỡ|size)\s+)?(?:cup|cúp)\s*[-–—]?\s*[a-gA-G0-9]+/gi, "");
sanitized = sanitized.replace(/(?<![a-zA-Z0-9_À-ỹ])[a-gA-G]\s*[-–—]?\s*(?:cup|cúp)(?![a-zA-Z0-9_À-ỹ])/gi, "");
sanitized = sanitized.replace(/(?<![a-zA-Z0-9_À-ỹ])(?:cỡ|size)\s+[-–—]?\s*[a-gA-G0-9]+(?![a-zA-Z0-9_À-ỹ])/gi, "");
console.log("After cup:", sanitized);

// Wait, the third regex:
// /(?<![a-zA-Z0-9_À-ỹ])(?:cỡ|size)\s+[-–—]?\s*[a-gA-G0-9]+(?![a-zA-Z0-9_À-ỹ])/gi
// Let's test with just "Âm thanh"
let t2 = "Âm thanh";
t2 = t2.replace(/(?<![a-zA-Z0-9_À-ỹ])[a-gA-G]\s*[-–—]?\s*(?:cup|cúp)(?![a-zA-Z0-9_À-ỹ])/gi, "");
console.log("t2 after cup:", t2);


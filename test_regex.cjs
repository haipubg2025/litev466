let text = "Âm thanh của bước chân. Cỡ A cup ngực.";
let sanitized = text;

// Let's test what in wordFilter.ts could match "Âm".
const regexes = [
  [/(?:(?<![a-zA-Z0-9_À-ỹ])(?:cỡ|size)\s+)?(?:cup|cúp)\s*[-–—]?\s*[a-gA-G0-9]+/gi, "1"],
  [/(?<![a-zA-Z0-9_À-ỹ])[a-gA-G]\s*[-–—]?\s*(?:cup|cúp)(?![a-zA-Z0-9_À-ỹ])/gi, "2"],
  [/(?<![a-zA-Z0-9_À-ỹ])(?:cỡ|size)\s+[-–—]?\s*[a-gA-G0-9]+(?![a-zA-Z0-9_À-ỹ])/gi, "3"]
];
for(let [r, name] of regexes) {
  if (r.test("Âm thanh")) console.log("Matched Âm thanh:", name);
}

// Is "Â" treated as A-G?
// The 'i' flag makes [a-g] match 'A'-'G', 'a'-'g'. Does it match 'Â'?
console.log("Does [a-g]i match Â?", /[a-g]/i.test("Â"));


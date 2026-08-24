const fs = require('fs');
let code = fs.readFileSync('src/utils/htmlSanitizer.ts', 'utf-8');

code = code.replace(
  'export function stripHtmlTags(text: string): string {',
  'export function stripHtmlTags(text: any): string {\n  if (typeof text === "object" && text !== null) return JSON.stringify(text, null, 2);'
);

fs.writeFileSync('src/utils/htmlSanitizer.ts', code);
console.log('Patched');

const fs = require('fs');
let content = fs.readFileSync('src/utils/htmlSanitizer.ts', 'utf8');

const target = `export function stripHtmlTags(text: any): string {
  if (typeof text === "object" && text !== null) return JSON.stringify(text, null, 2);
  if (!text) return "";
  return text.replace(/<br\\s*\\/?>/gi, "\\n").replace(/<[^>]+>/g, "");
}`;

const replacement = `export function stripHtmlTags(text: any): string {
  if (typeof text === "object" && text !== null) return JSON.stringify(text, null, 2);
  if (text === undefined || text === null) return "";
  const str = String(text);
  if (!str) return "";
  return str.replace(/<br\\s*\\/?>/gi, "\\n").replace(/<[^>]+>/g, "");
}`;

if (content.includes('export function stripHtmlTags(text: any): string {')) {
    // If exact match fails due to whitespace, replace using regex or just replace the body
    content = content.replace(/export function stripHtmlTags[\s\S]*?}/, replacement);
    fs.writeFileSync('src/utils/htmlSanitizer.ts', content);
    console.log("Patched stripHtmlTags");
} else {
    console.log("Target not found");
}

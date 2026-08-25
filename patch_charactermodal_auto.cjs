const fs = require('fs');
let content = fs.readFileSync('src/components/CharacterModal.tsx', 'utf8');

const target = `      if (filteredKeys.length > 0) {
        const newCharData = { ...editedData };`;

const replacement = `      if (filteredKeys.length > 0) {
        const newCharData = JSON.parse(JSON.stringify(editedData));`;

if (content.includes(target)) {
    content = content.replace(target, replacement);
    fs.writeFileSync('src/components/CharacterModal.tsx', content);
    console.log("Patched auto-update successfully!");
} else {
    console.log("Not found.");
}

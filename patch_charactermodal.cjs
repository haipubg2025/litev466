const fs = require('fs');
let content = fs.readFileSync('src/components/CharacterModal.tsx', 'utf8');

const target = `          onApply={(updatedData) => {
            const newCharData = { ...editedData };`;

const replacement = `          onApply={(updatedData) => {
            const newCharData = JSON.parse(JSON.stringify(editedData));`;

if (content.includes(target)) {
    content = content.replace(target, replacement);
    fs.writeFileSync('src/components/CharacterModal.tsx', content);
    console.log("Patched successfully!");
} else {
    console.log("Not found.");
}

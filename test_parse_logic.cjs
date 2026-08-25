const regex = /<json_MC>([\s\S]*?)(?:<\/json_MC>|$)/gi;
const testStr = `
<json_MC>
{
  "mcUpdates": {
    "test": "value"
  }
}
</json_MC>
`;

let matches = [...testStr.matchAll(regex)];
let cleanBlock = matches[0][1].trim();
console.log("Extracted block:", cleanBlock);

function extractJsonBlock(rawText, keysToLookFor, type) {
    for (const key of keysToLookFor) {
        const regexStr = type === 'object' 
            ? `"${key}"\\s*:\\s*\\{([\\s\\S]*?)\\}\\s*(?=,|"\\w+"\\s*:|\\}|\]|$)`
            : `"${key}"\\s*:\\s*\\[([\\s\\S]*?)\\]\\s*(?=,|"\\w+"\\s*:|\\}|\]|$)`;
        const match = (new RegExp(regexStr, 'gi')).exec(rawText);
        if (match) {
            console.log("Matched key:", key);
            return match[0];
        }
    }
    return null;
}

let block = extractJsonBlock(cleanBlock, ["mcUpdates"], "object");
console.log("Extracted subblock:", block);


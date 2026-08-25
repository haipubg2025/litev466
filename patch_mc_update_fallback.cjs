const fs = require('fs');
let content = fs.readFileSync('src/utils/jsonRepair.ts', 'utf8');

const target = `    const mcUpdatesBlock = extractJsonBlock(rawText, ["mcUpdates", "mcUpdate", "playerUpdate", "mc_updates"], "object", options);
    if (mcUpdatesBlock) {
      data.mcUpdates = mcUpdatesBlock;
      hasData = true;
    }`;

const replacement = `    const mcUpdatesBlock = extractJsonBlock(rawText, ["mcUpdates", "mcUpdate", "playerUpdate", "mc_updates"], "object", options);
    if (mcUpdatesBlock) {
      data.mcUpdates = mcUpdatesBlock;
      hasData = true;
    } else {
      // Thử xem nó có nằm trong <json_MC> block mà không có key mcUpdates không
      const mcBlockMatch = rawText.match(/<json_MC>\\s*(\\{[\\s\\S]*?\\})\\s*(?:<\\/json_MC>|$)/i);
      if (mcBlockMatch) {
        try {
          const parsed = JSON.parse(mcBlockMatch[1]);
          if (parsed.mcUpdates) {
             data.mcUpdates = parsed.mcUpdates;
             hasData = true;
          } else {
             // Maybe the whole block is mcUpdates
             data.mcUpdates = parsed;
             hasData = true;
          }
        } catch(e) {}
      }
    }`;

content = content.replace(target, replacement);

fs.writeFileSync('src/utils/jsonRepair.ts', content);
console.log("Patched mcUpdates fallback");

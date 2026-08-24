const fs = require('fs');
let code = fs.readFileSync('src/components/CodexUpdateModal.tsx', 'utf-8');

code = code.replace(/setPending\(\(prev: any\) => \(\{\n\s*\.\.\.prev,\n\s*worldData: \{\n\s*\.\.\.\(prev\.worldData \|\| \{\}\),\n\s*\[key\]: value\n\s*\}\n\s*\}\);/g, 
  'setPending((prev: any) => ({\n      ...prev,\n      worldData: {\n        ...(prev.worldData || {}),\n        [key]: value\n      }\n    }));');

code = code.replace(/worldDetails: \{\n\s*\.\.\.\(prev\.worldDetails \|\| \{\}\),\n\s*places: value\n\s*\}\n\s*\}\);/g, 
  'worldDetails: {\n        ...(prev.worldDetails || {}),\n        places: value\n      }\n    }));');

code = code.replace(/setPending\(\(prev: any\) => \(\{\n\s*\.\.\.prev,\n\s*creativeRules: value\n\s*\}\);/g, 
  'setPending((prev: any) => ({\n      ...prev,\n      creativeRules: value\n    }));');

code = code.replace(/loc\.name === item\.name\) \|\| \{\}\)\)\)\.length : 0/g, 'loc.name === item.name) || {})).length : 0');

code = code.replace(/if \(isFieldEqual\(key, val, oldVal\) return null;/g, 'if (isFieldEqual(key, val, oldVal)) return null;');
code = code.replace(/if \(JSON\.stringify\(item\) === JSON\.stringify\(oldItem\) return null;/g, 'if (JSON.stringify(item) === JSON.stringify(oldItem)) return null;');

fs.writeFileSync('src/components/CodexUpdateModal.tsx', code);

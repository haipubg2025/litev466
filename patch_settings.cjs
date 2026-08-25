const fs = require('fs');

let settings = fs.readFileSync('src/components/Settings.tsx', 'utf8');

// 1. Swap the sections
const apiKeyRegex = /\{\/\* Cột 1: Api Key Cá Nhân \*\/\}.*?<\/section>/s;
const proxyRegex = /\{\/\* Cột 2: Proxy Ngược \*\/\}.*?<\/section>/s;

const apiKeyMatch = settings.match(apiKeyRegex);
const proxyMatch = settings.match(proxyRegex);

if (apiKeyMatch && proxyMatch) {
    let proxySec = proxyMatch[0];
    let apiKeySec = apiKeyMatch[0];

    // Remove the ON/OFF button
    const onOffRegex = /<button\s+onClick=\{\(\) => setGlobalProxyEnabled\(!globalProxyEnabled\)\}.*?<\/button>/s;
    proxySec = proxySec.replace(onOffRegex, '');

    // Replace the default model text
    proxySec = proxySec.replace(
        '<option value="" disabled>Chưa tải danh sách Model...</option>',
        '<option value="" disabled>Hãy bấm Load Models để sử dụng proxy</option>'
    );
    
    // Change labels if needed to match new column order
    proxySec = proxySec.replace('{/* Cột 2: Proxy Ngược */}', '{/* Cột 1: Proxy Ngược */}');
    apiKeySec = apiKeySec.replace('{/* Cột 1: Api Key Cá Nhân */}', '{/* Cột 2: Api Key Cá Nhân */}');

    const wrapperRegex = /(\{\/\* Cột 1: Api Key Cá Nhân \*\/\}.*?<\/section>).*?(\{\/\* Cột 2: Proxy Ngược \*\/\}.*?<\/section>)/s;
    
    settings = settings.replace(wrapperRegex, proxySec + "\n                " + apiKeySec);
    fs.writeFileSync('src/components/Settings.tsx', settings);
    console.log("Settings patched successfully");
} else {
    console.log("Could not find sections");
}


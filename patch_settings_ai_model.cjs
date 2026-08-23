const fs = require('fs');
let code = fs.readFileSync('src/components/Settings.tsx', 'utf-8');

const target1 = `<div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl theme-input border-transparent gap-4">
                      <div>
                        <p className={\`font-bold \${currentTheme.textPrimary}\`}>Mô hình AI chính</p>
                        <p className={\`text-sm \${currentTheme.textSecondary}\`}>Thay đổi khi gặp lỗi 429 Hết hạn ngạch / Quota Limits</p>
                      </div>
                      <select 
                        value={selectedAIModel}
                        onChange={(e) => {
                          setSelectedAIModel(e.target.value);
                          toast.success(\`Đã chọn mô hình: \${e.target.value}\`);
                        }}
                        className="theme-input border-transparent rounded-xl px-4 py-2 theme-text-base outline-none focus:border-blue-500 min-w-[200px] text-sm"
                        >
                        {Array.from(new Set([
                          "gemini-3.7-flash",
                          "gemini-2.5-flash",
                          "gemini-2.5-pro",
                          "gemini-3.6-flash",
                          "gemini-3.5-flash",
                          ...(proxies.flatMap(p => p.models || []))
                        ])).map(model => (
                          <option key={model} value={model}>{model}</option>
                        ))}
                      </select>
                    </div>`;

const replace1 = `<div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl theme-input border-transparent gap-4 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/5 dark:bg-white/5 backdrop-blur-[1.5px] z-10 flex items-center justify-center">
                         <span className="text-xs font-bold text-red-500 bg-red-500/10 px-3 py-1 rounded-full text-center">Tạm khóa do giới hạn API Key Free</span>
                      </div>
                      <div className="opacity-40 pointer-events-none w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <p className={\`font-bold \${currentTheme.textPrimary}\`}>Mô hình AI chính</p>
                          <p className={\`text-sm \${currentTheme.textSecondary}\`}>Thay đổi khi gặp lỗi 429 Hết hạn ngạch / Quota Limits</p>
                        </div>
                        <select 
                          value={selectedAIModel}
                          onChange={(e) => {
                            setSelectedAIModel(e.target.value);
                            toast.success(\`Đã chọn mô hình: \${e.target.value}\`);
                          }}
                          className="theme-input border-transparent rounded-xl px-4 py-2 theme-text-base outline-none focus:border-blue-500 min-w-[200px] text-sm"
                          disabled
                          >
                          {Array.from(new Set([
                            "gemini-3.7-flash",
                            "gemini-2.5-flash",
                            "gemini-2.5-pro",
                            "gemini-3.6-flash",
                            "gemini-3.5-flash",
                            ...(proxies.flatMap(p => p.models || []))
                          ])).map(model => (
                            <option key={model} value={model}>{model}</option>
                          ))}
                        </select>
                      </div>
                    </div>`;

if (code.includes(target1)) {
  code = code.replace(target1, replace1);
  fs.writeFileSync('src/components/Settings.tsx', code);
  console.log("Patched AI model block.");
} else {
  console.log("Could not find AI model block.");
}


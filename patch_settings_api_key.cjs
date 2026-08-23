const fs = require('fs');
let code = fs.readFileSync('src/components/Settings.tsx', 'utf-8');

const target2 = `                  {/* Cột 1: Api Key Cá Nhân */}
                  <section className="space-y-8">
                  <div className="px-4">
                    <h3 className={\`text-2xl font-bold \${currentTheme.textPrimary}\`}>Api Key Cá Nhân</h3>
                    <p className={\`text-sm mt-1 \${currentTheme.textSecondary}\`}>Thiết lập Gemini API Key của riêng bạn</p>
                  </div>`;

const replace2 = `                  {/* Cột 1: Api Key Cá Nhân */}
                  <section className="space-y-8 relative">
                  <div className="absolute inset-0 bg-black/5 dark:bg-white/5 backdrop-blur-[2px] z-20 flex flex-col items-center justify-center rounded-3xl p-6 text-center shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]">
                     <span className="text-sm font-bold text-red-500 bg-red-500/10 px-4 py-2 rounded-full mb-3 border border-red-500/20">🔒 Tạm khóa API Key Cá Nhân</span>
                     <span className={\`text-xs \${currentTheme.textSecondary} leading-relaxed max-w-sm\`}>Chức năng bị khóa do API Key Free Tier của Google chỉ cho phép <b>250.000 tokens/phút</b>. Lượng ngữ cảnh của game quá lớn sẽ lập tức gây lỗi 429. Vui lòng dùng Proxy mặc định.</span>
                  </div>
                  <div className="opacity-30 pointer-events-none space-y-8">
                  <div className="px-4">
                    <h3 className={\`text-2xl font-bold \${currentTheme.textPrimary}\`}>Api Key Cá Nhân</h3>
                    <p className={\`text-sm mt-1 \${currentTheme.textSecondary}\`}>Thiết lập Gemini API Key của riêng bạn</p>
                  </div>`;

const target3 = `                    <div className={\`p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20\`}>
                      <p className="text-xs text-purple-400 leading-relaxed italic text-left">
                        * Ghi chú: Hệ thống sẽ tự động xoay vòng (round-robin) các Key trong danh sách. Nếu có Key bị lỗi sẽ tạm thời đưa vào danh sách đen.
                      </p>
                    </div>
                  </div>
                </section>`;

const replace3 = `                    <div className={\`p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20\`}>
                      <p className="text-xs text-purple-400 leading-relaxed italic text-left">
                        * Ghi chú: Hệ thống sẽ tự động xoay vòng (round-robin) các Key trong danh sách. Nếu có Key bị lỗi sẽ tạm thời đưa vào danh sách đen.
                      </p>
                    </div>
                  </div>
                  </div>
                </section>`;

if (code.includes(target2) && code.includes(target3)) {
  code = code.replace(target2, replace2);
  code = code.replace(target3, replace3);
  fs.writeFileSync('src/components/Settings.tsx', code);
  console.log("Patched API Key block.");
} else {
  console.log("Could not find API Key block. Details:");
  console.log("target2 exists:", code.includes(target2));
  console.log("target3 exists:", code.includes(target3));
}


import re

with open('src/utils/gameplaySystemInstruction.ts', 'r') as f:
    content = f.read()

# Update the "Máu / Huyết / Sinh lực" rule to be even more strict and explain the logic
new_rule = "- **Máu / Huyết / Sinh lực / Máu Trinh**: [mau:Máu Đỏ], [mau:Máu Trinh], [mau:Vết Chém Rướm Máu], [mau:Sinh Lực Cuồn Cuộn] (TUYỆT ĐỐI CẤM BỌC DÂM THỦY, NƯỚC BỌT HAY DỊCH VÀO TAG NÀY KỂ CẢ KHI CHÚNG XUẤT HIỆN GẦN NHAU TRONG CÂU, PHẢI TÁCH RIÊNG BẰNG TAG [damThuy:...])"
content = content.replace(
    "- **Máu / Huyết / Sinh lực**: [mau:Máu Đỏ], [mau:Giọt Máu Tươi], [mau:Vết Chém Rướm Máu], [mau:Sinh Lực Cuồn Cuộn] (TUYỆT ĐỐI CẤM BỌC DÂM THỦY VÀ NƯỚC BỌT VÀO TAG NÀY)",
    new_rule
)

with open('src/utils/gameplaySystemInstruction.ts', 'w') as f:
    f.write(content)

print("Done")

const fs = require('fs');
let content = fs.readFileSync('src/utils/gameplaySystemInstruction.ts', 'utf8');

const regexNpcUpdates = /"DANH_SÁCH_CÁC_TRƯỜNG_MẶC_ĐỊNH_CẦN_THEO_DÕI_VÀ_CẬP_NHẬT_NẾU_CẦN_THIẾT": \{[\s\S]*?"TÊN_TRƯỜNG_ĐÃ_TỒN_TẠI": "CẢNH BÁO: BẮT BUỘC VIẾT LẠI.*?\\n     \} \}/;

content = content.replace(regexNpcUpdates, `\${npcUpdatesJsonStructure},
        "statusData": { "mood": [], "psychological": [{ "name": "Phẫn nộ", "description": "Tức giận vì bị phản bội, khó có thể xoa dịu.", "type": "temporary", "solvable": "solvable", "duration": "Vài ngày" }], "physiological": [], "health": [], "condition": [] },
        "TÊN_TRƯỜNG_ĐÃ_TỒN_TẠI": "CẢNH BÁO: BẮT BUỘC VIẾT LẠI Y NGUYÊN TOÀN BỘ THÔNG TIN CŨ + GIAO THOA THÊM THÔNG TIN MỚI VÀO. CẤM XUẤT RA DỮ LIỆU NGẮN TỦN GÂY GHI ĐÈ VÀ MẤT SẠCH DỮ LIỆU GỐC! Chỉ cập nhật những trường thực sự cần thiết."
     } }`);

const regexNewNpcs = /"LƯU_Ý_TỐI_THƯỢNG": "NGHIÊM CẤM TẠO LẠI BẤT KỲ NPC NÀO ĐÃ CÓ MẶT TRONG 'DANH SÁCH NPCs' ĐẦU VÀO!!![\s\S]*?"needs": \{ "sfw": "Nhu cầu cơ bản.*? \},\n    \}/;
content = content.replace(regexNewNpcs, '${newNpcsJsonStructure}\n    }');

fs.writeFileSync('src/utils/gameplaySystemInstruction.ts', content);

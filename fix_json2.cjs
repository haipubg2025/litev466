const fs = require('fs');
let content = fs.readFileSync('src/utils/gameplaySystemInstruction.ts', 'utf8');

const startStr1 = '"DANH_SÁCH_CÁC_TRƯỜNG_MẶC_ĐỊNH_CẦN_THEO_DÕI_VÀ_CẬP_NHẬT_NẾU_CẦN_THIẾT": {';
const endStr1 = '"TÊN_TRƯỜNG_ĐÃ_TỒN_TẠI": "CẢNH BÁO: BẮT BUỘC VIẾT LẠI Y NGUYÊN TOÀN BỘ THÔNG TIN CŨ + GIAO THOA THÊM THÔNG TIN MỚI VÀO. CẤM XUẤT RA DỮ LIỆU NGẮN TỦN GÂY GHI ĐÈ VÀ MẤT SẠCH DỮ LIỆU GỐC! Chỉ cập nhật những trường thực sự cần thiết."\n     } }';

let startIndex = content.indexOf(startStr1);
let endIndex = content.indexOf(endStr1, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
  content = content.substring(0, startIndex) + `\${npcUpdatesJsonStructure},
        "statusData": { "mood": [], "psychological": [{ "name": "Phẫn nộ", "description": "Tức giận vì bị phản bội, khó có thể xoa dịu.", "type": "temporary", "solvable": "solvable", "duration": "Vài ngày" }], "physiological": [], "health": [], "condition": [] },
        "TÊN_TRƯỜNG_ĐÃ_TỒN_TẠI": "CẢNH BÁO: BẮT BUỘC VIẾT LẠI Y NGUYÊN TOÀN BỘ THÔNG TIN CŨ + GIAO THOA THÊM THÔNG TIN MỚI VÀO. CẤM XUẤT RA DỮ LIỆU NGẮN TỦN GÂY GHI ĐÈ VÀ MẤT SẠCH DỮ LIỆU GỐC! Chỉ cập nhật những trường thực sự cần thiết."
     } }` + content.substring(endIndex + endStr1.length);
} else {
  console.log("Not found 1!");
}

const startStr2 = '"LƯU_Ý_TỐI_THƯỢNG": "NGHIÊM CẤM TẠO LẠI BẤT KỲ NPC NÀO ĐÃ CÓ MẶT TRONG \'DANH SÁCH NPCs\' ĐẦU VÀO!!!';
const endStr2 = ' "nsfw": "Nhu cầu tình dục và các khao khát/sở thích cụ thể" },\n    }';

startIndex = content.indexOf(startStr2);
endIndex = content.indexOf(endStr2, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
  content = content.substring(0, startIndex) + `\${newNpcsJsonStructure}\n    }` + content.substring(endIndex + endStr2.length);
} else {
  console.log("Not found 2!");
}

fs.writeFileSync('src/utils/gameplaySystemInstruction.ts', content);

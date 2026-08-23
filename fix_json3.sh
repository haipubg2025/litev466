sed -i '2898,2930c\
        ${npcUpdatesJsonStructure},\
        "statusData": { "mood": [], "psychological": [{ "name": "Phẫn nộ", "description": "Tức giận vì bị phản bội, khó có thể xoa dịu.", "type": "temporary", "solvable": "solvable", "duration": "Vài ngày" }], "physiological": [], "health": [], "condition": [] },\
        "TÊN_TRƯỜNG_ĐÃ_TỒN_TẠI": "CẢNH BÁO: BẮT BUỘC VIẾT LẠI Y NGUYÊN TOÀN BỘ THÔNG TIN CŨ + GIAO THOA THÊM THÔNG TIN MỚI VÀO. CẤM XUẤT RA DỮ LIỆU NGẮN TỦN GÂY GHI ĐÈ VÀ MẤT SẠCH DỮ LIỆU GỐC! Chỉ cập nhật những trường thực sự cần thiết."
' src/utils/gameplaySystemInstruction.ts

sed -i '2905,2922c\
        ${newNpcsJsonStructure}
' src/utils/gameplaySystemInstruction.ts

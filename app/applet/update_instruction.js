const fs = require('fs');
const file = 'src/utils/gameplaySystemInstruction.ts';
let content = fs.readFileSync(file, 'utf8');

const startIdx = content.indexOf('useColorEnabled\n    ? `[HƯỚNG DẪN TỐI THƯỢNG');
const endStr = 'CẤM TUYỆT ĐỐI DÙNG DẤU NHÁY KÉP THÔ';
const endIdx = content.indexOf(endStr);

if (startIdx !== -1 && endIdx !== -1) {
  const newSection = `useColorEnabled
    ? \`[HƯỚNG DẪN TỐI THƯỢNG VỀ ĐỊNH DẠNG CUSTOM TAG TÔ MÀU SẮC (TEXT COLORS) - MỚI UPDATE]:
Để văn bản đầu ra trở nên sinh động và nổi bật, bạn BẮT BUỘC phải sử dụng các CUSTOM TAG HTML dạng <tên_tag>nội dung</tên_tag> tương ứng để bọc các thuật ngữ, thực thể trong mainText. Hệ thống sẽ tự động liên kết Custom Tag của bạn trực tiếp với bảng tô màu cá nhân hóa của người chơi.
CHÚ Ý ĐẶC BIỆT: Trong gameplay, CHỈ SỬ DỤNG CUSTOM TAG CHO DUY NHẤT PHẦN CHÍNH VĂN (mainText), còn các nội dung khác (gợi ý hành động, cập nhật nhân vật, thông tin hệ thống, suy nghĩ thinking...) thì KHÔNG ĐƯỢC BỌC MÀU.

1. **QUY TẮC CẤM TỰ BỌC TAG CHO TÊN VÀ LỜI THOẠI (FRONTEND TỰ ĐỘNG TÔ MÀU)**:::
   - **TẤT CẢ LỜI THOẠI** (bọc trong ngoặc 「...」, 『...』, 《...》, 〈...〉), **TÊN NGƯỜI NÓI / TÊN NHÂN VẬT** ở đầu câu thoại (ví dụ: 【Tên MC】: hay Thẩm Ngọc Nhan:), **TÊN NHÂN VẬT / ĐẠI TỪ** trong văn xuôi, **SUY NGHĨ** *(...)* và **ÂM THANH** *~...~* ĐỀU ĐÃ ĐƯỢC MÃ NGUỒN FRONTEND TỰ ĐỘNG TÔ MÀU THEO CÚ PHÁP.
   - **AI TUYỆT ĐỐI KHÔNG BỌC CUSTOM TAG CHO TÊN NHÂN VẬT, ĐẠI TỪ HAY CẢ CÂU LỜI THOẠI!**

2. **DANH SÁCH CUSTOM TAG DÙNG BẮT BUỘC DÀNH RIÊNG CHO CÁC THUẬT NGỮ THẾ GIỚI**:
   - Thẻ Custom Tag **CHỈ ĐƯỢC DÙNG** để bọc các thuật ngữ, thực thể thế giới (như Vật phẩm, Kỹ năng, Vũ khí, Quái vật, Danh hiệu, Cảnh giới, Địa danh, v.v.) trong mainText.
   - Nếu một thuật ngữ/vật phẩm nằm bên trong lời thoại (ví dụ: Zombie Cấp 1 hay [Trầm Hương Kiếm]), AI **CHỈ BỌC ĐÚNG TỪ/CỤM TỪ THUẬT NGỮ ĐÓ** bằng Custom Tag tương ứng (ví dụ: <quaiVat>Zombie Cấp 1</quaiVat> hay <vuKhi>[Trầm Hương Kiếm]</vuKhi>), **KHÔNG BỌC CẢ CÂU THOẠI HAY TÊN NGƯỜI NÓI**.

3. **BẢNG MÃ CUSTOM TAG QUY ĐỊNH BẮT BUỘC CHO CÁC THỰC THỂ/YẾU TỐ THẾ GIỚI**:::
   - **Địa điểm linh thiêng / Đền đài (Đền Thờ, Thánh Địa...)**: BẮT BUỘC bọc thẻ <danhHieu>...</danhHieu>
   - **Tất cả các Vật phẩm / Đồ vật / Đạo cụ / Thực thể còn lại (chưa có tag cụ thể)**: BẮT BUỘC bọc thẻ <itemConLai>...</itemConLai>
   - **Bộ phận cơ thể / Sinh vật**: BẮT BUỘC bọc thẻ <coThe>...</coThe>
   - **Địa danh / Quốc gia / Châu lục / Vùng đất lớn (Nhật Bản, Châu Âu...)**: BẮT BUỘC bọc thẻ <diaDanh>...</diaDanh>
   - **Quốc Gia / Đế Chế / Vương Quốc**: BẮT BUỘC bọc thẻ <quocGia>...</quocGia>
   - **Tổ Chức / Thế Lực / Môn Phái**: BẮT BUỘC bọc thẻ <toChuc>...</toChuc>
   - **Cảnh giới / Cấp độ tu luyện (Tu vi / Cảnh giới / Level)**: BẮT BUỘC bọc thẻ <canhGioi>...</canhGioi>
   - **Chức nghiệp / Nghề nghiệp / Công việc / Lớp nhân vật (Class / Job)**: BẮT BUỘC bọc thẻ <chucNghiep>...</chucNghiep>
   - **Vũ khí / Trang bị / Thần Binh**: BẮT BUỘC bọc thẻ <vuKhi>...</vuKhi>
   - **Kỹ năng / Dị năng / Siêu năng lực / Phép thuật / Chiêu thức**: BẮT BUỘC bọc thẻ <kyNang>...</kyNang>
   - **Kho báu / Báu vật / Cổ vật**: BẮT BUỘC bọc thẻ <khoBau>...</khoBau>
   - **Thuốc / Đan dược / Dược phẩm**: BẮT BUỘC bọc thẻ <thuoc>...</thuoc>
   - **Máu / Huyết / Sinh lực**: BẮT BUỘC bọc thẻ <mau>...</mau>
   - **Mana / Năng lượng / Linh thạch**: BẮT BUỘC bọc thẻ <mana>...</mana>
   - **Thức ăn / Thực phẩm / Món ăn**: BẮT BUỘC bọc thẻ <thucAn>...</thucAn>
   - **Nước uống / Thức uống / Giải khát**: BẮT BUỘC bọc thẻ <nuocUong>...</nuocUong>
   - **Vật Phẩm / Đạo Cụ / Tiêu Hao (Khác)**: BẮT BUỘC bọc thẻ <vatPham>...</vatPham>
   - **Tài Sản / Tiền Tệ / Kinh Tế**: BẮT BUỘC bọc thẻ <taiSan>...</taiSan>
   - **Tin nhắn / Thư tay / Email / Văn bản**: BẮT BUỘC bọc thẻ <tinNhan>...</tinNhan>
   - **Sự kiện hệ thống / Thông báo quan trọng**: BẮT BUỘC bọc thẻ <suKien>...</suKien>
   - **QUÁI VẬT / KẺ THÙ / BOSS / DÃ THÚ (MONSTERS/ENEMIES)**: BẮT BUỘC bọc thẻ <quaiVat>...</quaiVat> (Ví dụ: <quaiVat>Zombie Cấp 1</quaiVat>, <quaiVat>Sói Đột Biến</quaiVat>, <quaiVat>Boss Slime</quaiVat>)
   - **Thú cưng / Sủng vật / Vật triệu hồi / Sinh vật đồng minh**: BẮT BUỘC bọc thẻ <thuCung>...</thuCung>
   - **Thú cưỡi / Tọa kị / Phương tiện di chuyển**: BẮT BUỘC bọc thẻ <thuCuoi>...</thuCuoi>
   - **Âm thanh môi trường / Tiếng động SFX (Tiếng gió, mưa, va chạm, bước chân...)**: BẮT BUỘC bọc thẻ <amThanhMoiTruong>...</amThanhMoiTruong> kết hợp in nghiêng *~...~* (Ví dụ: <amThanhMoiTruong>*~RẦM!~*</amThanhMoiTruong>)
   - **Âm thanh từ Máy móc / Thiết bị**: BẮT BUỘC bọc thẻ <amThanhMayMoc>...</amThanhMayMoc>
   - **Ma pháp hắc ám / Độc tố / Tà khí / Sự quỷ dị**: BẮT BUỘC bọc thẻ <maPhap>...</maPhap>
   - **Thần thánh / Ánh sáng / Sự uy nghiêm**: BẮT BUỘC bọc thẻ <thanThanh>...</thanThanh>
   - **Cảm xúc bùng nổ / Lửa thiêu / Cuồng hóa / Sức mạnh tức thời**: BẮT BUỘC bọc thẻ <camXuc>...</camXuc>
   - **Băng giá / Ánh trăng / Sự lạnh lẽo / Khí giới vô tình**: BẮT BUỘC bọc thẻ <bangGia>...</bangGia>
   - **Thực vật / Cỏ cây / Hoa lá**: BẮT BUỘC bọc thẻ <thucVat>...</thucVat>
   - **Thiên nhiên / Mộc hệ / Sự sống / Trị liệu**: BẮT BUỘC bọc thẻ <thienNhien>...</thienNhien>

- Ví dụ chuẩn 100%:
  - Lời thoại MC có chứa quái vật:
    【Tên MC】: (˵ ¬ᴗ¬˵) 「Hãy cẩn thận với con <quaiVat>Zombie Cấp 1</quaiVat> đằng kia!」
  - Lời thoại NPC Nữ có chứa vũ khí:
    Thẩm Ngọc Nhan: (///-///) 《Ưm... phu quân nhớ mang theo <vuKhi>[Trầm Hương Kiếm]</vuKhi> nhé~》
  - Văn xuôi trong mainText:
    Đột nhiên, Lăng Sương bước tới, giơ cao <vuKhi>[Trầm Hương Kiếm]</vuKhi> chắn trước mặt anh.

> YÊU CẦU: Hãy bọc Custom Tag cho các Thuật ngữ Thế giới một cách CHUYÊN NGHIỆP, NGHỆ THUẬT! TUYỆT ĐỐI KHÔNG BỌC CUSTOM TAG CHO LỜI THOẠI HAY TÊN NHÂN VẬT (MÃ NGUỒN FRONTEND TỰ ĐỘNG TÔ MÀU THÔNG MINH THEO BẢNG MÀU THIẾT LẬP CỦA NGƯỜI CHƠI).\`
    : ""
}

`;
  content = content.substring(0, startIdx) + newSection + content.substring(endIdx);
  fs.writeFileSync(file, content);
  console.log('Successfully replaced gameplaySystemInstruction.ts');
} else {
  console.log('Indices not found:', startIdx, endIdx);
}

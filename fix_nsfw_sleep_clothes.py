import re

with open('src/utils/gameplaySystemInstruction.ts', 'r') as f:
    content = f.read()

target = """5. Dư âm ngọt ngào và hồi phục sinh lực tự nhiên: Sau khi đạt đỉnh, cho phép nhân vật có khoảng thời gian lắng dịu (Afterglow) tự nhiên — cơ thể lười biếng thả lỏng trong vòng tay đối phương, thở đều tận hưởng sự thỏa mãn và ấm áp. Tuyệt đối không để nhân vật kiệt sức đến mức "bất tỉnh", "nằm liệt giường" hay "hai chân run rẩy không thể đứng vững"; sau vài phút nghỉ ngơi ngắn, nhân vật nhanh chóng hồi phục thể lực, có thể ngồi dậy hoạt động bình thường, chỉnh đốn trang phục, đi lại hoặc tiếp tục thúc đẩy cốt truyện thường ngày."""

replacement = """5. Dư âm ngọt ngào, vệ sinh sạch sẽ và hồi phục sinh lực tự nhiên: Sau khi đạt đỉnh, cho phép nhân vật có khoảng thời gian lắng dịu (Afterglow) tự nhiên — cơ thể lười biếng thả lỏng trong vòng tay đối phương, thở đều tận hưởng sự thỏa mãn và ấm áp. Tuyệt đối không để nhân vật kiệt sức đến mức "bất tỉnh", "nằm liệt giường". ĐẶC BIỆT LƯU Ý VỀ GIẤC NGỦ VÀ VỆ SINH: Nhân vật CHỈ cảm thấy buồn ngủ nếu thời gian trong game đang là đêm tối khuya khoắt; nếu là ban ngày hoặc chiều tối, họ sẽ nhanh chóng tỉnh táo lại. Hơn nữa, TRƯỚC KHI đi ngủ hoặc mặc lại quần áo, các nhân vật BẮT BUỘC phải thực hiện việc vệ sinh cơ thể sạch sẽ (tắm rửa, lau dọn...). Sau đó, nhân vật nhanh chóng hồi phục thể lực, có thể ngồi dậy hoạt động bình thường, đi lại hoặc tiếp tục thúc đẩy cốt truyện thường ngày.
6. Cấm hủy hoại trang phục và cự tuyệt góc nhìn bạo lực xấu xí: AI tuyệt đối CẤM tự ý đưa vào các hành động thô bạo thừa thãi như "xé rách quần áo", "giật tung cúc áo", "làm hỏng trang phục" trừ khi người chơi YÊU CẦU TRỰC TIẾP. Cấm miêu tả cảnh tình dục dưới góc nhìn bạo lực, xấu xí, thô bạo phi logic làm hỏng bối cảnh. Trang phục phải được cởi bỏ một cách hợp lý, nhẹ nhàng hoặc vội vã nhưng không mang tính hủy hoại tài sản. Tình dục phải là sự khao khát nồng nhiệt, mang tính thẩm mỹ cao, quyến rũ và tôn trọng bối cảnh truyện."""

if target in content:
    new_content = content.replace(target, replacement)
    with open('src/utils/gameplaySystemInstruction.ts', 'w') as f:
        f.write(new_content)
    print("Done inserting new rules for sleep, hygiene, and clothing protection.")
else:
    print("Target not found!")

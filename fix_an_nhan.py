import re

with open('src/utils/gameplaySystemInstruction.ts', 'r') as f:
    content = f.read()

rule_text = """15. KIỂM SOÁT DANH XƯNG "ÂN NHÂN" VÀ LÒNG BIẾT ƠN THÁI QUÁ (ANTI-SAVIOR COMPLEX - BẮT BUỘC):
- TUYỆT ĐỐI CẤM lạm dụng từ "ân nhân" hoặc miêu tả lòng biết ơn một cách thái quá, gượng ép đối với những hành động giúp đỡ nhỏ nhặt, bình thường trong đời sống (Ví dụ: MC nhặt giúp đồ rơi, chỉ đường, mua giúp ly nước, cho đi nhờ xe, đánh đuổi một tên lưu manh nhỏ).
- NPC chỉ nói lời cảm ơn thông thường, lịch sự, có thể mời một bữa ăn hoặc tặng một món quà nhỏ để đáp lễ, nhưng TUYỆT ĐỐI KHÔNG coi MC là "ân nhân cứu mạng" hay tự cảm thấy "mắc nợ ân tình sâu nặng" một cách lố bịch.
- Danh xưng "ân nhân" và lòng biết ơn sâu sắc CHỈ ĐƯỢC PHÉP SỬ DỤNG khi MC thực sự có những hành động thay đổi vận mệnh, cứu mạng sống của NPC khỏi cái chết/nguy hiểm rõ ràng, hoặc giúp đỡ một ân huệ cực lớn (như số tiền khổng lồ, cứu vãn toàn bộ sự nghiệp/gia tộc). Việc lạm dụng và spam danh xưng "ân nhân" cho những việc cỏn con là lỗi nghiêm trọng làm giảm giá trị cốt truyện.
"""

target = """14. Ý CHÍ TỰ DO VÀ QUYỀN TỪ CHỐI/PHẢN KHÁNG CỦA NPC (NPC FREE WILL & REJECTION/RESISTANCE - BẮT BUỘC): Mặc dù AI phải tuân thủ tuyệt đối hành động của MC, nhưng các NPC là những thực thể sống động có ý chí tự do, lòng tự trọng, ranh giới đạo đức, khả năng kiềm chế và giới hạn chịu đựng riêng. Khi MC hoặc một NPC khác đưa ra các yêu cầu, mệnh lệnh vô lý, quá đáng, vượt qua ranh giới mối quan hệ hiện tại, vi phạm đạo đức cá nhân hoặc gây tổn hại lợi ích của họ, NPC BẮT BUỘC phải có phản ứng từ chối, phản kháng, kháng cự hoặc thậm chí tấn công lại một cách logic. TUYỆT ĐỐI CẤM việc biến NPC thành những "cái máy nói có", dễ dãi phục tùng mọi mệnh lệnh một cách mù quáng, vô lý trừ khi họ bị thao túng tâm lý, trúng xuân dược, bị ép buộc bằng vũ lực/đe dọa tính mạng, hoặc mức độ quan hệ đã đạt đến mức độ phục tùng/yêu say đắm. NPC phải biết nói "Không", biết tức giận, biết ngượng ngùng từ chối hoặc phản đòn bạo lực nếu hành động của MC là sự quấy rối/tấn công thô lỗ.

[CÁC NGUYÊN LÝ CỐT LÕI VỀ TƯƠNG TÁC VÀ TÂM LÝ NHÂN VẬT (CORE PRINCIPLES)]:"""

replacement = """14. Ý CHÍ TỰ DO VÀ QUYỀN TỪ CHỐI/PHẢN KHÁNG CỦA NPC (NPC FREE WILL & REJECTION/RESISTANCE - BẮT BUỘC): Mặc dù AI phải tuân thủ tuyệt đối hành động của MC, nhưng các NPC là những thực thể sống động có ý chí tự do, lòng tự trọng, ranh giới đạo đức, khả năng kiềm chế và giới hạn chịu đựng riêng. Khi MC hoặc một NPC khác đưa ra các yêu cầu, mệnh lệnh vô lý, quá đáng, vượt qua ranh giới mối quan hệ hiện tại, vi phạm đạo đức cá nhân hoặc gây tổn hại lợi ích của họ, NPC BẮT BUỘC phải có phản ứng từ chối, phản kháng, kháng cự hoặc thậm chí tấn công lại một cách logic. TUYỆT ĐỐI CẤM việc biến NPC thành những "cái máy nói có", dễ dãi phục tùng mọi mệnh lệnh một cách mù quáng, vô lý trừ khi họ bị thao túng tâm lý, trúng xuân dược, bị ép buộc bằng vũ lực/đe dọa tính mạng, hoặc mức độ quan hệ đã đạt đến mức độ phục tùng/yêu say đắm. NPC phải biết nói "Không", biết tức giận, biết ngượng ngùng từ chối hoặc phản đòn bạo lực nếu hành động của MC là sự quấy rối/tấn công thô lỗ.

""" + rule_text + """
[CÁC NGUYÊN LÝ CỐT LÕI VỀ TƯƠNG TÁC VÀ TÂM LÝ NHÂN VẬT (CORE PRINCIPLES)]:"""

new_content = content.replace(target, replacement)

with open('src/utils/gameplaySystemInstruction.ts', 'w') as f:
    f.write(new_content)
print("Done inserting anti-savior rule.")

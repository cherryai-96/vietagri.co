import re

with open('src/i18n.tsx', 'r') as f:
    content = f.read()

replacements = {
    # English
    "'An Integrated Agricultural Supply Chain Ecosystem'": "'An&nbsp;Integrated&nbsp;Agricultural Supply&nbsp;Chain&nbsp;Ecosystem'",
    "'Innovation in Action: The Viet Wolffia Model'": "'Innovation&nbsp;in&nbsp;Action: The&nbsp;Viet&nbsp;Wolffia&nbsp;Model'",
    "'Demonstrating High-Tech, Export-Ready Cultivation'": "'Demonstrating&nbsp;High-Tech, Export-Ready&nbsp;Cultivation'",
    "'Built for the Global Standard'": "'Built&nbsp;for&nbsp;the Global&nbsp;Standard'",
    "'Secure Your Supply Chain in Vietnam'": "'Secure&nbsp;Your Supply&nbsp;Chain in&nbsp;Vietnam'",
    
    "'Rooted in Vietnam. Reaching the World.'": "'Rooted in&nbsp;Vietnam. Reaching&nbsp;the&nbsp;World.'",
    "'Your Trusted Gatekeeper in Vietnam'": "'Your Trusted&nbsp;Gatekeeper in&nbsp;Vietnam'",
    "'Why Global Corporations Choose VAC'": "'Why Global&nbsp;Corporations Choose&nbsp;VAC'",
    
    "'End-to-End Solutions for Global Agriculture'": "'End-to-End&nbsp;Solutions for Global&nbsp;Agriculture'",
    "'Your On-the-Ground Partner in Vietnam'": "'Your On-the-Ground&nbsp;Partner in&nbsp;Vietnam'",
    "'Global Agricultural Sourcing Services'": "'Global&nbsp;Agricultural Sourcing&nbsp;Services'",
    "'High-Tech Contract Farming & Investment'": "'High-Tech Contract&nbsp;Farming &&nbsp;Investment'",
    "'Export Quality Assurance'": "'Export&nbsp;Quality Assurance'",
    "'Global Logistics & Trade Documentation'": "'Global&nbsp;Logistics&nbsp;& Trade&nbsp;Documentation'",
    "'Ready to streamline your agricultural supply chain?'": "'Ready to&nbsp;streamline your agricultural supply&nbsp;chain?'",
    
    "'Viet Wolffia Superfood'": "'Viet&nbsp;Wolffia Superfood'",
    "'The World’s Smallest, Most Nutrient-Dense Plant'": "'The&nbsp;World’s&nbsp;Smallest, Most Nutrient-Dense&nbsp;Plant'",
    "'Precision Agriculture in Clean & Controlled Environments'": "'Precision&nbsp;Agriculture&nbsp;in Clean&nbsp;&&nbsp;Controlled&nbsp;Environments'",
    "'Optimized Canvas Pond Architecture'": "'Optimized&nbsp;Canvas Pond&nbsp;Architecture'",
    "'Air & Light Management'": "'Air&nbsp;&&nbsp;Light Management'",
    "'Uncompromising Water Purity'": "'Uncompromising Water&nbsp;Purity'",
    "'Versatile Nutrition for a Hungry World'": "'Versatile&nbsp;Nutrition for&nbsp;a&nbsp;Hungry&nbsp;World'",
    "'Procure Viet Wolffia for Your Operations'": "'Procure Viet&nbsp;Wolffia for&nbsp;Your&nbsp;Operations'",
    "'Viet Wolffia Recipe & Operations Gallery'": "'Viet&nbsp;Wolffia&nbsp;Recipe &&nbsp;Operations&nbsp;Gallery'",
    
    "'Cultivating a Resilient Global Supply Chain'": "'Cultivating a&nbsp;Resilient Global&nbsp;Supply&nbsp;Chain'",
    "'Sustainability is Our Standard'": "'Sustainability is Our&nbsp;Standard'",
    "'Elevating Supply Chains to Premium Standards'": "'Elevating Supply&nbsp;Chains to&nbsp;Premium&nbsp;Standards'",
    "'Building Zero-Waste Agricultural Ecosystems'": "'Building Zero-Waste Agricultural&nbsp;Ecosystems'",
    "'Measurable Impact for Corporate Reporting'": "'Measurable&nbsp;Impact for Corporate&nbsp;Reporting'",
    "'Ready to Certify Your Supply Chain?'": "'Ready to&nbsp;Certify Your Supply&nbsp;Chain?'",
    
    "'Let’s Build a Sustainable Supply Chain Together'": "'Let’s Build a&nbsp;Sustainable Supply&nbsp;Chain&nbsp;Together'",

    # Vietnamese
    "'Hệ Sinh Thái Chuỗi Cung Ứng Nông Nghiệp Tích Hợp'": "'Hệ&nbsp;Sinh&nbsp;Thái Chuỗi&nbsp;Cung&nbsp;Ứng Nông&nbsp;Nghiệp Tích&nbsp;Hợp'",
    "'Đổi Mới Khởi Trào: Mô Hình Viet Wolffia'": "'Đổi&nbsp;Mới Khởi&nbsp;Trào: Mô&nbsp;Hình Viet&nbsp;Wolffia'",
    "'Minh Chứng Cho Nền Canh Tác Công Nghệ Cao, Sẵn Sàng Xuất Khẩu'": "'Minh&nbsp;Chứng Cho Nền Canh&nbsp;Tác Công&nbsp;Nghệ&nbsp;Cao, Sẵn&nbsp;Sàng Xuất&nbsp;Khẩu'",
    "'Được Xây Dựng Cho Tiêu Chuẩn Toàn Cầu'": "'Được Xây&nbsp;Dựng Cho Tiêu&nbsp;Chuẩn Toàn&nbsp;Cầu'",
    "'Thiết Lập Chuỗi Cung Ứng Tại Việt Nam'": "'Thiết&nbsp;Lập Chuỗi&nbsp;Cung&nbsp;Ứng Tại Việt&nbsp;Nam'",
    
    "'Bám Rễ Tại Việt Nam. Vươn Nhánh Khắp Toàn Cầu.'": "'Bám&nbsp;Rễ Tại Việt&nbsp;Nam. Vươn&nbsp;Nhánh Khắp Toàn&nbsp;Cầu.'",
    "'Người Gác Cổng Đáng Tin Cậy Tại Việt Nam'": "'Người Gác&nbsp;Cổng Đáng Tin&nbsp;Cậy Tại Việt&nbsp;Nam'",
    "'Vì Sao Các Tập Đoàn Toàn Cầu Chọn VAC'": "'Vì&nbsp;Sao Các Tập&nbsp;Đoàn Toàn&nbsp;Cầu Chọn&nbsp;VAC'",
    
    "'Giải Pháp Toàn Diện Cho Nông Nghiệp Toàn Cầu'": "'Giải&nbsp;Pháp Toàn&nbsp;Diện Cho Nông&nbsp;Nghiệp Toàn&nbsp;Cầu'",
    "'Đối Tác Bản Địa Của Bạn Tại Việt Nam'": "'Đối&nbsp;Tác Bản&nbsp;Địa Của Bạn Tại Việt&nbsp;Nam'",
    "'Dịch Vụ Cung Ứng Nông Sản Toàn Cầu'": "'Dịch&nbsp;Vụ Cung&nbsp;Ứng Nông&nbsp;Sản Toàn&nbsp;Cầu'",
    "'Canh Tác Hợp Đồng Công Nghệ Cao & Đầu Tư'": "'Canh&nbsp;Tác Hợp&nbsp;Đồng Công&nbsp;Nghệ&nbsp;Cao & Đầu&nbsp;Tư'",
    "'Đảm Bảo Chất Lượng Xuất Khẩu'": "'Đảm&nbsp;Bảo Chất&nbsp;Lượng Xuất&nbsp;Khẩu'",
    "'Logistics Toàn Cầu & Chứng Từ Thương Mại'": "'Logistics Toàn&nbsp;Cầu & Chứng&nbsp;Từ Thương&nbsp;Mại'",
    "'Sẵn sàng tối ưu hóa chuỗi cung ứng nông nghiệp của bạn?'": "'Sẵn&nbsp;sàng tối&nbsp;ưu&nbsp;hóa chuỗi cung&nbsp;ứng nông&nbsp;nghiệp của bạn?'",
    
    "'Siêu Thực Phẩm Viet Wolffia'": "'Siêu Thực&nbsp;Phẩm Viet&nbsp;Wolffia'",
    "'Loài Thực Vật Có Hoa Nhỏ Nhất, Giàu Dưỡng Chất Nhất Thế Giới'": "'Loài Thực&nbsp;Vật Có&nbsp;Hoa Nhỏ&nbsp;Nhất, Giàu Dưỡng&nbsp;Chất Nhất Thế&nbsp;Giới'",
    "'Nông Nghiệp Chính Xác Trong Môi Trường Sạch & Được Kiểm Soát'": "'Nông&nbsp;Nghiệp Chính&nbsp;Xác Trong Môi&nbsp;Trường Sạch & Được Kiểm&nbsp;Soát'",
    "'Hệ Thống Ao Nổi Lót Bạt Tối Ưu'": "'Hệ&nbsp;Thống Ao&nbsp;Nổi Lót&nbsp;Bạt Tối&nbsp;Ưu'",
    "'Kiểm Soát Ánh Sáng & Không Khí'": "'Kiểm&nbsp;Soát Ánh&nbsp;Sáng & Không&nbsp;Khí'",
    "'Độ Tinh Khiết Nguồn Nước Tuyệt Đối'": "'Độ Tinh&nbsp;Khiết Nguồn&nbsp;Nước Tuyệt&nbsp;Đối'",
    "'Nguồn Dinh Dưỡng Đa Năng Cho Một Thế Giới Đang Cần'": "'Nguồn Dinh&nbsp;Dưỡng Đa&nbsp;Năng Cho Một Thế&nbsp;Giới Đang&nbsp;Cần'",
    "'Thu Mua Viet Wolffia Cho Hoạt Động Của Bạn'": "'Thu&nbsp;Mua Viet&nbsp;Wolffia Cho Hoạt&nbsp;Động Của&nbsp;Bạn'",
    "'Thư Viện Ảnh Hoạt Động & Cảm Hứng Chế Biến'": "'Thư&nbsp;Viện Ảnh Hoạt&nbsp;Động & Cảm&nbsp;Hứng Chế&nbsp;Biến'",
    
    "'Xây Dựng Một Chuỗi Cung Ứng Toàn Cầu Bền Bỉ'": "'Xây&nbsp;Dựng Một Chuỗi Cung&nbsp;Ứng Toàn&nbsp;Cầu Bền&nbsp;Bỉ'",
    "'Phát Triển Bền Vững Là Tiêu Chuẩn Của Chúng Tôi'": "'Phát&nbsp;Triển Bền&nbsp;Vững Là Tiêu&nbsp;Chuẩn Của Chúng&nbsp;Tôi'",
    "'Nâng Tầm Chuỗi Cung Ứng Lên Tiêu Chuẩn Cao Cấp'": "'Nâng&nbsp;Tầm Chuỗi Cung&nbsp;Ứng Lên Tiêu&nbsp;Chuẩn Cao&nbsp;Cấp'",
    "'Kiến Tạo Hệ Sinh Thái Nông Nghiệp \"Không Rác Thải\"'": "'Kiến&nbsp;Tạo Hệ Sinh&nbsp;Thái Nông&nbsp;Nghiệp \"Không Rác&nbsp;Thải\"'",
    "'Tác Động Cụ Thể Cho Các Báo Cáo Doanh Nghiệp'": "'Tác&nbsp;Động Cụ&nbsp;Thể Cho Các Báo&nbsp;Cáo Doanh&nbsp;Nghiệp'",
    "'Sẵn Sàng Chứng Nhận Chuỗi Cung Ứng Của Mình?'": "'Sẵn&nbsp;Sàng Chứng&nbsp;Nhận Chuỗi Cung&nbsp;Ứng Của Mình?'",
    
    "'Hãy Cùng Xây Dựng Một Chuỗi Cung Ứng Bền Vững'": "'Hãy Cùng Xây&nbsp;Dựng Một Chuỗi Cung&nbsp;Ứng Bền&nbsp;Vững'",
    
    # Subtitles
    "'Đối tác bản địa đáng tin cậy của bạn trong cung ứng nông sản cao cấp, canh tác hợp đồng công nghệ cao và logistics xuất khẩu toàn cầu.'": "'Đối tác bản địa đáng tin cậy của bạn trong cung ứng nông sản cao cấp, canh tác hợp đồng công nghệ cao và logistics xuất khẩu toàn cầu.'",
    "'Your trusted on-the-ground partner for premium product sourcing, high-tech contract farming, and seamless global export logistics.'": "'Your trusted on-the-ground partner for premium product sourcing, high-tech contract farming, and seamless global export logistics.'"
}

new_content = content
for old, new in replacements.items():
    new_content = new_content.replace(old, new)

# For home.heroTitle:
new_content = new_content.replace(
    "'Mang <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-gold-champagne via-gold-warm to-gold-antique\">Tinh Hoa Nông Sản Việt</span> Vươn Tầm Thế Giới'",
    "'Mang <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-gold-champagne via-gold-warm to-gold-antique\">Tinh&nbsp;Hoa Nông&nbsp;Sản Việt</span> Vươn&nbsp;Tầm Thế&nbsp;Giới'"
)

with open('src/i18n.tsx', 'w') as f:
    f.write(new_content)

print("Applied nbsp successfully.")

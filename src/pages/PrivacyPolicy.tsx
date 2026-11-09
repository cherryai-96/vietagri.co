import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from '../i18n';
import { Shield, Lock, FileText, CheckCircle2, Clock, Mail, MapPin, Phone, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PrivacyPolicy: React.FC = () => {
  const { language } = useTranslation();
  const isVi = language === 'vi';

  return (
    <div className="bg-[#FAF7EF] min-h-screen text-[#050403] font-sans pt-28 pb-20">
      <Helmet>
        <title>
          {isVi
            ? 'Chính Sách Bảo Vệ Dữ Liệu Cá Nhân | Vietnam Agriculture Center (VAC)'
            : 'Personal Data Protection Policy | Vietnam Agriculture Center (VAC)'}
        </title>
        <meta
          name="description"
          content={
            isVi
              ? 'Chính sách bảo vệ dữ liệu cá nhân của Vietnam Agriculture Center (VAC) theo Luật 91/2025/QH15 và Nghị định 356/2025/NĐ-CP.'
              : 'Personal Data Protection Policy of Vietnam Agriculture Center (VAC) compliant with Vietnam PDP Law 91/2025/QH15 and Decree 356/2025/ND-CP.'
          }
        />
        <link rel="canonical" href="https://vietagri.co/privacy-policy" />
      </Helmet>

      {/* Header Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-forest hover:text-forest-leaf transition-colors mb-6"
        >
          <ArrowLeft size={14} />
          {isVi ? 'Quay lại Trang Chủ' : 'Back to Home'}
        </Link>
        <div className="border-b border-black/10 pb-8">
          <div className="flex items-center gap-3 text-gold-warm mb-3">
            <Shield size={24} className="text-forest" />
            <span className="text-xs uppercase tracking-widest font-bold">
              {isVi ? 'Quy Định & Minh Bạch Pháp Lý' : 'Legal Compliance & Transparency'}
            </span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-brown-soil mb-4">
            {isVi ? 'Chính Sách Bảo Vệ Dữ Liệu Cá Nhân' : 'Personal Data Protection Policy'}
          </h1>
          <p className="text-xs md:text-sm text-carbon/70 font-light leading-relaxed">
            {isVi
              ? 'Tuân thủ Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15, Nghị định số 356/2025/NĐ-CP và Luật Thương mại điện tử số 122/2025/QH15 của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam.'
              : 'Compliant with Vietnam Personal Data Protection Law No. 91/2025/QH15, Decree No. 356/2025/ND-CP, and E-commerce Law No. 122/2025/QH15.'}
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-4 text-[11px] text-carbon/60 font-mono">
            <span>{isVi ? 'Cập nhật lần cuối: 09/11/2026' : 'Last updated: November 09, 2026'}</span>
            <span>•</span>
            <span>{isVi ? 'Phiên bản: 1.0 (Chính thức)' : 'Version: 1.0 (Official)'}</span>
          </div>
        </div>
      </div>

      {/* Main Body Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-sm border border-gold-warm/20 rounded-2xl p-6 sm:p-10 shadow-sm space-y-10 text-sm leading-relaxed text-carbon/90">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest flex items-center gap-2">
              <FileText size={18} />
              {isVi ? '1. Đơn Vị Kiểm Soát Và Xử Lý Dữ Liệu' : '1. Data Controller and Processor'}
            </h2>
            <p>
              {isVi
                ? 'Vietnam Agriculture Center (VAC) là bên Kiểm soát kiêm Bên Xử lý dữ liệu cá nhân thu thập thông qua trang web chính thức https://vietagri.co.'
                : 'Vietnam Agriculture Center (VAC) operates as the Data Controller and Data Processor for all personal information collected via https://vietagri.co.'}
            </p>
            <div className="bg-[#FAF7EF] rounded-xl p-4 border border-gold-warm/20 space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin size={15} className="text-forest mt-0.5 shrink-0" />
                <span>
                  <strong>{isVi ? 'Trụ sở điều hành:' : 'Headquarters:'}</strong> Tòa nhà The Landmark 81, 720A Điện Biên Phủ, Phường 22, Quận Bình Thạnh, TP. Hồ Chí Minh, Việt Nam.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={15} className="text-forest shrink-0" />
                <span>
                  <strong>Hotline B2B:</strong> +84 858 741 968 / +84 376 066 194
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={15} className="text-forest shrink-0" />
                <span>
                  <strong>{isVi ? 'Đầu mối phụ trách dữ liệu:' : 'Data Protection Inquiries:'}</strong> export@vietagri.co
                </span>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="font-serif text-xl font-bold text-forest flex items-center gap-2">
              <CheckCircle2 size={18} />
              {isVi ? '2. Dữ Liệu Thu Thập Và Mục Đích Xử Lý' : '2. Data Collected & Purpose of Processing'}
            </h2>
            <p>
              {isVi
                ? 'Theo Điều 9 Luật 91/2025/QH15, chúng tôi chỉ thu thập dữ liệu cá nhân cơ bản khi có sự chấp thuận tự nguyện và rõ ràng từ người dùng qua các biểu mẫu trực tuyến:'
                : 'Pursuant to Article 9 of Law 91/2025/QH15, we only collect basic personal data upon explicit and voluntary consent through our online forms:'}
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-carbon/10 rounded-lg overflow-hidden">
                <thead className="bg-forest/10 font-bold text-forest">
                  <tr>
                    <th className="p-3 border-b border-carbon/10">{isVi ? 'Loại Dữ Liệu' : 'Data Category'}</th>
                    <th className="p-3 border-b border-carbon/10">{isVi ? 'Thời Điểm Thu Thập' : 'Collection Touchpoint'}</th>
                    <th className="p-3 border-b border-carbon/10">{isVi ? 'Mục Đích Sử Dụng' : 'Purpose of Processing'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-carbon/10">
                  <tr>
                    <td className="p-3 font-medium">{isVi ? 'Họ và tên, Chức vụ, Tên công ty' : 'Full Name, Job Title, Company'}</td>
                    <td className="p-3">{isVi ? 'Gửi báo giá sản phẩm / Form liên hệ' : 'Product Inquiry / Contact Form'}</td>
                    <td className="p-3">{isVi ? 'Xác thực danh tính đối tác thương mại B2B' : 'Verify B2B commercial entity identity'}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">{isVi ? 'Email doanh nghiệp, Số điện thoại' : 'Corporate Email, Phone / WhatsApp'}</td>
                    <td className="p-3">{isVi ? 'Biểu mẫu liên hệ, nhận thông tin đào tạo' : 'Inquiry submission, Training sign-up'}</td>
                    <td className="p-3">{isVi ? 'Gửi bảng thông số kỹ thuật (TDS), chứng chỉ & báo giá' : 'Deliver Technical Data Sheets, certifications & quotes'}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">{isVi ? 'Thị trường đích, Nhu cầu nông sản' : 'Destination Market, Volume & Product'}</td>
                    <td className="p-3">{isVi ? 'Chọn danh mục sản phẩm quan tâm' : 'Selected product categories'}</td>
                    <td className="p-3">{isVi ? 'Tư vấn phương án đóng gói, logistics xuất khẩu' : 'Tailor packaging specs, export logistics and schedules'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-carbon/70 italic">
              {isVi
                ? '* VAC cam kết không sử dụng dữ liệu của bạn cho bất kỳ mục đích nào ngoài việc phản hồi giao dịch và quan hệ thương mại B2B song phương.'
                : '* VAC commits not to utilize your information for purposes beyond B2B commercial inquiries and agreed trade support.'}
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest flex items-center gap-2">
              <Lock size={18} />
              {isVi ? '3. Nguyên Tắc Bảo Mật & Chia Sẻ Cho Bên Thứ Ba' : '3. Confidentiality & Third-Party Sharing'}
            </h2>
            <ul className="list-disc pl-5 space-y-1.5 text-xs md:text-sm">
              <li>
                <strong>{isVi ? 'Tuyệt đối không mua bán dữ liệu:' : 'Zero Data Selling:'}</strong> {isVi ? 'VAC không bao giờ bán, cho thuê, trao đổi hoặc thương mại hóa dữ liệu cá nhân của đối tác cho bất kỳ bên thứ ba nào (Điều 7 khoản 6 Luật 91/2025/QH15).' : 'VAC strictly does not sell, lease, or monetize personal data to third parties under any circumstances.'}
              </li>
              <li>
                <strong>{isVi ? 'Đơn vị hạ tầng kỹ thuật:' : 'Infrastructure Partners:'}</strong> {isVi ? 'Dữ liệu được lưu trữ trên nền tảng cơ sở dữ liệu mã hóa chuẩn TLS/AES (Supabase / AWS region Singapore) và mạng phân phối nội dung bảo mật Vercel phục vụ vận hành kỹ thuật an toàn.' : 'Data is stored within encrypted environments (Supabase / AWS Singapore region) and secured delivery network (Vercel) solely for operational safety.'}
              </li>
              <li>
                <strong>{isVi ? 'Cơ quan có thẩm quyền:' : 'Statutory Compliance:'}</strong> {isVi ? 'Chỉ cung cấp dữ liệu khi có yêu cầu hợp pháp bằng văn bản từ cơ quan Nhà nước có thẩm quyền theo quy định của pháp luật Việt Nam.' : 'Data is only disclosed when legally compelled by competent state authorities under Vietnamese law.'}
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest flex items-center gap-2">
              <Clock size={18} />
              {isVi ? '4. Thời Gian Lưu Trữ Dữ Liệu' : '4. Data Retention Period'}
            </h2>
            <p>
              {isVi
                ? 'Dữ liệu liên hệ và trao đổi báo giá được lưu trữ trong thời gian duy trì quan hệ hợp tác hoặc tối đa 36 tháng kể từ tương tác thương mại gần nhất. Sau thời hạn này, dữ liệu sẽ được xóa vĩnh viễn hoặc ẩn danh hóa hoàn toàn, trừ khi có yêu cầu pháp lý về chứng từ lưu trữ lâu hơn.'
                : 'Inquiry and business communications are retained for the duration of commercial cooperation or up to 36 months from the latest interaction. Upon expiration or explicit request, data is securely erased or anonymized.'}
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest flex items-center gap-2">
              <Shield size={18} />
              {isVi ? '5. Quyền Của Bạn Đối Với Dữ Liệu Cá Nhân' : '5. Your Rights as a Data Subject'}
            </h2>
            <p>
              {isVi
                ? 'Căn cứ Điều 4 Luật 91/2025/QH15 và Điều 5 Nghị định 356/2025/NĐ-CP, bạn có đầy đủ các quyền pháp định sau:'
                : 'In accordance with Article 4 of Law 91/2025/QH15 and Article 5 of Decree 356/2025/ND-CP, you are entitled to the following rights:'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="bg-[#FAF7EF] p-3 rounded-lg border border-gold-warm/20">
                <strong className="text-forest block mb-1">
                  {isVi ? 'Quyền Được Biết & Xem Dữ Liệu' : 'Right to Know & Access'}
                </strong>
                {isVi ? 'Biết rõ hoạt động xử lý và yêu cầu trích lục dữ liệu đã gửi.' : 'Obtain information about how your data is being processed.'}
              </div>
              <div className="bg-[#FAF7EF] p-3 rounded-lg border border-gold-warm/20">
                <strong className="text-forest block mb-1">
                  {isVi ? 'Quyền Chỉnh Sửa & Cập Nhật' : 'Right to Rectification'}
                </strong>
                {isVi ? 'Yêu cầu đính chính thông tin công ty, email, số điện thoại chưa chuẩn xác.' : 'Request updates or corrections to outdated personal records.'}
              </div>
              <div className="bg-[#FAF7EF] p-3 rounded-lg border border-gold-warm/20">
                <strong className="text-forest block mb-1">
                  {isVi ? 'Quyền Rút Đồng Ý & Phản Đối' : 'Right to Withdraw Consent'}
                </strong>
                {isVi ? 'Rút lại sự đồng ý đã cấp bất cứ lúc nào qua email.' : 'Withdraw consent previously granted without affecting past processing.'}
              </div>
              <div className="bg-[#FAF7EF] p-3 rounded-lg border border-gold-warm/20">
                <strong className="text-forest block mb-1">
                  {isVi ? 'Quyền Yêu Cầu Xóa Dữ Liệu' : 'Right to Erasure'}
                </strong>
                {isVi ? 'Yêu cầu VAC xóa toàn bộ thông tin cá nhân khỏi hệ thống lưu trữ.' : 'Request total deletion of stored personal data from VAC systems.'}
              </div>
            </div>

            <div className="bg-forest/5 border-l-4 border-forest p-4 rounded-r-lg mt-4 text-xs space-y-1">
              <p className="font-bold text-forest">
                {isVi ? 'Cam kết thời hạn xử lý (Điều 5 Nghị định 356/2025/NĐ-CP):' : 'Statutory Response Timeline (Decree 356/2025/ND-CP):'}
              </p>
              <ul className="list-disc pl-4 space-y-0.5 text-carbon/80">
                <li>{isVi ? 'Xác nhận tiếp nhận và hướng dẫn thủ tục: trong vòng 02 ngày làm việc.' : 'Acknowledge receipt and guidance: within 2 business days.'}</li>
                <li>{isVi ? 'Cung cấp, chỉnh sửa dữ liệu: trong vòng 10 ngày làm việc.' : 'Deliver or rectify data: within 10 business days.'}</li>
                <li>{isVi ? 'Rút đồng ý / hạn chế xử lý: trong vòng 15 ngày làm việc.' : 'Consent withdrawal: within 15 business days.'}</li>
                <li>{isVi ? 'Xóa bỏ dữ liệu cá nhân theo yêu cầu: trong vòng 20 ngày làm việc.' : 'Data erasure upon request: within 20 business days.'}</li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest flex items-center gap-2">
              <Mail size={18} />
              {isVi ? '6. Phương Thức Thực Hiện Quyền & Khiếu Nại' : '6. How to Exercise Your Rights'}
            </h2>
            <p>
              {isVi
                ? 'Để thực hiện bất kỳ quyền nào nêu trên, quý khách vui lòng gửi văn bản hoặc email với tiêu đề "[Yêu Cầu Dữ Liệu Cá Nhân] - [Tên Quý Khách / Công Ty]" tới:'
                : 'To exercise any rights above, please send a written request or email titled "[Data Subject Request] - [Your Name / Company]" to:'}
            </p>
            <div className="bg-cream rounded-xl p-4 border border-gold-warm/30 text-xs">
              <p><strong>Bộ phận:</strong> {isVi ? 'Ban Quản Trị & Pháp Chế Dữ Liệu - Vietnam Agriculture Center' : 'Data Governance & Legal Desk - Vietnam Agriculture Center'}</p>
              <p><strong>Email tiếp nhận:</strong> <a href="mailto:export@vietagri.co" className="text-forest hover:underline font-bold">export@vietagri.co</a></p>
              <p><strong>Điện thoại:</strong> +84 858 741 968</p>
              <p><strong>Địa chỉ:</strong> Tòa nhà The Landmark 81, 720A Điện Biên Phủ, Phường 22, Bình Thạnh, TP. Hồ Chí Minh, Việt Nam</p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest flex items-center gap-2">
              <CheckCircle2 size={18} />
              {isVi ? '7. Tiếp Nhận & Giải Quyết Khiếu Nại Thương Mại' : '7. Dispute & Commercial Complaints'}
            </h2>
            <p>
              {isVi
                ? 'Căn cứ Điều 31 Luật Bảo vệ quyền lợi người tiêu dùng số 19/2023/QH15 và Luật Thương mại điện tử số 122/2025/QH15, mọi phản ánh về chất lượng hàng hóa, thông số kỹ thuật (TDS) hoặc tiến độ cung ứng nông sản xuất khẩu đều được giải quyết theo quy trình minh bạch:'
                : 'Pursuant to Article 31 of Consumer Protection Law 19/2023/QH15 and E-Commerce Law 122/2025/QH15, commercial complaints regarding specifications (TDS), shipment schedules, or quality are resolved transparently:'}
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-carbon/80">
              <li>{isVi ? 'Thời hạn xác nhận tiếp nhận khiếu nại: Trong vòng 03 ngày làm việc kể từ thời điểm nhận văn bản.' : 'Receipt acknowledgment: within 3 business days of formal notice.'}</li>
              <li>{isVi ? 'Biện pháp giải quyết: Ưu tiên thương lượng, giám định độc lập bên thứ ba (SGS / Bureau Veritas) theo điều khoản hợp đồng ngoại thương.' : 'Dispute mechanism: Direct commercial negotiation or third-party accredited inspection (SGS / Bureau Veritas).'}</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
};

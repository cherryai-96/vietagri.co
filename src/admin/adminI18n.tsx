/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

type AdminLanguage = 'en' | 'vi';

interface AdminLanguageContextValue {
  language: AdminLanguage;
  setLanguage: (language: AdminLanguage) => void;
  toggleLanguage: () => void;
  t: (text: string) => string;
}

const translations: Record<string, string> = {
  'B2B Control Center': 'Trung tâm quản trị B2B',
  'Admin Workspace': 'Không gian quản trị',
  'Search leads, pages, files...': 'Tìm khách hàng, trang, tệp...',
  'VAC Owner': 'Chủ sở hữu VAC',
  'Super Admin': 'Quản trị cao nhất',
  'Content Editor': 'Biên tập nội dung',
  'Sales Manager': 'Quản lý kinh doanh',
  'Marketing Editor': 'Biên tập marketing',
  Viewer: 'Người xem',
  Role: 'Vai trò',

  Dashboard: 'Bảng điều khiển',
  'Website Pages': 'Trang website',
  Home: 'Trang chủ',
  'About Us': 'Giới thiệu',
  'Core Services': 'Dịch vụ cốt lõi',
  'Viet Wolffia': 'Việt Wolffia',
  Sustainability: 'Bền vững',
  'Contact Us': 'Liên hệ',
  Footer: 'Chân trang',
  'Navigation Menu': 'Menu điều hướng',
  'Leads & Inquiries': 'Khách hàng & yêu cầu',
  'All Inquiries': 'Tất cả yêu cầu',
  'Sample Requests': 'Yêu cầu mẫu',
  'Profile Downloads': 'Tải hồ sơ công ty',
  Services: 'Dịch vụ',
  'Service Cards': 'Thẻ dịch vụ',
  'Service Details': 'Chi tiết dịch vụ',
  'CTA Buttons': 'Nút kêu gọi hành động',
  'Product Lines': 'Dòng sản phẩm',
  Applications: 'Ứng dụng',
  'Technical Documents': 'Tài liệu kỹ thuật',
  FAQ: 'Câu hỏi thường gặp',
  Gallery: 'Thư viện ảnh',
  'Media Library': 'Thư viện media',
  Images: 'Hình ảnh',
  Videos: 'Video',
  Documents: 'Tài liệu',
  'Logo & Brand Assets': 'Logo & tài sản thương hiệu',
  'SEO & Marketing': 'SEO & Marketing',
  'SEO Settings': 'Cài đặt SEO',
  'Tracking Codes': 'Mã theo dõi',
  'Popups / Lead Magnets': 'Popup / thu hút khách hàng',
  'Newsletter Subscribers': 'Người đăng ký bản tin',
  'Site Settings': 'Cài đặt website',
  'Company Information': 'Thông tin công ty',
  'Contact Information': 'Thông tin liên hệ',
  'Social Links': 'Liên kết mạng xã hội',
  'Language Settings': 'Cài đặt ngôn ngữ',
  'Form Settings': 'Cài đặt biểu mẫu',
  'Users & Roles': 'Người dùng & phân quyền',
  'Security & Backup': 'Bảo mật & sao lưu',
  'AI Agent & Automation': 'AI Agent & Tự động hóa',
  'AI Assistant': 'Trợ lý AI',
  'Automation Rules': 'Quy tắc tự động hóa',
  'Approval Queue': 'Hàng chờ duyệt',
  'Agent Settings': 'Cài đặt Agent',

  'Business overview': 'Tổng quan kinh doanh',
  'A simple daily view of inquiries, downloads, website health, and content activity for Vietnam Agriculture Center.':
    'Góc nhìn hằng ngày về yêu cầu, lượt tải, tình trạng website và hoạt động nội dung của Vietnam Agriculture Center.',
  'Review leads': 'Xem khách hàng',
  'Edit website': 'Sửa website',
  'Total Inquiries': 'Tổng yêu cầu',
  'New Leads': 'Khách hàng mới',
  'Consultation Requests': 'Yêu cầu tư vấn',
  'Wolffia Sample Requests': 'Yêu cầu mẫu Wolffia',
  'Corporate Profile Downloads': 'Lượt tải hồ sơ công ty',
  'Unread Messages': 'Tin nhắn chưa đọc',
  'This Month Website Visits': 'Lượt truy cập tháng này',
  'Conversion Rate': 'Tỷ lệ chuyển đổi',
  'Inquiry trend': 'Xu hướng yêu cầu',
  'Weekly activity across consultation, samples, and contact forms.': 'Hoạt động hằng tuần từ tư vấn, mẫu thử và biểu mẫu liên hệ.',
  Month: 'Tháng',
  'Leads by interest': 'Khách hàng theo nhu cầu',
  'Target markets': 'Thị trường mục tiêu',
  'Quick actions': 'Thao tác nhanh',
  'Edit Home Page': 'Sửa trang chủ',
  'View New Leads': 'Xem khách hàng mới',
  'Upload Corporate Profile': 'Tải hồ sơ công ty',
  'Update Contact Info': 'Cập nhật liên hệ',
  'Add Wolffia Document': 'Thêm tài liệu Wolffia',
  'Edit SEO': 'Sửa SEO',
  'Open AI Agent': 'Mở AI Agent',
  'Recent activity': 'Hoạt động gần đây',
  'Latest inquiries': 'Yêu cầu mới nhất',

  'Team access': 'Quyền truy cập đội ngũ',
  'Manage admin users, roles, account status, last login, password resets, and read-only access.':
    'Quản lý người dùng admin, vai trò, trạng thái tài khoản, lần đăng nhập cuối, đặt lại mật khẩu và quyền chỉ xem.',
  'Add User': 'Thêm người dùng',
  'Full access': 'Toàn quyền truy cập',
  'Leads and inquiries': 'Khách hàng và yêu cầu',
  'Pages and media': 'Trang và media',
  'SEO, documents, CTA': 'SEO, tài liệu, CTA',
  'Read-only access': 'Chỉ được xem',
  Name: 'Tên',
  Email: 'Email',
  Status: 'Trạng thái',
  'Last login': 'Đăng nhập cuối',
  'Created date': 'Ngày tạo',
  Actions: 'Thao tác',
  'Edit role': 'Sửa vai trò',
  Users: 'Người dùng',
  Media: 'Media',
  Settings: 'Cài đặt',
  Security: 'Bảo mật',
  'Asset manager': 'Quản lý tài sản',
  'Download manager': 'Quản lý tài liệu tải xuống',
  'Global website settings': 'Cài đặt website toàn cục',
  'Phase 2 foundation': 'Nền tảng giai đoạn 2',
  'Sales pipeline': 'Quy trình kinh doanh',
  'Lead detail': 'Chi tiết khách hàng',
  'Website CMS': 'Quản trị nội dung website',
  'Page editor': 'Trình sửa trang',
  'Edit the main VAC website pages in plain language. Each page supports English, Tiếng Việt, media, SEO, and preview.':
    'Chỉnh sửa các trang chính của VAC bằng ngôn ngữ dễ hiểu. Mỗi trang hỗ trợ tiếng Anh, tiếng Việt, media, SEO và xem trước.',
  'Track international B2B inquiries from contact forms, sample requests, corporate profile downloads, and consultation requests.':
    'Theo dõi yêu cầu B2B quốc tế từ biểu mẫu liên hệ, yêu cầu mẫu, lượt tải hồ sơ công ty và yêu cầu tư vấn.',
  'Upload, preview, rename, replace, and organize images, videos, PDFs, logos, icons, and brand assets.':
    'Tải lên, xem trước, đổi tên, thay thế và sắp xếp hình ảnh, video, PDF, logo, icon và tài sản thương hiệu.',
  'Manage corporate profiles, specification sheets, nutritional analysis, capability decks, and export documentation samples.':
    'Quản lý hồ sơ công ty, bảng thông số, phân tích dinh dưỡng, hồ sơ năng lực và mẫu chứng từ xuất khẩu.',
  'Manage search titles, descriptions, social sharing images, indexing, sitemap inclusion, and focus keywords.':
    'Quản lý tiêu đề tìm kiếm, mô tả, hình ảnh chia sẻ mạng xã hội, lập chỉ mục, sitemap và từ khóa trọng tâm.',
  'Update company information, contact details, brand assets, social links, tracking IDs, language, and form settings.':
    'Cập nhật thông tin công ty, liên hệ, tài sản thương hiệu, mạng xã hội, mã theo dõi, ngôn ngữ và biểu mẫu.',
  'Security, backup, popup, and newsletter tools are scaffolded here for phase 2 while the core MVP focuses on website content and leads.':
    'Bảo mật, sao lưu, popup và bản tin được chuẩn bị cho giai đoạn 2, trong khi MVP tập trung vào nội dung website và khách hàng.',
  'AI workspace': 'Không gian AI',
  'Use AI to help manage VAC content, leads, SEO, documents, translations, and recurring admin tasks while keeping owner approval in control.':
    'Dùng AI để hỗ trợ quản lý nội dung VAC, khách hàng, SEO, tài liệu, bản dịch và tác vụ lặp lại, nhưng vẫn giữ quyền duyệt của chủ website.',
  'VAC AI Assistant': 'Trợ lý AI của VAC',
  'Ask the agent to analyze leads, draft content, improve SEO, translate text, or prepare safe recommendations for your approval.':
    'Yêu cầu agent phân tích khách hàng, soạn nội dung, cải thiện SEO, dịch văn bản hoặc chuẩn bị đề xuất an toàn để bạn duyệt.',
  'Ask AI Agent': 'Yêu cầu AI Agent',
  'The agent should suggest actions. Publishing, deleting, emailing, and role changes should require approval.':
    'Agent nên đề xuất hành động. Việc xuất bản, xóa, gửi email và đổi quyền cần được duyệt trước.',
  'Improve Prompt': 'Cải thiện yêu cầu',
  'Run Agent': 'Chạy Agent',
  'Suggested tasks': 'Gợi ý tác vụ',
  'Agent safety controls': 'Kiểm soát an toàn Agent',
  'Require approval before publishing content': 'Yêu cầu duyệt trước khi xuất bản nội dung',
  'Require approval before sending emails': 'Yêu cầu duyệt trước khi gửi email',
  'Allow AI to create drafts automatically': 'Cho phép AI tự tạo bản nháp',
  'Allow AI to delete records': 'Cho phép AI xóa bản ghi',
  'Backend-ready connection': 'Sẵn sàng kết nối backend',
  'This MVP page is ready to connect to an AI provider, Supabase tables, file storage, and scheduled jobs later.':
    'Trang MVP này đã sẵn sàng để sau này kết nối nhà cung cấp AI, bảng Supabase, lưu trữ tệp và tác vụ theo lịch.',
  'AI provider': 'Nhà cung cấp AI',
  'Default approval mode': 'Chế độ duyệt mặc định',
  'Draft only': 'Chỉ tạo bản nháp',
  'Auto-run low risk tasks': 'Tự chạy tác vụ rủi ro thấp',
  'Manual only': 'Chỉ thủ công',
  'Rule name': 'Tên quy tắc',
  Trigger: 'Kích hoạt',
  'AI action': 'Hành động AI',
  Owner: 'Người phụ trách',
  'Agent activity': 'Hoạt động Agent',
  Request: 'Yêu cầu',
  Type: 'Loại',
  Risk: 'Rủi ro',
  Created: 'Ngày tạo',
  Review: 'Duyệt',
  'Needs review': 'Cần duyệt',
  Low: 'Thấp',
  Important: 'Quan trọng',
  'Lead response': 'Phản hồi khách hàng',
  'Content update': 'Cập nhật nội dung',
  'Compliance check': 'Kiểm tra tuân thủ',
  'New lead summary and priority score': 'Tóm tắt khách hàng mới và chấm điểm ưu tiên',
  'Weekly SEO content audit': 'Kiểm tra SEO hằng tuần',
  'Document download follow-up draft': 'Bản nháp chăm sóc sau khi tải tài liệu',
  'Media optimization reminder': 'Nhắc tối ưu media',
  'New inquiry received': 'Có yêu cầu mới',
  'Every Monday 08:00': 'Mỗi thứ Hai 08:00',
  'Corporate profile downloaded': 'Hồ sơ công ty được tải xuống',
  'Large image uploaded': 'Ảnh dung lượng lớn được tải lên',
  'Summarize lead, detect intent, suggest next reply': 'Tóm tắt khách hàng, nhận diện nhu cầu, gợi ý phản hồi tiếp theo',
  'Check missing meta descriptions, alt text, and translation gaps': 'Kiểm tra thiếu mô tả meta, alt text và lỗ hổng bản dịch',
  'Draft follow-up email for review': 'Soạn email chăm sóc để duyệt',
  'Recommend WebP compression and mobile variant': 'Gợi ý nén WebP và tạo phiên bản mobile',
  'Draft reply to Seoul Natural Foods about Wolffia samples': 'Soạn phản hồi cho Seoul Natural Foods về mẫu Wolffia',
  'Suggest Vietnamese translation for Core Services hero': 'Gợi ý bản dịch tiếng Việt cho hero Dịch vụ cốt lõi',
  'Flag Sustainability page certification wording': 'Đánh dấu cách viết chứng nhận ở trang Bền vững',
  'Generated lead priority summary for Sales Manager': 'Đã tạo tóm tắt ưu tiên khách hàng cho Quản lý kinh doanh',
  'Found 3 SEO descriptions that need Vietnamese review': 'Tìm thấy 3 mô tả SEO cần kiểm tra tiếng Việt',
  'Scheduled weekly SEO audit for Monday morning': 'Đã lên lịch kiểm tra SEO sáng thứ Hai',
  'Prepared Wolffia sample reply draft for approval': 'Đã chuẩn bị bản nháp phản hồi mẫu Wolffia để duyệt',
  '10 minutes ago': '10 phút trước',
  '1 hour ago': '1 giờ trước',
  Yesterday: 'Hôm qua',
  'Summarize new leads this week and tell me who needs follow-up first.':
    'Tóm tắt khách hàng mới tuần này và cho biết ai cần chăm sóc trước.',
  'Check the Home page and suggest clearer B2B copy for international buyers.':
    'Kiểm tra trang chủ và gợi ý nội dung B2B rõ hơn cho người mua quốc tế.',
  'Find SEO gaps across English and Vietnamese pages.': 'Tìm các thiếu sót SEO trên trang tiếng Anh và tiếng Việt.',
  'Draft a polite reply to a buyer requesting Wolffia samples and technical specs.':
    'Soạn phản hồi lịch sự cho người mua yêu cầu mẫu Wolffia và thông số kỹ thuật.',
  'Review Sustainability wording and warn me about certification claims.':
    'Xem lại cách viết trang Bền vững và cảnh báo về tuyên bố chứng nhận.',

  'Search records...': 'Tìm bản ghi...',
  Filter: 'Lọc',
  'Export CSV': 'Xuất CSV',
  selected: 'đã chọn',
  Showing: 'Đang hiển thị',
  of: 'trên',
  'No records found.': 'Không tìm thấy bản ghi.',
  'Try changing the search or filters.': 'Thử đổi từ khóa tìm kiếm hoặc bộ lọc.',
  Date: 'Ngày',
  Company: 'Công ty',
  Country: 'Quốc gia',
  Interest: 'Nhu cầu',
  Action: 'Thao tác',
  Open: 'Mở',
  'Area of Interest': 'Nhu cầu quan tâm',
  'Source Page': 'Trang nguồn',
  'Lead Status': 'Trạng thái khách hàng',
  'Assigned To': 'Người phụ trách',
  'Last Updated': 'Cập nhật cuối',
  'All statuses': 'Tất cả trạng thái',
  'All interests': 'Tất cả nhu cầu',
  'All countries': 'Tất cả quốc gia',
  'All team members': 'Tất cả thành viên',

  New: 'Mới',
  Contacted: 'Đã liên hệ',
  Qualified: 'Đủ tiềm năng',
  'Proposal Sent': 'Đã gửi đề xuất',
  'In Negotiation': 'Đang đàm phán',
  Won: 'Thành công',
  Lost: 'Thất bại',
  Spam: 'Spam',
  Published: 'Đã xuất bản',
  Draft: 'Bản nháp',
  Active: 'Đang hoạt động',
  Disabled: 'Đã tắt',

  'Admin Dashboard': 'Bảng quản trị',
  'Manage Vietnam Agriculture Center website content and inquiries.':
    'Quản lý nội dung website và yêu cầu khách hàng của Vietnam Agriculture Center.',
  'Use your Supabase admin account to access live leads and synced website data.':
    'Dùng tài khoản quản trị Supabase để truy cập khách hàng thật và dữ liệu website đã đồng bộ.',
  'Supabase is not configured yet. Demo mode is active for the admin interface.':
    'Supabase chưa được cấu hình. Giao diện admin hiện đang chạy ở chế độ demo.',
  'Signing in...': 'Đang đăng nhập...',
  Password: 'Mật khẩu',
  'Remember me': 'Ghi nhớ đăng nhập',
  'Forgot password?': 'Quên mật khẩu?',
  Login: 'Đăng nhập',
  Cancel: 'Hủy',
  Delete: 'Xóa',
  Save: 'Lưu',
  'Save Changes': 'Lưu thay đổi',
  Preview: 'Xem trước',
  'Choose file': 'Chọn tệp',
  'Upload or choose image': 'Tải lên hoặc chọn hình ảnh',
  'Upload document file': 'Tải lên tài liệu',
  'Use optimized WebP images for better website speed.': 'Nên dùng ảnh WebP đã tối ưu để website tải nhanh hơn.',
  'PDF files can require email and track downloads.': 'Tệp PDF có thể yêu cầu email trước khi tải và theo dõi lượt tải.',
  'Loading admin workspace...': 'Đang tải không gian quản trị...',
  'SEO settings': 'cài đặt SEO',
  'Simple SEO fields with helpful length checks and plain-language help text.':
    'Các trường SEO đơn giản, có kiểm tra độ dài và hướng dẫn dễ hiểu.',
  'SEO title': 'Tiêu đề SEO',
  'URL slug': 'Đường dẫn URL',
  'Meta description': 'Mô tả meta',
  'Focus keywords': 'Từ khóa trọng tâm',
  'Allow search engines to index this page': 'Cho phép công cụ tìm kiếm lập chỉ mục trang này',
  'Include in sitemap': 'Đưa vào sitemap',
  Bold: 'Đậm',
  Italic: 'Nghiêng',
  Bullets: 'Danh sách chấm',
  Numbers: 'Danh sách số',
  Link: 'Liên kết',
  Heading: 'Tiêu đề',
  English: 'Tiếng Anh',
  'Tiếng Việt': 'Tiếng Việt',
};

const AdminLanguageContext = createContext<AdminLanguageContextValue | null>(null);

export function translateAdminText(text: string, language: AdminLanguage) {
  if (language === 'en') return text;
  return translations[text] ?? text;
}

export function AdminLanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<AdminLanguage>(() => {
    if (typeof window === 'undefined') return 'en';
    return window.localStorage.getItem('vac-admin-language') === 'vi' ? 'vi' : 'en';
  });

  useEffect(() => {
    window.localStorage.setItem('vac-admin-language', language);
  }, [language]);

  const value = useMemo<AdminLanguageContextValue>(
    () => ({
      language,
      setLanguage: setLanguageState,
      toggleLanguage: () => setLanguageState((current) => (current === 'en' ? 'vi' : 'en')),
      t: (text: string) => translateAdminText(text, language),
    }),
    [language],
  );

  return <AdminLanguageContext.Provider value={value}>{children}</AdminLanguageContext.Provider>;
}

export function useAdminLanguage() {
  const context = useContext(AdminLanguageContext);
  if (!context) {
    throw new Error('useAdminLanguage must be used inside AdminLanguageProvider');
  }
  return context;
}

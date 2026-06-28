const fs = require('fs');
const path = require('path');

const i18nPath = path.join(__dirname, 'src/i18n.tsx');
let content = fs.readFileSync(i18nPath, 'utf8');

const newEn = `
  dualBuyer: {
    title: 'Choose Your VAC Pathway',
    sub: 'Whether you are sourcing verified Vietnamese agricultural products or building high-performance farming systems, VAC provides the infrastructure, expertise, and partnerships to help you scale.',
    sourcingTitle: 'Premium Global Sourcing & Export',
    sourcingSub: 'For enterprise buyers in the EU, USA, Singapore, and Malaysia. Access verified, Clean-Label supply chains including Organic ST25 Rice and export-grade Passion Fruit.',
    sourcingBtn: 'Explore Sourcing Solutions →',
    farmingTitle: 'Enterprise Contract Farming & Agritech',
    farmingSub: 'For regional investors and large-scale farm setups. Leverage Electroculture systems, premium Japanese organic inputs, and structured agricultural partnerships.',
    farmingBtn: 'Explore Farming Solutions →',
  },
  bioLoop: {
    title: 'The Bio-Balance Loop',
    sub: 'A zero-waste agricultural cycle that transforms premium inputs, high-value crops, rescued fruit biomass, and Wolffia protein into a circular feed and farming ecosystem.',
    step1Title: 'Premium Inputs',
    step1Desc: 'We import and distribute sterilized, high-grade Japanese chicken dung to rebuild living soil profiles.',
    step2Title: 'High-Yield Cultivation',
    step2Desc: 'These elite organic inputs fuel our large-scale, high-value agricultural projects, such as 10-hectare passion fruit farms.',
    step3Title: 'Strategic Upcycling',
    step3Desc: 'We rescue nutrient-dense processing waste, such as passion fruit, banana, and mango peels, preventing landfill accumulation.',
    step4Title: 'The Wolffia Engine',
    step4Desc: 'We cultivate Wolffia globosa, also known as watermeal, in specialized open-air canvas ponds beneath simple netting structures, producing a massive volume of sustainable plant protein.',
    step5Title: 'Bio-Balance Feed',
    step5Desc: 'The rescued fruit waste is expertly blended with Wolffia biomass to create proprietary, highly digestible feed for commercial aquaculture and livestock, completing the zero-waste cycle.',
    cta: 'See How Our Circular Model Works →',
  },
  organicRisk: {
    title: 'Protect Your Export Capabilities: Supply Chain De-risking',
    sub: 'Navigating international compliance is a massive liability for unverified farms. VAC eliminates the administrative friction and secures your borders.',
    riskTitle: 'The Risk',
    risk1: 'Border rejection due to MRL failure',
    risk2: 'Unverified farm protocols',
    risk3: 'Failed third-party audits',
    risk4: 'Poor documentation',
    risk5: 'No clear transition plan to organic certification',
    solutionTitle: 'VAC Solution',
    sol1: 'Protocol management',
    sol2: 'Farm-level compliance support',
    sol3: 'Audit preparation',
    sol4: 'Clean-label transition roadmap',
    sol5: 'Documentation and on-the-ground liaison',
    cta: 'De-risk Your Supply Chain →',
  },
  infra: {
    heroTitle: 'Infrastructure & R&D',
    heroSub: 'Physical facilities, controlled processing systems, and applied agricultural research designed to support export-ready supply chains and scalable circular farming models.',
    certTitle: 'Built for International Standards',
    labTitle: 'The Wolffia “Mother Lab” & Processing Hub',
    labDesc: 'Our flagship innovation center. Designed for absolute bio-security, the Mother Lab utilizes precision HDPE tubs, environmental water mist spray systems, and industrial 500 LPH Reverse Osmosis (RO) filtration paired with continuous UV sterilization to guarantee a 100% pathogen-free, export-ready biomass.',
    procTitle: 'Export Processing Facility',
    procDesc: 'Operating under strict HACCP and FSSC 22000 standards, our central processing lines are engineered for zero-friction export. From fresh fruit sorting and polishing to the cold-extraction and aseptic packaging of purees, we maintain farm-fresh integrity at an industrial scale.',
    cta: 'Explore Our Facilities →',
  },
  contractFarming: {
    heroTitle: 'Enterprise Contract Farming & Agritech',
    heroSub: 'Structured farming partnerships powered by premium organic inputs, Electroculture systems, technical field support, and export-oriented crop planning.',
    forWhoTitle: 'Who This Is For',
    for1Title: 'Regional Investors',
    for1Desc: 'For investors seeking scalable agricultural projects with structured operational support.',
    for2Title: 'Large-Scale Farm Setups',
    for2Desc: 'For land owners and operators developing commercial farms with export-ready potential.',
    for3Title: 'Strategic Buyers',
    for3Desc: 'For buyers who want deeper control over upstream supply quality and crop planning.',
    whatWeProvide: 'What VAC Provides',
    prov1: 'Electroculture system planning',
    prov2: 'Premium Japanese organic inputs',
    prov3: 'Crop selection and commercial planning',
    prov4: 'Farm protocol development',
    prov5: 'Field implementation support',
    prov6: 'Supply chain and buyer alignment',
    prov7: 'Organic transition roadmap',
    prov8: 'Post-harvest and export processing connection',
    ctaTitle: 'Build a Scalable Farming Partnership with VAC',
    ctaBtn: 'Discuss a Farming Project →',
  },
  sourcing: {
    heroTitle: 'Verified Vietnamese Agricultural Products for Global Buyers',
    heroSub: 'Access clean-label, export-oriented supply chains for premium Vietnamese agricultural products, supported by VAC’s sourcing network, processing capabilities, and compliance-driven approach.',
    reqBtn: 'Request Product Specifications →',
    volLabel: 'Estimated Volume / Farm Size / Investment Scope',
    targetMarket: 'Target Market',
    interest: 'I am interested in:',
  },
`;

const newVi = `
  dualBuyer: {
    title: 'Chọn Lộ Trình VAC Của Bạn',
    sub: 'Dù bạn đang tìm kiếm nguồn nông sản Việt Nam đã được kiểm định hay xây dựng hệ thống canh tác hiệu suất cao, VAC cung cấp cơ sở hạ tầng, chuyên môn và quan hệ đối tác để giúp bạn mở rộng quy mô.',
    sourcingTitle: 'Nguồn Cung & Xuất Khẩu Toàn Cầu Cao Cấp',
    sourcingSub: 'Dành cho khách hàng doanh nghiệp tại EU, Mỹ, Singapore và Malaysia. Tiếp cận chuỗi cung ứng nhãn sạch đã được kiểm định, bao gồm Gạo ST25 Hữu cơ và Chanh dây tiêu chuẩn xuất khẩu.',
    sourcingBtn: 'Khám Phá Giải Pháp Nguồn Cung →',
    farmingTitle: 'Canh Tác Hợp Đồng Doanh Nghiệp & Nông Nghiệp Công Nghệ Cao',
    farmingSub: 'Dành cho các nhà đầu tư khu vực và các mô hình trang trại quy mô lớn. Tận dụng hệ thống Electroculture, vật tư hữu cơ cao cấp từ Nhật Bản và các quan hệ đối tác nông nghiệp có cấu trúc.',
    farmingBtn: 'Khám Phá Giải Pháp Canh Tác →',
  },
  bioLoop: {
    title: 'Vòng Lặp Cân Bằng Sinh Học',
    sub: 'Một chu kỳ nông nghiệp không rác thải giúp biến vật tư cao cấp, cây trồng giá trị cao, sinh khối trái cây được tận thu và protein Wolffia thành một hệ sinh thái canh tác và thức ăn tuần hoàn.',
    step1Title: 'Vật Tư Cao Cấp',
    step1Desc: 'Chúng tôi nhập khẩu và phân phối phân gà Nhật Bản cao cấp, đã qua tiệt trùng để tái tạo hồ sơ đất sống.',
    step2Title: 'Canh Tác Năng Suất Cao',
    step2Desc: 'Những vật tư hữu cơ ưu việt này thúc đẩy các dự án nông nghiệp quy mô lớn, giá trị cao của chúng tôi, chẳng hạn như các trang trại chanh dây 10 hecta.',
    step3Title: 'Tận Thu Chiến Lược',
    step3Desc: 'Chúng tôi tận thu các phụ phẩm chế biến giàu dinh dưỡng như vỏ chanh dây, vỏ chuối và vỏ xoài, ngăn ngừa việc tích tụ tại các bãi rác.',
    step4Title: 'Động Cơ Wolffia',
    step4Desc: 'Chúng tôi nuôi trồng Wolffia globosa trong các ao bạt chuyên dụng ngoài trời dưới cấu trúc lưới đơn giản, sản xuất một lượng lớn protein thực vật bền vững.',
    step5Title: 'Thức Ăn Cân Bằng Sinh Học',
    step5Desc: 'Phụ phẩm trái cây tận thu được phối trộn chuyên môn hóa với sinh khối Wolffia để tạo ra thức ăn độc quyền, dễ tiêu hóa cho thủy sản và chăn nuôi thương mại, hoàn thành chu kỳ không rác thải.',
    cta: 'Xem Cách Mô Hình Tuần Hoàn Của Chúng Tôi Hoạt Động →',
  },
  organicRisk: {
    title: 'Bảo Vệ Năng Lực Xuất Khẩu Của Bạn: Giảm Thiểu Rủi Ro Chuỗi Cung Ứng',
    sub: 'Việc điều hướng các tuân thủ quốc tế là một rủi ro lớn đối với các trang trại chưa được kiểm định. VAC loại bỏ những rào cản hành chính và bảo vệ biên giới cho bạn.',
    riskTitle: 'Rủi Ro',
    risk1: 'Bị từ chối tại biên giới do không đạt chuẩn MRL',
    risk2: 'Quy trình trang trại chưa được kiểm chứng',
    risk3: 'Thất bại trong các cuộc đánh giá của bên thứ ba',
    risk4: 'Tài liệu không đạt yêu cầu',
    risk5: 'Không có kế hoạch chuyển đổi rõ ràng sang chứng nhận hữu cơ',
    solutionTitle: 'Giải Pháp Của VAC',
    sol1: 'Quản lý quy trình',
    sol2: 'Hỗ trợ tuân thủ cấp trang trại',
    sol3: 'Chuẩn bị đánh giá',
    sol4: 'Lộ trình chuyển đổi sang nhãn sạch',
    sol5: 'Tài liệu và đại diện liên lạc tại hiện trường',
    cta: 'Giảm Rủi Ro Chuỗi Cung Ứng →',
  },
  infra: {
    heroTitle: 'Cơ Sở Hạ Tầng & R&D',
    heroSub: 'Cơ sở vật chất, hệ thống chế biến được kiểm soát và nghiên cứu nông nghiệp ứng dụng được thiết kế để hỗ trợ các chuỗi cung ứng sẵn sàng xuất khẩu và các mô hình canh tác tuần hoàn có thể mở rộng.',
    certTitle: 'Xây Dựng Theo Tiêu Chuẩn Quốc Tế',
    labTitle: 'Phòng Thí Nghiệm “Mẹ” & Trung Tâm Chế Biến Wolffia',
    labDesc: 'Trung tâm đổi mới sáng tạo cốt lõi của chúng tôi. Được thiết kế cho tính an toàn sinh học tuyệt đối, phòng thí nghiệm sử dụng các bồn HDPE chính xác, hệ thống phun sương môi trường và hệ thống lọc thẩm thấu ngược (RO) công nghiệp 500 LPH kết hợp với hệ thống tiệt trùng tia UV liên tục để đảm bảo sinh khối sạch mầm bệnh 100%, sẵn sàng xuất khẩu.',
    procTitle: 'Cơ Sở Chế Biến Xuất Khẩu',
    procDesc: 'Hoạt động dưới các tiêu chuẩn nghiêm ngặt của HACCP và FSSC 22000, dây chuyền chế biến trung tâm của chúng tôi được thiết kế cho việc xuất khẩu không có rào cản. Từ phân loại và đánh bóng trái cây tươi đến chiết xuất lạnh và đóng gói vô trùng cho mứt sệt, chúng tôi duy trì tính nguyên bản tươi ngon của trang trại ở quy mô công nghiệp.',
    cta: 'Khám Phá Cơ Sở Vật Chất →',
  },
  contractFarming: {
    heroTitle: 'Canh Tác Hợp Đồng Doanh Nghiệp & Nông Nghiệp Công Nghệ Cao',
    heroSub: 'Quan hệ đối tác canh tác có cấu trúc được thúc đẩy bởi vật tư hữu cơ cao cấp, hệ thống Electroculture, hỗ trợ kỹ thuật tại hiện trường và kế hoạch vụ mùa hướng tới xuất khẩu.',
    forWhoTitle: 'Dành Cho Ai',
    for1Title: 'Nhà Đầu Tư Khu Vực',
    for1Desc: 'Dành cho các nhà đầu tư đang tìm kiếm các dự án nông nghiệp có thể mở rộng với hỗ trợ vận hành có cấu trúc.',
    for2Title: 'Thiết Lập Trang Trại Quy Mô Lớn',
    for2Desc: 'Dành cho chủ sở hữu đất và các đơn vị vận hành đang phát triển các trang trại thương mại có tiềm năng xuất khẩu.',
    for3Title: 'Người Mua Chiến Lược',
    for3Desc: 'Dành cho những người mua muốn kiểm soát sâu hơn chất lượng nguồn cung thượng nguồn và kế hoạch mùa vụ.',
    whatWeProvide: 'VAC Cung Cấp Gì',
    prov1: 'Quy hoạch hệ thống Electroculture',
    prov2: 'Vật tư hữu cơ cao cấp từ Nhật Bản',
    prov3: 'Tuyển chọn cây trồng và lập kế hoạch thương mại',
    prov4: 'Phát triển quy trình trang trại',
    prov5: 'Hỗ trợ triển khai tại hiện trường',
    prov6: 'Chuỗi cung ứng và sự thống nhất với người mua',
    prov7: 'Lộ trình chuyển đổi hữu cơ',
    prov8: 'Kết nối chế biến sau thu hoạch và xuất khẩu',
    ctaTitle: 'Xây Dựng Đối Tác Canh Tác Mở Rộng Cùng VAC',
    ctaBtn: 'Thảo Luận Một Dự Án Canh Tác →',
  },
  sourcing: {
    heroTitle: 'Nông Sản Việt Nam Đã Kiểm Định Cho Người Mua Toàn Cầu',
    heroSub: 'Tiếp cận các chuỗi cung ứng nhãn sạch, hướng tới xuất khẩu đối với các sản phẩm nông nghiệp Việt Nam cao cấp, được hỗ trợ bởi mạng lưới cung ứng, năng lực chế biến và phương pháp tiếp cận dựa trên sự tuân thủ của VAC.',
    reqBtn: 'Yêu Cầu Thông Số Sản Phẩm →',
    volLabel: 'Khối Lượng / Quy Mô Trang Trại / Phạm Vi Đầu Tư Dự Kiến',
    targetMarket: 'Thị Trường Mục Tiêu',
    interest: 'Tôi quan tâm đến:',
  },
`;

// Inject into content
// Find the end of `en` object
const enEndMatch = content.match(/nav: \{[\\s\\S]*?connecting: '.*?'(?:,|)\\s*\\},?/);
if (enEndMatch) {
  content = content.replace(enEndMatch[0], enEndMatch[0] + '\\n' + newEn);
}

// Find the end of `vi` object
const viStartIdx = content.indexOf('vi: {');
if (viStartIdx !== -1) {
  const viEndMatch = content.match(/nav: \{[\\s\\S]*?connecting: '.*?'(?:,|)\\s*\\},?/g);
  if (viEndMatch && viEndMatch.length > 1) {
    const lastViMatch = viEndMatch[viEndMatch.length - 1];
    const lastViMatchIndex = content.lastIndexOf(lastViMatch);
    content = content.slice(0, lastViMatchIndex + lastViMatch.length) + '\\n' + newVi + content.slice(lastViMatchIndex + lastViMatch.length);
  }
}

fs.writeFileSync(i18nPath, content, 'utf8');
console.log('Done modifying i18n.tsx');

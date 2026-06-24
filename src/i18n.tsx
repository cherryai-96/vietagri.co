/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from 'react';
import { startTransition, useEffect } from 'react';
import { loadSiteResources } from './lib/dataSync';


type Language = 'en' | 'vi';

export interface TranslationResources {
 [key: string]: {
  [key: string]: string | string[] | any;
 };
}

export const defaultResources: TranslationResources = {
 en: {
  nav: {
   home: 'Home',
   about: 'About Us',
   services: 'Core Services',
   wolffia: 'Viet Wolffia',
   products: 'Products',
   sustainability: 'Sustainability',
   contact: 'Contact Us',
  },
  common: {
   partnerBtn: 'Partner With Us',
   downloadBtn: 'Download Corporate Profile',
   exploreBtn: 'Explore Our Capabilities',
   contactBtn: 'Contact Our Team',
   servicesBtn: 'View Our Core Services',
   consultationBtn: 'Request a Service Consultation',
   wolffiaBtn: 'View Our Flagship Farm',
   sampleBtn: 'Request Wolffia Samples & Specs',
   commercialBtn: 'Contact the Commercial Team',
   inquireCertBtn: 'Inquire About Certification Services',
   submitBtn: 'Request a Consultation',
   sendInquiry: 'Send Inquiry to VAC',
   loading: 'Sending...',
   success: 'Thank you! Your request has been sent successfully.',
   error: 'Something went wrong. Please try again.',
   hours: 'Office Hours: Monday - Friday, 8:00 AM - 5:00 PM (UTC+7)',
   address: 'No 59, Truong Dang Que Street, Hanh Thong Ward, Ho Chi Minh City, Vietnam, 71423',
   phone: '+84 858741968',
   email: 'inquiries@vietagri.co',
   copyright: '© 2026 Vietnam Agriculture Center. All Rights Reserved.',
   connecting: 'Connecting local potential\nwith global demand.',
  },
  home: {
   heroTitle: 'Bridging the <span class="text-transparent bg-clip-text bg-gradient-to-r from-gold-champagne via-gold-warm to-gold-antique">Richness of Vietnamese Agriculture</span> to the World',
   heroSub: 'Your trusted on‑the‑ground partner for premium product sourcing, high‑tech contract farming, and seamless global export logistics.',
   advantageTitle: 'An\u00A0Integrated\u00A0Agricultural<br className="hidden md:block" />Supply\u00A0Chain\u00A0Ecosystem',
   advantageSub: 'At Vietnam Agriculture Center (VAC), we eliminate the friction of international trade. We offer end‑to‑end solutions for global corporations, ensuring food sustainability, security, and uncompromising quality from seed to shipment.',
   
   sourcingTitle: 'Global Sourcing Services',
   sourcingDesc: "Access Vietnam's finest raw and processed agricultural goods. We audit, negotiate, and procure premium bulk volumes—from high-demand fresh produce to processed value-adds like bulk lotus seed powder—ensuring reliable supply chains for international buyers.",
   
   farmingTitle: 'Contract Farming<br className="hidden lg:block" />& Investment',
   farmingDesc: 'Secure your supply chain with dedicated cultivation. We manage scalable, high-yield operations for lucrative crops, offering transparent, fully managed farm setups with structured ROI and attractive trade partnership models.',
   
   qaTitle: 'Export Quality Assurance',
   qaDesc: 'We act as your quality gatekeeper. Our rigorous on‑the‑ground oversight ensures all operations align with the world’s strictest market standards, preparing facilities and harvests for GlobalG.A.P., EU Organic, and USDA Organic certifications.',
   
   logisticsTitle: 'Logistics & Documentation',
   logisticsDesc: 'Zero friction at the border. We navigate the complexities of international trade, managing phytosanitary certifications, customized bulk packaging solutions, and customs clearance for highly regulated markets.',
   
   spotlightTitle: 'Innovation in Action: The Viet Wolffia Model',
   spotlightSub: 'Demonstrating High‑Tech, Export-Ready Cultivation',
   spotlightDesc1: 'As integrated agricultural operators, we practice what we preach. The Viet Wolffia facility serves as VAC’s flagship model for advanced farming, demonstrating our capacity to deploy and manage highly sophisticated, sustainable agricultural technology.',
   spotlightDesc2: 'By cultivating Wolffia Globosa (Watermeal), we produce a revolutionary plant-based protein source. More importantly, we showcase the exact operational standards required to meet the rigorous demands of global human consumption and specialized animal nutrition.',
   
   tech1Title: 'Environmentally Controlled Cultivation',
   tech1Desc: 'We utilize standardized canvas raceway ponds situated beneath specialized netting structures. This hybrid approach harnesses maximum natural sunlight and airflow while allowing us to strictly manage the micro-climate and shield the biomass from external weather variables.',
   
   tech2Title: 'IoT-Integrated Smart Farming',
   tech2Desc: 'Precision agriculture requires precise data. We implement IoT (Internet of Things) sensor networks to continuously monitor crucial environmental metrics in real time—including water temperature, pH balance, and nutrient density—ensuring optimized, highly consistent growth cycles without the guesswork.',
   
   tech3Title: 'Rigorous Bio-Security & Purity',
   tech3Desc: 'Because Wolffia absorbs nutrients directly from its aquatic environment, bio-security is paramount. Our facility operates under strict access and cross-contamination controls. We guarantee a completely pathogen-free growing environment by utilizing industrial filtration systems paired with continuous, multi-stage UV sterilization.',
   
   tech4Title: 'Global Food Safety & Export Compliance',
   tech4Desc: 'The entire operation is engineered from the ground up to exceed international trade requirements. From water input to final harvest, we maintain end‑to‑end traceability and stringent hygiene protocols. This ensures that the final product—whether fresh, dried, or roasted—is fully compliant with global food safety regulations and primed for seamless, zero‑friction export to any market in the world.',
   
   trustTitle: 'Built for the Global Standard',
   trustDesc: 'We understand that international buyers require absolute certainty. VAC ensures every export meets precise specifications, from specialized aluminum gusseted packaging designed for extended shelf life to meticulous residue testing. Whether shipping to Asia, Europe, or the Americas, our produce arrives on time and in perfect compliance.',
   
   ctaTitle: 'Secure Your Supply Chain in Vietnam',
   ctaText: 'Are you looking to source premium Vietnamese agriculture, explore high-yield contract farming, or procure bulk Wolffia superfoods? Let\'s build a sustainable partnership.',
  },
  about: {
   heroTitle: 'Rooted in Vietnam • Reaching the World',
   heroSub: 'We are more than just a sourcing partner; we are an integrated agricultural ecosystem dedicated to global food security, sustainable cultivation, and uncompromising quality.',
   missionTitle: 'Our Mission',
   missionDesc: 'To bridge the richness of Vietnamese agriculture to the global market by delivering premium, sustainably farmed, and rigorously certified produce to tables in every corner of the globe.',
   visionTitle: 'Our Vision',
   visionDesc: 'To be the world’s most trusted gateway to Vietnam’s agricultural wealth, setting the international standard for high‑tech contract farming, transparent supply chains, and zero‑friction export logistics.',
   footprintTitle: 'An Expansive On‑the‑Ground Network',
   footprintDesc1: 'Vietnam Agriculture Center (VAC) was built on a foundation of deep local expertise and a sophisticated understanding of international trade. We are not brokers sitting behind desks; we are operators embedded in the land.',
   footprintDesc2: 'Our active operations and strategic partnerships span across Vietnam’s most fertile and agriculturally diverse regions—including the strategic agricultural hubs of the Highlands and Mekong Delta regions. This expansive footprint allows us to diversify our crop portfolio, mitigate supply chain risks, and guarantee consistent, year-round fulfillment for our global corporate partners.',
   whyTitle: 'Your Trusted Gatekeeper in Vietnam',
   whySub: 'Why Global Corporations Choose VAC',
   why1Title: 'Uncompromising Quality Assurance',
   why1Desc: 'We prepare every harvest and facility to meet the world’s most stringent requirements, managing the pathway to GlobalG.A.P., EU Organic, and USDA Organic certifications.',
   why2Title: 'End‑to‑End Transparency',
   why2Desc: 'From the specific soil chemistry of our contract farms to the custom aluminum gusseted packaging of our exported powders, you have complete visibility into how your product is grown, processed, and shipped.',
   why3Title: 'Scalable Capability',
   why3Desc: 'Whether you require a dedicated 10-hectare turnkey farm or regular 500kg bulk shipments of processed botanicals, our infrastructure is built to scale alongside your global demand.',
  },
  services: {
   heroTitle: 'End‑to‑End Solutions for Global Agriculture',
   heroSub: 'From seed to shipment, VAC provides an integrated suite of services designed to secure your supply chain, guarantee premium quality, and eliminate the friction of international trade.',
   introTitle: 'Your On‑the‑Ground Partner in Vietnam',
   introDesc: 'Navigating international agricultural procurement requires more than just a buyer; it requires a deeply embedded local partner. VAC’s core services are designed to protect international buyers and investors at every step of the supply chain, ensuring that what you order is exactly what arrives at your destination.',
   sourcingTitle: 'Global Agricultural<br className="hidden lg:block" />Sourcing Services',
   sourcingSub: 'Precision Procurement & Auditing',
   sourcingText: 'We connect global food and agriculture corporations with Vietnam’s most reliable producers. VAC handles the entire sourcing lifecycle, ensuring reliable volume, consistent pricing, and exceptional quality for both raw and value-added processed goods.',
   sourcingBullet1: 'Supplier Auditing: Rigorous on-site vetting of local farms and processing facilities.',
   sourcingBullet2: 'Bulk Procurement: Capable of fulfilling high-volume industrial orders, from fresh produce to specialized processed botanicals like premium lotus seed powder.',
   sourcingBullet3: 'Targeted Market Matching: We tailor our sourcing to meet the specific import requirements and consumer preferences of your target market, whether in Europe, America, or specialized markets like South Korea and Japan.',
   
   farmingTitle: 'High‑Tech Contract Farming<br className="hidden lg:block" />& Investment',
   farmingSub: 'Secure, Scalable Cultivation',
   farmingText: 'For corporations seeking absolute control over their supply chain, VAC offers turnkey contract farming services. We dedicate land, resources, and expert management to cultivate lucrative crops specifically for your global distribution.',
   farmingBullet1: 'Turnkey Farm Management: End‑to‑end operation, from land preparation and seed selection to harvest and post-harvest processing.',
   farmingBullet2: 'Structured Investment Models: We offer highly transparent, standardized investment structures for each crop.',
   farmingBullet3: 'Lucrative Trade Partnerships: We actively build robust distribution networks by offering highly competitive structures, including standard commission rates for our dedicated trade agents and global partners.',
   
   qaTitle: 'Export Quality Assurance',
   qaSub: 'Uncompromising Compliance',
   qaText: 'International trade leaves no room for error. VAC acts as your strict quality gatekeeper, ensuring that all agricultural products meet or exceed the destination country\'s regulations before they ever leave Vietnam.',
   qaBullet1: 'Certification Management: We consult, prepare, and manage facilities to achieve and maintain top-tier international certifications, including GlobalG.A.P., EU Organic, and USDA Organic standards.',
   qaBullet2: 'Residue & Purity Testing: Implementing rigorous testing protocols to guarantee zero chemical contamination and absolute product safety.',
   qaBullet3: 'Traceability: Full documentation tracking the product lifecycle, providing you and your consumers with complete transparency.',
   
   logisticsTitle: 'Global Logistics &<br />Trade Documentation',
   logisticsSub: 'Zero‑Friction Export Execution',
   logisticsText: 'Getting the crop out of the ground is only half the process; delivering it securely across borders is where VAC truly excels. We handle the complex bureaucracy and physical logistics of international freight.',
   logisticsBullet1: 'Customs & Documentation: Expert management of phytosanitary certificates, certificates of origin, and comprehensive customs clearance to prevent border delays.',
   logisticsBullet2: 'Specialized Export Packaging: We engineer custom packaging solutions to protect product integrity during transit. Whether managing fresh cold-chain freight or utilizing 10kg aluminum gusseted bags to protect 500kg bulk powder shipments from moisture, our packaging is built for global transit.',
   logisticsBullet3: 'Freight Management: Strategic coordination of ocean and air freight to optimize shipping times and costs.',
   
   ctaTitle: 'Ready to streamline your agricultural supply chain?',
   ctaSub: 'Whether you require specialized sourcing, a customized contract farming proposal, or expert logistics support, VAC is ready to deploy our resources for your success.',
  },
  wolffia: {
   heroTitle: 'Viet Wolffia Superfood',
   heroSub: 'Cultivating the future of protein. High‑tech, highly scalable Wolffia Globosa production for global human and animal nutrition.',
   introTitle: 'The World’s Smallest,<br className="hidden lg:block" />Most Nutrient-Dense Plant',
   introText1: 'Wolffia globosa (commonly known as Watermeal) is an aquatic marvel. As the smallest flowering plant on Earth, it packs an unprecedented nutritional profile, offering exceptional levels of plant-based protein, essential amino acids, and vital micronutrients.',
   introText2: 'At VAC, we recognized the transformative potential of Wolffia early on. Through our flagship Viet Wolffia farm, we have developed a scalable, commercially viable model to supply this revolutionary biomass to global markets, catering to both premium human superfood sectors and high-yield animal agriculture.',
   cultTitle: 'Precision Agriculture in<br />Clean & Controlled Environments',
   cultDesc: 'The Viet Wolffia operation is built on a foundation of rigorous water chemistry and optimized environmental controls. We have engineered a highly efficient, scalable farming model that maximizes natural resources while guaranteeing absolute purity.',
   
   feature1Title: 'Optimized Canvas Pond Architecture',
   feature1Desc: 'Our Wolffia is cultivated in standardized canvas raceway ponds. This specific dimension allows for optimal water flow, nutrient distribution, and highly efficient harvesting.',
   
   feature2Title: 'Air & Light Management',
   feature2Desc: 'Rather than utilizing restrictive enclosed greenhouses, our ponds are situated beneath air and light controlled specialized, simple netting structures. This strategic setup harnesses maximum natural Vietnamese sunlight—crucial for rapid Wolffia biomass replication—while protecting the crop from extreme weather and physical contaminants.',
   
   feature3Title: 'Uncompromising Water Purity',
   feature3Desc: 'Wolffia absorbs nutrients directly from its aquatic environment, meaning water quality is paramount. Viet Wolffia utilizes industrial-grade water filtration systems paired with continuous UV sterilization. This ensures a 100% clean, pathogen-free growing environment, meeting the strictest international food-grade standards.',
   
   appTitle: 'Versatile Nutrition for a Hungry World',
   appSub: 'Viet Wolffia is processed to serve diverse global supply chains, from high-end health food brands to commercial aquaculture.',
   
   humanTitle: '1. Premium Human Consumption',
   humanDesc: 'Cultivated under strict food-safe conditions, our Wolffia is an ideal ingredient for the plant-based protein market, nutritional supplements, and functional foods.',
   humanBullet1: 'Fresh Biomass: For immediate local processing or specialized cold-chain export.',
   humanBullet2: 'Dried & Roasted Wolffia: Moisture-controlled, shelf-stable formats perfect for bulk export and direct integration into consumer packaged goods (CPG).',
   
   feedTitle: '2. "Bio‑Balance" Animal Nutrition',
   feedDesc: 'We actively upcycle high-value agricultural by-products—including nutrient-dense waste from pineapples and papayas—and blend them with our Wolffia biomass. This creates our proprietary Bio‑Balance feed formulations.',
   feedTarget: 'Target Sectors: Highly digestible, bio-optimized feed mixes engineered specifically for commercial aquaculture, high-yield livestock, aviary and bird sectors, commercial snail farming, and specialized pet nutrition.',
   
   rdTitle: '3. Continuous R&D',
   rdDesc: 'Viet Wolffia serves as VAC’s innovation hub. Utilizing the exact same precision water controls and clean-environment standards, we are actively running commercial trial projects for high-value greens, ensuring our product catalog is always evolving alongside global dietary trends.',
   
   ctaTitle: 'Procure Viet Wolffia for Your Operations',
   ctaSub: 'We are equipped to handle bulk industrial orders and custom bio-feed formulations. Contact our commercial team to request technical specification sheets, nutritional analyses, or to discuss bulk export logistics.',
   galleryTitle: 'Viet Wolffia Recipe & Operations Gallery',
  },
  sustainability: {
   heroTitle: 'Cultivating a Resilient Global Supply Chain',
   heroSub: 'Empowering agricultural corporations with circular farming initiatives, transparent ESG reporting, and premium clean‑label certification services.',
   introTitle: 'Sustainability<br className="hidden lg:block" />is Our Standard',
   introDesc1: 'At Vietnam Agriculture Center (VAC), we recognize that long-term agricultural success relies on ecological responsibility. For global food corporations, ESG (Environmental, Social, and Governance) compliance is no longer a corporate initiative—it is a fundamental market requirement.',
   introDesc2: 'We embed sustainability into every layer of our ecosystem. Whether we are managing a large-scale contract farm or consulting on a corporate supply chain, VAC provides the independent expertise required to secure resources, protect local environments, and achieve the world’s most stringent agricultural standards.',
   
   certTitle: 'Elevating Supply Chains to Premium Standards',
   certSub: 'Clean‑Label & Organic Certification Services',
   certText: 'Consumer demand for clean, chemical-free, and transparently sourced food is absolute. Transitioning a conventional agricultural operation to meet premium global standards requires rigorous oversight, technical expertise, and independent validation. VAC provides dedicated Certification Consultancy and Management Services for agricultural corporations looking to upgrade their Vietnamese sourcing to verified premium status.',
   certBullet1: 'Organic Transition Management: We guide local farms and processing facilities through the complex, multi-year transition protocols required to achieve and maintain USDA Organic and EU Organic certifications.',
   certBullet2: 'GlobalG.A.P. Alignment: We implement the Good Agricultural Practices (GAP) required to secure GlobalG.A.P. certification, focusing on worker welfare, environmental impact mitigation, and absolute food safety.',
   certBullet3: 'Clean‑Label Protocols: We design and enforce zero-pesticide, residue-free cultivation and processing protocols, allowing your brand to confidently market clean‑label products to highly regulated international markets.',
   certBullet4: 'Independent Audit Representation: Our on‑the‑ground agronomists and compliance experts act as your independent representatives during official environmental and quality audits, ensuring documentation, soil health, and water management plans pass seamlessly.',
   
   circularTitle: 'Building Zero-Waste Agricultural Ecosystems',
   circularSub: 'Circular Agriculture & Resource Optimization',
   circularText: 'A truly sustainable supply chain is one that wastes nothing. VAC actively partners with local producers and processors to implement circular "zero-waste" initiatives that keep agricultural by-products in the economic loop.',
   circularBullet1: 'Biomass Upcycling: We design and manage systems to rescue high-nutrient agricultural by-products—such as processing waste from tropical fruits or crop harvests—diverting them from landfills.',
   circularBullet2: 'Creating Secondary Value Chains: We facilitate the transformation of these upcycled materials into secondary, high-value resources, such as specialized, highly digestible bio-feeds and animal nutrition. This circular approach supports the broader agricultural ecosystem without taxing additional land or water resources.',
   
   esgTitle: 'Measurable Impact for Corporate Reporting',
   esgSub: 'Environmental Stewardship & ESG Alignment',
   esgText: 'Global corporations require measurable data to support their ESG initiatives. We enforce strict environmental resource protections across all our sourcing and contract farming networks, providing you with the transparency needed for corporate reporting.',
   esgBullet1: 'Precision Water Management: We mandate advanced filtration and water reclamation systems in high-density farming operations to eliminate harmful agricultural runoff and protect local water tables.',
   esgBullet2: 'Land Optimization: By championing tech-driven, high-density cultivation methods, we help maximize crop yields while significantly minimizing the physical footprint required by traditional farming models.',
   esgBullet3: 'Social Empowerment: Our contract farming structures are designed to provide fair, standardized, and highly lucrative opportunities for local Vietnamese farmers. By bringing financial stability and modern agricultural education to rural communities, we ensure your supply chain is ethically sound from the ground up.',
   
   ctaTitle: 'Ready to Certify Your Supply Chain?',
   ctaSub: 'Whether you need an independent partner to manage your organic transition, secure GlobalG.A.P. compliance, or source sustainably farmed produce, VAC is ready to lead the way.',
  },
  products: {
   heroTitle: 'Premium Harvests & Sustainable Inputs',
   heroSub: 'From seed to export, VAC provides end-to-end agricultural excellence. We cultivate and source high-value crops across Vietnam\'s diverse ecosystem for the global market, while supplying the foundational organic inputs required for regenerative, high-yield farming.',
   btnConsultation: 'Request Product Consultation',
   btnCategories: 'View Product Categories',
   badge1: 'Export-Ready Products',
   badge2: 'Contract Farming Portfolio',
   badge3: 'Organic Input Solutions',
   badge4: 'Sustainable Supply Chains',
   tabExport: 'Export & Contract Farming',
   tabBeverages: 'Specialty Beverages',
   tabFruits: 'Tropical Fruits',
   tabSpices: 'Spices & Nuts',
   tabGrains: 'Premium Grains',
   tabSuperfoods: 'Superfoods & Biomass',
   tabInputs: 'Sustainable Inputs',
   introTitle: 'Our Products & Solutions',
   introDesc: 'We provide premium agricultural products for global sourcing, specialized contract farming, and sustainable agricultural inputs.',
   panel1: 'Vietnam-Based Sourcing',
   panel2: 'High-Value Crop Portfolio',
   panel3: 'Export & Contract Farming',
   panel4: 'Regenerative Soil Inputs',
   part1Label: 'Part 1',
   part1Title: 'Premium Export & Contract Farming',
   part1Intro: 'We act as your independent gateway to Vietnam\'s agricultural wealth. From custom contract farming to high-volume wholesale procurement, we specialize in the cultivation, processing, and global export of Vietnam’s most sought-after commodities.',
   inquireBtn: 'Inquire About This Category',
   cat1Title: 'Specialty Beverages: Coffee & Cacao',
   cat1Desc1: 'Single-Origin Coffee: As the world\'s second-largest coffee exporter, Vietnam offers unmatched scale. We supply ethically sourced, premium Robusta and Arabica beans, ensuring fully traceable supply chains for global roasters and functional beverage brands.',
   cat1Desc2: 'Premium Cacao: Vietnam\'s single-origin cacao is globally recognized for its unique, complex flavor profile. We provide precision-fermented and dried premium cacao beans, as well as processed cocoa mass and butter for high-end chocolatiers and confectioners.',
   cat2Title: 'High-Value Tropical Fruits',
   cat2Desc1: 'Yellow Sweet Passion Fruit (Qinmi No. 9): Cultivated for its intense aroma and high brix levels, available as premium fresh fruit or processed frozen pulp.',
   cat2Desc2: 'Tropical Staples: High-volume, export-grade Mango, Banana, and Pineapple. We optimize every harvest by diverting processing by-products into our sustainable bio-feed loop.',
   cat3Title: 'Spices & Nuts: Vietnam\'s Global Staples',
   cat3Desc1: 'Global Spice Leadership: Vietnam is a premier global exporter of essential spices like black pepper and cinnamon. We supply bulk, clean-label whole peppercorns, cinnamon bark (cassia), and star anise, along with pure, industrial-grade essential oils.',
   cat3Desc2: 'Premium Cashews: Meeting the rigorous demands of the global snack and plant-based dairy alternative sectors, we export raw, premium-grade cashew kernels (such as W180 and W210) that are vacuum-sealed for absolute freshness and quality retention.',
   cat4Title: 'Premium Grains',
   cat4Desc1: 'Organic ST25 Rice: Vietnam is a top-tier global exporter of rice. We bypass standard commodity channels to focus on award-winning, fragrant ST25 rice varieties cultivated under strict organic protocols, perfect for clean-label retail and premium food manufacturing.',
   cat5Title: 'Superfoods & Botanical Biomass',
   cat5Desc1: 'Việt Wolffia (Watermeal): Grown in highly controlled, open canvas ponds under simple net structures to ensure absolute purity and optimal micro-climate management. As the world’s most nutrient-dense plant, our Wolffia is available as live biomass, dried superfood powder, and specialty functional roasts (including craft beer applications).',
   cat5Desc2: 'Bio-Balance Animal Nutrition: A proprietary, zero-waste feed blending nutrient-rich aquatic biomass with upcycled fruit waste, engineered for commercial aquaculture and sustainable livestock.',
   part2Label: 'Part 2',
   part2Title: 'Sustainable Agricultural Inputs',
   part2Intro: 'Great harvests begin with living soil. VAC supplies elite, regenerative fertilizers and soil conditioners to upgrade farm yields, restore ecological balance, and eliminate reliance on synthetic chemicals.',
   input1Title: 'Bio.SoilZ: Advanced Microbial Activator',
   input1Desc: 'Bio.SoilZ is a cutting-edge microbial activator that shifts soil microorganisms into an aerobic metabolism through the application of specific, selective bio-energy.',
   input1Ben1: 'Rebuilds the critical humus layer and rehabilitates degraded agricultural land.',
   input1Ben2: 'Enhances nutrient cycles, transforming locked soil minerals into soluble, easily absorbed plant nutrients.',
   input1Ben3: 'Strengthens the plant\'s natural immune system, resulting in accelerated growth, improved resilience, and higher yields.',
   input1Ben4: 'Significantly reduces the need for chemical fertilizers, acting as the foundation for 100% organic crop production.',
   input2Title: 'Premium Japanese Chicken Manure',
   input2Desc: 'Imported directly from trusted agricultural partners in Japan, this premium-grade organic chicken dung undergoes rigorous processing and sterilization to completely eliminate harmful pathogens and invasive weed seeds.',
   input2Ben1: 'Delivers a highly concentrated, slow-release source of essential macronutrients (Nitrogen, Phosphorus, and Potassium).',
   input2Ben2: 'Dramatically improves soil aeration and water retention capacity.',
   input2Ben3: 'Ensures total compliance with the strict international organic farming certifications required for global export.',
   input3Title: 'Composted Cow Dung',
   input3Desc: 'A foundational, traditional organic fertilizer that has been scientifically aged and fully composted to ensure it is cool, pH-stable, and ready for immediate, safe field application.',
   input3Ben1: 'Rapidly builds bulk soil organic matter and immediately improves soil physical structure.',
   input3Ben2: 'Stimulates beneficial earthworm and microbial activity directly in the root zone.',
   input3Ben3: 'Highly cost-effective for large-scale contract farming and ideal for rehabilitating over-farmed or compacted land.',
   ctaHeading: 'Looking for a Reliable Product Supply Partner in Vietnam?',
   ctaBody: 'Connect with VAC to discuss premium agricultural sourcing, contract farming, Wolffia biomass, or sustainable soil input solutions for your market.',
   btnSecondary: 'Contact VAC Commercial Team',
   formFullName: 'Full Name *',
   formCompany: 'Company Name *',
   formEmail: 'Corporate Email *',
   formPhone: 'Phone / WhatsApp',
   formCountry: 'Country / Target Market',
   formCategory: 'Product Category of Interest *',
   formVolume: 'Estimated Volume / Project Size',
   formFormat: 'Required Format',
   formMessage: 'Message / Requirements',
   formSubmit: 'Send Product Inquiry'
  },
  contact: {
   heroTitle: 'Let’s Build a Sustainable Supply Chain Together',
   heroSub: 'Connect with Vietnam Agriculture Center to discuss global sourcing, custom contract farming, or enterprise-level ESG consulting.',
   introTitle: 'Your On‑the‑Ground Partner in Vietnam',
   introDesc: 'International agricultural trade requires precision, trust, and local expertise. Whether you are looking to secure a reliable source of premium produce, transition a facility to organic standards, or structure a custom farming investment, our team is ready to facilitate your success. Reach out to us directly or fill out the inquiry form below, and an appropriate specialist will respond promptly.',
   
   headquarters: 'Corporate Headquarters',
   generalInquiries: 'General Inquiries',
   formTitle: 'Request a Consultation',
   fullName: 'Full Name *',
   jobTitle: 'Job Title',
   companyName: 'Company Name *',
   email: 'Corporate Email *',
   phone: 'Phone / WhatsApp Number (with Country Code)',
   destination: 'Country of Destination / Target Market',
   interest: 'Primary Areas of Interest (Select all that apply)',
   interest1: 'Global Agricultural Sourcing (Raw or Processed)',
   interest2: 'Custom Contract Farming / Investment',
   interest3: 'Organic & Clean‑Label Certification Consulting',
   interest4: 'Viet Wolffia Superfood Supply',
   interest5: '“Bio‑Balance” & Animal Nutrition Supply',
   interest6: 'Export Logistics Services',
   interest7: 'Others',
   projectDetails: 'Project Details / Specific Requirements',
   projectPlaceholder: 'Please provide a brief overview of your volume requirements, target certifications, or specific crop interests so we can prepare for our discussion.',
   globalReady: 'Ready for the Global Standard',
   globalReadyDesc: 'VAC currently facilitates seamless agricultural trade across multiple continents. If you require our Corporate Capabilities Deck or specific Technical Specification Sheets for our processed botanicals and bio-feeds, please request them via the form above.',
   followUs: 'Connect With Us',
   linkedin: 'Follow our corporate updates on LinkedIn',
   youtube: 'View our on‑the‑ground operations on YouTube',
  }
 },
 vi: {
  nav: {
   home: 'Trang Chủ',
   about: 'Về Chúng Tôi',
   services: 'Dịch Vụ Cốt Lõi',
   wolffia: 'Việt Wolffia',
   products: 'Sản phẩm',
   sustainability: 'Phát Triển Bền Vững',
   contact: 'Liên Hệ',
  },
  common: {
   partnerBtn: 'Hợp Tác Cùng Chúng Tôi',
   downloadBtn: 'Tải Hồ Sơ Năng Lực',
   exploreBtn: 'Khám Phá Năng Lực',
   contactBtn: 'Liên Hệ Nhận Tư Vấn',
   servicesBtn: 'Xem Dịch Vụ Cốt Lõi',
   consultationBtn: 'Yêu Cầu Tư Vấn Dịch Vụ',
   wolffiaBtn: 'Khám Phá Mô Hình Tiêu Điểm',
   sampleBtn: 'Yêu Cầu Mẫu & Tiêu Chuẩn Wolffia',
   commercialBtn: 'Liên Hệ Khối Thương Mại',
   inquireCertBtn: 'Tìm Hiểu Dịch Vụ Chứng Nhận',
   submitBtn: 'Gửi Yêu Cầu Tư Vấn',
   sendInquiry: 'Gửi Yêu Cầu Đến VAC',
   loading: 'Đang gửi...',
   success: 'Xin cảm ơn! Yêu cầu của bạn đã được gửi thành công.',
   error: 'Đã có lỗi xảy ra. Vui lòng thử lại sau.',
   hours: 'Giờ làm việc: Thứ Hai - Thứ Sáu, 8:00 - 17:00 (UTC+7)',
   address: 'Số 59 Trương Đăng Quế, Phường Hạnh Thông, TP. Hồ Chí Minh, Việt Nam, 71423',
   phone: '+84 85 874 1968',
   email: 'inquiries@vietagri.co',
   copyright: '© 2026 Trung Tâm Nông Nghiệp Việt Nam. Bảo lưu mọi quyền.',
   connecting: 'Kết nối tiềm năng bản địa với nhu cầu toàn cầu.',
  },
  home: {
   heroTitle: 'Mang <span class="text-transparent bg-clip-text bg-gradient-to-r from-gold-champagne via-gold-warm to-gold-antique">Tinh Hoa Nông Sản Việt</span> Vươn Tầm Thế Giới',
   heroSub: 'Đối tác bản địa đáng tin cậy của bạn trong cung ứng nông sản cao cấp, canh tác hợp đồng công nghệ cao và logistics xuất khẩu toàn cầu.',
   advantageTitle: 'Hệ\u00A0Sinh\u00A0Thái\u00A0Chuỗi\u00A0Cung\u00A0Ứng<br className="hidden md:block" />Nông\u00A0Nghiệp\u00A0Tích\u00A0Hợp',
   advantageSub: 'Tại Trung Tâm Nông Nghiệp Việt Nam (VAC), chúng tôi gỡ bỏ mọi rào cản trong thương mại quốc tế. Bằng việc cung cấp các giải pháp khép kín cho các tập đoàn đa quốc gia, VAC đảm bảo tính bền vững, an ninh lương thực và chất lượng tuyệt đối từ hạt giống đến khi giao hàng.',
   
   sourcingTitle: 'Dịch Vụ Cung Ứng Toàn Cầu',
   sourcingDesc: 'Tiếp cận nguồn nguyên liệu nông sản và sản phẩm chế biến thượng hạng của Việt Nam. Chúng tôi trực tiếp đánh giá, đàm phán và thu mua số lượng lớn — từ các mặt hàng nông sản tươi đang được săn đón đến các sản phẩm chế biến sâu giá trị cao như bột hạt sen — nhằm đảm bảo một chuỗi cung ứng vững chắc cho các nhà nhập khẩu quốc tế.',
   
   farmingTitle: 'Canh Tác Hợp Đồng<br className="hidden lg:block" />& Đầu Tư',
   farmingDesc: 'Bảo đảm nguồn cung của bạn thông qua vùng trồng chuyên canh. Chúng tôi quản lý các mô hình canh tác quy mô lớn, năng suất cao đối với những loại cây trồng giá trị, mang lại giải pháp nông trại trọn gói, minh bạch cùng tỷ suất hoàn vốn (ROI) rõ ràng và mô hình hợp tác thương mại hấp dẫn.',
   
   qaTitle: 'Đảm Bảo Chất Lượng Xuất Khẩu',
   qaDesc: 'Chúng tôi đóng vai trò là "người gác cổng" chất lượng của bạn. Khâu giám sát thực địa gắt chuyên nghiệp của VAC đảm bảo mọi hoạt động đều tuân thủ các tiêu chuẩn khắt khe nhất thế giới, hỗ trợ các cơ sở và vụ mùa đáp ứng tiêu chuẩn GlobalG.A.P., EU Organic và USDA Organic.',
   
   logisticsTitle: 'Logistics & Thủ Tục Chứng Từ',
   logisticsDesc: 'Thông quan không trở ngại. Chúng tôi giải quyết mọi sự phức tạp của thương mại quốc tế, từ quản lý chứng thư kiểm dịch thực vật, giải pháp đóng gói chuyên dụng cho hàng rời, đến thủ tục thông quan cho những thị trường được quản lý chặt chẽ nhất.',
   
   spotlightTitle: 'Đổi Mới Khởi Trào: Mô Hình Việt Wolffia',
   spotlightSub: 'Minh Chứng Cho Nền Canh Tác Công Nghệ Cao, Sẵn Sàng Xuất Khẩu',
   spotlightDesc1: 'Là một đơn vị điều hành nông nghiệp tích hợp, chúng tôi luôn "nói đi đôi với làm". Trang trại Việt Wolffia là mô hình tiêu điểm của VAC về canh tác tiên tiến, khẳng định năng lực triển khai và quản lý công nghệ nông nghiệp bền vững và hiện đại.',
   spotlightDesc2: 'Bằng việc nuôi trồng Wolffia Globosa (Bèo tấm/Trứng nước), chúng tôi tạo ra một nguồn protein thực vật mang tính cách mạng. Quan trọng hơn, mô hình này thể hiện chính xác các chuẩn mực vận hành cần thiết để đáp ứng nhu cầu khắt khe của thị trường tiêu dùng toàn cầu và mảng dinh dưỡng động vật chuyên biệt.',
   
   tech1Title: 'Canh Tác Kiểm Soát Môi Trường',
   tech1Desc: 'Chúng tôi sử dụng hệ thống ao nổi lót bạt chuẩn hóa đặt dưới cấu trúc lưới che chuyên dụng. Phương pháp kết hợp này giúp tận dụng tối đa ánh sáng tự nhiên và luồng khí lưu thông, đồng thời kiểm soát chặt chẽ vi khí hậu và bảo vệ sinh khối khỏi những biến động khắc nghiệt của thời tiết bên ngoài.',
   
   tech2Title: 'Nông Nghiệp Thông Minh Tích Hợp IoT',
   tech2Desc: 'Nông nghiệp chính xác đòi hỏi những dữ liệu chuẩn xác. Chúng tôi triển khai mạng lưới cảm biến IoT để liên tục theo dõi các chỉ số môi trường thiết yếu theo thời gian thực — từ nhiệt độ nước, độ pH đến mật độ dinh dưỡng — qua đó tối ưu hóa quy trình, đảm bảo chu kỳ sinh trưởng đồng đều mà không dựa vào phỏng đoán.',
   
   tech3Title: 'An Ninh Sinh Học & Độ Tinh Khiết',
   tech3Desc: 'Bởi Wolffia hấp thụ trực tiếp dưỡng chất từ môi trường nước, an ninh sinh học là yếu tố sống còn. Cơ sở của chúng tôi vận hành dưới hệ thống kiểm soát ra vào và chống lây nhiễm chéo cực kỳ nghiêm ngặt. Bằng cách kết hợp hệ thống lọc công nghiệp và công nghệ tiệt trùng UV liên tục, chúng tôi cam kết một môi trường sinh trưởng hoàn toàn vắng bóng mầm bệnh.',
   
   tech4Title: 'An Toàn Thực Phẩm Toàn Cầu & Chuẩn Xuất Khẩu',
   tech4Desc: 'Toàn bộ chu trình hoạt động được tinh chỉnh ngay từ bước đầu để vượt qua mọi yêu cầu thương mại quốc tế. Từ nguồn nước đầu vào đến khâu thu hoạch, chúng tôi duy trì khả năng truy xuất nguồn gốc xuyên suốt và những tiêu chuẩn vệ sinh gắt gao. Điều này đảm bảo thành phẩm — dù tươi, sấy khô hay rang — đều tuân thủ tuyệt đối quy định an toàn thực phẩm toàn cầu, sẵn sàng xuất khẩu thông suốt đến bất kỳ thị trường nào.',
   
   trustTitle: 'Được Xây Dựng Cho Tiêu Chuẩn Toàn Cầu',
   trustDesc: 'Chúng tôi thấu hiểu rằng các nhà mua hàng quốc tế luôn cần sự bảo đảm tuyệt đối. VAC cam kết mọi lô hàng xuất khẩu đều đáp ứng quy cách kỹ thuật chuẩn xác, từ bao bì nhôm có nẹp chuyên dụng giúp kéo dài thời hạn bảo quản, đến các cuộc kiểm nghiệm dư lượng tỉ mỉ. Dù điểm đến là Châu Á, Châu Âu hay Châu Mỹ, nông sản của chúng tôi luôn cập bến đúng tiến độ và đạt chuẩn hoàn hảo.',
   
   ctaTitle: 'Thiết Lập Chuỗi Cung Ứng Tại Việt Nam',
   ctaText: 'Bạn đang tìm kiếm nguồn nông sản Việt Nam thượng hạng, muốn khám phá mô hình canh tác hợp đồng năng suất cao, hay thu mua siêu thực phẩm Wolffia số lượng lớn? Hãy cùng chúng tôi xây dựng một mối quan hệ hợp tác bền vững.',
  },
  about: {
   heroTitle: 'Bám Rễ Tại Việt Nam • Vươn Nhánh Khắp Toàn Cầu',
   heroSub: 'Chúng tôi không chỉ là một đối tác cung ứng; chúng tôi là một hệ sinh thái nông nghiệp khép kín tận tâm vì an ninh lương thực toàn cầu, canh tác bền vững và chất lượng không thỏa hiệp.',
   missionTitle: 'Sứ Mệnh Của Chúng Tôi',
   missionDesc: 'Đưa sự trù phú của nông nghiệp Việt Nam vươn ra thị trường toàn cầu thông qua việc cung cấp các sản phẩm thượng hạng, được canh tác bền vững và chứng nhận khắt khe đến mọi bàn ăn trên thế giới.',
   visionTitle: 'Tầm Nhìn Của Chúng Tôi',
   visionDesc: 'Trở thành cửa ngõ uy tín nhất thế giới tiếp cận tài nguyên nông nghiệp của Việt Nam, thiết lập nên những chuẩn mực quốc tế về canh tác hợp đồng công nghệ cao, chuỗi cung ứng minh bạch và logistics xuất khẩu thông suốt.',
   footprintTitle: 'Mạng Lưới Thực Địa Rộng Khắp',
   footprintDesc1: 'Trung Tâm Nông Nghiệp Việt Nam (VAC) được xây dựng trên nền tảng chuyên môn sâu sắc về bản địa và sự am hiểu tường tận về thương mại quốc tế. Chúng tôi không phải là những nhà môi giới ngồi sau bàn làm việc; chúng tôi là những nhà điều hành gắn bó sâu sát với đồng ruộng.',
   footprintDesc2: 'Hoạt động điều hành và các đối tác chiến lược của chúng tôi trải rộng khắp những vùng canh tác màu mỡ và đa dạng nhất Việt Nam — bao gồm các trung tâm nông nghiệp trọng điểm ở Tây Nguyên và Đồng bằng sông Cửu Long. Mạng lưới rộng lớn này giúp VAC linh hoạt đa dạng hóa danh mục cây trồng, giảm thiểu rủi ro chuỗi cung ứng và đảm bảo khả năng cung ứng liên tục, ổn định quanh năm cho các tập đoàn đối tác.',
   whyTitle: 'Người Gác Cổng Đáng Tin Cậy Tại Việt Nam',
   whySub: 'Vì Sao Các Tập Đoàn Toàn Cầu Chọn VAC',
   why1Title: 'Chất Lượng Không Thỏa Hiệp',
   why1Desc: 'Chúng tôi chuẩn bị kỹ lưỡng cho mọi vụ mùa và cơ sở hạ tầng để đáp ứng các tiêu chuẩn khắt khe nhất thế giới, điều hành xuyên suốt quá trình hướng tới chứng nhận GlobalG.A.P., EU Organic, và USDA Organic.',
   why2Title: 'Minh Bạch Từ Đầu Đến Cuối',
   why2Desc: 'Từ thành phần hóa học của đất tại các trang trại hợp đồng cho đến bao bì nhôm chuyên dụng của các lô bột xuất khẩu, bạn có toàn quyền nắm rõ quá trình nuôi trồng, chế biến và vận chuyển sản phẩm của mình.',
   why3Title: 'Khả Năng Mở Rộng Linh Hoạt',
   why3Desc: 'Dù bạn cần một nông trại trọn gói quy mô 10 héc-ta hay những chuyến hàng bột thảo mộc đều đặn 500kg, cơ sở hạ tầng của chúng tôi đều được thiết kế để dễ dàng mở rộng theo nhu cầu toàn cầu của bạn.',
  },
  services: {
   heroTitle: 'Giải Pháp Toàn Diện Cho Nông Nghiệp Toàn Cầu',
   heroSub: 'Từ khâu chọn giống đến khi giao hàng, VAC cung cấp chuỗi dịch vụ khép kín nhằm bảo đảm chuỗi cung ứng, cam kết chất lượng thượng hạng và xóa bỏ mọi rào cản trong giao thương quốc tế.',
   introTitle: 'Đối Tác Bản Địa Của Bạn Tại Việt Nam',
   introDesc: 'Thu mua nông sản quốc tế không đơn thuần là hoạt động mua bán; nó đòi hỏi một đối tác bản địa đồng hành sâu sát. Các dịch vụ cốt lõi của VAC được thiết kế nhằm bảo vệ nhà mua hàng và nhà đầu tư quốc tế ở từng mắt xích của chuỗi cung ứng, đảm bảo sản phẩm bạn nhận được chính xác là những gì bạn yêu cầu.',
   sourcingTitle: 'Dịch Vụ Cung Ứng Nông Sản Toàn Cầu',
   sourcingSub: 'Thu Mua & Thẩm Định Chuẩn Xác',
   sourcingText: 'Chúng tôi làm cầu nối giữa các tập đoàn thực phẩm toàn cầu với những nhà sản xuất uy tín nhất Việt Nam. VAC trực tiếp xử lý trọn vẹn vòng đời cung ứng, đảm bảo duy trì số lượng, giá cả nhất quán và chất lượng vượt trội cho cả nông sản thô và sản phẩm chế biến sâu.',
   sourcingBullet1: 'Đánh Giá Nhà Cung Cấp: Khảo sát và thẩm định khắt khe trực tiếp tại các nông trại và cơ sở chế biến nội địa.',
   sourcingBullet2: 'Thu Mua Số Lượng Lớn: Năng lực đáp ứng các đơn hàng công nghiệp quy mô lớn, từ nông sản tươi đến các mặt hàng thực vật chế biến như bột hạt sen cao cấp.',
   sourcingBullet3: 'Thích Ứng Mọi Thị Trường: Chúng tôi tùy chỉnh quy trình cung ứng để thỏa mãn yêu cầu nhập khẩu và thị hiếu tiêu dùng của thị trường mục tiêu, dù đó là Châu Âu, Mỹ, hay các thị trường đặc thù như Hàn Quốc và Nhật Bản.',
   
   farmingTitle: 'Canh Tác Hợp Đồng Công Nghệ Cao<br className="hidden lg:block" />& Đầu Tư',
   farmingSub: 'Canh Tác An Toàn, Quy Mô Lớn',
   farmingText: 'Dành cho các tập đoàn khao khát kiểm soát tuyệt đối chuỗi cung ứng, VAC cung cấp các dịch vụ canh tác hợp đồng trọn gói. Chúng tôi phân bổ quỹ đất, tài nguyên và đội ngũ quản lý chuyên sâu để canh tác các loại cây trồng sinh lời, phục vụ riêng cho khâu phân phối toàn cầu của bạn.',
   farmingBullet1: 'Quản Lý Nông Trại Trọn Gói: Điều hành khép kín từ khâu cải tạo đất, chọn giống đến thu hoạch và sơ chế sau thu hoạch.',
   farmingBullet2: 'Mô Hình Đầu Tư Có Cấu Trúc: Chúng tôi mang đến các mô hình đầu tư chuẩn hóa, cực kỳ minh bạch cho từng loại cây trồng cụ thể.',
   farmingBullet3: 'Đối Tác Thương Mại Bền Vững: VAC chủ động kiến tạo mạng lưới phân phối vững chắc thông qua những cơ chế ưu đãi mang tính cạnh tranh cao, bao gồm tỷ lệ hoa hồng tiêu chuẩn dành cho đại lý và đối tác quốc tế.',
   
   qaTitle: 'Đảm Bảo Chất Lượng Xuất Khẩu',
   qaSub: 'Tuân Thủ Không Nhượng Bộ',
   qaText: 'Thương mại quốc tế không có chỗ cho sai sót. VAC hành động như một chốt chặn chất lượng nghiêm khắc, bảo đảm mọi mặt hàng nông sản đều đạt hoặc vượt qua quy chuẩn của quốc gia nhập khẩu trước khi rời khỏi Việt Nam.',
   qaBullet1: 'Quản Lý Chứng Nhận: Tư vấn, thiết lập và quản lý cơ sở vật chất để đạt và duy trì những chứng nhận quốc tế hàng đầu, bao gồm GlobalG.A.P., EU Organic và USDA Organic.',
   qaBullet2: 'Kiểm Định Dư Lượng & Độ Tinh Khiết: Triển khai các quy trình kiểm nghiệm gắt gao để cam kết tuyệt đối không có dư lượng hóa chất và bảo đảm an toàn sản phẩm 100%.',
   qaBullet3: 'Truy Xuất Nguồn Gốc: Hệ thống hồ sơ hoàn chỉnh theo dõi toàn bộ vòng đời sản phẩm, mang đến cho bạn và người tiêu dùng sự minh bạch tối đa.',
   
   logisticsTitle: 'Logistics Toàn Cầu &<br />Chứng Từ Thương Mại',
   logisticsSub: 'Thực Thi Xuất Khẩu Xuyên Suốt',
   logisticsText: 'Đưa nông sản lên khỏi mặt đất mới chỉ là một nửa chặng đường; vận chuyển an toàn xuyên biên giới mới là nơi VAC thực sự chứng minh năng lực. Chúng tôi trực tiếp tháo gỡ mọi rào cản hành chính phức tạp và đảm nhiệm quy trình kho vận quốc tế.',
   logisticsBullet1: 'Hải Quan & Chứng Từ: Quản lý chuyên nghiệp các giấy chứng nhận kiểm dịch thực vật, chứng nhận xuất xứ (C/O) và thông quan toàn diện để ngăn chặn mọi rủi ro chậm trễ tại cửa khẩu.',
   logisticsBullet2: 'Bao Bì Xuất Khẩu Chuyên Dụng: Chúng tôi thiết kế các giải pháp đóng gói tùy chỉnh nhằm bảo vệ trọn vẹn chất lượng sản phẩm trong quá trình vận tải. Dù là điều phối hàng tươi lạnh hay sử dụng túi nhôm 10kg có nẹp để bảo vệ các lô bột 500kg khỏi độ ẩm, bao bì của chúng tôi luôn được tối ưu cho hành trình toàn cầu.',
   logisticsBullet3: 'Quản Lý Vận Tải: Phối hợp chiến lược giữa cước biển và hàng không để tối ưu hóa thời gian và chi phí giao nhận.',
   
   ctaTitle: 'Sẵn sàng tối ưu hóa chuỗi cung ứng nông nghiệp của bạn?',
   ctaSub: 'Dù bạn cần các giải pháp cung ứng chuyên biệt, một đề xuất canh tác hợp đồng riêng biệt, hay sự hỗ trợ logistics chuyên môn sâu, VAC luôn sẵn sàng huy động nguồn lực cho thành công của bạn.',
  },
  wolffia: {
   heroTitle: 'Siêu Thực Phẩm Việt Wolffia',
   heroSub: 'Nuôi trồng tương lai của protein. Sản xuất Wolffia Globosa công nghệ cao, quy mô lớn phục vụ dinh dưỡng con người và động vật toàn cầu.',
   introTitle: 'Loài Thực Vật Có Hoa Nhỏ Nhất, Giàu Dưỡng Chất Nhất Thế Giới',
   introText1: 'Wolffia globosa (thường được biết đến với tên gọi Bèo Tấm hay Trứng Nước) là một kỳ quan thủy sinh. Dù là loài thực vật có hoa nhỏ nhất Trái Đất, nó mang trong mình một hồ sơ dinh dưỡng vô tiền khoáng hậu, cung cấp hàm lượng lớn protein thực vật, các axit amin thiết yếu và những vi chất quan trọng.',
   introText2: 'Tại VAC, chúng tôi sớm nhận ra tiềm năng đột phá của Wolffia. Qua mô hình trang trại tiêu điểm Việt Wolffia, chúng tôi đã phát triển thành công một hệ thống mang tính thương mại, có khả năng nhân rộng để cung ứng khối lượng sinh khối mang tính cách mạng này cho thị trường thế giới, đáp ứng cả mảng siêu thực phẩm cao cấp cho người và ngành thức ăn chăn nuôi năng suất cao.',
   cultTitle: 'Nông Nghiệp Chính Xác Trong<br />Môi Trường Sạch & Được Kiểm Soát',
   cultDesc: 'Hoạt động của Việt Wolffia được xây dựng trên nền tảng kiểm soát nghiêm ngặt các thông số hóa học của nước và quản lý môi trường tối ưu. Chúng tôi đã thiết kế một mô hình canh tác đạt hiệu suất cao, có thể mở rộng, giúp phát huy tối đa các nguồn lực tự nhiên đồng thời bảo đảm độ tinh khiết tuyệt đối.',
   
   feature1Title: 'Hệ Thống Ao Nổi Lót Bạt Tối Ưu',
   feature1Desc: 'Wolffia của chúng tôi được nuôi trồng trong các ao nổi lót bạt đạt quy chuẩn. Tỷ lệ kích thước chuyên biệt này đảm bảo sự lưu thông nước tối ưu, phân bổ dưỡng chất đồng đều và cho phép quá trình thu hoạch diễn ra với hiệu suất cực cao.',
   
   feature2Title: 'Kiểm Soát Ánh Sáng & Không Khí',
   feature2Desc: 'Thay vì sử dụng các nhà kính khép kín gò bó, ao nuôi của chúng tôi được đặt dưới hệ thống lưới che chuyên dụng giúp điều tiết không khí và ánh sáng. Cách bố trí chiến lược này giúp hấp thụ tối đa ánh sáng mặt trời tự nhiên — yếu tố then chốt để sinh khối Wolffia sinh sôi nhanh chóng — đồng thời che chắn cho cây trồng khỏi thời tiết khắc nghiệt và tạp chất vật lý.',
   
   feature3Title: 'Độ Tinh Khiết Nguồn Nước Tuyệt Đối',
   feature3Desc: 'Vì Wolffia hấp thụ chất dinh dưỡng trực tiếp từ môi trường thủy sinh, chất lượng nước là ưu tiên hàng đầu. Việt Wolffia ứng dụng các hệ thống lọc nước cấp độ công nghiệp song song với quá trình chiếu tia UV tiệt trùng liên tục. Điều này cam kết một môi trường sinh trưởng sạch 100%, vô trùng, đáp ứng trọn vẹn những tiêu chuẩn thực phẩm quốc tế khắt khe nhất.',
   
   appTitle: 'Nguồn Dinh Dưỡng Đa Năng Cho Một Thế Giới Đang Cần',
   appSub: 'Việt Wolffia được chế biến để tương thích với đa dạng chuỗi cung ứng toàn cầu, từ các thương hiệu thực phẩm sức khỏe cao cấp đến ngành nuôi trồng thủy sản thương mại.',
   
   humanTitle: '1. Dành Cho Tiêu Dùng Con Người',
   humanDesc: 'Được canh tác dưới các điều kiện an toàn thực phẩm khắt khe, Wolffia của chúng tôi là nguyên liệu lý tưởng cho thị trường protein gốc thực vật, thực phẩm bổ sung dinh dưỡng và thực phẩm chức năng.',
   humanBullet1: 'Sinh Khối Tươi: Phục vụ chế biến trực tiếp tại địa phương hoặc xuất khẩu qua chuỗi cung ứng lạnh chuyên biệt.',
   humanBullet2: 'Wolffia Sấy Khô & Rang: Sản phẩm được kiểm soát độ ẩm, ổn định thời hạn bảo quản, cực kỳ hoàn hảo cho xuất khẩu số lượng lớn và ứng dụng trực tiếp vào các mặt hàng tiêu dùng nhanh (CPG).',
   
   feedTitle: '2. Dinh Dưỡng Động Vật "Bio‑Balance"',
   feedDesc: 'Chúng tôi chủ động tận dụng (upcycle) các phụ phẩm nông nghiệp giá trị cao — chẳng hạn như chất thải giàu dinh dưỡng từ dứa và đu đủ — kết hợp với sinh khối Wolffia. Quy trình này tạo ra công thức thức ăn chăn nuôi "Bio‑Balance" độc quyền của chúng tôi.',
   feedTarget: 'Ngành Mục Tiêu: Các hỗn hợp thức ăn dễ tiêu hóa, được tối ưu hóa sinh học, chế tạo riêng cho nuôi trồng thủy sản thương mại, chăn nuôi gia súc năng suất cao, ngành nuôi chim cảnh, ốc thương phẩm và dinh dưỡng thú cưng đặc biệt.',
   
   rdTitle: '3. Nghiên Cứu & Phát Triển (R&D) Liên Tục',
   rdDesc: 'Việt Wolffia là trung tâm đổi mới của VAC. Bằng việc áp dụng chính các hệ thống kiểm soát nước chính xác và chuẩn mực môi trường vô khuẩn, chúng tôi đang tích cực thử nghiệm thương mại các loại rau xanh giá trị cao, bảo đảm danh mục sản phẩm của VAC luôn bắt nhịp với xu hướng dinh dưỡng toàn cầu.',
   
   ctaTitle: 'Thu Mua Việt Wolffia Cho Hoạt Động Của Bạn',
   ctaSub: 'Chúng tôi sẵn sàng đáp ứng các đơn đặt hàng công nghiệp quy mô lớn và tùy chỉnh các công thức thức ăn sinh học. Hãy liên hệ với đội ngũ thương mại của chúng tôi để nhận bảng thông số kỹ thuật, hồ sơ phân tích dinh dưỡng, hoặc trao đổi về logistics xuất khẩu khối lượng lớn.',
   galleryTitle: 'Thư Viện Ảnh Hoạt Động & Cảm Hứng Chế Biến',
  },
  sustainability: {
   heroTitle: 'Xây Dựng Một Chuỗi Cung Ứng Toàn Cầu Bền Bỉ',
   heroSub: 'Tiếp sức cho các tập đoàn nông nghiệp bằng các mô hình canh tác tuần hoàn, báo cáo ESG minh bạch, và dịch vụ chứng nhận nhãn sạch uy tín.',
   introTitle: 'Phát Triển Bền Vững Là Tiêu Chuẩn Của Chúng Tôi',
   introDesc1: 'Tại Trung Tâm Nông Nghiệp Việt Nam (VAC), chúng tôi hiểu rõ rằng thành công bền vững trong nông nghiệp gắn liền với trách nhiệm sinh thái. Đối với các tập đoàn thực phẩm toàn cầu, việc tuân thủ ESG (Môi trường, Xã hội, và Quản trị) không còn là một lựa chọn nội bộ — đó là yêu cầu sống còn của thị trường.',
   introDesc2: 'Chúng tôi lồng ghép các yếu tố phát triển bền vững vào từng lớp của hệ sinh thái. Cho dù đang quản lý một nông trại hợp đồng quy mô lớn hay tư vấn cho chuỗi cung ứng của một doanh nghiệp, VAC luôn cung cấp kiến thức chuyên môn độc lập để đảm bảo tài nguyên, bảo vệ sinh thái địa phương và vươn tới những tiêu chuẩn nông nghiệp khắt khe nhất thế giới.',
   
   certTitle: 'Nâng Tầm Chuỗi Cung Ứng Lên Tiêu Chuẩn Cao Cấp',
   certSub: 'Dịch Vụ Chứng Nhận Nhãn Sạch (Clean‑Label) & Hữu Cơ',
   certText: 'Nhu cầu của người tiêu dùng về thực phẩm sạch, không hóa chất và có nguồn gốc minh bạch là tuyệt đối. Chuyển đổi một mô hình nông nghiệp truyền thống để đạt tiêu chuẩn cao cấp quốc tế đòi hỏi sự giám sát chặt chẽ, am hiểu kỹ thuật sâu rộng và sự xác minh độc lập. VAC mang đến Dịch Vụ Tư Vấn và Quản Lý Chứng Nhận chuyên biệt, hỗ trợ các tập đoàn nâng cấp nguồn hàng tại Việt Nam lên vị thế cao cấp được xác thực.',
   certBullet1: 'Quản Lý Chuyển Đổi Hữu Cơ: Chúng tôi đồng hành cùng các nông trại và cơ sở chế biến nội địa vượt qua quy trình chuyển đổi dài hạn để đạt và giữ vững chứng nhận USDA Organic và EU Organic.',
   certBullet2: 'Đồng Bộ Theo GlobalG.A.P.: Chúng tôi thực thi các Quy Trình Thực Hành Nông Nghiệp Tốt (GAP) cần thiết để giành lấy chứng nhận GlobalG.A.P., đặt trọng tâm vào an toàn thực phẩm, phúc lợi người lao động, và giảm thiểu tác động môi trường.',
   certBullet3: 'Quy Trình Nhãn Sạch: Chúng tôi thiết kế và vận hành các quy tắc canh tác, chế biến không sử dụng thuốc trừ sâu và không để lại dư lượng, giúp thương hiệu của bạn tự tin tiếp thị sản phẩm "nhãn sạch" vào các thị trường quốc tế kiểm duyệt gắt gao.',
   certBullet4: 'Đại Diện Kiểm Định Độc Lập: Đội ngũ kỹ sư nông nghiệp và chuyên gia tuân thủ tại hiện trường của chúng tôi sẽ đóng vai trò là đại diện độc lập trong suốt các đợt thanh tra chất lượng và môi trường chính thức, đảm bảo các tài liệu, hồ sơ đất đai và kế hoạch quản lý nước được thông qua thuận lợi.',
   
   circularTitle: 'Kiến Tạo Hệ Sinh Thái Nông Nghiệp "Không Rác Thải"',
   circularSub: 'Nông Nghiệp Tuần Hoàn & Tối Ưu Hóa Nguồn Lực',
   circularText: 'Một chuỗi cung ứng thực sự bền vững là chuỗi cung ứng không bỏ phí bất kỳ thứ gì. VAC tích cực hợp tác với các nhà sản xuất và cơ sở sơ chế địa phương nhằm thực thi các sáng kiến "không rác thải", giữ cho phụ phẩm nông nghiệp tiếp tục lưu chuyển trong vòng lặp kinh tế.',
   circularBullet1: 'Nâng Cấp Sinh Khối: Chúng tôi thiết kế và vận hành các hệ thống thu gom phụ phẩm nông nghiệp giàu dinh dưỡng — chẳng hạn như phế phẩm sau sơ chế trái cây nhiệt đới hoặc tàn dư sau thu hoạch — ngăn chúng bị đưa ra bãi rác.',
   circularBullet2: 'Tạo Lập Chuỗi Giá Trị Thứ Cấp: Chúng tôi thúc đẩy quá trình chuyển đổi các vật liệu nâng cấp này thành tài nguyên thứ cấp giá trị cao, ví dụ như các dạng thức ăn sinh học dễ hấp thụ và dinh dưỡng động vật. Cách tiếp cận tuần hoàn này hỗ trợ toàn bộ hệ sinh thái nông nghiệp mà không tạo thêm áp lực lên tài nguyên đất đai hay nguồn nước.',
   
   esgTitle: 'Tác Động Cụ Thể Cho Các Báo Cáo Doanh Nghiệp',
   esgSub: 'Trách Nhiệm Môi Trường & Tuân Thủ ESG',
   esgText: 'Các tập đoàn toàn cầu luôn cần những dữ liệu chuẩn xác để chứng minh cho các nỗ lực ESG của họ. Chúng tôi áp đặt các biện pháp bảo vệ tài nguyên sinh thái gắt gao lên toàn bộ mạng lưới thu mua và canh tác hợp đồng của mình, cung cấp cho bạn sự minh bạch cần thiết để lập báo cáo doanh nghiệp.',
   esgBullet1: 'Quản Lý Nước Chính Xác: Chúng tôi yêu cầu áp dụng các hệ thống lọc và thu hồi nước tiên tiến trong các khu canh tác mật độ cao, nhằm loại bỏ hiện tượng ô nhiễm dòng chảy nông nghiệp và bảo vệ nguồn nước ngầm của địa phương.',
   esgBullet2: 'Tối Ưu Hóa Đất Đai: Bằng cách thúc đẩy phương thức canh tác mật độ cao áp dụng công nghệ, chúng tôi giúp tối đa hóa năng suất cây trồng đồng thời thu hẹp đáng kể diện tích đất cần sử dụng so với các mô hình canh tác truyền thống.',
   esgBullet3: 'Trao Quyền Xã Hội: Cấu trúc canh tác hợp đồng của chúng tôi được thiết kế để mang lại cơ hội công bằng, thu nhập cao và ổn định cho người nông dân Việt Nam. Việc mang lại sự vững vàng về tài chính và những kiến thức nông nghiệp tân tiến cho các cộng đồng nông thôn đảm bảo rằng chuỗi cung ứng của bạn mang tính nhân văn và đạo đức bền vững từ gốc rễ.',
   
   ctaTitle: 'Sẵn Sàng Chứng Nhận Chuỗi Cung Ứng Của Mình?',
   ctaSub: 'Dù bạn cần một đối tác độc lập để quản lý quá trình chuyển đổi hữu cơ, bảo đảm tuân thủ GlobalG.A.P., hay thu mua nông sản theo phương thức bền vững, VAC luôn ở đây để đồng hành.',
  },
  products: {
   heroTitle: 'Mùa Vụ Thượng Hạng & Đầu Vào Bền Vững',
   heroSub: 'Từ hạt giống đến xuất khẩu, VAC cung cấp sự xuất sắc nông nghiệp toàn diện. Chúng tôi canh tác và cung ứng các loại cây trồng giá trị cao trên hệ sinh thái đa dạng của Việt Nam cho thị trường toàn cầu, đồng thời cung cấp các vật tư hữu cơ nền tảng cần thiết cho nền nông nghiệp tái sinh, năng suất cao.',
   btnConsultation: 'Yêu Cầu Tư Vấn Sản Phẩm',
   btnCategories: 'Xem Danh Mục Sản Phẩm',
   badge1: 'Sản Phẩm Đạt Chuẩn Xuất Khẩu',
   badge2: 'Danh Mục Canh Tác Hợp Đồng',
   badge3: 'Giải Pháp Đầu Vào Hữu Cơ',
   badge4: 'Chuỗi Cung Ứng Bền Vững',
   tabExport: 'Xuất Khẩu & Canh Tác Hợp Đồng',
   tabBeverages: 'Đồ Uống Đặc Sản',
   tabFruits: 'Trái Cây Nhiệt Đới',
   tabSpices: 'Gia Vị & Hạt',
   tabGrains: 'Ngũ Cốc Cao Cấp',
   tabSuperfoods: 'Siêu Thực Phẩm & Sinh Khối',
   tabInputs: 'Đầu Vào Bền Vững',
   introTitle: 'Sản Phẩm & Giải Pháp Của Chúng Tôi',
   introDesc: 'Chúng tôi cung cấp các sản phẩm nông nghiệp cao cấp cho chuỗi cung ứng toàn cầu, canh tác hợp đồng chuyên biệt, và các giải pháp đầu vào nông nghiệp bền vững.',
   panel1: 'Nguồn Cung Tại Việt Nam',
   panel2: 'Danh Mục Cây Trồng Giá Trị Cao',
   panel3: 'Xuất Khẩu & Canh Tác Hợp Đồng',
   panel4: 'Đầu Vào Đất Tái Sinh',
   part1Label: 'Phần 1',
   part1Title: 'Xuất Khẩu & Canh Tác Hợp Đồng Cao Cấp',
   part1Intro: 'Chúng tôi hoạt động như cửa ngõ độc lập của bạn đến với sự trù phú nông nghiệp của Việt Nam. Từ canh tác hợp đồng tùy chỉnh đến thu mua bán buôn khối lượng lớn, chúng tôi chuyên canh tác, chế biến và xuất khẩu toàn cầu các mặt hàng nông sản được săn đón nhất của Việt Nam.',
   inquireBtn: 'Nhận Tư Vấn Danh Mục Này',
   cat1Title: 'Đồ Uống Đặc Sản: Cà Phê & Ca Cao',
   cat1Desc1: 'Cà Phê Nguyên Bản: Là quốc gia xuất khẩu cà phê lớn thứ hai thế giới, Việt Nam mang lại quy mô vô song. Chúng tôi cung cấp hạt Robusta và Arabica chất lượng cao được thu mua đạo đức, đảm bảo chuỗi cung ứng có thể truy xuất nguồn gốc cho các nhà rang xay toàn cầu và các thương hiệu đồ uống chức năng.',
   cat1Desc2: 'Ca Cao Cao Cấp: Ca cao nguyên bản của Việt Nam được thế giới công nhận vì cấu hình hương vị độc đáo, phức hợp. Chúng tôi cung cấp hạt ca cao cao cấp được lên men và sấy khô chính xác, cũng như khối lượng ca cao và bơ ca cao được xử lý cho các nhà sản xuất sô cô la và bánh kẹo cao cấp.',
   cat2Title: 'Trái Cây Nhiệt Đới Giá Trị Cao',
   cat2Desc1: 'Chanh Dây Ngọt Vàng (Qinmi No. 9): Được trồng vì hương thơm nồng nàn và mức độ brix cao, có sẵn dưới dạng trái cây tươi cao cấp hoặc đông lạnh xay nhuyễn đã qua chế biến.',
   cat2Desc2: 'Sản Phẩm Nhiệt Đới Thiết Yếu: Xoài, Chuối, và Dứa tiêu chuẩn xuất khẩu, khối lượng lớn. Chúng tôi tối ưu hóa mọi vụ thu hoạch bằng cách chuyển hướng phụ phẩm chế biến vào vòng lặp thức ăn sinh học bền vững của chúng tôi.',
   cat3Title: 'Gia Vị & Hạt: Điểm Nhấn Toàn Cầu Của Việt Nam',
   cat3Desc1: 'Dẫn Đầu Gia Vị Toàn Cầu: Việt Nam là nhà xuất khẩu hàng đầu thế giới về các loại gia vị thiết yếu như hạt tiêu đen và quế. Chúng tôi cung cấp khối lượng lớn hạt tiêu nguyên hạt nhãn sạch, vỏ quế (cassia) và hoa hồi, cùng với các loại tinh dầu tinh khiết, cấp công nghiệp.',
   cat3Desc2: 'Hạt Điều Cao Cấp: Đáp ứng nhu cầu khắt khe của ngành ăn vặt toàn cầu và các lựa chọn thay thế sữa từ thực vật, chúng tôi xuất khẩu hạt điều thô, cao cấp (như W180 và W210) được hút chân không để giữ được độ tươi và chất lượng tuyệt đối.',
   cat4Title: 'Ngũ Cốc Cao Cấp',
   cat4Desc1: 'Gạo ST25 Hữu Cơ: Việt Nam là nhà xuất khẩu gạo hàng đầu thế giới. Chúng tôi vượt qua các kênh hàng hóa tiêu chuẩn để tập trung vào các giống gạo ST25 thơm ngon, đạt giải thưởng được trồng theo các quy trình hữu cơ nghiêm ngặt, hoàn hảo cho bán lẻ nhãn sạch và sản xuất thực phẩm cao cấp.',
   cat5Title: 'Siêu Thực Phẩm & Sinh Khối Thực Vật',
   cat5Desc1: 'Việt Wolffia (Bèo Tấm/Trứng Nước): Được trồng trong các ao bạt mở được kiểm soát chặt chẽ dưới các cấu trúc lưới đơn giản để đảm bảo độ tinh khiết tuyệt đối và quản lý vi khí hậu tối ưu. Là loài thực vật giàu dinh dưỡng nhất thế giới, Wolffia của chúng tôi có sẵn dưới dạng sinh khối tươi, bột siêu thực phẩm sấy khô, và đồ rang chức năng đặc biệt (bao gồm cả ứng dụng bia thủ công).',
   cat5Desc2: 'Dinh Dưỡng Động Vật Bio-Balance: Một thức ăn độc quyền, không rác thải pha trộn sinh khối thủy sinh giàu dinh dưỡng với rác thải trái cây được tái chế, được thiết kế cho nuôi trồng thủy sản thương mại và chăn nuôi bền vững.',
   part2Label: 'Phần 2',
   part2Title: 'Đầu Vào Nông Nghiệp Bền Vững',
   part2Intro: 'Mùa vụ tuyệt vời bắt đầu từ đất sống. VAC cung cấp phân bón và chất cải tạo đất cao cấp, tái sinh để nâng cấp năng suất trang trại, phục hồi cân bằng sinh thái, và loại bỏ sự phụ thuộc vào hóa chất tổng hợp.',
   input1Title: 'Bio.SoilZ: Chất Kích Hoạt Vi Sinh Tiên Tiến',
   input1Desc: 'Bio.SoilZ là một chất kích hoạt vi sinh vật tiên tiến chuyển đổi vi sinh vật trong đất sang chuyển hóa hiếu khí thông qua việc áp dụng năng lượng sinh học chọn lọc, đặc hiệu.',
   input1Ben1: 'Phục hồi lớp mùn quan trọng và cải tạo đất nông nghiệp bị suy thoái.',
   input1Ben2: 'Tăng cường chu trình dinh dưỡng, biến đổi khoáng chất trong đất bị khóa thành chất dinh dưỡng cho cây dễ hấp thụ, hòa tan.',
   input1Ben3: 'Tăng cường hệ miễn dịch tự nhiên của cây, dẫn đến sinh trưởng nhanh, khả năng phục hồi được cải thiện, và năng suất cao hơn.',
   input1Ben4: 'Giảm đáng kể nhu cầu về phân bón hóa học, đóng vai trò là nền tảng cho sản xuất cây trồng hữu cơ 100%.',
   input2Title: 'Phân Gà Cao Cấp Từ Nhật Bản',
   input2Desc: 'Nhập khẩu trực tiếp từ các đối tác nông nghiệp đáng tin cậy tại Nhật Bản, phân gà hữu cơ cao cấp này trải qua quá trình xử lý và khử trùng nghiêm ngặt để loại bỏ hoàn toàn mầm bệnh gây hại và hạt cỏ dại xâm lấn.',
   input2Ben1: 'Cung cấp nguồn dưỡng chất đa lượng thiết yếu, nồng độ cao, phân giải chậm (Nitơ, Phốt pho, và Kali).',
   input2Ben2: 'Cải thiện đáng kể độ thông khí của đất và khả năng giữ nước.',
   input2Ben3: 'Đảm bảo tuân thủ hoàn toàn với các chứng nhận canh tác hữu cơ quốc tế nghiêm ngặt cần thiết cho xuất khẩu toàn cầu.',
   input3Title: 'Phân Bò Ủ Hoai Mục',
   input3Desc: 'Một loại phân bón hữu cơ truyền thống, nền tảng đã được ủ lâu theo phương pháp khoa học và ủ hoai mục hoàn toàn để đảm bảo làm mát, ổn định độ pH, và sẵn sàng ứng dụng trên đồng ruộng ngay lập tức, an toàn.',
   input3Ben1: 'Nhanh chóng tạo chất hữu cơ trong đất khối lượng lớn và cải thiện ngay lập tức cấu trúc vật lý của đất.',
   input3Ben2: 'Kích thích giun đất có lợi và hoạt động của vi sinh vật trực tiếp trong vùng rễ.',
   input3Ben3: 'Hiệu quả chi phí cao cho canh tác hợp đồng quy mô lớn và lý tưởng để cải tạo đất bị canh tác quá mức hoặc bị nén chặt.',
   ctaHeading: 'Tìm Kiếm Một Đối Tác Cung Ứng Sản Phẩm Đáng Tin Cậy Tại Việt Nam?',
   ctaBody: 'Kết nối với VAC để thảo luận về nguồn cung ứng nông nghiệp cao cấp, canh tác hợp đồng, sinh khối Wolffia, hoặc các giải pháp đầu vào đất bền vững cho thị trường của bạn.',
   btnSecondary: 'Liên Hệ Nhóm Thương Mại VAC',
   formFullName: 'Họ và Tên *',
   formCompany: 'Tên Công Ty *',
   formEmail: 'Email Công Ty *',
   formPhone: 'Điện Thoại / WhatsApp',
   formCountry: 'Quốc Gia / Thị Trường Mục Tiêu',
   formCategory: 'Danh Mục Sản Phẩm Quan Tâm *',
   formVolume: 'Khối Lượng Dự Kiến / Quy Mô Dự Án',
   formFormat: 'Định Dạng Yêu Cầu',
   formMessage: 'Lời Nhắn / Yêu Cầu',
   formSubmit: 'Gửi Yêu Cầu Sản Phẩm'
  },
  contact: {
   heroTitle: 'Hãy Cùng Xây Dựng Một Chuỗi Cung Ứng Bền Vững',
   heroSub: 'Kết nối với Trung Tâm Nông Nghiệp Việt Nam để thảo luận về cung ứng toàn cầu, canh tác hợp đồng theo yêu cầu, hay tham vấn ESG cấp độ doanh nghiệp.',
   introTitle: 'Đối Tác Bản Địa Của Bạn Tại Việt Nam',
   introDesc: 'Giao thương nông nghiệp quốc tế đòi hỏi sự chuẩn xác, niềm tin, và sự am hiểu bản địa. Dù bạn đang muốn bảo đảm một nguồn cung nông sản thượng hạng ổn định, mong muốn nâng cấp cơ sở lên tiêu chuẩn hữu cơ, hay xây dựng cấu trúc đầu tư canh tác riêng biệt, đội ngũ của chúng tôi sẵn sàng hỗ trợ để đi đến thành công. Hãy liên hệ trực tiếp với chúng tôi hoặc điền vào biểu mẫu bên dưới, một chuyên gia chuyên trách sẽ phản hồi đến bạn ngay lập tức.',
   
   headquarters: 'Trụ Sở Chính Doanh Nghiệp',
   generalInquiries: 'Liên Hệ Chung',
   formTitle: 'Yêu Cầu Hỗ Trợ Tư Vấn',
   fullName: 'Họ và Tên *',
   jobTitle: 'Chức Vụ',
   companyName: 'Tên Doanh Nghiệp *',
   email: 'Email Công Ty *',
   phone: 'Điện Thoại / Số WhatsApp (kèm mã quốc gia)',
   destination: 'Quốc Gia Đích / Thị Trường Tiêu Thụ',
   interest: 'Lĩnh Vực Trọng Tâm (Chọn tất cả các mục thích hợp)',
   interest1: 'Cung Ứng Nông Sản Toàn Cầu (Thô hoặc Đã Chế Biến)',
   interest2: 'Canh Tác Hợp Đồng / Đầu Tư Theo Yêu Cầu',
   interest3: 'Tư Vấn Chứng Nhận Hữu Cơ & Nhãn Sạch (Clean‑Label)',
   interest4: 'Cung Cấp Siêu Thực Phẩm Việt Wolffia',
   interest5: 'Cung Cấp Dinh Dưỡng Động Vật "Bio‑Balance"',
   interest6: 'Dịch Vụ Logistics Xuất Khẩu',
   interest7: 'Khác',
   projectDetails: 'Chi Tiết Dự Án / Yêu Cầu Cụ Thể',
   projectPlaceholder: 'Vui lòng cung cấp thông tin khái quát về khối lượng dự kiến, các chứng nhận mục tiêu, hoặc sự quan tâm cụ thể đến loại cây trồng nào đó để chúng tôi chuẩn bị tốt nhất cho buổi trao đổi sắp tới.',
   globalReady: 'Sẵn Sàng Cho Tiêu Chuẩn Toàn Cầu',
   globalReadyDesc: 'VAC hiện đang xúc tiến giao thương nông nghiệp liền mạch trên khắp nhiều châu lục. Nếu bạn cần xem qua Bộ Hồ Sơ Năng Lực Doanh Nghiệp của chúng tôi hoặc các Bảng Thông Số Kỹ Thuật cho nhóm thực vật chế biến và thức ăn sinh học, vui lòng gửi yêu cầu qua biểu mẫu trên.',
   followUs: 'Kết Nối Với Chúng Tôi',
   linkedin: 'Theo dõi các thông tin cập nhật trên LinkedIn',
   youtube: 'Khám phá các hoạt động thực địa trên YouTube',
  }
 }
};

const LanguageContext = createContext<{
 language: Language;
 setLanguage: (lang: Language) => void;
 t: (key: string) => string;
}>({
 language: 'en',
 setLanguage: () => {},
 t: () => '',
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
 const [language, setLanguage] = useState<Language>('en');
 const [resources, setResources] = useState<TranslationResources>(defaultResources);

 useEffect(() => {
  let active = true;
  loadSiteResources().then((remoteResources) => {
   if (!active || !remoteResources) return;
   startTransition(() => setResources(remoteResources));
  }).catch(() => {
   // Keep local fallback resources when Supabase is unavailable.
  });

  return () => {
   active = false;
  };
 }, []);

 const t = (path: string) => {
  const keys = path.split('.');
  let current: any = resources[language];
  
  for (const key of keys) {
   if (current[key] === undefined) {
    // Fallback to English
    let fallback: any = resources['en'];
    for (const k of keys) {
     if (fallback[k] === undefined) return path;
     fallback = fallback[k];
    }
    return fallback;
   }
   current = current[key];
  }
  
  return current;
 };

 return (
  <LanguageContext.Provider value={{ language, setLanguage, t }}>
   {children}
  </LanguageContext.Provider>
 );
};

export const useTranslation = () => useContext(LanguageContext);

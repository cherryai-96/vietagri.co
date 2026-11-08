import React, { useState } from 'react';
import { useTranslation } from '../../i18n';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { submitLead } from '../../lib/dataSync';

interface ProductInquiryFormProps {
  initialCategory?: string;
  initialProduct?: string;
}

export const ProductInquiryForm: React.FC<ProductInquiryFormProps> = ({
  initialCategory = '',
  initialProduct = '',
}) => {
  const { t, language } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    category: initialCategory,
    volume: '',
    format: '',
    message: initialProduct ? `Inquiry regarding: ${initialProduct}` : '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const interests = [
        formData.category || initialCategory || 'Báo giá sản phẩm',
        ...(initialProduct ? [initialProduct] : []),
        ...(formData.format ? [`Quy cách: ${formData.format}`] : []),
        ...(formData.volume ? [`Sản lượng: ${formData.volume}`] : []),
      ];

      const fullMessage = [
        formData.message,
        formData.format ? `Quy cách đóng gói: ${formData.format}` : '',
        formData.volume ? `Sản lượng dự kiến: ${formData.volume}` : '',
      ]
        .filter(Boolean)
        .join('\n');

      const { error } = await submitLead({
        fullName: formData.fullName,
        jobTitle: 'Corporate Buyer',
        companyName: formData.company,
        email: formData.email,
        phone: formData.phone || '',
        destination: formData.country || '',
        interests,
        department: 'sourcing',
        projectDetails: fullMessage || `Yêu cầu báo giá và tài liệu kỹ thuật cho ${initialProduct || formData.category || 'Nông sản'}`,
        sourcePage: initialProduct
          ? `Báo giá sản phẩm: ${initialProduct}`
          : `Báo giá danh mục: ${formData.category || initialCategory || 'Sản phẩm'}`,
      });

      if (error) {
        setSubmitStatus('error');
      } else {
        setSubmitStatus('success');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="inquiry" className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-black/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-forest via-gold-warm to-forest" />
      
      <div className="flex flex-col gap-2 mb-8">
        <h3 className="font-serif font-bold text-3xl text-carbon">
          {t('products.btnConsultation')}
        </h3>
        {initialProduct && (
          <p className="text-xs uppercase tracking-wider text-gold-warm font-semibold">
            {language === 'vi' ? `Yêu cầu báo giá cho: ${initialProduct}` : `Product Selected: ${initialProduct}`}
          </p>
        )}
      </div>

      {submitStatus === 'success' ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-16 text-center"
        >
          <div className="w-20 h-20 bg-forest/10 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 size={40} className="text-forest" />
          </div>
          <h4 className="font-serif font-bold text-2xl text-carbon mb-4">
            {language === 'vi'
              ? 'Đã Nhận Yêu Cầu Thành Công'
              : language === 'zh'
              ? '已收到您的询价申请'
              : language === 'ko'
              ? '문의가 성공적으로 접수되었습니다'
              : language === 'ja'
              ? 'お問い合わせを受信いたしました'
              : 'Request Received Successfully'}
          </h4>
          <p className="text-carbon/70 font-light max-w-md">
            {t('common.success')}
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="fullName" className="font-sans text-xs font-bold uppercase tracking-wider text-carbon/80">
                {t('products.formFullName')} *
              </label>
              <input
                type="text"
                id="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-cream border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest/50 transition-all font-light"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="company" className="font-sans text-xs font-bold uppercase tracking-wider text-carbon/80">
                {t('products.formCompany')} *
              </label>
              <input
                type="text"
                id="company"
                required
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-cream border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest/50 transition-all font-light"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-sans text-xs font-bold uppercase tracking-wider text-carbon/80">
                {t('products.formEmail')} *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-cream border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest/50 transition-all font-light"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="font-sans text-xs font-bold uppercase tracking-wider text-carbon/80">
                {t('products.formPhone')}
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-cream border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest/50 transition-all font-light"
              />
            </div>
            
            <div className="flex flex-col gap-2 md:col-span-2 lg:col-span-1">
              <label htmlFor="country" className="font-sans text-xs font-bold uppercase tracking-wider text-carbon/80">
                {t('products.formCountry')}
              </label>
              <input
                type="text"
                id="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="e.g. Japan, South Korea, EU, USA"
                className="w-full bg-cream border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest/50 transition-all font-light"
              />
            </div>
            
            <div className="flex flex-col gap-2 md:col-span-2 lg:col-span-1">
              <label htmlFor="category" className="font-sans text-xs font-bold uppercase tracking-wider text-carbon/80">
                {t('products.formCategory')}
              </label>
              <select
                id="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full bg-cream border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest/50 transition-all font-light appearance-none cursor-pointer text-carbon"
              >
                <option value="">{language === 'vi' ? 'Chọn danh mục sản phẩm' : language === 'zh' ? '选择产品类别' : language === 'ko' ? '제품 카테고리 선택' : language === 'ja' ? '製品カテゴリーを選択' : 'Select a category'}</option>
                <option value="fresh">{language === 'vi' ? 'Trái cây & Nông sản tươi' : 'Fresh Fruits & Vegetables'}</option>
                <option value="powders">{language === 'vi' ? 'Bột nông sản & Trái cây' : 'Fruit & Vegetable Powders'}</option>
                <option value="purees">{language === 'vi' ? 'Puree & Nước ép đậm đặc' : 'Fruit Purees & Concentrates'}</option>
                <option value="freeze-dried">{language === 'vi' ? 'Trái cây sấy thăng hoa' : 'Freeze-Dried Fruits'}</option>
                <option value="iqf">{language === 'vi' ? 'Nông sản cấp đông rời IQF' : 'IQF Frozen Produce'}</option>
                <option value="canned">{language === 'vi' ? 'Trái cây đóng hộp' : 'Canned Fruits'}</option>
                <option value="seafood">{language === 'vi' ? 'Thủy hải sản: Cá tra, Tôm, Mực' : 'Aquaculture: Basa, Shrimp, Squid'}</option>
                <option value="poultry">{language === 'vi' ? 'Sản phẩm thịt gà gia cầm' : 'Poultry & Chicken Products'}</option>
                <option value="general">{language === 'vi' ? 'Tư vấn nông sản chung' : 'General Product Inquiry'}</option>
              </select>
            </div>
            
            <div className="flex flex-col gap-2 md:col-span-2 lg:col-span-1">
              <label htmlFor="volume" className="font-sans text-xs font-bold uppercase tracking-wider text-carbon/80">
                {t('products.formVolume')}
              </label>
              <input
                type="text"
                id="volume"
                value={formData.volume}
                onChange={handleChange}
                placeholder="e.g. 1 FCL, 5 MT, 500 kg"
                className="w-full bg-cream border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest/50 transition-all font-light"
              />
            </div>
            
            <div className="flex flex-col gap-2 md:col-span-2 lg:col-span-1">
              <label htmlFor="format" className="font-sans text-xs font-bold uppercase tracking-wider text-carbon/80">
                {t('products.formFormat')}
              </label>
              <select
                id="format"
                value={formData.format}
                onChange={handleChange}
                className="w-full bg-cream border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest/50 transition-all font-light appearance-none cursor-pointer text-carbon"
              >
                <option value="">{language === 'vi' ? 'Chọn định dạng mong muốn' : language === 'zh' ? '选择希望的规格形态' : language === 'ko' ? '희망 가공 형태 선택' : language === 'ja' ? '希望加工形態を選択' : 'Select preferred format'}</option>
                <option value="fresh">{language === 'vi' ? 'Tươi nguyên trái / củ' : 'Fresh'}</option>
                <option value="dried">{language === 'vi' ? 'Sấy dẻo / Sấy giòn' : 'Dried'}</option>
                <option value="powder">{language === 'vi' ? 'Bột nguyên chất' : 'Powder'}</option>
                <option value="frozen">{language === 'vi' ? 'Cấp đông IQF / Puree đông' : 'Frozen Pulp'}</option>
                <option value="canned">{language === 'vi' ? 'Đóng hộp tiệt trùng' : 'Canned'}</option>
                <option value="bulk">{language === 'vi' ? 'Nguyên liệu thô đóng bao bốt' : 'Bulk Raw Material'}</option>
                <option value="custom">{language === 'vi' ? 'Quy cách riêng theo yêu cầu' : 'Custom'}</option>
              </select>
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-sans text-xs font-bold uppercase tracking-wider text-carbon/80">
              {t('products.formMessage')}
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder={language === 'vi' ? 'Chi tiết yêu cầu về tiêu chuẩn, quy cách đóng gói, thời gian giao hàng...' : 'Specify requirements, specs, target packaging, delivery timeline...'}
              className="w-full bg-cream border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest/50 transition-all font-light resize-y"
            ></textarea>
          </div>
          
          {submitStatus === 'error' && (
            <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 p-4 rounded-lg">
              <AlertCircle size={20} />
              <span className="text-sm">{t('common.error')}</span>
            </div>
          )}

          <div className="pt-4 border-t border-black/5 mt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto bg-forest hover:bg-forest-leaf text-cream font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-forest/20"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-cream/30 border-t-cream rounded-full animate-spin" />
              ) : (
                <Send size={18} />
              )}
              {isSubmitting ? t('common.loading') : t('products.formSubmit')}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

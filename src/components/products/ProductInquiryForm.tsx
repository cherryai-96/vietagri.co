import React, { useState } from 'react';
import { useTranslation } from '../../i18n';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProductInquiryForm: React.FC = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Reset form after a few seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <div id="inquiry" className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-black/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-forest via-gold-warm to-forest" />
      
      <h3 className="font-serif font-bold text-3xl text-carbon mb-8">
        {t('products.btnConsultation')}
      </h3>

      {submitStatus === 'success' ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-16 text-center"
        >
          <div className="w-20 h-20 bg-forest/10 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 size={40} className="text-forest" />
          </div>
          <h4 className="font-serif font-bold text-2xl text-carbon mb-4">Request Received</h4>
          <p className="text-carbon/70 font-light max-w-md">
            {t('common.success')}
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="fullName" className="font-sans text-xs font-bold uppercase tracking-wider text-carbon/80">
                {t('products.formFullName')}
              </label>
              <input
                type="text"
                id="fullName"
                required
                className="w-full bg-cream border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest/50 transition-all font-light"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="company" className="font-sans text-xs font-bold uppercase tracking-wider text-carbon/80">
                {t('products.formCompany')}
              </label>
              <input
                type="text"
                id="company"
                required
                className="w-full bg-cream border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest/50 transition-all font-light"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-sans text-xs font-bold uppercase tracking-wider text-carbon/80">
                {t('products.formEmail')}
              </label>
              <input
                type="email"
                id="email"
                required
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
                className="w-full bg-cream border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest/50 transition-all font-light"
              />
            </div>
            
            <div className="flex flex-col gap-2 md:col-span-2 lg:col-span-1">
              <label htmlFor="category" className="font-sans text-xs font-bold uppercase tracking-wider text-carbon/80">
                {t('products.formCategory')}
              </label>
              <select
                id="category"
                required
                className="w-full bg-cream border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest/50 transition-all font-light appearance-none cursor-pointer"
              >
                <option value="">Select a category</option>
                <option value="beverages">Specialty Beverages: Coffee & Cacao</option>
                <option value="fruits">High-Value Tropical Fruits</option>
                <option value="spices">Spices & Nuts</option>
                <option value="grains">Premium Grains</option>
                <option value="superfoods">Superfoods & Botanical Biomass</option>
                <option value="soilz">Bio.SoilZ</option>
                <option value="manure">Premium Japanese Chicken Manure</option>
                <option value="cowdung">Composted Cow Dung</option>
                <option value="general">General Product Inquiry</option>
              </select>
            </div>
            
            <div className="flex flex-col gap-2 md:col-span-2 lg:col-span-1">
              <label htmlFor="volume" className="font-sans text-xs font-bold uppercase tracking-wider text-carbon/80">
                {t('products.formVolume')}
              </label>
              <input
                type="text"
                id="volume"
                className="w-full bg-cream border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest/50 transition-all font-light"
              />
            </div>
            
            <div className="flex flex-col gap-2 md:col-span-2 lg:col-span-1">
              <label htmlFor="format" className="font-sans text-xs font-bold uppercase tracking-wider text-carbon/80">
                {t('products.formFormat')}
              </label>
              <select
                id="format"
                className="w-full bg-cream border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest/50 transition-all font-light appearance-none cursor-pointer"
              >
                <option value="">Select preferred format</option>
                <option value="fresh">Fresh</option>
                <option value="dried">Dried</option>
                <option value="powder">Powder</option>
                <option value="frozen">Frozen Pulp</option>
                <option value="bulk">Bulk Raw Material</option>
                <option value="processed">Processed Ingredient</option>
                <option value="fertilizer">Fertilizer / Soil Input</option>
                <option value="custom">Custom</option>
              </select>
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-sans text-xs font-bold uppercase tracking-wider text-carbon/80">
              {t('products.formMessage')}
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full bg-cream border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest/50 transition-all font-light resize-y"
            ></textarea>
          </div>
          
          {submitStatus === 'error' && (
            <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-4 rounded-lg">
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

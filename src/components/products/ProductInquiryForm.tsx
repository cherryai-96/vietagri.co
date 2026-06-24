import React, { useState } from 'react';
import { useTranslation } from '../../i18n';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export const ProductInquiryForm: React.FC = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const categories = [
    'Specialty Beverages: Coffee & Cacao',
    'High-Value Tropical Fruits',
    'Spices & Nuts',
    'Premium Grains',
    'Superfoods & Botanical Biomass',
    'Bio.SoilZ',
    'Premium Japanese Chicken Manure',
    'Composted Cow Dung',
    'General Product Inquiry',
  ];

  const formats = [
    'Fresh',
    'Dried',
    'Powder',
    'Frozen Pulp',
    'Bulk Raw Material',
    'Processed Ingredient',
    'Fertilizer / Soil Input',
    'Custom',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      console.log('Product inquiry submitted successfully');
    }, 1500);
  };

  return (
    <div id="inquiry" className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl border border-carbon/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-forest via-gold-warm to-forest"></div>
      
      {status === 'success' ? (
        <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-in">
          <div className="w-20 h-20 bg-forest/10 rounded-full flex items-center justify-center mb-6">
            <CheckCircle size={40} className="text-forest" />
          </div>
          <h3 className="font-serif text-3xl font-bold text-forest mb-4">Inquiry Received</h3>
          <p className="text-carbon/80 text-lg mb-8 max-w-md">
            Thank you. VAC will contact you shortly to discuss your product requirements.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="text-forest font-bold tracking-wide hover:underline"
          >
            Submit another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="fullName" className="text-sm font-bold text-carbon/80 uppercase tracking-wide">
                {t('products.formFullName')}
              </label>
              <input
                type="text"
                id="fullName"
                required
                className="bg-transparent border-b-2 border-carbon/20 py-3 focus:outline-none focus:border-forest transition-colors w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="company" className="text-sm font-bold text-carbon/80 uppercase tracking-wide">
                {t('products.formCompany')}
              </label>
              <input
                type="text"
                id="company"
                required
                className="bg-transparent border-b-2 border-carbon/20 py-3 focus:outline-none focus:border-forest transition-colors w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-bold text-carbon/80 uppercase tracking-wide">
                {t('products.formEmail')}
              </label>
              <input
                type="email"
                id="email"
                required
                className="bg-transparent border-b-2 border-carbon/20 py-3 focus:outline-none focus:border-forest transition-colors w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-bold text-carbon/80 uppercase tracking-wide">
                {t('products.formPhone')}
              </label>
              <input
                type="tel"
                id="phone"
                className="bg-transparent border-b-2 border-carbon/20 py-3 focus:outline-none focus:border-forest transition-colors w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="country" className="text-sm font-bold text-carbon/80 uppercase tracking-wide">
                {t('products.formCountry')}
              </label>
              <input
                type="text"
                id="country"
                className="bg-transparent border-b-2 border-carbon/20 py-3 focus:outline-none focus:border-forest transition-colors w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="category" className="text-sm font-bold text-carbon/80 uppercase tracking-wide">
                {t('products.formCategory')}
              </label>
              <select
                id="category"
                required
                className="bg-transparent border-b-2 border-carbon/20 py-3 focus:outline-none focus:border-forest transition-colors w-full appearance-none cursor-pointer"
              >
                <option value="" disabled selected>Select a category</option>
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="volume" className="text-sm font-bold text-carbon/80 uppercase tracking-wide">
                {t('products.formVolume')}
              </label>
              <input
                type="text"
                id="volume"
                className="bg-transparent border-b-2 border-carbon/20 py-3 focus:outline-none focus:border-forest transition-colors w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="format" className="text-sm font-bold text-carbon/80 uppercase tracking-wide">
                {t('products.formFormat')}
              </label>
              <select
                id="format"
                className="bg-transparent border-b-2 border-carbon/20 py-3 focus:outline-none focus:border-forest transition-colors w-full appearance-none cursor-pointer"
              >
                <option value="" disabled selected>Select format</option>
                {formats.map((fmt, idx) => (
                  <option key={idx} value={fmt}>{fmt}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="flex flex-col gap-2 mt-2">
            <label htmlFor="message" className="text-sm font-bold text-carbon/80 uppercase tracking-wide">
              {t('products.formMessage')}
            </label>
            <textarea
              id="message"
              rows={4}
              className="bg-transparent border-b-2 border-carbon/20 py-3 focus:outline-none focus:border-forest transition-colors w-full resize-none"
            ></textarea>
          </div>

          {status === 'error' && (
            <div className="bg-red-50 text-red-600 p-4 rounded flex items-center gap-3">
              <AlertCircle size={20} />
              <span className="text-sm font-medium">{t('common.error')}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-forest hover:bg-forest-leaf text-cream py-4 rounded font-bold uppercase tracking-wide transition-all duration-300 mt-4 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed group"
          >
            {status === 'loading' ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                <span>{t('common.loading')}</span>
              </>
            ) : (
              <>
                <span>{t('products.formSubmit')}</span>
                <Send size={18} className="transition-transform group-hover:translate-x-1 -mt-0.5" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

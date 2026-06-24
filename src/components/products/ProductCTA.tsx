import React from 'react';
import { useTranslation } from '../../i18n';
import { ProductInquiryForm } from './ProductInquiryForm';

export const ProductCTA: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-carbon relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:24px_24px]"></div>
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-warm/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-5/12 flex flex-col gap-6 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-cream leading-tight">
              {t('products.ctaHeading')}
            </h2>
            <p className="text-cream/80 text-lg leading-relaxed">
              {t('products.ctaBody')}
            </p>
            <div className="mt-8">
              <a
                href="mailto:inquiries@vietagri.co"
                className="inline-flex items-center justify-center px-8 py-3 bg-transparent border border-gold-warm text-gold-warm hover:bg-gold-warm hover:text-carbon rounded-full font-bold uppercase tracking-wide transition-all duration-300"
              >
                {t('products.btnSecondary')}
              </a>
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <ProductInquiryForm />
          </div>

        </div>
      </div>
    </section>
  );
};

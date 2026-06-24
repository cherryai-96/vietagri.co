import React from 'react';
import { useTranslation } from '../../i18n';

export const ProductCategoryNav: React.FC = () => {
  const { t } = useTranslation();

  const tabs = [
    { id: 'part1', label: t('products.tabExport') },
    { id: 'beverages', label: t('products.tabBeverages') },
    { id: 'fruits', label: t('products.tabFruits') },
    { id: 'spices', label: t('products.tabSpices') },
    { id: 'grains', label: t('products.tabGrains') },
    { id: 'superfoods', label: t('products.tabSuperfoods') },
    { id: 'part2', label: t('products.tabInputs') },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="categories" className="sticky top-[72px] md:top-[88px] z-40 bg-white/90 backdrop-blur-md border-b border-carbon/10 shadow-sm py-4">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex overflow-x-auto hide-scrollbar gap-2 pb-2 -mb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className="whitespace-nowrap px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border border-carbon/10 text-carbon hover:bg-forest hover:text-white hover:border-forest"
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

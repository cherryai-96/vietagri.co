import React, { useState, useEffect } from 'react';
import { useTranslation } from '../../i18n';

export const ProductCategoryNav: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('part1');

  const tabs = [
    { id: 'part1', label: t('products.tabExport') },
    { id: 'beverages', label: t('products.tabBeverages') },
    { id: 'fruits', label: t('products.tabFruits') },
    { id: 'spices', label: t('products.tabSpices') },
    { id: 'grains', label: t('products.tabGrains') },
    { id: 'superfoods', label: t('products.tabSuperfoods') },
    { id: 'inputs', label: t('products.tabInputs') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = tabs.map(tab => document.getElementById(tab.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveTab(tabs[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tabs]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 120,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="sticky top-[68px] md:top-[88px] z-40 bg-cream/95 backdrop-blur-md border-b border-black/5 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <ul className="flex overflow-x-auto hide-scrollbar py-4 gap-2 md:gap-4 items-center" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {tabs.map((tab) => (
            <li key={tab.id} className="shrink-0">
              <button
                onClick={() => scrollTo(tab.id)}
                className={`font-sans text-xs md:text-sm font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-forest text-cream shadow-md'
                    : 'bg-transparent text-carbon/60 hover:bg-black/5 hover:text-carbon'
                }`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

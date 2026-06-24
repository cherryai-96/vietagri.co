import React from 'react';
import { useTranslation } from '../../i18n';
import { motion } from 'framer-motion';

interface ProductInputCardProps {
  id: string;
  image: string;
  titleKey: string;
  descKey: string;
  benefitsKeys: string[];
}

export const ProductInputCard: React.FC<ProductInputCardProps> = ({
  id,
  image,
  titleKey,
  descKey,
  benefitsKeys,
}) => {
  const { t } = useTranslation();

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="bg-brown-soil/5 border border-brown-soil/10 rounded-3xl overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-shadow duration-300"
    >
      <div className="w-full md:w-2/5 lg:w-1/3 h-64 md:h-auto relative overflow-hidden">
        <img
          src={image}
          alt={t(titleKey)}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      
      <div className="w-full md:w-3/5 lg:w-2/3 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
        <h3 className="font-serif font-bold text-2xl md:text-3xl text-carbon mb-4">
          {t(titleKey)}
        </h3>
        
        <p className="font-sans font-light text-carbon/70 text-base md:text-lg leading-relaxed mb-8">
          {t(descKey)}
        </p>
        
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
          {benefitsKeys.map((benKey, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-forest mt-2.5 shrink-0" />
              <span className="font-light text-carbon/80 text-sm">{t(benKey)}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

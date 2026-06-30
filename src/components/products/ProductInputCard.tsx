import React from 'react';
import { useTranslation } from '../../i18n';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductInputCardProps {
  id: string;
  image: string;
  titleKey: string;
  descKey: string;
  benefitsKeys: string[];
  index: number;
}

export const ProductInputCard: React.FC<ProductInputCardProps> = ({
  id,
  image,
  titleKey,
  descKey,
  benefitsKeys,
  index,
}) => {
  const { t } = useTranslation();

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-brown-soil/5 border border-brown-soil/10 rounded-2xl overflow-hidden flex flex-col hover:shadow-lg transition-all duration-500 group bento-card"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={t(titleKey)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brown-soil/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col gap-4 flex-grow">
        <div className="w-10 h-1 bg-forest-leaf" />

        <h3 className="font-serif font-bold text-xl md:text-2xl text-forest">
          {typeof t(titleKey) === 'string' ? t(titleKey).replace(/^Bio\.SoilZ:\s*/i, '') : t(titleKey)}
        </h3>

        <p className="font-sans font-light text-carbon/70 text-sm leading-relaxed">
          {t(descKey)}
        </p>

        <ul className="flex flex-col gap-3 mt-2">
          {benefitsKeys.map((benKey, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-forest-fresh mt-0.5 shrink-0" />
              <span className="font-sans font-light text-carbon/75 text-sm leading-relaxed">{t(benKey)}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

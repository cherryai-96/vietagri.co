import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface ProductInputCardProps {
  title: string;
  image: string;
  description: string;
  benefits: string[];
}

export const ProductInputCard: React.FC<ProductInputCardProps> = ({
  title,
  image,
  description,
  benefits,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="bg-ivory/50 rounded-3xl overflow-hidden border border-brown-soil/20 shadow-sm flex flex-col md:flex-row group"
    >
      <div className="w-full md:w-2/5 lg:w-1/3 relative h-64 md:h-auto overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-forest/80 to-transparent opacity-60"></div>
      </div>

      <div className="w-full md:w-3/5 lg:w-2/3 p-6 md:p-8 flex flex-col justify-center relative">
        <h3 className="font-serif text-2xl font-bold text-forest mb-4 leading-tight">{title}</h3>
        
        <p className="text-carbon/80 text-sm leading-relaxed mb-6">
          {description}
        </p>

        <div className="space-y-3">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="mt-1 bg-gold-warm/20 p-1 rounded-full shrink-0">
                <Check size={12} className="text-forest" />
              </div>
              <span className="text-sm text-carbon/90 leading-relaxed font-medium">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

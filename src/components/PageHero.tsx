import React from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
}

export const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, image }) => {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center bg-carbon text-cream pt-32 pb-16 px-4 md:px-8">
      <div className="absolute inset-0 z-0 opacity-40">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/80 to-carbon/30 z-[1]" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center gap-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wide text-gold-champagne drop-shadow-md whitespace-pre-line"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-cream/90 font-medium leading-relaxed drop-shadow-sm max-w-4xl px-4 whitespace-pre-line"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
};

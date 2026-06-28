import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CallToActionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  link?: string;
}

export const CallToAction: React.FC<CallToActionProps> = ({ title, subtitle, buttonText, link = "/contact" }) => {
  return (
    <section className="py-24 bg-carbon border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gold-warm/5 via-carbon to-carbon"></div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-cream mb-6 max-w-2xl mx-auto">{title}</h2>
        <p className="text-cream/80 font-sans text-lg mb-10">{subtitle}</p>
        <Link
          to={link}
          className="inline-flex items-center gap-2 bg-gold-warm hover:bg-gold-champagne text-brown-soil px-8 py-4 rounded font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-gold-warm/20 group hover:scale-105"
        >
          <span>{buttonText}</span>
          <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
        </Link>
      </div>
    </section>
  );
};

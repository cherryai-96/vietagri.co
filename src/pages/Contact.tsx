import React, { useState } from 'react';
import { useTranslation } from '../i18n';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Globe, 
  CheckCircle2, 
  AlertCircle, 
  Building2, 
  Send
} from 'lucide-react';

interface FormData {
  fullName: string;
  jobTitle: string;
  companyName: string;
  email: string;
  phone: string;
  destination: string;
  interests: string[];
  department: string;
  projectDetails: string;
}

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    jobTitle: '',
    companyName: '',
    email: '',
    phone: '',
    destination: '',
    interests: [],
    department: 'sourcing',
    projectDetails: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckboxChange = (interestValue: string) => {
    setFormData(prev => {
      const isSelected = prev.interests.includes(interestValue);
      const updatedInterests = isSelected
        ? prev.interests.filter(i => i !== interestValue)
        : [...prev.interests, interestValue];
      return { ...prev, interests: updatedInterests };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Mock API post request
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        jobTitle: '',
        companyName: '',
        email: '',
        phone: '',
        destination: '',
        interests: [],
        department: 'sourcing',
        projectDetails: '',
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font-sans overflow-hidden bg-cream text-carbon">
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-carbon text-cream pt-32 pb-16 px-4 md:px-8">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: `url('/images/contact-hero-bg.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/60 to-carbon/20" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4"
          >
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-gold-champagne bg-forest/40 border border-gold-warm/20 px-4 py-1.5 rounded-full self-center flex items-center gap-2">
              <Globe size={14} className="text-gold-warm animate-spin-slow" />
              B2B Portal & Sourcing Desk
            </span>
            <h1 className="font-serif text-balance text-[2.25rem] leading-[1.1] sm:text-[3rem] md:text-5xl lg:text-6xl font-bold leading-tight tracking-wide text-gold-champagne"><span dangerouslySetInnerHTML={{ __html: t('contact.heroTitle') }} /></h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-sm md:text-xl text-cream/85 max-w-3xl font-light leading-relaxed"
          ><span dangerouslySetInnerHTML={{ __html: t('contact.heroSub') }} /></motion.p>
        </div>
      </section>

      {/* Main Grid: Info Cards and B2B Consultation Form */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Contact info and hours */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold text-gold-antique uppercase tracking-widest">
                Global Operations
              </span>
              <h2 className="font-serif text-balance text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl font-bold text-forest"><span dangerouslySetInnerHTML={{ __html: t('contact.introTitle') }} /></h2>
              <p className="text-sm text-carbon/75 font-light leading-relaxed">
                {t('contact.introDesc')}
              </p>
            </div>

            {/* Headquarters Card */}
            <div className="bg-ivory border border-gold-warm/15 rounded-xl p-8 flex flex-col gap-6 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-forest flex items-center gap-3 border-b border-gold-warm/25 pb-3">
                <Building2 className="text-gold-warm shrink-0" size={24} />
                {t('contact.headquarters')}
              </h3>
              
              <div className="flex flex-col gap-5 text-sm font-light text-carbon/80">
                <div className="flex items-start gap-4">
                  <MapPin size={18} className="text-gold-warm shrink-0 mt-1" />
                  <span>{t('common.address')}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone size={18} className="text-gold-warm shrink-0" />
                  <a href="tel:+84858741968" className="hover:text-gold-antique transition-colors font-mono">
                    {t('common.phone')}
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail size={18} className="text-gold-warm shrink-0" />
                  <a href="mailto:inquiries@vietagri.com" className="hover:text-gold-antique transition-colors">
                    {t('common.email')}
                  </a>
                </div>
                <div className="flex items-start gap-4">
                  <Clock size={18} className="text-gold-warm shrink-0 mt-0.5" />
                  <span>{t('common.hours')}</span>
                </div>
              </div>
            </div>

            {/* Follow Us Social Icons */}
            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-widest text-carbon/60 font-semibold">{t('contact.followUs')}</span>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-ivory hover:bg-gold-warm/15 rounded-full border border-gold-warm/20 text-forest hover:text-gold-antique transition-all duration-300 flex items-center justify-center shadow-sm"
                  title="Zalo"
                >
                  <span className="font-bold text-[12px] leading-none tracking-wide h-[18px] flex items-center">Zalo</span>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-ivory hover:bg-gold-warm/15 rounded-full border border-gold-warm/20 text-forest hover:text-gold-antique transition-all duration-300 flex items-center justify-center shadow-sm"
                  title="Facebook"
                >
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-ivory hover:bg-gold-warm/15 rounded-full border border-gold-warm/20 text-forest hover:text-gold-antique transition-all duration-300 flex items-center justify-center shadow-sm"
                  title="WhatsApp"
                >
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.015 2.016c-5.508 0-9.98 4.475-9.98 9.982 0 1.758.458 3.473 1.328 4.985L2 21.993l5.166-1.354c1.472.825 3.14 1.259 4.849 1.259 5.506 0 9.98-4.473 9.98-9.98 0-2.668-1.039-5.176-2.923-7.06A9.92 9.92 0 0 0 12.015 2.016zm5.474 14.18c-.223.633-1.282 1.218-1.782 1.282-.469.06-1.127.135-3.66-1.012-3.064-1.388-5.02-4.526-5.174-4.734-.153-.207-1.233-1.644-1.233-3.136 0-1.492.776-2.227 1.054-2.525.277-.297.6-.372.798-.372.199 0 .398.004.576.012.185.008.432-.07.67.509.248.601.848 2.072.922 2.222.074.15.124.323.025.52-.099.198-.149.322-.298.496-.149.174-.314.372-.447.505-.15.148-.306.31-.132.611.173.3.771 1.277 1.637 2.046 1.116.99 2.062 1.298 2.36 1.447.297.149.472.124.646-.075.173-.198.744-.868.942-1.165.198-.297.397-.247.67-.148.273.099 1.737.818 2.034.967.297.149.496.223.57.347.075.124.075.719-.148 1.352z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-ivory hover:bg-gold-warm/15 rounded-full border border-gold-warm/20 text-forest hover:text-gold-antique transition-all duration-300 flex items-center justify-center shadow-sm"
                  title="Telegram"
                >
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.666 8.358-1.956 9.215c-.145.656-.537.818-1.084.508l-3-2.21-1.446 1.394a.553.553 0 0 1-.442.217l.215-3.05 5.56-5.023c.241-.215-.054-.334-.373-.122l-6.87 4.325-2.955-.923c-.643-.203-.655-.643.135-.953l11.536-4.444c.535-.198 1.002.128.83 1.066z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-ivory border border-gold-warm/15 rounded-2xl p-8 md:p-12 shadow-sm">
            <h3 className="font-serif text-3xl font-bold text-forest mb-6"><span dangerouslySetInnerHTML={{ __html: t('contact.formTitle') }} /></h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              {/* Submission Alert */}
              <AnimatePresence mode="wait">
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-forest/10 border border-forest/20 rounded-lg text-forest flex items-start gap-3 text-sm"
                  >
                    <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
                    <span>{t('common.success')}</span>
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-700 flex items-start gap-3 text-sm"
                  >
                    <AlertCircle size={18} className="shrink-0 mt-0.5" />
                    <span>{t('common.error')}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Department Routing */}
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase font-semibold tracking-wider text-carbon/70">
                  Target Trade Desk *
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  className="w-full bg-cream border border-gold-warm/30 rounded px-4 py-3 text-sm focus:outline-none focus:border-gold-warm transition-colors"
                >
                  <option value="sourcing">Sourcing & Logistics Desk</option>
                  <option value="contract">Contract Farming & Joint Ventures Desk</option>
                  <option value="commercial">General Commercial / Export Logistics</option>
                </select>
              </div>

              {/* Standard Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase font-semibold tracking-wider text-carbon/70">
                    {t('contact.fullName')}
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full bg-cream border rounded px-4 py-3 text-sm focus:outline-none focus:border-gold-warm transition-colors ${
                      errors.fullName ? 'border-red-500' : 'border-gold-warm/30'
                    }`}
                  />
                  {errors.fullName && <span className="text-xs text-red-500">{errors.fullName}</span>}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase font-semibold tracking-wider text-carbon/70"><span dangerouslySetInnerHTML={{ __html: t('contact.jobTitle') }} /></label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    className="w-full bg-cream border border-gold-warm/30 rounded px-4 py-3 text-sm focus:outline-none focus:border-gold-warm transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase font-semibold tracking-wider text-carbon/70">
                    {t('contact.companyName')}
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className={`w-full bg-cream border rounded px-4 py-3 text-sm focus:outline-none focus:border-gold-warm transition-colors ${
                      errors.companyName ? 'border-red-500' : 'border-gold-warm/30'
                    }`}
                  />
                  {errors.companyName && <span className="text-xs text-red-500">{errors.companyName}</span>}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase font-semibold tracking-wider text-carbon/70">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full bg-cream border rounded px-4 py-3 text-sm focus:outline-none focus:border-gold-warm transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gold-warm/30'
                    }`}
                  />
                  {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase font-semibold tracking-wider text-carbon/70">
                    {t('contact.phone')}
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-cream border border-gold-warm/30 rounded px-4 py-3 text-sm focus:outline-none focus:border-gold-warm transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase font-semibold tracking-wider text-carbon/70">
                    {t('contact.destination')}
                  </label>
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    className="w-full bg-cream border border-gold-warm/30 rounded px-4 py-3 text-sm focus:outline-none focus:border-gold-warm transition-colors"
                  />
                </div>

              </div>

              {/* Interests Multi-Select */}
              <div className="flex flex-col gap-3">
                <label className="text-xs uppercase font-semibold tracking-wider text-carbon/70">
                  {t('contact.interest')}
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { key: 'interest1', label: t('contact.interest1') },
                    { key: 'interest2', label: t('contact.interest2') },
                    { key: 'interest3', label: t('contact.interest3') },
                    { key: 'interest4', label: t('contact.interest4') },
                    { key: 'interest5', label: t('contact.interest5') },
                    { key: 'interest6', label: t('contact.interest6') },
                    { key: 'interest7', label: t('contact.interest7') },
                  ].map((interest) => (
                    <label key={interest.key} className="flex items-start gap-2.5 text-xs text-carbon/80 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest.key)}
                        onChange={() => handleCheckboxChange(interest.key)}
                        className="mt-0.5 accent-forest"
                      />
                      <span>{interest.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase font-semibold tracking-wider text-carbon/70">
                  {t('contact.projectDetails')}
                </label>
                <textarea
                  name="projectDetails"
                  rows={4}
                  placeholder={t('contact.projectPlaceholder')}
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  className="w-full bg-cream border border-gold-warm/30 rounded px-4 py-3 text-sm focus:outline-none focus:border-gold-warm transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-forest hover:bg-forest-leaf disabled:bg-forest/50 text-cream font-semibold py-4 rounded transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer text-xs uppercase tracking-widest shadow-sm mt-2"
              >
                <span>{isSubmitting ? t('common.loading') : t('common.sendInquiry')}</span>
                <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

            </form>
          </div>

        </div>
      </section>



    </div>
  );
};

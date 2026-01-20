'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Screen Replacement',
    description: 'Cracked or shattered screen? We replace it quickly with high-quality parts and a warranty.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
  },
  {
    title: 'Battery Replacement',
    description: 'Is your phone dying quickly? We install premium batteries to restore full power.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="1" y="6" width="18" height="12" rx="2" ry="2"/>
        <line x1="23" y1="13" x2="23" y2="11"/>
        <line x1="7" y1="12" x2="13" y2="12"/>
        <line x1="10" y1="9" x2="10" y2="15"/>
      </svg>
    ),
  },
  {
    title: 'Water Damage Repair',
    description: 'Dropped your phone in water? Our experts can diagnose and repair liquid damage.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
      </svg>
    ),
  },
  {
    title: 'Charging Port Repair',
    description: 'Phone not charging? We fix or replace charging ports to get you powered up again.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    title: 'Button & Component Repair',
    description: 'From home buttons to volume controls, we repair all physical components.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    title: 'Software & Diagnostics',
    description: 'Software issues or need diagnostics? We troubleshoot and fix system problems.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
        <rect x="9" y="9" width="6" height="6"/>
        <line x1="9" y1="1" x2="9" y2="4"/>
        <line x1="15" y1="1" x2="15" y2="4"/>
        <line x1="9" y1="20" x2="9" y2="23"/>
        <line x1="15" y1="20" x2="15" y2="23"/>
        <line x1="20" y1="9" x2="23" y2="9"/>
        <line x1="20" y1="14" x2="23" y2="14"/>
        <line x1="1" y1="9" x2="4" y2="9"/>
        <line x1="1" y1="14" x2="4" y2="14"/>
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8FAFC] to-white" />
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#0066FF]/10 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-[#F5A623]/10 to-transparent rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#0066FF]/10 text-[#0066FF] font-semibold text-sm border border-[#0066FF]/20">
            What We Fix
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1B3A7D]">
            Our Expert Services
          </h2>
          <p className="text-lg sm:text-xl text-[#3A3A3A] max-w-2xl mx-auto">
            Professional repair services for all major phone brands. Fast turnaround, quality parts, and a warranty you can trust.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={scrollToContact}
              className="group cursor-pointer"
            >
              <div className="h-full bg-white rounded-3xl p-8 shadow-lg shadow-[#1B3A7D]/5 border border-[#1B3A7D]/5 hover:shadow-2xl hover:shadow-[#0066FF]/15 hover:border-[#0066FF]/20 transition-all duration-500 relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/5 via-transparent to-[#F5A623]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 space-y-5">
                  {/* Icon */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#1B3A7D] to-[#0066FF] rounded-2xl flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-[#0066FF]/30">
                      {service.icon}
                    </div>
                    <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-[#0066FF] to-[#1B3A7D] rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="font-display text-xl lg:text-2xl font-bold text-[#1B3A7D] group-hover:text-[#0066FF] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-[#3A3A3A] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-[#0066FF] font-bold pt-2 group-hover:gap-4 transition-all duration-300">
                    <span>Book Now</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-[#3A3A3A] text-lg">
            Don&apos;t see your issue?{' '}
            <button
              onClick={scrollToContact}
              className="text-[#0066FF] font-bold hover:text-[#1B3A7D] transition-colors duration-200 underline decoration-2 underline-offset-4 decoration-[#F5A623]"
            >
              Contact us
            </button>{' '}
            for a custom quote.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

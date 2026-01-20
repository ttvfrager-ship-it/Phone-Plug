'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    title: 'Quality Guarantee',
    description: 'All repairs come with a warranty for your peace of mind',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: 'Fast Service',
    description: 'Most repairs completed in under an hour',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    title: 'Expert Technicians',
    description: 'Certified professionals with 10+ years experience',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="7"/>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
      </svg>
    ),
  },
  {
    title: 'Quality Parts',
    description: 'We use only premium, tested replacement parts',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8FAFC] to-white" />
      <motion.div
        animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-40 left-10 w-80 h-80 bg-gradient-to-br from-[#F5A623]/10 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [20, -20, 20], y: [10, -10, 10] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-40 right-10 w-96 h-96 bg-gradient-to-tr from-[#0066FF]/10 to-transparent rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image Area */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main image card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#1B3A7D]/20"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-[#1B3A7D] via-[#0066FF] to-[#1B3A7D] flex items-center justify-center p-12 relative overflow-hidden">
                  {/* Pattern */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '24px 24px'
                  }} />
                  
                  <div className="relative z-10 text-center space-y-6">
                    <div className="w-40 h-40 relative mx-auto">
                      <Image
                        src="/phone-plug-logo.png"
                        alt="The Phone Plug"
                        fill
                        className="object-contain drop-shadow-2xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="font-display text-3xl font-bold text-white">Your Neighborhood</p>
                      <p className="font-display text-4xl font-bold text-[#F5A623]">Phone Experts</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute -bottom-8 -right-8 hidden lg:grid grid-cols-2 gap-4"
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl shadow-xl p-6 text-center border border-[#1B3A7D]/5"
                >
                  <p className="font-accent text-4xl font-bold text-[#0066FF]">10+</p>
                  <p className="text-xs text-[#3A3A3A] font-semibold uppercase tracking-wider mt-1">Years</p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl shadow-xl p-6 text-center border border-[#1B3A7D]/5"
                >
                  <p className="font-accent text-4xl font-bold text-[#F5A623]">5k+</p>
                  <p className="text-xs text-[#3A3A3A] font-semibold uppercase tracking-wider mt-1">Happy Clients</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div className="space-y-6">
              <span className="inline-block px-4 py-2 rounded-full bg-[#0066FF]/10 text-[#0066FF] font-semibold text-sm border border-[#0066FF]/20">
                About Us
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1B3A7D] leading-[1.1]">
                Garden City&apos;s Trusted{' '}
                <span className="text-[#0066FF]">Repair Experts</span>
              </h2>
              <p className="text-lg text-[#3A3A3A] leading-relaxed">
                At The Phone Plug, we&apos;ve been serving Garden City and surrounding areas for over a decade. Our mission is simple: provide <span className="text-[#1B3A7D] font-semibold">fast, reliable, and affordable</span> phone repair services that get you back to your life quickly.
              </p>
              <p className="text-lg text-[#3A3A3A] leading-relaxed">
                Whether it&apos;s a cracked screen, battery replacement, or water damage repair, our certified technicians have the expertise to handle any issue.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 4 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0066FF]/10 to-[#F5A623]/10 rounded-xl flex items-center justify-center text-[#0066FF] group-hover:from-[#0066FF]/20 group-hover:to-[#F5A623]/20 transition-all duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display text-lg font-bold text-[#1B3A7D]">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#3A3A3A]">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div whileHover={{ x: 4 }} className="pt-4">
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-3 text-[#0066FF] font-bold text-lg hover:text-[#1B3A7D] transition-colors duration-200"
              >
                <span className="underline decoration-2 underline-offset-4 decoration-[#F5A623]">Schedule your repair today</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

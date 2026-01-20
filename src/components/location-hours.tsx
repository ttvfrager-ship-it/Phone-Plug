'use client';

import { motion } from 'framer-motion';

const hours = [
  { day: 'Monday', time: '9:00 AM - 7:00 PM' },
  { day: 'Tuesday', time: '9:00 AM - 7:00 PM' },
  { day: 'Wednesday', time: '9:00 AM - 7:00 PM' },
  { day: 'Thursday', time: '9:00 AM - 7:00 PM' },
  { day: 'Friday', time: '9:00 AM - 7:00 PM' },
  { day: 'Saturday', time: '10:00 AM - 6:00 PM' },
  { day: 'Sunday', time: 'Closed' },
];

export function LocationHours() {
  const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
  };

  const currentDay = getCurrentDay();

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh" />
      
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
            Find Us
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1B3A7D]">
            Visit Us Today
          </h2>
          <p className="text-lg sm:text-xl text-[#3A3A3A]">
            Conveniently located in Garden City — Stop by for a free diagnostic
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="lg:-mt-4"
          >
            <div className="h-full bg-gradient-to-br from-[#1B3A7D] via-[#0066FF] to-[#1B3A7D] rounded-3xl p-8 lg:p-10 text-white shadow-2xl shadow-[#1B3A7D]/30 relative overflow-hidden">
              {/* Pattern */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '24px 24px'
              }} />
              
              <div className="relative z-10 space-y-6">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-display text-2xl font-bold">Location</h3>
                  <p className="text-xl leading-relaxed text-white/90">
                    695 Inkster Rd<br />
                    Garden City, MI 48135
                  </p>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://maps.google.com/?q=695+Inkster+Rd,+Garden+City,+MI+48135"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 bg-white text-[#1B3A7D] px-6 py-3 rounded-xl font-bold transition-all duration-200 shadow-lg"
                  >
                    Get Directions
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -8 }}
          >
            <div className="h-full bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-[#1B3A7D]/5 border border-[#1B3A7D]/5">
              <div className="space-y-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#F5A623] to-[#FF8C00] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#F5A623]/30">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-display text-2xl font-bold text-[#1B3A7D]">Call Us</h3>
                  <p className="font-accent text-3xl font-bold text-[#0066FF]">(313) 245-2200</p>
                  <p className="text-[#3A3A3A] leading-relaxed">
                    Call for immediate assistance or to schedule an appointment.
                  </p>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="tel:+13132452200"
                    className="block w-full text-center bg-gradient-to-r from-[#0066FF] to-[#1B3A7D] text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-[#0066FF]/25"
                  >
                    Call Now
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hours Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8 }}
          >
            <div className="h-full bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-[#1B3A7D]/5 border border-[#1B3A7D]/5">
              <div className="space-y-6">
                <div className="w-14 h-14 bg-[#0066FF]/10 rounded-2xl flex items-center justify-center text-[#0066FF]">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-display text-2xl font-bold text-[#1B3A7D]">Hours</h3>
                  <div className="space-y-2">
                    {hours.map((item, index) => (
                      <div
                        key={index}
                        className={`flex justify-between py-2.5 px-3 rounded-lg transition-colors ${
                          item.day === currentDay
                            ? 'bg-gradient-to-r from-[#0066FF]/10 to-[#F5A623]/10 text-[#0066FF] font-bold'
                            : 'text-[#3A3A3A] hover:bg-[#F8FAFC]'
                        }`}
                      >
                        <span>{item.day}</span>
                        <span className="font-accent">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

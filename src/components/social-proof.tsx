'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const reviews = [
  {
    name: 'Sarah Johnson',
    rating: 5,
    text: 'Amazing service! They fixed my iPhone screen in less than an hour. The quality is perfect and the price was very reasonable.',
    date: '2 weeks ago',
    avatar: 'SJ',
  },
  {
    name: 'Michael Chen',
    rating: 5,
    text: 'Best phone repair shop in Garden City! Very professional and honest. They saved my phone after water damage.',
    date: '1 month ago',
    avatar: 'MC',
  },
  {
    name: 'Emily Rodriguez',
    rating: 5,
    text: 'Quick turnaround, excellent customer service, and my phone works like new. Highly recommend The Phone Plug!',
    date: '3 weeks ago',
    avatar: 'ER',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function SocialProof() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC]" />
      
      {/* Decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 left-10 w-64 h-64 border border-[#0066FF]/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-20 right-10 w-48 h-48 border border-[#F5A623]/10 rounded-full"
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
          {/* Stars */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="flex items-center justify-center gap-1 mb-6"
          >
            {[...Array(5)].map((_, i) => (
              <motion.svg
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="w-8 h-8 text-[#F5A623]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </motion.svg>
            ))}
          </motion.div>
          
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1B3A7D]">
            Trusted by Thousands
          </h2>
          <p className="text-lg sm:text-xl text-[#3A3A3A]">
            500+ five-star reviews from happy customers in Garden City
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="h-full bg-white rounded-3xl p-8 shadow-lg shadow-[#1B3A7D]/5 border border-[#1B3A7D]/5 hover:shadow-2xl hover:shadow-[#0066FF]/10 hover:border-[#0066FF]/20 transition-all duration-500 relative overflow-hidden">
                {/* Quote decoration */}
                <div className="absolute top-6 right-6 text-[#0066FF]/10 text-8xl font-serif leading-none">"</div>
                
                <div className="relative z-10 space-y-5">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[#F5A623]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-[#3A3A3A] leading-relaxed text-lg">
                    &ldquo;{review.text}&rdquo;
                  </p>

                  {/* Reviewer Info */}
                  <div className="pt-5 border-t border-[#1B3A7D]/10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1B3A7D] to-[#0066FF] flex items-center justify-center text-white font-bold shadow-lg">
                      {review.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-[#1B3A7D]">{review.name}</p>
                      <p className="text-sm text-[#3A3A3A]/60">{review.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Google Reviews CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              asChild
              variant="outline"
              className="border-2 border-[#1B3A7D]/20 hover:border-[#0066FF] text-[#1B3A7D] hover:text-[#0066FF] px-8 py-6 rounded-full font-bold text-lg transition-all duration-300 group"
            >
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </span>
                Read All Google Reviews
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 lg:py-32 scroll-mt-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B3A7D] via-[#0066FF]/90 to-[#1B3A7D]" />
      
      {/* Animated background elements */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-20 w-96 h-96 bg-[#F5A623] rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 0.8, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 left-20 w-80 h-80 bg-white rounded-full blur-3xl"
      />
      
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
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
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white font-semibold text-sm border border-white/20 backdrop-blur-sm">
            Get Started
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Book Your Repair
          </h2>
          <p className="text-lg sm:text-xl text-white/80">
            Fill out the form and we&apos;ll get back to you within the hour
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form - Using FormSubmit.co */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl">
              {!isSubmitted ? (
                <form
                  action="https://formsubmit.co/frager201@gmail.com"
                  method="POST"
                  className="space-y-6"
                  onSubmit={() => setIsSubmitted(true)}
                >
                  {/* FormSubmit configuration */}
                  <input type="hidden" name="_subject" value="New Repair Request from Website" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value="https://03b37b94-67bd-4662-a008-4a23d8733028.canvases.tempo.build" />

                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#1B3A7D] font-semibold text-sm">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="border-2 border-[#1B3A7D]/10 focus:border-[#0066FF] rounded-xl py-6 px-4 text-base transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#1B3A7D] font-semibold text-sm">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="border-2 border-[#1B3A7D]/10 focus:border-[#0066FF] rounded-xl py-6 px-4 text-base font-accent transition-all duration-300"
                      placeholder="(313) 555-0123"
                    />
                  </div>

                  {/* Device Type Field */}
                  <div className="space-y-2">
                    <Label htmlFor="device" className="text-[#1B3A7D] font-semibold text-sm">
                      Device Type
                    </Label>
                    <Input
                      id="device"
                      name="device"
                      type="text"
                      required
                      className="border-2 border-[#1B3A7D]/10 focus:border-[#0066FF] rounded-xl py-6 px-4 text-base transition-all duration-300"
                      placeholder="iPhone 15 Pro, Samsung Galaxy S24..."
                    />
                  </div>

                  {/* Issue Description Field */}
                  <div className="space-y-2">
                    <Label htmlFor="issue" className="text-[#1B3A7D] font-semibold text-sm">
                      Describe Your Issue
                    </Label>
                    <Textarea
                      id="issue"
                      name="issue"
                      required
                      className="border-2 border-[#1B3A7D]/10 focus:border-[#0066FF] rounded-xl py-4 px-4 text-base min-h-[120px] resize-none transition-all duration-300"
                      placeholder="Cracked screen, battery draining fast, water damage..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#0066FF] to-[#1B3A7D] hover:from-[#1B3A7D] hover:to-[#0066FF] text-white py-7 text-lg font-bold rounded-xl shadow-xl shadow-[#0066FF]/25 hover:shadow-2xl hover:shadow-[#0066FF]/35 transition-all duration-300"
                    >
                      Request Free Quote
                    </Button>
                  </motion.div>

                  <p className="text-sm text-[#3A3A3A]/70 text-center">
                    We&apos;ll respond within the hour during business hours
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center space-y-6"
                >
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#1B3A7D]">
                    Thank You!
                  </h3>
                  <p className="text-lg text-[#3A3A3A]">
                    We&apos;ve received your request and will contact you shortly.
                  </p>
                  <p className="text-sm text-[#3A3A3A]">
                    Need immediate help? Call{' '}
                    <a href="tel:+13132452200" className="text-[#0066FF] font-bold hover:underline">
                      (313) 245-2200
                    </a>
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Info Cards & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Phone Card */}
              <motion.a
                href="tel:+13132452200"
                whileHover={{ scale: 1.02, y: -4 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#F5A623] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-1">Call Us</h3>
                <p className="font-accent text-xl text-[#F5A623] font-bold">(313) 245-2200</p>
              </motion.a>

              {/* Hours Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-1">Hours</h3>
                <p className="text-white/80 text-sm">Mon-Fri: 9AM - 7PM</p>
                <p className="text-white/80 text-sm">Sat: 10AM - 6PM</p>
              </motion.div>
            </div>

            {/* Map */}
            <div className="relative rounded-2xl overflow-hidden h-[350px] border-4 border-white/20 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.5!2d-83.294!3d42.325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b35f5c7f5a001%3A0x1234567890!2s695+Inkster+Rd%2C+Garden+City%2C+MI+48135!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Phone Plug Location"
              />
              
              {/* Map Overlay */}
              <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display font-bold text-[#1B3A7D]">695 Inkster Rd</h3>
                    <p className="text-sm text-[#3A3A3A]">Garden City, MI 48135</p>
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://maps.google.com/?q=695+Inkster+Rd,+Garden+City,+MI+48135"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 bg-gradient-to-r from-[#0066FF] to-[#1B3A7D] text-white font-bold rounded-xl text-sm shadow-lg"
                  >
                    Directions
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

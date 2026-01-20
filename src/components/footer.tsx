'use client';

import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#1B3A7D] to-[#0A1628]" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/phone-plug-logo.png"
                alt="The Phone Plug"
                width={180}
                height={50}
                className="brightness-0 invert"
              />
            </Link>
            <p className="text-white/70 leading-relaxed">
              Garden City&apos;s trusted phone repair experts. Fast, reliable, and affordable service since 2014.
            </p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                <svg className="w-4 h-4 text-[#F5A623]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span className="text-sm text-white/80">Warranty Included</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-display text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {['Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-white/70 hover:text-[#F5A623] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] group-hover:bg-[#F5A623] transition-colors" />
                    {item}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white/70 hover:text-[#F5A623] transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] group-hover:bg-[#F5A623] transition-colors" />
                  Book Repair
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="font-display text-lg font-bold text-white">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Screen Replacement',
                'Battery Replacement',
                'Water Damage Repair',
                'Charging Port Repair',
                'Button & Component',
                'Software & Diagnostics'
              ].map((service) => (
                <li key={service} className="text-white/70 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-display text-lg font-bold text-white">Get in Touch</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=695+Inkster+Rd,+Garden+City,+MI+48135"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/70 hover:text-white transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0066FF]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0066FF]/30 transition-colors">
                    <svg className="w-5 h-5 text-[#0066FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">695 Inkster Rd</p>
                    <p>Garden City, MI 48135</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:+13132452200"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F5A623]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F5A623]/30 transition-colors">
                    <svg className="w-5 h-5 text-[#F5A623]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </div>
                  <span className="font-accent text-xl font-bold">(313) 245-2200</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div className="text-sm">
                  <p>Mon-Fri: 9AM - 7PM</p>
                  <p>Sat: 10AM - 6PM</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © {currentYear} The Phone Plug. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <svg className="w-4 h-4 text-[#F5A623]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span>Certified Technicians</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/30" />
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <svg className="w-4 h-4 text-[#0066FF]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span>Warranty Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

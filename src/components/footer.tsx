'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Shield, Award } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B3A7D] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
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
            <p className="text-white/80 leading-relaxed">
              Garden City's trusted phone repair experts. Fast, reliable, and affordable service since 2014.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#0066FF]" />
                <span className="text-sm">Warranty Included</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-bold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  Book Repair
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-bold">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-white/80">Screen Replacement</li>
              <li className="text-white/80">Battery Replacement</li>
              <li className="text-white/80">Water Damage Repair</li>
              <li className="text-white/80">Charging Port Repair</li>
              <li className="text-white/80">Button & Component Repair</li>
              <li className="text-white/80">Software & Diagnostics</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-bold">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-1" />
                <a
                  href="https://maps.google.com/?q=695+Inkster+Rd,+Garden+City,+MI+48135"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  695 Inkster Rd<br />
                  Garden City, MI 48135
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#0066FF] flex-shrink-0" />
                <a
                  href="tel:+13132452200"
                  className="font-accent text-lg text-white/80 hover:text-white transition-colors duration-200"
                >
                  (313) 245-2200
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-1" />
                <div className="text-white/80">
                  <p>Mon-Fri: 9:00 AM - 7:00 PM</p>
                  <p>Sat: 10:00 AM - 6:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} The Phone Plug. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#0066FF]" />
                <span className="text-white/60 text-sm">Certified Technicians</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#0066FF]" />
                <span className="text-white/60 text-sm">Warranty Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

'use client';

import { Shield, Clock, Award, Wrench } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description: 'All repairs come with a warranty for your peace of mind',
  },
  {
    icon: Clock,
    title: 'Fast Service',
    description: 'Most repairs completed in under an hour',
  },
  {
    icon: Award,
    title: 'Expert Technicians',
    description: 'Certified professionals with 10+ years experience',
  },
  {
    icon: Wrench,
    title: 'Quality Parts',
    description: 'We use only high-quality, tested replacement parts',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left - Image Area */}
          <div className="relative order-2 lg:order-1 animate-in slide-in-from-left duration-700">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 group">
              {/* Abstract Gradient Presentation since we don't have images */}
              <div className="aspect-[4/3] bg-gradient-to-br from-primary via-background to-accent flex items-center justify-center p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20 mix-blend-overlay" />

                <div className="relative z-10 text-center space-y-6 transform group-hover:scale-105 transition-transform duration-500">
                  <Shield className="w-32 h-32 mx-auto text-white/20" />
                  <div className="space-y-2">
                    <p className="font-display text-4xl font-bold text-white tracking-tight">Your Local</p>
                    <p className="font-display text-5xl font-bold text-white tracking-tight">Tech Experts</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-12 -right-12 hidden lg:grid grid-cols-2 gap-6 p-4">
              <div className="bg-card/90 backdrop-blur-md rounded-2xl shadow-xl p-6 text-center border border-primary/10 hover:-translate-y-2 transition-transform duration-300">
                <p className="font-accent text-5xl font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider mt-2">Years</p>
              </div>
              <div className="bg-card/90 backdrop-blur-md rounded-2xl shadow-xl p-6 text-center border border-primary/10 hover:-translate-y-2 transition-transform duration-300 delay-100">
                <p className="font-accent text-5xl font-bold text-accent">5k+</p>
                <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider mt-2">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-10 order-1 lg:order-2 animate-in slide-in-from-right duration-700">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary font-medium text-sm">
                About Us
              </div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1]">
                Garden City's Trusted <br />
                <span className="text-primary">Phone Repair Experts</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At The Phone Plug, we've been serving Garden City and surrounding areas for over a decade. Our mission is simple: provide <span className="text-foreground font-semibold">fast, reliable, and affordable</span> phone repair services that get you back to your life quickly.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether it's a cracked screen, battery replacement, or water damage repair, our certified technicians have the expertise to handle any issue. We use only high-quality parts and stand behind our work with a comprehensive warranty.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="pt-6">
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-2 text-primary font-bold text-lg hover:text-accent transition-colors duration-200"
              >
                <span className="underline decoration-2 underline-offset-4">Schedule your repair today</span>
                <Award className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

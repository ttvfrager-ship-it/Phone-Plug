'use client';

import { MapPin, Phone, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Visit Us Today
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Conveniently located in Garden City, Michigan. Stop by for a free diagnostic.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Location Card */}
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-primary via-[#0055DD] to-accent text-primary-foreground transform lg:-translate-y-4">
            <CardContent className="p-10 space-y-8">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-inner">
                <MapPin className="w-8 h-8" />
              </div>
              <div className="space-y-4">
                <h3 className="font-display text-3xl font-bold">Location</h3>
                <p className="text-xl leading-relaxed opacity-90">
                  695 Inkster Rd<br />
                  Garden City, MI 48135
                </p>
                <a
                  href="https://maps.google.com/?q=695+Inkster+Rd,+Garden+City,+MI+48135"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl backdrop-blur-sm transition-all duration-200 border border-white/10"
                >
                  <span className="font-semibold">Get Directions</span>
                  <span>→</span>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Phone Card */}
          <Card className="border-0 shadow-xl bg-card border border-border/50">
            <CardContent className="p-10 space-y-8">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">Contact</h3>
                  <p className="font-accent text-3xl font-bold text-primary">(313) 245-2200</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Call us for immediate assistance or to schedule an appointment. We're here to help!
                </p>
                <a
                  href="tel:+13132452200"
                  className="inline-block w-full text-center bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-4 rounded-xl font-bold transition-all duration-200 shadow-lg shadow-primary/25 hover:shadow-primary/40 active:scale-95"
                >
                  Call Now
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Hours Card */}
          <Card className="border-0 shadow-xl bg-card border border-border/50">
            <CardContent className="p-10 space-y-8">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <div className="space-y-4">
                <h3 className="font-display text-2xl font-bold text-foreground">Hours</h3>
                <div className="space-y-3">
                  {hours.map((item, index) => (
                    <div
                      key={index}
                      className={`flex justify-between py-2 border-b border-border/40 last:border-0 ${item.day === currentDay ? 'text-primary font-bold bg-primary/5 px-2 rounded-lg -mx-2' : 'text-muted-foreground'
                        }`}
                    >
                      <span>{item.day}</span>
                      <span className="font-accent">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

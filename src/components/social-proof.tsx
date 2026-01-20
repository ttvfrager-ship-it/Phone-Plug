'use client';

import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const reviews = [
  {
    name: 'Sarah Johnson',
    rating: 5,
    text: 'Amazing service! They fixed my iPhone screen in less than an hour. The quality is perfect and the price was very reasonable.',
    date: '2 weeks ago',
  },
  {
    name: 'Michael Chen',
    rating: 5,
    text: 'Best phone repair shop in Garden City! Very professional and honest. They saved my phone after water damage.',
    date: '1 month ago',
  },
  {
    name: 'Emily Rodriguez',
    rating: 5,
    text: 'Quick turnaround, excellent customer service, and my phone works like new. Highly recommend The Phone Plug!',
    date: '3 weeks ago',
  },
];

export function SocialProof() {
  return (
    <section className="py-20 lg:py-32 bg-background relative">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 mb-4 animate-in fade-in duration-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            What Our Customers Say
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground w-full">
            Over 500 five-star reviews from satisfied customers.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card hover:bg-card/80 ring-1 ring-border/50"
            >
              <CardContent className="p-8 space-y-6">
                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Quote className="w-6 h-6 text-primary" />
                </div>

                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-foreground/90 leading-relaxed italic text-lg">
                  "{review.text}"
                </p>

                {/* Reviewer Info */}
                <div className="pt-6 border-t border-border flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            className="border-2 border-primary/20 hover:border-primary text-foreground hover:text-primary px-8 py-6 rounded-full font-bold text-lg transition-all duration-300"
          >
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <span className="relative flex h-3 w-3 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Read all Google Reviews
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

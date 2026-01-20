import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { SocialProof } from '@/components/social-proof';
import { About } from '@/components/about';
import { LocationHours } from '@/components/location-hours';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <SocialProof />
        <About />
        <LocationHours />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

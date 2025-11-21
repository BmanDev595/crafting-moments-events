import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import Testimonials from './components/sections/Testimonials';
// Remove Contact import since we're removing it from homepage

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      {/* Contact section removed - homepage ends with Testimonials */}
    </div>
  );
}
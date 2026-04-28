import Hero from './components/Hero';
import BioSection from './components/BioSection';
import AboutSection from './components/AboutSection';
import FullBleedPhoto from './components/FullBleedPhoto';
import ServicesSection from './components/ServicesSection';
import SelectedWorkSection from './components/SelectedWorkSection';
import TestimonialsSection from './components/TestimonialsSection';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <BioSection />
      <AboutSection />
      <FullBleedPhoto />
      <ServicesSection />
      <SelectedWorkSection />
      <TestimonialsSection />
      <NewsSection />
      <Footer />
    </main>
  );
}

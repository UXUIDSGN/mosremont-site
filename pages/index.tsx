import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Reviews from '../components/Reviews';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <div className="bg-bgLight">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Reviews />
      <CTA />
      <Footer />
    </div>
  )
}

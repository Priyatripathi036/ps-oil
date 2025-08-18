import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProductsSection from '@/components/ProductsSection';
import OperationsSection from '@/components/OperationsSection';
import DistributionSection from '@/components/DistributionSection';
import LeadershipSection from '@/components/LeadershipSection';
import InvestmentSection from '@/components/InvestmentSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <OperationsSection />
      <DistributionSection />
      <LeadershipSection />
      <InvestmentSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
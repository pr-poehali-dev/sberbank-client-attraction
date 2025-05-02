
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Process from '@/components/Process';
import FAQ from '@/components/FAQ';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Устанавливаем заголовок страницы при загрузке
  useEffect(() => {
    document.title = 'Разблокировка счетов по 115-ФЗ в Сбербанке | Профессиональная помощь';
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Основной контент */}
      <main>
        <Hero />
        <Features />
        <Process />
        <FAQ />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

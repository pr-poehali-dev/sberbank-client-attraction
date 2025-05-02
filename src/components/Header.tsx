
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import SberLogo from '@/components/ui/SberLogo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };
  
  // Обработка скролла для изменения стиля хедера
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 text-xl font-bold text-primary">
            <SberLogo className="h-8 w-8" />
            <span className="hidden sm:inline">Разблокировка</span>
            <span className="sm:hidden">115-ФЗ</span>
          </div>
          
          {/* Мобильный переключатель меню */}
          <button 
            className="md:hidden p-2 text-gray-500 hover:text-primary"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Десктопное меню */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-primary font-medium"
            >
              Преимущества
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="text-gray-700 hover:text-primary font-medium"
            >
              Как мы работаем
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-primary font-medium"
            >
              FAQ
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="default"
            >
              Связаться
            </Button>
          </nav>
        </div>
        
        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="md:hidden bg-white mt-3 py-4 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-3 px-4">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-gray-700 hover:text-primary py-2 font-medium"
              >
                Преимущества
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="text-gray-700 hover:text-primary py-2 font-medium"
              >
                Как мы работаем
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-gray-700 hover:text-primary py-2 font-medium"
              >
                FAQ
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="default"
                className="w-full mt-2"
              >
                Связаться
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

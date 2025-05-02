
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Разблокировка счетов по 115-ФЗ</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Профессиональная помощь в снятии блокировки счетов в Сбербанке по 115-ФЗ. 
              Конфиденциальность и индивидуальный подход гарантируем.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контактная информация</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <a href="mailto:vali_vali05@mail.ru" className="text-gray-300 hover:text-white transition-colors">
                  vali_vali05@mail.ru
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <a href="tel:+79884306315" className="text-gray-300 hover:text-white transition-colors">
                  +7 (988) 430-63-15
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Все права защищены</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

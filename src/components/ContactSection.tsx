
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="contact">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 bg-primary text-white">
              <h2 className="text-3xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-lg mb-6 text-white/90">
                Оставьте заявку, и наш специалист свяжется с вами в ближайшее время для консультации
              </p>
              
              <div className="space-y-4 mt-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-white/90">vali_vali05@mail.ru</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                  <p className="text-white/90">+7 (988) 430-63-15</p>
                </div>
              </div>
            </div>
            
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Оставить заявку</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

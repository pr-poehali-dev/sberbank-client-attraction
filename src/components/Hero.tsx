
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-blue-900">
            Разблокировка счетов по 115-ФЗ в Сбербанке
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl">
            Быстрое и профессиональное решение проблем с блокировкой счетов по 115-ФЗ
          </p>
          <Button size="lg" className="group" onClick={() => {
            const contactSection = document.getElementById("contact");
            contactSection?.scrollIntoView({ behavior: "smooth" });
          }}>
            Получить консультацию
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

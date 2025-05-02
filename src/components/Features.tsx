
import { Shield, BadgeCheck, Zap } from "lucide-react";

const featuresData = [
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Юридическая защита",
    description: "Полное юридическое сопровождение процесса разблокировки счетов согласно законодательству РФ"
  },
  {
    icon: <BadgeCheck className="h-10 w-10 text-primary" />,
    title: "Опытные специалисты",
    description: "Наши эксперты имеют многолетний опыт успешного решения проблем с блокировкой счетов"
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Быстрый результат",
    description: "Средний срок разблокировки счета составляет от 3 до 14 дней в зависимости от сложности ситуации"
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white" id="features">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Наши преимущества</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

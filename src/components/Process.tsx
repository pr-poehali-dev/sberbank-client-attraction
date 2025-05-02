
import { ClipboardList, UserCheck, FileText, CheckCircle } from "lucide-react";

const stepsData = [
  {
    icon: <ClipboardList className="h-8 w-8 text-primary" />,
    title: "Консультация",
    description: "Бесплатная консультация с экспертом для анализа вашей ситуации"
  },
  {
    icon: <UserCheck className="h-8 w-8 text-primary" />,
    title: "Подготовка документов",
    description: "Сбор и подготовка всех необходимых документов для обжалования"
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Представительство",
    description: "Представление ваших интересов перед банком и контролирующими органами"
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: "Разблокировка",
    description: "Успешное снятие ограничений и восстановление доступа к счету"
  }
];

const Process = () => {
  return (
    <section className="py-16 bg-gray-50" id="process">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Как мы работаем</h2>
        
        <div className="relative">
          {/* Соединительная линия */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 z-0"></div>
          
          <div className="space-y-12 relative z-10">
            {stepsData.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-6">
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-1 md:pl-12'}`}>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                <div className="flex items-center justify-center bg-white rounded-full p-4 border-2 border-primary/20 z-20">
                  {step.icon}
                </div>
                
                {index % 2 === 1 && (
                  <div className="w-full md:w-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

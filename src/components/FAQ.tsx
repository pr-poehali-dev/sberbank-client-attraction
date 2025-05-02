
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Что такое блокировка по 115-ФЗ?",
    answer: "Федеральный закон №115-ФЗ «О противодействии легализации доходов» дает банкам право блокировать счета клиентов при подозрении в отмывании денег или финансировании терроризма. Банк может заблокировать счет, если посчитает операции подозрительными."
  },
  {
    question: "Сколько времени занимает разблокировка счета?",
    answer: "Срок разблокировки счета зависит от сложности ситуации и может составлять от 3 до 30 дней. Наши специалисты стремятся решить проблему в кратчайшие сроки."
  },
  {
    question: "Какие документы потребуются для разблокировки?",
    answer: "Необходимы документы, подтверждающие законность операций: договоры, акты выполненных работ, налоговые декларации, документы о происхождении средств и другие, в зависимости от конкретной ситуации."
  },
  {
    question: "Гарантируете ли вы разблокировку счета?",
    answer: "Мы гарантируем профессиональный подход и использование всех законных методов для разблокировки счета. Успешность решения во многом зависит от конкретной ситуации, но наш опыт позволяет решать большинство случаев положительно."
  },
  {
    question: "Сколько стоят ваши услуги?",
    answer: "Стоимость услуг зависит от сложности дела. После бесплатной консультации мы сможем определить объем работы и предложить оптимальную стоимость. Оплата происходит после достижения результата."
  }
];

const FAQ = () => {
  return (
    <section className="py-16 bg-white" id="faq">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
          Часто задаваемые вопросы
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-medium text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;

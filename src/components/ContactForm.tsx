
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Имя должно содержать минимум 2 символа' }),
  phone: z.string().min(6, { message: 'Введите корректный номер телефона' }),
  email: z.string().email({ message: 'Введите корректный email' }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // В реальном приложении здесь будет отправка на сервер
      // Имитация отправки формы 
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Ошибка при отправке",
        description: "Пожалуйста, попробуйте еще раз позже",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ваше имя</FormLabel>
              <FormControl>
                <Input placeholder="Иван Иванов" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Телефон</FormLabel>
              <FormControl>
                <Input placeholder="+7 (___) ___-__-__" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@mail.ru" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Сообщение (необязательно)</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Опишите вашу ситуацию..." 
                  className="resize-none min-h-[120px]" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Отправка...' : 'Оставить заявку'}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;

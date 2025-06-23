
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Анна К.",
      role: "Основатель IT-стартапа",
      content: "Мария помогла мне справиться с синдромом самозванца и принять важное решение о масштабировании бизнеса. Теперь я действую уверенно и системно.",
      rating: 5
    },
    {
      name: "Дмитрий Л.",
      role: "Владелец логистической компании",
      content: "После работы с Марией перестал принимать импульсивные решения. Научился анализировать свои эмоции и использовать их как ресурс для бизнеса.",
      rating: 5
    },
    {
      name: "Елена М.",
      role: "Консультант по маркетингу",
      content: "Дофаминовая перезагрузка изменила мою жизнь. Больше не заставляю себя работать — действую из внутренней мотивации. Продуктивность выросла в разы.",
      rating: 5
    },
    {
      name: "Игорь С.",
      role: "Предприниматель в e-commerce",
      content: "Мария единственная, кто понял специфику ведения бизнеса в эмиграции. Помогла адаптироваться к новым условиям и найти возможности для роста.",
      rating: 5
    },
    {
      name: "Ольга Т.",
      role: "Владелец сети салонов красоты",
      content: "Работа с подсознательными блоками дала невероятный результат. Смогла выйти из зоны комфорта и открыть новое направление бизнеса.",
      rating: 5
    },
    {
      name: "Максим В.",
      role: "Финансовый консультант",
      content: "Практикум 'Цели и мотивация' помог структурировать мышление. Теперь ставлю реалистичные цели и последовательно их достигаю.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-6">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-forest-700 max-w-3xl mx-auto">
            Реальные истории предпринимателей, которые изменили свой подход к бизнесу
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-forest-100 hover:shadow-lg transition-shadow relative">
              <CardContent className="p-6">
                <Quote className="text-gold-300 mb-4" size={32} />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-gold-500 fill-current" size={16} />
                  ))}
                </div>

                <p className="text-forest-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="border-t border-forest-100 pt-4">
                  <p className="font-semibold text-forest-900">{testimonial.name}</p>
                  <p className="text-forest-600 text-sm">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-forest-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-forest-900 mb-2">100+</div>
                <div className="text-forest-600">успешных клиентов</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-forest-900 mb-2">15+</div>
                <div className="text-forest-600">лет опыта</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-forest-900 mb-2">95%</div>
                <div className="text-forest-600">рекомендуют друзьям</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

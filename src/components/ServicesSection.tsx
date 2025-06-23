
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Clock, Users, Video } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Индивидуальные консультации",
      subtitle: "Для предпринимателей в эмиграции",
      icon: <Users className="text-silver-500" size={32} />,
      format: "Онлайн встречи по 1 часу",
      features: [
        "Поддержка между сессиями",
        "Индивидуальный подход",
        "Практические инструменты",
        "Работа с подсознательными блоками"
      ],
      prices: [
        { sessions: "5 встреч", price: "375€" },
        { sessions: "10 встреч", price: "700€" }
      ],
      highlight: true
    },
    {
      title: "Дофаминовая перезагрузка",
      subtitle: "Как перестать заставлять себя и начать делать",
      icon: <Clock className="text-silver-500" size={32} />,
      format: "2 встречи по 3 часа",
      features: [
        "Естественная мотивация к действиям",
        "Преодоление прокрастинации",
        "Работа с откладыванием решений",
        "Восстановление внутренней энергии"
      ],
      description: "Подходит для тех, кто застрял в прокрастинации и откладывает важные решения"
    },
    {
      title: "Практикум 'Цели и мотивация'",
      subtitle: "Система достижения целей",
      icon: <Video className="text-silver-500" size={32} />,
      format: "32 коротких видео в Telegram",
      features: [
        "2 недели интенсива",
        "Ежедневные практические задания",
        "Система отслеживания прогресса",
        "Поддержка в чате"
      ],
      price: "49,90€ / 4990₽"
    }
  ];

  const scrollToConsultation = () => {
    const element = document.getElementById('consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-forest-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-6">
            Услуги
          </h2>
          <p className="text-xl text-forest-700 max-w-3xl mx-auto">
            Выберите формат работы, который подходит именно вам
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative border-forest-100 hover:shadow-xl transition-all duration-300 ${
                service.highlight ? 'ring-2 ring-silver-500 scale-105' : ''
              }`}
            >
              {service.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-silver-500 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md">
                    Популярный
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-forest-900 mb-2">
                  {service.title}
                </CardTitle>
                <p className="text-forest-600 text-sm">{service.subtitle}</p>
                <div className="bg-forest-100 rounded-lg p-3 mt-4">
                  <p className="text-forest-700 font-medium">{service.format}</p>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-2">
                      <Check className="text-silver-500 mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-forest-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {service.description && (
                  <p className="text-forest-600 text-sm mb-6 italic">
                    {service.description}
                  </p>
                )}

                {service.prices ? (
                  <div className="space-y-3 mb-6">
                    {service.prices.map((priceOption, priceIndex) => (
                      <div key={priceIndex} className="flex justify-between items-center bg-white rounded-lg p-3">
                        <span className="text-forest-700">{priceOption.sessions}</span>
                        <span className="text-2xl font-bold text-forest-900">{priceOption.price}</span>
                      </div>
                    ))}
                  </div>
                ) : service.price ? (
                  <div className="text-center mb-6">
                    <span className="text-3xl font-bold text-forest-900">{service.price}</span>
                  </div>
                ) : null}

                <Button 
                  onClick={scrollToConsultation}
                  className="w-full bg-forest-700 hover:bg-forest-800 text-white"
                >
                  Записаться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-forest-900 mb-4">
              Не знаете, что выбрать?
            </h3>
            <p className="text-forest-700 mb-6">
              Запишитесь на бесплатную диагностическую встречу, 
              и мы определим оптимальный формат работы для ваших задач
            </p>
            <Button 
              onClick={scrollToConsultation}
              size="lg"
              className="bg-silver-500 hover:bg-silver-600 text-white font-semibold px-8"
            >
              Бесплатная диагностика
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

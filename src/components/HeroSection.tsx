
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const HeroSection = () => {
  const scrollToConsultation = () => {
    const element = document.getElementById('consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    "Принимать взвешенные решения в условиях неопределенности",
    "Эффективно управлять эмоциями и стрессом",
    "Строить системный и устойчивый бизнес",
    "Преодолевать внутренние барьеры и ограничения",
    "Находить баланс между работой и личной жизнью"
  ];

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-forest-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-forest-900 leading-tight mb-6 break-words">
              Бизнес-психолог для предпринимателей{" "}
              <span className="gradient-text">в эмиграции</span>
            </h1>
            
            <p className="text-lg md:text-xl text-forest-700 mb-8 leading-relaxed break-words">
              Как принимать взвешенные решения в условиях неопределенности, 
              эффективно управлять эмоциями и строить системный бизнес
            </p>

            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-forest-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-forest-700 break-words">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToConsultation}
                size="lg"
                className="bg-forest-600 hover:bg-forest-700 text-white font-semibold px-8 py-4 text-lg"
              >
                Записаться на бесплатную встречу
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => {
                  const element = document.getElementById('about');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-forest-300 text-forest-700 hover:bg-forest-50 px-8 py-4 text-lg"
              >
                Узнать больше
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-forest-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-forest-600 rounded-full"></div>
                <span>15+ лет в бизнесе</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-forest-600 rounded-full"></div>
                <span>МВА + психология</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-forest-600 rounded-full"></div>
                <span>Онлайн консультации</span>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-left overflow-hidden">
            <div className="relative max-w-sm mx-auto">
              <img
                src="https://taplink.st/a/d/f/c/5/9045ae.jpg?8"
                alt="Мария Тимофеева - бизнес-психолог"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-4 -right-1 bg-white rounded-xl p-3 shadow-xl border border-forest-100 max-w-[120px]">
                <div className="text-center">
                  <div className="text-xl font-bold text-forest-900">100+</div>
                  <div className="text-xs text-forest-600 leading-tight">довольных клиентов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

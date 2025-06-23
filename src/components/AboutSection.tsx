
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, BookOpen, Users, Target } from 'lucide-react';

const AboutSection = () => {
  const credentials = [
    {
      icon: <BookOpen className="text-gold-500" size={24} />,
      title: "Образование",
      description: "Юрфак, МВА (маркетинг, международный бизнес), диплом психфака, бизнес-психология"
    },
    {
      icon: <Award className="text-gold-500" size={24} />,
      title: "Опыт",
      description: "15 лет руководящих позиций, коммерческий директор, понимание бизнеса изнутри"
    },
    {
      icon: <Users className="text-gold-500" size={24} />,
      title: "Специализация",
      description: "Работа с предпринимателями в эмиграции, адаптация в условиях неопределенности"
    },
    {
      icon: <Target className="text-gold-500" size={24} />,
      title: "Уникальность",
      description: "Умение 'слушать слова' и работать с подсознательными блоками"
    }
  ];

  const conditions = [
    "Чтобы вы могли принимать взвешенные решения даже в условиях неопределенности",
    "Чтобы умели эффективно управлять своими эмоциями и не выгорали",
    "Чтобы строили системный бизнес, а не работали 'на износ'",
    "Чтобы видели возможности там, где другие видят только препятствия",
    "Чтобы находили баланс между амбициями и внутренним комфортом"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-6">
            Я создаю условия для предпринимателей
          </h2>
          <p className="text-xl text-forest-700 max-w-3xl mx-auto">
            С пониманием специфики бизнеса и глубокими знаниями психологии 
            помогаю строить устойчивый успех
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="space-y-6">
              {conditions.map((condition, index) => (
                <div key={index} className="flex items-start space-x-4 animate-on-scroll">
                  <div className="bg-gold-100 rounded-full p-2 mt-1">
                    <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                  </div>
                  <p className="text-forest-700 text-lg leading-relaxed">{condition}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {credentials.map((credential, index) => (
              <Card key={index} className="border-forest-100 hover:shadow-lg transition-shadow animate-on-scroll">
                <CardContent className="p-6">
                  <div className="mb-4">{credential.icon}</div>
                  <h3 className="font-semibold text-forest-900 mb-2">{credential.title}</h3>
                  <p className="text-forest-600 text-sm leading-relaxed">{credential.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-forest-50 rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-forest-900 mb-6">
                Почему я понимаю ваши вызовы
              </h3>
              <div className="space-y-4 text-forest-700">
                <p className="text-lg leading-relaxed">
                  <strong>У меня за плечами юрфак, МВА (маркетинг, международный бизнес), 
                  коучинговая академия, диплом психфака, бизнес-психология, 15 лет руководящих позиций.</strong>
                </p>
                <p>
                  Я не просто изучала бизнес в теории — я была коммерческим директором, 
                  принимала сложные решения в условиях неопределенности, знаю, что значит 
                  нести ответственность за результат.
                </p>
                <p>
                  Мой уникальный навык — умение "слушать слова" и работать с подсознательными 
                  блоками, которые мешают принимать правильные решения.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-xl p-8 shadow-lg inline-block">
                <div className="text-4xl font-bold text-forest-900 mb-2">15+</div>
                <div className="text-forest-600 mb-4">лет в бизнесе</div>
                <div className="text-2xl font-bold text-gold-500 mb-2">100+</div>
                <div className="text-forest-600">довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

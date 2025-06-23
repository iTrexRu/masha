
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Calendar } from 'lucide-react';

// Custom Telegram icon (paper plane style)
const TelegramIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
  </svg>
);

// Custom WhatsApp icon (speech bubble with phone)
const WhatsAppIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
  </svg>
);

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Заявка отправлена!",
        description: "Я свяжусь с вами в течение 24 часов для назначения встречи.",
      });
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 1000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="consultation" className="py-20 bg-forest-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-6">
            Записаться на консультацию
          </h2>
          <p className="text-xl text-forest-700 max-w-3xl mx-auto">
            Начните с бесплатной диагностической встречи, чтобы определить 
            оптимальный путь развития вашего бизнеса
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Booking Block */}
          <Card className="border-forest-100 bg-gradient-to-br from-forest-600 to-forest-700 text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-3">
                <Calendar size={32} />
                Записаться
              </CardTitle>
              <p className="text-forest-100">
                Выберите удобное время для встречи в онлайн-календаре
              </p>
            </CardHeader>
            <CardContent>
              <a
                href="https://2meetup.in/mariatimofeeva/1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  className="w-full bg-white text-forest-700 hover:bg-forest-50 font-semibold py-3 rounded-lg"
                >
                  Открыть календарь записи
                </Button>
              </a>
              <div className="mt-4 p-4 bg-white/10 rounded-lg">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Моментальное подтверждение</span>
                </div>
                <div className="flex items-center gap-2 text-sm mt-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Онлайн встреча в Zoom</span>
                </div>
                <div className="flex items-center gap-2 text-sm mt-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Первая встреча бесплатно</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-forest-100">
            <CardHeader>
              <CardTitle className="text-2xl text-forest-900">
                Оставьте заявку
              </CardTitle>
              <p className="text-forest-600">
                Заполните форму, и я свяжусь с вами для назначения встречи
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-forest-700 mb-2">
                    Имя *
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Введите ваше имя"
                    required
                    className="border-forest-200 focus:ring-forest-500 focus:border-forest-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-forest-700 mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="border-forest-200 focus:ring-forest-500 focus:border-forest-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-forest-700 mb-2">
                    Телефон
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="+351 xxx xxx xxx"
                    className="border-forest-200 focus:ring-forest-500 focus:border-forest-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-forest-700 mb-2">
                    Интересующая услуга
                  </label>
                  <Select value={formData.service} onValueChange={(value) => handleChange('service', value)}>
                    <SelectTrigger className="border-forest-200 focus:ring-forest-500 focus:border-forest-500">
                      <SelectValue placeholder="Выберите услугу" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consultation">Бесплатная диагностика</SelectItem>
                      <SelectItem value="individual">Индивидуальные консультации</SelectItem>
                      <SelectItem value="dopamine">Дофаминовая перезагрузка</SelectItem>
                      <SelectItem value="goals">Практикум "Цели и мотивация"</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-forest-700 mb-2">
                    Расскажите о ваших задачах
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Опишите, с какими вызовами вы сталкиваетесь в бизнесе..."
                    rows={4}
                    className="border-forest-200 focus:ring-forest-500 focus:border-forest-500"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-forest-600 hover:bg-forest-700 text-white font-semibold py-3 rounded-lg"
                >
                  {isSubmitting ? "Отправляю..." : "Отправить заявку"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="border-forest-100 bg-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-forest-900 mb-4">
                  Что вас ждет на первой встрече?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-forest-100 rounded-full p-2 mt-1">
                      <div className="w-2 h-2 bg-forest-600 rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-medium text-forest-800">Диагностика текущей ситуации</p>
                      <p className="text-forest-600 text-sm">Выявляем основные вызовы и блоки</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-forest-100 rounded-full p-2 mt-1">
                      <div className="w-2 h-2 bg-forest-600 rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-medium text-forest-800">Определение целей</p>
                      <p className="text-forest-600 text-sm">Формулируем ваши приоритеты</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-forest-100 rounded-full p-2 mt-1">
                      <div className="w-2 h-2 bg-forest-600 rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-medium text-forest-800">План работы</p>
                      <p className="text-forest-600 text-sm">Выбираем оптимальный формат</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-forest-100 bg-gradient-to-br from-forest-700 to-forest-800 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Предпочитаете прямой контакт?
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://t.me/Timofeeva_Mariia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <TelegramIcon size={24} />
                    <div>
                      <p className="font-medium">Telegram</p>
                      <p className="text-sm opacity-80">@Timofeeva_Mariia</p>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/351915200154"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <WhatsAppIcon size={24} />
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <p className="text-sm opacity-80">+351 915 200 154</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;

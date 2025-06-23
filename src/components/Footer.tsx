
import React from 'react';
import { Linkedin, Facebook } from 'lucide-react';

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

const Footer = () => {
  return (
    <footer id="contact" className="bg-forest-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Мария Тимофеева</h3>
            <p className="text-forest-100 mb-4 leading-relaxed">
              Бизнес-психолог для предпринимателей в эмиграции. 
              Помогаю принимать взвешенные решения и строить устойчивый бизнес.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://t.me/Timofeeva_Mariia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver-400 hover:text-silver-300 transition-colors"
              >
                <TelegramIcon size={24} />
              </a>
              <a
                href="https://wa.me/351915200154"
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver-400 hover:text-silver-300 transition-colors"
              >
                <WhatsAppIcon size={24} />
              </a>
              <a
                href="https://linkedin.com/in/matimofeeva"
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver-400 hover:text-silver-300 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://facebook.com/maria.timofeeva.f"
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver-400 hover:text-silver-300 transition-colors"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-silver-400">Услуги</h4>
            <ul className="space-y-2 text-forest-100">
              <li><a href="/#services" className="hover:text-silver-400 transition-colors">Индивидуальные консультации</a></li>
              <li><a href="/#services" className="hover:text-silver-400 transition-colors">Дофаминовая перезагрузка</a></li>
              <li><a href="/#services" className="hover:text-silver-400 transition-colors">Практикум "Цели и мотивация"</a></li>
              <li><a href="/#consultation" className="hover:text-silver-400 transition-colors">Бесплатная диагностика</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-silver-400">Контакты</h4>
            <div className="space-y-2 text-forest-100">
              <p>
                <strong>Telegram:</strong>{" "}
                <a href="https://t.me/Timofeeva_Mariia" className="hover:text-silver-400 transition-colors">
                  @Timofeeva_Mariia
                </a>
              </p>
              <p>
                <strong>WhatsApp:</strong>{" "}
                <a href="https://wa.me/351915200154" className="hover:text-silver-400 transition-colors">
                  +351 915 200 154
                </a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:maria@timofeeva.online" className="hover:text-silver-400 transition-colors">
                  maria@timofeeva.online
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-silver-400">Способы оплаты</h4>
            <div className="space-y-2 text-forest-100">
              <p>Revolut</p>
              <p>Альфа-банк</p>
              <p>Криптовалюты</p>
              <p>Wise</p>
            </div>
            <div className="mt-6 p-4 bg-forest-800 rounded-lg">
              <p className="text-sm text-forest-200">
                🔒 Все консультации конфиденциальны
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-forest-700 mt-12 pt-8 text-center">
          <p className="text-forest-300">
            © 2024 Мария Тимофеева. Все права защищены.
          </p>
          <p className="text-forest-400 text-sm mt-2">
            Помогаю предпринимателям в эмиграции строить устойчивый бизнес
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    // If we're not on the main page, navigate to main page first
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-forest-100 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <button 
            onClick={() => {
              if (window.location.pathname !== '/') {
                window.location.href = '/';
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            Мария Тимофеева
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-forest-700 hover:text-forest-900 transition-colors"
            >
              Обо мне
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-forest-700 hover:text-forest-900 transition-colors"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="text-forest-700 hover:text-forest-900 transition-colors"
            >
              Блог
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-forest-700 hover:text-forest-900 transition-colors"
            >
              Отзывы
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-forest-700 hover:text-forest-900 transition-colors"
            >
              Контакты
            </button>
            <Button 
              onClick={() => scrollToSection('consultation')}
              className="bg-forest-600 hover:bg-forest-700 text-white font-semibold px-6"
            >
              Записаться
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-forest-100">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-forest-700 hover:text-forest-900 transition-colors"
              >
                Обо мне
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-forest-700 hover:text-forest-900 transition-colors"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection('blog')}
                className="text-left text-forest-700 hover:text-forest-900 transition-colors"
              >
                Блог
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-forest-700 hover:text-forest-900 transition-colors"
              >
                Отзывы
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-forest-700 hover:text-forest-900 transition-colors"
              >
                Контакты
              </button>
              <Button 
                onClick={() => scrollToSection('consultation')}
                className="bg-forest-600 hover:bg-forest-700 text-white font-semibold w-full"
              >
                Записаться на консультацию
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

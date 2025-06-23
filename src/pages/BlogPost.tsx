import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogPost = () => {
  const { slug } = useParams();

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button 
            onClick={handleBack}
            variant="ghost" 
            className="mb-8 text-forest-600 hover:text-forest-800"
          >
            <ArrowLeft size={20} className="mr-2" />
            Назад к блогу
          </Button>

          <article className="bg-white rounded-lg shadow-lg p-8">
            <header className="mb-8">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-forest-900 mb-4 break-words">
                Принятие решений в условиях неопределенности
              </h1>
              
              <div className="flex items-center text-forest-600 mb-6">
                <Calendar size={20} className="mr-2" />
                <span>15 ноября 2024</span>
              </div>

              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop"
                alt="Принятие решений в условиях неопределенности"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            </header>

            <div className="prose prose-lg max-w-none text-forest-700">
              <p className="lead text-xl mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>

              <h2 className="text-2xl font-bold text-forest-900 mt-8 mb-4">
                Основные принципы принятия решений
              </h2>

              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>

              <ul className="list-disc pl-6 my-6">
                <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</li>
                <li>Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</li>
                <li>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</li>
                <li>Consectetur, adipisci velit, sed quia non numquam eius modi tempora</li>
              </ul>

              <h2 className="text-2xl font-bold text-forest-900 mt-8 mb-4">
                Практические рекомендации
              </h2>

              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
              </p>

              <blockquote className="border-l-4 border-forest-300 pl-6 my-8 italic text-forest-600">
                "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus."
              </blockquote>

              <p>
                Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
              </p>

              <h2 className="text-2xl font-bold text-forest-900 mt-8 mb-4">
                Заключение
              </h2>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </article>

          <div className="mt-12 text-center">
            <div className="bg-forest-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-forest-900 mb-4">
                Нужна персональная консультация?
              </h3>
              <p className="text-forest-700 mb-6">
                Записывайтесь на бесплатную диагностическую встречу
              </p>
              <Button 
                onClick={() => window.location.href = '/#consultation'}
                className="bg-forest-700 hover:bg-forest-800 text-white"
              >
                Записаться на консультацию
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
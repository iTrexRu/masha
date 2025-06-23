import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Calendar, ExternalLink } from 'lucide-react';

interface BlogPost {
  id?: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  url: string;
}

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log('Starting fetch from /api/get-posts');
        setIsLoading(true);
        const response = await fetch('/api/get-posts');
        console.log('Response status:', response.status);
        console.log('Response ok:', response.ok);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Raw API response:', data);

        if (!Array.isArray(data)) {
          throw new Error('API response is not an array');
        }

        const postsWithId = data.map((post: BlogPost, index: number) => ({
          ...post,
          id: post.id || index + 1,
        }));
        console.log('Processed posts:', postsWithId);
        console.log('Number of posts:', postsWithId.length);

        setBlogPosts(postsWithId);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error';
        console.error('Fetch error:', errorMessage);
        setError(errorMessage);
      } finally {
        console.log('Fetch completed, isLoading set to false');
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handlePostClick = (url: string) => {
    if (url.startsWith('/')) {
      window.location.href = url;
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  console.log('Current state:', { isLoading, error, blogPostsLength: blogPosts.length });

  if (isLoading) {
    console.log('Rendering loading state');
    return (
      <section id="blog" className="py-20 bg-forest-50">
        <div className="container mx-auto px-4 text-center">
          <p>Loading...</p>
        </div>
      </section>
    );
  }

  if (error) {
    console.log('Rendering error state:', error);
    return (
      <section id="blog" className="py-20 bg-forest-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  console.log('Rendering main content, posts:', blogPosts);

  return (
    <section id="blog" className="py-20 bg-forest-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold gradient-text mb-6">Блог</h2>
          <p className="text-xl text-forest-600 max-w-3xl mx-auto">
            Полезные материалы о психологии предпринимательства, принятии решений и работе с эмоциями в бизнесе
          </p>
        </div>

        <div className="animate-on-scroll">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
              slidesToScroll: 1, // Changed to 1 for smoother scrolling
            }}
            className="w-full max-w-6xl mx-auto"
            style={{ minHeight: '400px' }} // Increased height for visibility
          >
            <CarouselContent className="-ml-2 md:-ml-4" style={{ display: 'flex', minHeight: '400px' }}>
              {blogPosts.length > 0 ? (
                blogPosts.map((post) => {
                  console.log('Rendering post:', post);
                  return (
                    <CarouselItem
                      key={post.id}
                      className="pl-2 md:pl-4 basis-1/4" // Simplified for debugging
                      style={{ border: '1px solid blue', minWidth: '250px' }}
                    >
                      <Card
                        className="h-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105"
                        style={{ backgroundColor: 'yellow' }} // Bright background for debugging
                        onClick={() => handlePostClick(post.url)}
                      >
                        <CardContent className="p-0">
                          <div className="relative">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-48 object-cover rounded-t-lg"
                              onError={(e) => {
                                console.log(`Image failed to load: ${post.image}`);
                                e.currentTarget.src = '/fallback-image.jpg'; // Add fallback
                              }}
                            />
                            <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                              <ExternalLink size={16} className="text-forest-600" />
                            </div>
                          </div>
                          <div className="p-6">
                            <div className="flex items-center text-sm text-forest-500 mb-3">
                              <Calendar size={16} className="mr-2" />
                              {new Date(post.date).toLocaleDateString('ru-RU', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                              })}
                            </div>
                            <h3 className="font-semibold text-lg text-forest-800 mb-3 line-clamp-2">{post.title}</h3>
                            <p className="text-forest-600 text-sm line-clamp-3">{post.excerpt}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  );
                })
              ) : (
                <CarouselItem>
                  <p>No posts available</p>
                </CarouselItem>
              )}
            </CarouselContent>
            <CarouselPrevious className="flex" /> {/* Always visible for debugging */}
            <CarouselNext className="flex" /> {/* Always visible for debugging */}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

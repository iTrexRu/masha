import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Заменяем useSearchParams
import Header from './Header';
import Footer from './Footer';

const PostPage = () => {
  const { filename } = useParams<{ filename: string }>(); // Получаем filename из пути
  const [postContent, setPostContent] = useState<{ filename: string; content: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!filename) {
        setError('No post filename specified');
        setIsLoading(false);
        return;
      }

      try {
        console.log(`Fetching post with filename: ${filename}`);
        setIsLoading(true);
        const response = await fetch(`/api/get-post?filename=${encodeURIComponent(filename)}`);
        console.log('Response status:', response.status);
        console.log('Response ok:', response.ok);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Raw API response:', data);

        if (!data || !data.content) {
          throw new Error('Invalid post data');
        }

        setPostContent(data);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error';
        console.error('Fetch error:', errorMessage);
        setError(errorMessage);
      } finally {
        console.log('Fetch completed, isLoading set to false');
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [filename]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-forest-50">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <p>Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !postContent) {
    return (
      <div className="min-h-screen bg-forest-50">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-red-500">{error || 'Post not found'}</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-forest-50">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <article className="max-w-3xl mx-auto">
          {/* Изображение поста */}
          {postContent.filename && (
            <img
              src={`/blog_posts/${postContent.filename.replace(/\.txt$/, '.jpg')}`}
              alt={postContent.filename}
              className="w-full h-96 object-cover rounded-lg mb-8 shadow-lg"
            />
          )}
          {/* Текст поста (HTML) */}
          <div
            className="prose prose-lg text-forest-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: postContent.content }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default PostPage;

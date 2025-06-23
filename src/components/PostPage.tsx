import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PostPage = () => {
  const { filename } = useParams<{ filename: string }>();
  const [postContent, setPostContent] = useState<{ filename: string; content: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!filename) {
        setError('No post filename specified');
        setIsLoading(false);
        console.error('No filename in params:', filename);
        return;
      }

      try {
        console.log(`Attempting to fetch post with filename: ${filename}`);
        setIsLoading(true);
        const response = await fetch(`/api/get-post?filename=${encodeURIComponent(filename)}.txt`);
        console.log('Fetch response status:', response.status);
        console.log('Fetch response ok:', response.ok);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched post data:', data);

        if (!data || !data.content) {
          throw new Error('Invalid post data: content is missing');
        }

        setPostContent(data);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error';
        console.error('Fetch error details:', errorMessage);
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
          <p className="text-red-500">Error: {error || 'Post not found'}</p>
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
          {postContent.filename && (
            <img
              src={`/blog_posts/${postContent.filename.replace(/\.txt$/, '.jpg')}`}
              alt={postContent.filename}
              className="w-full h-96 object-cover rounded-lg mb-8 shadow-lg"
              onError={(e) => {
                console.error('Image load error:', e);
                e.currentTarget.src = '/fallback-image.jpg';
              }}
            />
          )}
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

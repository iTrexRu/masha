import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    const postsDir = path.join(process.cwd(), 'blog_posts');
    const files = fs.readdirSync(postsDir).filter(file => file.endsWith('.txt'));

    const posts = files.map(file => {
      const name = file.replace(/\.txt$/, '');
      const excerpt = name.replace(/_/g, ' ');
      const date = fs.statSync(path.join(postsDir, file)).mtime.toISOString();
      const image = `/blog_posts/${name}.jpg`;
      const url = `/blog_posts/${file}`;

      return {
        title: file,
        excerpt,
        date,
        image,
        url
      };
    });

    res.status(200).json(posts);
  } catch (error) {
    console.error('Error reading posts:', error);
    res.status(500).json({ error: 'Failed to load posts' });
  }
}

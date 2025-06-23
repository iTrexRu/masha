import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    const { filename } = req.query;

    if (!filename) {
      return res.status(400).json({ error: 'No filename specified' });
    }

    const safeFilename = path.basename(filename);
    const filepath = path.join(process.cwd(), 'public/blog_posts', safeFilename); // Обновлено

    if (!fs.existsSync(filepath)) {
      return res.status(404).json({ error: 'File not found' });
    }

    const content = fs.readFileSync(filepath, 'utf8');

    res.status(200).json({
      filename: safeFilename,
      content
    });
  } catch (error) {
    console.error('Error reading post:', error);
    res.status(500).json({ error: 'Failed to load post' });
  }
}

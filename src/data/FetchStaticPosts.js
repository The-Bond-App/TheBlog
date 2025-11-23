// src/lib/posts.js
// This runs at BUILD TIME on the server (Node.js)
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export function getAllPosts() {
  // Get all .md files
  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPosts = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        id: slug,
        title: data.title || 'Yet Another Fascinating Read',
        date: data.date || new Date().toISOString().split('T')[0],
        category: data.category || 'Inner Growth',
        excerpt: data.excerpt || data.description || content.substring(0, 150) + '...',
        image: data.image || '/assets/placeholder.png',
        readTime: data.readTime || '5 min',
        ...data,
        content,
      };
    });

  // Sort by date descending (ISO dates work with string comparison too)
  return allPosts.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    
    // Handle invalid dates
    if (isNaN(dateA.getTime())) return 1;
    if (isNaN(dateB.getTime())) return -1;
    
    return dateB - dateA;
  });
}

export function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  
  // Handle missing files gracefully
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    title: data.title || 'Yet Another Fascinating Read',
    description: data.description || content.substring(0, 160) + '...',
    date: data.date || new Date().toISOString().split('T')[0],
    updatedAt: data.updatedAt || null,
    category: data.category || 'Inner Growth',
    image: data.image || '/assets/placeholder.png',
    readTime: data.readTime || '5 min',
    author: data.author || 'The Bond Team',
    tags: data.tags || [data.category],
    excerpt: data.excerpt || data.description || content.substring(0, 150) + '...',
    ...data,
  };
}

export function getAllSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => fileName.replace(/\.md$/, ''));
}
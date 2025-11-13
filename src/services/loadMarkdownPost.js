// src/services/loadMarkdownPost.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { getHighlightedPostMetadata } from '../data/highlightedPosts';

export async function loadMarkdownPost(slug) {
  try {
    // Path to your markdown files in public folder
    const postsDirectory = path.join(process.cwd(), 'public', 'posts');
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      console.log(`Markdown file not found: ${fullPath}`);
      return null;
    }
    
    // Read the markdown file
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Parse frontmatter and content
    const { data, content } = matter(fileContents);
    
    // Get metadata from our config (fallback to frontmatter)
    const metadata = getHighlightedPostMetadata(slug);
    
    // Return post object in same format as database posts
    return {
      slug,
      title: data.title || metadata?.title || 'Untitled',
      description: data.description || metadata?.description || '',
      image: data.image || metadata?.image || '',
      category: data.category || metadata?.category || 'mindfulness',
      readTime: data.readTime || metadata?.readTime || '5 min',
      date: data.date || metadata?.date || new Date().toLocaleDateString(),
      instagramPostUrl: data.instagramPostUrl || '',
      content: content, // Raw markdown content
      isMarkdown: true, // Flag to indicate this is markdown
      // Add any other fields from frontmatter
      ...data
    };
  } catch (error) {
    console.error(`Error loading markdown post ${slug}:`, error);
    return null;
  }
}
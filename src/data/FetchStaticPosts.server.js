// src/lib/server/posts.js
// server-only. Do NOT import from client.
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { z } from 'zod';

const POSTS_DIR = path.join(process.cwd(), 'content/posts');

const PostMetaSchema = z.object({
  title: z.string().optional(),
  date: z.string().optional(),
  updatedAt: z.string().optional(),
  category: z.string().optional(),
  image: z.string().optional(),
  excerpt: z.string().optional(),
  description: z.string().optional(),
  tags: z.array(z.string()).optional(),
  readTime: z.string().optional(),
  author: z.string().optional(),
});

function parseDateOrFileMtime(dateLike, filePath) {
  // try frontmatter
  if (dateLike) {
    const d = new Date(dateLike);
    if (!isNaN(d.getTime())) return d;
    // accept yyyy-mm-dd
    if (/^\d{4}-\d{2}-\d{2}$/.test(String(dateLike).trim())) {
      const d2 = new Date(String(dateLike).trim() + 'T00:00:00Z');
      if (!isNaN(d2.getTime())) return d2;
    }
  }
  // fallback to file mtime
  try {
    const stat = fs.statSync(filePath);
    if (stat && stat.mtime && !isNaN(stat.mtime.getTime())) return stat.mtime;
  } catch (err) {
    // ignore
  }
  // final fallback: now
  return new Date();
}

function toIso(date) {
  return new Date(date).toISOString();
}

/**
 * Read all posts metadata, normalize, and return sorted newest-first.
 * Returns array of metadata objects (no `content`).
 */
export function getAllPostsMeta() {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const filenames = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
  const posts = [];

  for (const filename of filenames) {
    const slug = filename.replace(/\.(md|mdx)$/, '');
    const fullPath = path.join(POSTS_DIR, filename);

    try {
      const raw = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(raw);
      const parsed = PostMetaSchema.safeParse(data || {});
      if (!parsed.success) {
        console.warn(`Invalid frontmatter for ${filename}:`, parsed.error.issues);
      }
      const meta = parsed.success ? parsed.data : (data || {});

      const dateObj = parseDateOrFileMtime(meta.date, fullPath);
      const updatedObj = meta.updatedAt ? parseDateOrFileMtime(meta.updatedAt, fullPath) : null;

      posts.push({
        slug,
        id: slug,
        title: meta.title || slug,
        date: toIso(dateObj),
        _dateMs: dateObj.getTime(),
        dateFormatted: formatDDMMYYYY(dateObj),  
        updatedAt: updatedObj ? toIso(updatedObj) : null,
        _updatedAtMs: updatedObj ? updatedObj.getTime() : 0,
        category: meta.category || 'Inner Growth',
        excerpt: meta.excerpt || meta.description || (content ? content.substring(0, 150) + '...' : ''),
        image: meta.image || '/assets/placeholder.png',
        readTime: meta.readTime || '5 min',
        author: meta.author || 'The Bond Team',
        tags: meta.tags || [meta.category || 'Inner Growth'],
      });
    } catch (err) {
      console.warn(`Failed to read post ${filename}: ${err.message}`);
    }
  }

  // Sort newest-first by date, then updatedAt, then slug
  posts.sort((a, b) => {
    if (b._dateMs !== a._dateMs) return b._dateMs - a._dateMs;
    if ((b._updatedAtMs || 0) !== (a._updatedAtMs || 0)) return (b._updatedAtMs || 0) - (a._updatedAtMs || 0);
    return a.slug.localeCompare(b.slug);
  });

  // remove internal fields
  return posts.map(({ _dateMs, _updatedAtMs, ...rest }) => rest);
}

function formatDDMMYYYY(date) {
  if (!date) return null;
  const d = new Date(date);
  const dd = String(d.getDate()).padStart(2, '0');
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const yyyy = d.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

/**
 * Read full post content by slug (for the post page).
 * Returns null if not found.
 */
export function getPostBySlug(slug) {
  const pathMd = path.join(POSTS_DIR, `${slug}.md`);
  const pathMdx = path.join(POSTS_DIR, `${slug}.mdx`);
  const fullPath = fs.existsSync(pathMd) ? pathMd : (fs.existsSync(pathMdx) ? pathMdx : null);
  if (!fullPath) return null;

  try {
    const raw = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(raw);
    const parsed = PostMetaSchema.safeParse(data || {});
    const meta = parsed.success ? parsed.data : (data || {});

    const dateObj = parseDateOrFileMtime(meta.date, fullPath);
    const updatedObj = meta.updatedAt ? parseDateOrFileMtime(meta.updatedAt, fullPath) : null;

    return {
      slug,
      title: meta.title || slug,
      description: meta.description || (content ? content.substring(0, 160) + '...' : ''),
      date: toIso(dateObj),
      dateFormatted: formatDDMMYYYY(dateObj),  
      updatedAt: updatedObj ? toIso(updatedObj) : null,
      category: meta.category || 'Inner Growth',
      image: meta.image || '/assets/placeholder.png',
      readTime: meta.readTime || '5 min',
      author: meta.author || 'The Bond Team',
      tags: meta.tags || [meta.category || 'Inner Growth'],
      excerpt: meta.excerpt || meta.description || (content ? content.substring(0,150) + '...' : ''),
      content,
      ...meta,
    };
  } catch (err) {
    console.warn(`Failed to load post ${slug}: ${err.message}`);
    return null;
  }
}

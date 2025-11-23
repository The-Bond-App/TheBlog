// app/sitemap.js
import { getAllPosts } from '../src/data/FetchStaticPosts';

export default function sitemap() {
  const baseUrl = 'https://blog.thebond.company';
  const posts = getAllPosts();

  // Posts URLs
  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    // Add more static pages as needed
  ];

  return [...staticPages, ...postUrls];
}

// This will generate: https://yourdomain.com/sitemap.xml
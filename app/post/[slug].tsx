import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));
  const paths = files.map(filename => ({
    params: { slug: filename.replace('.md', '') },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', params.slug + '.md'),
    'utf-8'
  );
  const { data, content } = matter(markdownWithMeta);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return { props: { frontmatter: data, contentHtml } };
}

export default function Post({ frontmatter, contentHtml }) {
  return (
    <article>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date} — {frontmatter.author}</p>
      <img src={frontmatter.image} alt={frontmatter.title} />
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
}

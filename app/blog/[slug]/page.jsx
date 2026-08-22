import Image from 'next/image';
import '../../globals.css';
import '../../projects/Projects.css';
import '../Blog.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getAllPosts, getPostBySlug } from '../lib/posts';

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <div className="projects-content">
      <article className="blog-post">
        {post.banner && (
          <div className="blog-banner">
            <div className="event-fade-layer">
              <Image
                className="event-background"
                src={post.banner}
                alt={`${post.title} banner`}
                fill
                sizes="700px"
              />
            </div>
          </div>
        )}
        <h1>{post.title}</h1>
        {post.date && <p className="project-date">{post.date}</p>}
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </article>
    </div>
  );
}

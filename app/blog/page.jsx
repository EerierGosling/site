import '../globals.css';
import './Blog.css';
import Link from 'next/link';
import { getAllPosts } from './lib/posts';

function Blog() {
  const posts = getAllPosts();

  return (
    <div className="projects-content">
      <h1 className="section-title">blog</h1>
      <section className="blog-list">
        {posts.length === 0 && <p className="blog-empty">coming soon!</p>}
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="blog-preview-link">
            <h2>{post.title}</h2>
            {post.date && <p className="project-date">{post.date}</p>}
            {post.description && <p>{post.description}</p>}
          </Link>
        ))}
      </section>
    </div>
  );
}

export default Blog;

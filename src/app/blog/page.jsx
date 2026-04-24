"use client";

import Link from 'next/link';
import { blogPosts } from '../../data/blog';
import styles from '../../styles/Blog.module.css';

export default function BlogPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>DropHunt Insights</h1>
        <p className={styles.subtitle}>
          The latest news, guides, and alpha on Web3 airdrops, DeFi opportunities, and crypto earning strategies.
        </p>
      </div>

      <div className={styles.grid}>
        {blogPosts.map((post) => (
          <article key={post.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.categoryBadge}>{post.category}</span>
            </div>
            <h2 className={styles.cardTitle}>{post.title}</h2>
            <p className={styles.excerpt}>{post.excerpt}</p>
            <div className={styles.cardFooter}>
              <span className={styles.date}>{post.date}</span>
              <span className={styles.readTime}>{post.readTime}</span>
            </div>
            <Link href={`/blog/${post.id}`} className={styles.readMore}>
              Read Article →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
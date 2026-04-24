"use client";

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { blogPosts } from '../../../data/blog';
import styles from '../../../styles/BlogPost.module.css';

export default function BlogPostPage() {
  const params = useParams();
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    return (
      <div className={styles.container}>
        <div className={styles.notFound}>
          <h1>Post Not Found</h1>
          <Link href="/blog" className={styles.backLink}>← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Link href="/blog" className={styles.backLink}>← Back to Blog</Link>

      <article className={styles.article}>
        <header className={styles.header}>
          <span className={styles.categoryBadge}>{post.category}</span>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.meta}>
            <span>{post.date}</span>
            <span className={styles.separator}>•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <div className={styles.content}>
          <p className={styles.excerpt}>{post.excerpt}</p>
          
          <p>
            In the rapidly evolving world of Web3, staying ahead of the curve is essential for maximizing your 
            potential returns. This article dives deep into the strategies and insights that can help you navigate 
            the complex landscape of airdrops and decentralized finance opportunities.
          </p>
          
          <p>
            Whether you're a seasoned DeFi veteran or just starting your journey in the crypto space, understanding 
            the mechanics behind airdrop distributions is crucial. Many projects use airdrops as a way to reward 
            early adopters and build community engagement, making them an valuable opportunity for informed participants.
          </p>
          
          <h2>Key Takeaways</h2>
          <p>
            The most successful airdrop hunters understand that patience and consistency are key. Projects often track 
            user activity over extended periods, and those who demonstrate genuine engagement are more likely to 
            receive substantial token allocations.
          </p>
          
          <p>
            Always remember to do your own research before participating in any protocol. Security should be your 
            top priority - never connect your wallet to unverified sites or sign transactions you don't fully understand.
          </p>
          
          <h2>Conclusion</h2>
          <p>
            As the Web3 ecosystem continues to grow, new opportunities will emerge. Stay informed, stay vigilant, 
            and happy hunting!
          </p>
        </div>
      </article>
    </div>
  );
}
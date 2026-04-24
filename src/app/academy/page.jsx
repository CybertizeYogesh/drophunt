"use client";

import Link from 'next/link';
import { academyModules } from '../../data/academy';
import styles from './Academy.module.css';

export default function AcademyPage() {
  const getDifficultyStyle = (difficulty) => {
    switch (difficulty) {
      case 'Beginner':
        return styles.badgeBeginner;
      case 'Intermediate':
        return styles.badgeIntermediate;
      case 'Advanced':
        return styles.badgeAdvanced;
      default:
        return '';
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>DropHunt Academy</h1>
        <p className={styles.heroSubtitle}>
          Master Web3. Learn the strategies, stay safe, and maximize your airdrop farming potential.
        </p>
      </div>

      <div className={styles.grid}>
        {academyModules.map((module) => (
          <Link key={module.id} href={`/academy/${module.id}`} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={`${styles.badge} ${getDifficultyStyle(module.difficulty)}`}>
                {module.difficulty}
              </span>
              <span className={styles.category}>{module.category}</span>
            </div>
            <h3 className={styles.cardTitle}>{module.title}</h3>
            <p className={styles.cardDescription}>{module.description}</p>
            <div className={styles.cardFooter}>
              <span className={styles.readTime}>{module.readTime}</span>
              <span className={styles.learnLink}>
                Start Learning →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
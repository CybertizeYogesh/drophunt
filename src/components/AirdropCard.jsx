"use client";

import styles from '../styles/AirdropCard.module.css';

export default function AirdropCard({ airdrop, index = 0, isInWatchlist, onToggleWatchlist }) {
  const getGradientColors = (name) => {
    const gradients = [
      ['#667eea', '#764ba2'],
      ['#f093fb', '#f5576c'],
      ['#4facfe', '#00f2fe'],
      ['#43e97b', '#38f9d7'],
      ['#fa709a', '#fee140'],
      ['#30cfd0', '#330867'],
      ['#a8edea', '#fed6e3'],
      ['#ff9a9e', '#fecfef'],
      ['#ffecd2', '#fcb69f'],
      ['#ff0844', '#ffb199'],
    ];
    const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return gradients[hash % gradients.length];
  };

  const [color1, color2] = getGradientColors(airdrop.name);

  return (
    <div 
      className={styles.card}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div 
        className={styles.coverImage}
        style={{ background: `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)` }}
      >
        <div className={styles.logoOverlay}>
          {airdrop.name.charAt(0)}
        </div>
        <div className={styles.timerBadge}>
          <span>24d 12h</span>
        </div>
      </div>
      
      <div className={styles.cardContent}>
        <h3 className={styles.projectName}>{airdrop.name}</h3>
        <p className={styles.poolLabel}>Airdrop pool</p>
        <p className={styles.poolValue}>{airdrop.value}</p>
      </div>
    </div>
  );
}

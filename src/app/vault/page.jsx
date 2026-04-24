"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { airdropsData } from '../../data/airdrops';
import styles from './Vault.module.css';

export default function VaultPage() {
  const [savedAirdrops, setSavedAirdrops] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const vaultIds = JSON.parse(localStorage.getItem('drophunt_vault') || '[]');
    const saved = airdropsData.filter(airdrop => vaultIds.includes(airdrop.id));
    setSavedAirdrops(saved);
    setIsLoaded(true);
  }, []);

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

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>My Airdrop Vault</h1>
        <p className={styles.subtitle}>
          Your personalized tracking list. Save airdrops from anywhere to keep track of your farming progress.
        </p>
      </div>

      {!isLoaded ? (
        <div className={styles.grid}>
          {[1, 2, 3].map((i) => (
            <div key={i} className={styles.skeleton}></div>
          ))}
        </div>
      ) : savedAirdrops.length === 0 ? (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 8v13H3V8M1 3h22v5H1zM10 12h4" />
            </svg>
          </div>
          <h2 className={styles.emptyTitle}>Your vault is empty</h2>
          <p className={styles.emptyText}>
            Go explore some airdrops and save the ones you&apos;re tracking!
          </p>
          <Link href="/" className={styles.exploreBtn}>
            Explore Airdrops
          </Link>
        </div>
      ) : (
        <div className={styles.grid}>
          {savedAirdrops.map((airdrop, index) => {
            const [color1, color2] = getGradientColors(airdrop.name);
            return (
              <Link
                key={airdrop.id}
                href={`/airdrops/${airdrop.id}`}
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
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
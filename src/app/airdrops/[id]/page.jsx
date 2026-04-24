"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { airdropsData } from '../../../data/airdrops';
import styles from './page.module.css';

export default function AirdropDetail({ params }) {
  const [airdrop, setAirdrop] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    async function resolveParams() {
      const resolvedParams = await params;
      const found = airdropsData.find(a => a.id === resolvedParams.id);
      setAirdrop(found);
      setLoading(false);

      if (found) {
        const vault = JSON.parse(localStorage.getItem('drophunt_vault') || '[]');
        setIsSaved(vault.includes(found.id));
      }
    }
    resolveParams();
  }, [params]);

  const handleSaveToggle = () => {
    const vault = JSON.parse(localStorage.getItem('drophunt_vault') || '[]');
    if (isSaved) {
      const updatedVault = vault.filter(id => id !== airdrop.id);
      localStorage.setItem('drophunt_vault', JSON.stringify(updatedVault));
      setIsSaved(false);
    } else {
      vault.push(airdrop.id);
      localStorage.setItem('drophunt_vault', JSON.stringify(vault));
      setIsSaved(true);
    }
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={`${styles.skeleton} ${styles.skelBackLink}`}></div>
        <div className={styles.header}>
          <div className={`${styles.skeleton} ${styles.skelLogo}`}></div>
          <div className={styles.titleArea}>
            <div className={`${styles.skeleton} ${styles.skelTitle}`}></div>
            <div className={`${styles.skeleton} ${styles.skelBadge}`}></div>
          </div>
          <div className={`${styles.skeleton} ${styles.skelBtn}`}></div>
        </div>
        <div className={styles.contentGrid}>
          <div className={styles.mainContent}>
            <div className={styles.section}>
              <div className={`${styles.skeleton} ${styles.skelText}`}></div>
              <div className={`${styles.skeleton} ${styles.skelText}`}></div>
              <div className={`${styles.skeleton} ${styles.skelText}`}></div>
              <div className={`${styles.skeleton} ${styles.skelText}`}></div>
              <div className={`${styles.skeleton} ${styles.skelTextShort}`}></div>
            </div>
          </div>
          <div className={styles.sidebar}>
            <div className={`${styles.skeleton} ${styles.skelCard}`}></div>
          </div>
        </div>
      </div>
    );
  }

  if (!airdrop) {
    return (
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>← Back to Home</Link>
        <div className={styles.header}>
          <h1>Airdrop not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backLink}>
        ← Back to Home
      </Link>

      <div className={styles.header}>
        <div className={styles.logo} style={{ background: `linear-gradient(135deg, ${airdrop.color}, ${airdrop.color}99)` }}>
          {airdrop.name.charAt(0)}
        </div>
        <div className={styles.titleArea}>
          <h1>{airdrop.name}</h1>
          <span className={styles.ticker}>{airdrop.ticker} • {airdrop.status}</span>
        </div>
        <div className={styles.buttonGroup}>
          <a
            href={airdrop.claimUrl}
            className={styles.claimBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            Claim Airdrop
          </a>
          {isClient && (
            <button
              onClick={handleSaveToggle}
              className={isSaved ? styles.savedBtn : styles.saveBtn}
            >
              {isSaved ? 'Remove from Vault' : 'Save to Vault'}
            </button>
          )}
        </div>
      </div>

      <div className={styles.contentGrid}>
        <div className={styles.mainContent}>
          <div className={styles.section}>
            <h2>Step-by-Step Guide</h2>
            <ol className={styles.stepList}>
              <li>Visit the official {airdrop.name} website and connect your wallet</li>
              <li>Complete the required tasks (follow their social media, join Discord, etc.)</li>
              <li>Perform testnet transactions to demonstrate activity</li>
              <li>Submit your wallet address for the snapshot</li>
              <li>Wait for the token distribution date and claim your tokens</li>
            </ol>
          </div>
        </div>

        <div className={styles.sidebar}>
          <div className={styles.infoCard}>
            <h3>Project Details</h3>
            <div className={styles.statRow}>
              <span>Network</span>
              <strong>{airdrop.category}</strong>
            </div>
            <div className={styles.statRow}>
              <span>Est. Value</span>
              <strong>{airdrop.value}</strong>
            </div>
            <div className={styles.statRow}>
              <span>Status</span>
              <strong>{airdrop.status}</strong>
            </div>
            <div className={styles.statRow}>
              <span>Cost</span>
              <strong>Free</strong>
            </div>
            <div className={styles.statRow}>
              <span>Time</span>
              <strong>~30 mins</strong>
            </div>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>Twitter</a>
              <a href="#" className={styles.socialLink}>Website</a>
              <a href="#" className={styles.socialLink}>Discord</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
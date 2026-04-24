"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.brandSection}>
          <Link href="/" className={styles.logo}>
            <img src="/images/logo.jpg" alt="DropHunt Logo" style={{ height: '80px', width: 'auto', objectFit: 'contain' }} />
          </Link>
          <p className={styles.brandDescription}>
            Track the best crypto airdrops, discover potential opportunities, 
            and never miss out on free token distributions.
          </p>
        </div>

        <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <div className={styles.linkList}>
              <Link href="/" className={styles.link}>Home</Link>
              <Link href="/airdrops" className={styles.link}>Airdrops</Link>
              <Link href="/academy" className={styles.link}>Academy</Link>
              <Link href="/leaderboard" className={styles.link}>Leaderboard</Link>
              <Link href="/submit" className={styles.link}>Submit Project</Link>
            </div>
          </div>

          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Community</h4>
            <div className={styles.linkList}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                Instagram
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                Twitter / X
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                Discord
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className={styles.link}>
                Telegram
              </a>
            </div>
          </div>

        <div className={styles.newsletterSection}>
          <h4 className={styles.newsletterTitle}>Stay Updated</h4>
          <p className={styles.newsletterText}>
            Get the latest airdrop alerts delivered to your inbox.
          </p>
          <form className={styles.newsletterForm} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.newsletterInput}
              required
            />
            <button type="submit" className={styles.newsletterBtn}>
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} DropHunt. All rights reserved.
        </p>
        <div className={styles.legalLinks}>
          <Link href="/terms" className={styles.legalLink}>Terms of Service</Link>
          <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}

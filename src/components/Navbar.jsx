"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <img src="/images/logo.jpg" alt="DropHunt Logo" style={{ height: '70px', width: 'auto', objectFit: 'contain' }} />
      </Link>

      <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <Link href="/" className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}>Home</Link>
        <Link href="/airdrops" className={`${styles.navLink} ${isActive('/airdrops') ? styles.active : ''}`}>Airdrops</Link>
        <Link href="/vault" className={`${styles.navLink} ${isActive('/vault') ? styles.active : ''}`}>My Vault</Link>
        <Link href="/academy" className={`${styles.navLink} ${isActive('/academy') ? styles.active : ''}`}>Academy</Link>
        <Link href="/leaderboard" className={`${styles.navLink} ${isActive('/leaderboard') ? styles.active : ''}`}>Leaderboard</Link>
        <Link href="/blog" className={`${styles.navLink} ${isActive('/blog') ? styles.active : ''}`}>Blog</Link>
        <Link href="/submit" className={`${styles.navLink} ${isActive('/submit') ? styles.active : ''}`}>Submit</Link>
      </div>

      <div className={styles.navRight}>
        {mounted ? (
          <ConnectButton />
        ) : (
          <div style={{ width: '120px', height: '40px' }}></div>
        )}
      </div>

      <button
        className={styles.hamburger}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
"use client";

import { useState } from 'react';
import styles from '../styles/Newsletter.module.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubscribe = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        {status === 'success' ? (
          <div className={styles.successMessage}>
            <span className={styles.successIcon}>✓</span>
            <p className={styles.successText}>Thanks for subscribing! Keep an eye on your inbox.</p>
          </div>
        ) : (
          <>
            <h2 className={styles.title}>Never Miss a Drop 🪂</h2>
            <p className={styles.subtitle}>
              Get the most lucrative Web3 airdrops delivered straight to your inbox once a week. No spam.
            </p>
            <form className={styles.form} onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                required
                disabled={status === 'loading'}
              />
              <button type="submit" className={styles.button} disabled={status === 'loading'}>
                {status === 'loading' ? '...' : 'Subscribe'}
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
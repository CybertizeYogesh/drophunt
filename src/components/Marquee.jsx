"use client";

import styles from '../styles/Marquee.module.css';

export default function Marquee({ title, items = [] }) {
  const duplicatedItems = [...items, ...items];

  return (
    <section className={styles.marqueeSection}>
      {title && <h2 className={styles.marqueeTitle}>{title}</h2>}
      <div className={styles.marqueeWrapper}>
        <div className={styles.track}>
          {duplicatedItems.map((item, index) => (
            <span key={index} className={styles.ecoItem}>
              {item.logo ? (
                <span className={styles.logoItem}>
                  <img src={item.logo} alt={item.name} className={styles.logo} />
                  <span className={styles.logoText}>{item.name}</span>
                </span>
              ) : (
                item.name
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
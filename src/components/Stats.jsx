"use client";

import { useState, useEffect, useRef } from 'react';
import styles from '../styles/Stats.module.css';

const AnimatedNumber = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);

  const numMatches = value.match(/\d+/);
  const target = numMatches ? parseInt(numMatches[0], 10) : 0;
  const suffix = value.replace(/\d+/g, '');

  useEffect(() => {
    let startTime = null;
    let animationFrameId;
    let observer;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      const easeOut = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(target * easeOut));

      if (progress < duration) {
        animationFrameId = window.requestAnimationFrame(animate);
      }
    };

    const handleIntersect = (entries) => {
      if (entries[0].isIntersecting) {
        animationFrameId = window.requestAnimationFrame(animate);
        if (observer && nodeRef.current) observer.unobserve(nodeRef.current);
      }
    };

    if (nodeRef.current) {
      observer = new IntersectionObserver(handleIntersect, { threshold: 0.5 });
      observer.observe(nodeRef.current);
    }

    return () => {
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
      if (observer) observer.disconnect();
    };
  }, [target, duration]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
};

export default function Stats() {
  const stats = [
    { value: "2M+", label: "Transactions" },
    { value: "40+", label: "Chains" },
    { value: "500+", label: "Apps" },
    { value: "50K+", label: "Community Members" }
  ];

  return (
    <section className={styles.statsSection}>
      <h2 className={styles.statsTitle}>Powered by Leading Infrastructure</h2>
      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statCard}>
            <span className={styles.statValue}>
              <AnimatedNumber value={stat.value} />
            </span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
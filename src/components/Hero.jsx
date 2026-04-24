"use client";

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Hero.module.css';

const sponsoredAirdrops = [
  { id: 1, name: 'Nebula', ticker: 'NEB', value: '$500+', color1: '#667eea', color2: '#764ba2' },
  { id: 2, name: 'Stellar', ticker: 'STR', value: '$350+', color1: '#4facfe', color2: '#00f2fe' },
  { id: 3, name: 'Quantum', ticker: 'QTM', value: '$800+', color1: '#f093fb', color2: '#f5576c' },
  { id: 4, name: 'Vertex', ticker: 'VTX', value: '$450+', color1: '#43e97b', color2: '#38f9d7' },
];

export default function Hero() {
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const scrollInterval = setInterval(() => {
      const firstCard = track.children[0];
      if (!firstCard) return;
      
      const scrollAmount = firstCard.clientWidth + 20;

      const maxScroll = track.scrollWidth - track.clientWidth;
      const nextScroll = track.scrollLeft + scrollAmount;

      if (nextScroll >= maxScroll) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
        setCurrentIndex(0);
        triggerAnimation();
      } else {
        track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        setCurrentIndex((prev) => (prev + 1) % sponsoredAirdrops.length);
        triggerAnimation();
      }
    }, 5000);

    return () => clearInterval(scrollInterval);
  }, []);

  const scrollCarousel = (direction) => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.children[0];
    if (!firstCard) return;
    
    const scrollAmount = firstCard.clientWidth + 20;

    triggerAnimation();

    if (direction === 'left') {
      if (track.scrollLeft <= 0) {
        track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' });
        setCurrentIndex(sponsoredAirdrops.length - 1);
      } else {
        track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        setCurrentIndex((prev) => (prev - 1 + sponsoredAirdrops.length) % sponsoredAirdrops.length);
      }
    } else {
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (track.scrollLeft >= maxScroll) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
        setCurrentIndex(0);
      } else {
        track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        setCurrentIndex((prev) => (prev + 1) % sponsoredAirdrops.length);
      }
    }
  };

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.backgroundGlow}></div>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <h1 className={`${styles.heroTitle} ${styles.fadeInUp}`}>Your Gateway to Free Crypto</h1>
            <Link href="/submit" className={`${styles.primaryBtn} ${styles.fadeInUp}`} style={{ animationDelay: '0.1s' }}>
              <span className={styles.btnIcon}>+</span>
              Create Airdrop
            </Link>
            <p className={`${styles.scrollHint} ${styles.fadeInUp}`} style={{ animationDelay: '0.2s' }} onClick={handleScrollDown}><span className={styles.bigArrow}>↓</span> Scroll down to discover the airdrops</p>
          </div>

          <div className={styles.heroRight}>
            <div className={`${styles.sponsoredWrapper} ${styles.fadeInUp}`} style={{ animationDelay: '0.2s' }}>
              <p className={styles.sponsoredLabel}>Sponsored</p>
              <div className={styles.carouselContainer}>
                <button 
                  className={styles.carouselButton}
                  style={{ left: '-20px' }}
                  onClick={() => scrollCarousel('left')}
                >
                  ‹
                </button>
                <div className={styles.carouselTrack} ref={trackRef}>
                  {sponsoredAirdrops.map((airdrop) => (
                    <div key={airdrop.id} className={styles.sponsoredCard}>
                      <div 
                        className={`${styles.cardInner} ${isAnimating ? styles.animateIn : ''}`}
                        style={{ background: `linear-gradient(135deg, ${airdrop.color1} 0%, ${airdrop.color2} 100%)` }}
                      >
                        <div className={styles.cardTopLine}></div>
                        <div className={styles.cardLogo}>
                          {airdrop.name.charAt(0)}
                        </div>
                        <h3 className={styles.cardTitle}>{airdrop.name}</h3>
                        <p className={styles.cardTicker}>{airdrop.ticker}</p>
                        <p className={styles.cardValue}>{airdrop.value}</p>
                        <span className={styles.cardPool}>Airdrop Pool</span>
                        <button className={styles.viewDetailsBtn}>View Details</button>
                      </div>
                    </div>
                  ))}
                </div>
                <button 
                  className={styles.carouselButton}
                  style={{ right: '-20px' }}
                  onClick={() => scrollCarousel('right')}
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}